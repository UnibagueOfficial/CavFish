System.register(["jimu-core","jimu-arcgis"],(function(e,t){var a={},o={};return{setters:[function(e){a.AbstractMessageAction=e.AbstractMessageAction,a.DataSourceManager=e.DataSourceManager,a.MessageType=e.MessageType,a.MutableStoreManager=e.MutableStoreManager,a.RecordSetChangeType=e.RecordSetChangeType,a.getAppStore=e.getAppStore},function(e){o.loadArcGISJSAPIModules=e.loadArcGISJSAPIModules}],execute:function(){e((()=>{"use strict";var e={26826:e=>{e.exports=o},48891:e=>{e.exports=a}},t={};function r(a){var o=t[a];if(void 0!==o)return o.exports;var s=t[a]={exports:{}};return e[a](s,s.exports,r),s.exports}r.d=(e,t)=>{for(var a in t)r.o(t,a)&&!r.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var s={};return(()=>{r.r(s),r.d(s,{default:()=>o});var e=r(48891),t=r(26826);function a(e,t){let a=null;return e.clone?a=e.clone():(a=t.fromJSON(Object.assign({},e)),a.attributes=Object.assign({},e.attributes)),a}class o extends e.AbstractMessageAction{constructor(){super(...arguments),this.NoLockTriggerLayerWidgets=["Map"]}filterMessageType(t,a){return t===e.MessageType.DataRecordSetChange||t===e.MessageType.DataRecordsSelectionChange||t===e.MessageType.ExtentChange||t===e.MessageType.DataSourceFilterChange}filterMessage(e){return!0}getSettingComponentUri(t,a){return t===e.MessageType.DataRecordsSelectionChange||t===e.MessageType.DataRecordSetChange||t===e.MessageType.DataSourceFilterChange?"message-actions/zoom-to-feature-action-setting":null}onExecute(o,r){return(0,t.loadArcGISJSAPIModules)(["esri/Graphic"]).then((t=>{var s;let n=null;switch([n]=t,o.type){case e.MessageType.DataRecordSetChange:const t=o;if(t.changeType===e.RecordSetChangeType.Create||t.changeType===e.RecordSetChangeType.Update){let o={};if(t.dataRecordSet&&t.dataRecordSet.records){const e=[];for(let o=0;o<t.dataRecordSet.records.length;o++)t.dataRecordSet.records[o].feature&&e.push(a(t.dataRecordSet.records[o].feature,n));o={features:e,zoomToOption:r&&r.isUseCustomZoomToOption&&r.zoomToOption.scale?r.zoomToOption:null,type:"zoom-to-graphics"}}e.MutableStoreManager.getInstance().updateStateValue(this.widgetId,"zoomToFeatureActionValue.value",o)}break;case e.MessageType.DataRecordsSelectionChange:const c=(0,e.getAppStore)().getState().appConfig.widgets[o.widgetId].manifest.label,u=o;let i={};const d=[];let l=null;if(u.records){if(u.records[0])if(u.records[0].dataSource.layer&&(l=u.records[0].dataSource.layer.id),this.NoLockTriggerLayerWidgets.includes(c)){const e=u.records[0].dataSource.getMainDataSource();if(!(null===(s=null==r?void 0:r.useDataSources)||void 0===s?void 0:s.some((t=>(null==t?void 0:t.mainDataSourceId)===e.id))))break}else{const e=u.records[0].dataSource,t=null==e?void 0:e.getMainDataSource();if(!r.useDataSources.some((e=>(null==e?void 0:e.mainDataSourceId)===t.id)))break}for(let e=0;e<u.records.length;e++)u.records[e].feature&&d.push(a(u.records[e].feature,n))}i={features:d,layerId:l,zoomToOption:r&&r.isUseCustomZoomToOption&&r.zoomToOption.scale?r.zoomToOption:null,type:"zoom-to-graphics"},e.MutableStoreManager.getInstance().updateStateValue(this.widgetId,"zoomToFeatureActionValue.value",i);break;case e.MessageType.ExtentChange:const g=o;if(g.getRelatedWidgetIds().includes(this.widgetId))break;const p={value:{features:[g.extent],type:"zoom-to-extent"},relatedWidgets:g.getRelatedWidgetIds()};e.MutableStoreManager.getInstance().updateStateValue(this.widgetId,"zoomToFeatureActionValue",p);break;case e.MessageType.DataSourceFilterChange:const S=o,m=e.DataSourceManager.getInstance().getDataSource(S.dataSourceId);if(!r.useDataSources.some((e=>(null==e?void 0:e.dataSourceId)===m.id)))break;const y={dataSourceId:S.dataSourceId,zoomToOption:r&&r.isUseCustomZoomToOption&&r.zoomToOption.scale?r.zoomToOption:null,useDataSources:r.useDataSources||[],type:"zoom-to-query-params"};e.MutableStoreManager.getInstance().updateStateValue(this.widgetId,"zoomToFeatureActionValue.value",y)}return!0}))}}})(),s})())}}}));