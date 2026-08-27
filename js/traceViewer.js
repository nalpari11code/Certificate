// ============================================================
// js/traceViewer.js — 인터랙티브 변수 추적표(Trace Table) 렌더러
// ============================================================

export class TraceViewer {

  /**
   * 변수 추적표를 HTML 문자열로 렌더링
   * @param {Array} traceTable — [{step, vars: {key: val}}]
   * @returns {string} HTML 테이블 문자열
   */
  static render(traceTable) {
    if (!traceTable || traceTable.length === 0) return '';

    // 모든 변수 키를 수집 (순서 보존)
    const allKeys = [];
    traceTable.forEach(row => {
      Object.keys(row.vars).forEach(key => {
        if (!allKeys.includes(key)) allKeys.push(key);
      });
    });

    let html = '<div class="trace-table-wrap">';
    html += '<table class="trace-table">';

    // 헤더
    html += '<thead><tr>';
    html += '<th class="trace-step-col">단계</th>';
    allKeys.forEach(key => {
      html += `<th>${TraceViewer._escapeHtml(key)}</th>`;
    });
    html += '</tr></thead>';

    // 바디
    html += '<tbody>';
    traceTable.forEach((row, idx) => {
      html += `<tr class="trace-row ${idx === traceTable.length - 1 ? 'trace-row-final' : ''}">`;
      html += `<td class="trace-step-cell">${TraceViewer._escapeHtml(row.step)}</td>`;
      allKeys.forEach(key => {
        const val = row.vars[key];
        const displayVal = val !== undefined && val !== null ? String(val) : '—';
        const changed = idx > 0 && traceTable[idx - 1].vars[key] !== undefined && String(traceTable[idx - 1].vars[key]) !== String(val);
        html += `<td class="${changed ? 'trace-changed' : ''}">${TraceViewer._escapeHtml(displayVal)}</td>`;
      });
      html += '</tr>';
    });
    html += '</tbody></table></div>';

    return html;
  }

  /**
   * 해설 전체를 HTML로 렌더링
   * @param {Object} explanation — { trapPoint, onePointTip, description, traceTable }
   * @returns {string}
   */
  static renderExplanation(explanation) {
    if (!explanation) return '';

    let html = '<div class="explanation-container">';

    // 함정 포인트
    if (explanation.trapPoint) {
      html += `<div class="trap-point">
        <span class="trap-badge">⚠️ 함정 포인트</span>
        <p>${TraceViewer._escapeHtml(explanation.trapPoint)}</p>
      </div>`;
    }

    // 설명
    if (explanation.description) {
      html += `<div class="explanation-desc">
        <p>${TraceViewer._escapeHtml(explanation.description)}</p>
      </div>`;
    }

    // 변수 추적표
    if (explanation.traceTable && explanation.traceTable.length > 0) {
      html += '<div class="trace-section">';
      html += '<h4 class="trace-title">📊 변수 추적표 (Trace Table)</h4>';
      html += TraceViewer.render(explanation.traceTable);
      html += '</div>';
    }

    // 원포인트 팁
    if (explanation.onePointTip) {
      html += `<div class="one-point-tip">
        <p>${TraceViewer._escapeHtml(explanation.onePointTip)}</p>
      </div>`;
    }

    html += '</div>';
    return html;
  }

  static _escapeHtml(str) {
    const div = document.createElement('div');
    div.textContent = str;
    return div.innerHTML;
  }
}
