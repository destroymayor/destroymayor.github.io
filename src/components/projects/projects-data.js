import React from 'react';
import { NodeIcon, ReactIcon } from 'components/shared/icon';

export const data = [
  { year: 2020, projects: [{ tech_icon: <NodeIcon />, text: 'Stock Search' }] },
  {
    year: 2019,
    projects: [
      { tech_icon: <ReactIcon />, text: 'Todo List' },
      { tech_icon: <ReactIcon />, text: '自定義詞搜尋問句平台' },
    ],
  },
  {
    year: 2018,
    projects: [
      { tech_icon: <NodeIcon />, text: 'Dcard 社群網站爬蟲工具' },
      { tech_icon: <NodeIcon />, text: 'Mobile01 論壇爬蟲工具' },
      { tech_icon: <ReactIcon />, text: '斷詞人工修飾小工具' },
      { tech_icon: <ReactIcon />, text: '臺鐵火車時刻查詢 App' },
    ],
  },
  {
    year: 2017,
    projects: [
      { tech_icon: <ReactIcon />, text: ' 雲端氣喘照護 App' },
      { tech_icon: <ReactIcon />, text: '溪湖地政e點通便民 App' },
    ],
  },
];
