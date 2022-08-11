System.register(["jimu-core","jimu-ui","jimu-ui/advanced/setting-components","jimu-ui/advanced/data-source-selector","jimu-arcgis"],(function(t,e){var s={},a={},i={},o={},r={};return{setters:[function(t){s.FormattedMessage=t.FormattedMessage,s.Immutable=t.Immutable,s.React=t.React,s.SessionManager=t.SessionManager,s.css=t.css,s.esri=t.esri,s.getAppStore=t.getAppStore,s.jsx=t.jsx,s.polished=t.polished},function(t){a.ImageWithParam=t.ImageWithParam,a.Label=t.Label,a.Radio=t.Radio,a.Switch=t.Switch},function(t){i.MapWidgetSelector=t.MapWidgetSelector,i.SettingRow=t.SettingRow,i.SettingSection=t.SettingSection},function(t){o.DataSourceSelector=t.DataSourceSelector},function(t){r.DataSourceTypes=t.DataSourceTypes}],execute:function(){t((()=>{var t={26826:t=>{"use strict";t.exports=r},48891:t=>{"use strict";t.exports=s},30726:t=>{"use strict";t.exports=a},338:t=>{"use strict";t.exports=o},77756:t=>{"use strict";t.exports=i}},e={};function n(s){var a=e[s];if(void 0!==a)return a.exports;var i=e[s]={exports:{}};return t[s](i,i.exports,n),i.exports}n.d=(t,e)=>{for(var s in e)n.o(e,s)&&!n.o(t,s)&&Object.defineProperty(t,s,{enumerable:!0,get:e[s]})},n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),n.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.p="";var p={};return n.p=window.jimuConfig.baseUrl,(()=>{"use strict";n.r(p),n.d(p,{default:()=>r});var t=n(48891),e=n(30726),s=n(77756),a=n(338),i=n(26826);class o extends t.React.PureComponent{constructor(e){super(e),this.unmount=!1,this.setMapThumbUrl=e=>{if(e||this.setState({mapThumbUrl:null}),this.props.portUrl&&this.props.portUrl!==(0,t.getAppStore)().getState().portalUrl)t.esri.restPortal.searchItems({q:`id:${e}`,portal:this.props.portUrl+"/sharing/rest"}).then((t=>{if(!this.unmount)if(t.results[0]){const e=`${this.props.portUrl}/sharing/rest/content/items/${t.results[0].id}/info/${t.results[0].thumbnail}`;this.setState({mapThumbUrl:e})}else this.setState({mapThumbUrl:null})}));else{const s=(0,t.getAppStore)().getState().portalUrl,a=t.SessionManager.getInstance().getSessionByUrl(s);t.esri.restPortal.searchItems({q:`id:${e}`,authentication:t.SessionManager.getInstance().getSessionByUrl(s),portal:s+"/sharing/rest"}).then((t=>{if(!this.unmount)if(t.results[0]){const e=`${s}/sharing/rest/content/items/${t.results[0].id}/info/${t.results[0].thumbnail}?token=${null==a?void 0:a.token}`;this.setState({mapThumbUrl:e})}else this.setState({mapThumbUrl:null})}))}},this.state={mapThumbUrl:null}}componentDidMount(){this.unmount=!1,this.setMapThumbUrl(this.props.mapItemId)}componentDidUpdate(t,e){t.mapItemId!==this.props.mapItemId&&this.setMapThumbUrl(this.props.mapItemId)}componentWillUnmount(){this.unmount=!0}render(){return this.state.mapThumbUrl?t.React.createElement(e.ImageWithParam,{imageParam:{url:this.state.mapThumbUrl}}):t.React.createElement(e.ImageWithParam,{imageParam:{}})}}class r extends t.React.PureComponent{constructor(e){super(e),this.supportedDsTypes=(0,t.Immutable)([i.DataSourceTypes.WebMap,i.DataSourceTypes.WebScene]),this.getPortUrl=()=>(0,t.getAppStore)().getState().portalUrl,this.onRadioChange=t=>{this.props.onSettingChange({id:this.props.id,config:this.props.config.set("useMapWidget",t)}),this.setState({useMapWidget:t})},this.onToolsChanged=(t,e)=>{this.props.onSettingChange({id:this.props.id,config:this.props.config.set(e,t)})},this.onOptionsChanged=(t,e)=>{this.props.onSettingChange({id:this.props.id,config:this.props.config.set(e,t)})},this.onToggleUseDataEnabled=t=>{this.props.onSettingChange({id:this.props.id,useDataSourcesEnabled:t})},this.onDataSourceChange=t=>{t&&this.props.onSettingChange({id:this.props.id,useDataSources:t})},this.onMapWidgetSelected=t=>{this.props.onSettingChange({id:this.props.id,useMapWidgetIds:t})},this.state={useMapWidget:this.props.config.useMapWidget||!1}}render(){var i;const r=this.getPortUrl();let n=null,p=null,l=null,c=null,d=null;return p=(0,t.jsx)("div",{className:"data-selector-section"},(0,t.jsx)(s.SettingRow,null,(0,t.jsx)(a.DataSourceSelector,{types:this.supportedDsTypes,useDataSources:this.props.useDataSources,useDataSourcesEnabled:!0,mustUseDataSource:!0,onChange:this.onDataSourceChange,widgetId:this.props.id})),r&&this.props.dsJsons&&this.props.useDataSources&&1===this.props.useDataSources.length&&(0,t.jsx)(s.SettingRow,null,(0,t.jsx)("div",{className:"w-100"},(0,t.jsx)("div",{className:"webmap-thumbnail",title:null===(i=this.props.dsJsons[this.props.useDataSources[0].dataSourceId])||void 0===i?void 0:i.label},(0,t.jsx)(o,{mapItemId:this.props.dsJsons[this.props.useDataSources[0].dataSourceId]?this.props.dsJsons[this.props.useDataSources[0].dataSourceId].itemId:null,portUrl:this.props.dsJsons[this.props.useDataSources[0].dataSourceId]?this.props.dsJsons[this.props.useDataSources[0].dataSourceId].portalUrl:null}))))),l=(0,t.jsx)("div",{className:"map-selector-section"},(0,t.jsx)(s.SettingRow,null,(0,t.jsx)(s.MapWidgetSelector,{onSelect:this.onMapWidgetSelected,useMapWidgetIds:this.props.useMapWidgetIds}))),this.state.useMapWidget?(n=l,c=(0,t.jsx)(t.React.Fragment,null,(0,t.jsx)(s.SettingRow,{label:(0,t.jsx)(t.FormattedMessage,{id:"goto",defaultMessage:"Zoom to"})},(0,t.jsx)(e.Switch,{className:"can-x-switch",checked:this.props.config&&this.props.config.goto||!1,"data-key":"goto",onChange:t=>{this.onToolsChanged(t.target.checked,"goto")}})),(0,t.jsx)(s.SettingRow,{label:(0,t.jsx)(t.FormattedMessage,{id:"showOrHideLabels",defaultMessage:"Show or hide labels"})},(0,t.jsx)(e.Switch,{className:"can-x-switch",checked:this.props.config&&this.props.config.label||!1,"data-key":"goto",onChange:t=>{this.onToolsChanged(t.target.checked,"label")}})),(0,t.jsx)(s.SettingRow,{label:(0,t.jsx)(t.FormattedMessage,{id:"transparency",defaultMessage:"Adjust layer transparency"})},(0,t.jsx)(e.Switch,{className:"can-x-switch",checked:this.props.config&&this.props.config.opacity||!1,"data-key":"opacity",onChange:t=>{this.onToolsChanged(t.target.checked,"opacity")}}))),d=(0,t.jsx)(s.SettingRow,{label:(0,t.jsx)(t.FormattedMessage,{id:"setVisibility",defaultMessage:"Toggle layer visibility"})},(0,t.jsx)(e.Switch,{className:"can-x-switch",checked:this.props.config&&this.props.config.setVisibility||!1,"data-key":"setVisibility",onChange:t=>{this.onOptionsChanged(t.target.checked,"setVisibility")}}))):n=p,(0,t.jsx)("div",{css:(h=this.props.theme,t.css`
    .widget-setting-layerlist{
      font-weight: lighter;
      font-size: 13px;

      .source-descript {
        color: ${h.colors.palette.dark[600]};
      }

      .webmap-thumbnail{
        cursor: auto;
        width: 100%;
        height: 120px;
        overflow: hidden;
        padding: 1px;
        border: ${t.polished.rem(2)} solid initial;
        img, div{
          width: 100%;
          height: 100%;
        }
      }

      .layerlist-tools{
        .layerlist-tools-item{
          display: flex;
          /* justify-content: space-between; */
          margin-bottom: 8px;
        }
      }

      .map-selector-section .component-map-selector .form-control{
        width: 100%;
      }

      .data-selector-section, .map-selector-section{
        padding-top: 10px;
      }

    }
  `)},(0,t.jsx)("div",{className:"widget-setting-layerlist"},(0,t.jsx)(s.SettingSection,{title:this.props.intl.formatMessage({id:"sourceLabel",defaultMessage:"Source"})},(0,t.jsx)(s.SettingRow,null,(0,t.jsx)("div",{className:"layerlist-tools w-100"},(0,t.jsx)("div",{className:"w-100"},(0,t.jsx)("div",{className:"layerlist-tools-item radio"},(0,t.jsx)(e.Radio,{id:"map-data",style:{cursor:"pointer"},name:"map-data",onChange:t=>this.onRadioChange(!1),checked:!this.state.useMapWidget}),(0,t.jsx)(e.Label,{style:{cursor:"pointer"},for:"map-data",className:"ml-1"},this.props.intl.formatMessage({id:"showLayerForMap",defaultMessage:"Show layers for map data only"})))),(0,t.jsx)("div",{className:"w-100"},(0,t.jsx)("div",{className:"layerlist-tools-item radio"},(0,t.jsx)(e.Radio,{id:"map-view",style:{cursor:"pointer"},name:"map-view",onChange:t=>this.onRadioChange(!0),checked:this.state.useMapWidget}),(0,t.jsx)(e.Label,{style:{cursor:"pointer"},for:"map-view",className:"ml-1"},this.props.intl.formatMessage({id:"interactWithMap",defaultMessage:"Interact with a Map widget"})))))),n),(0,t.jsx)(s.SettingSection,{title:this.props.intl.formatMessage({id:"options",defaultMessage:"Options"})},c,(0,t.jsx)(s.SettingRow,{label:(0,t.jsx)(t.FormattedMessage,{id:"information",defaultMessage:"View layer details"})},(0,t.jsx)(e.Switch,{className:"can-x-switch",checked:this.props.config&&this.props.config.information||!1,"data-key":"information",onChange:t=>{this.onToolsChanged(t.target.checked,"information")}})),d)));var h}}r.mapExtraStateProps=t=>({dsJsons:t.appStateInBuilder.appConfig.dataSources})})(),p})())}}}));