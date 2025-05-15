var wms_layers = [];


        var lyr_GoogleMap_0 = new ol.layer.Tile({
            'title': 'Google Map',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=r&x={x}&y={y}&z={z}'
            })
        });
var format_Tum_n2_1 = new ol.format.GeoJSON();
var features_Tum_n2_1 = format_Tum_n2_1.readFeatures(json_Tum_n2_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Tum_n2_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Tum_n2_1.addFeatures(features_Tum_n2_1);
var lyr_Tum_n2_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Tum_n2_1, 
                style: style_Tum_n2_1,
                popuplayertitle: 'Tum_n2',
                interactive: true,
                title: '<img src="styles/legend/Tum_n2_1.png" /> Tum_n2'
            });
var format_amp_n2_2 = new ol.format.GeoJSON();
var features_amp_n2_2 = format_amp_n2_2.readFeatures(json_amp_n2_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_amp_n2_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_amp_n2_2.addFeatures(features_amp_n2_2);
var lyr_amp_n2_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_amp_n2_2, 
                style: style_amp_n2_2,
                popuplayertitle: 'amp_n2',
                interactive: true,
                title: '<img src="styles/legend/amp_n2_2.png" /> amp_n2'
            });
var format_Prov_n2_3 = new ol.format.GeoJSON();
var features_Prov_n2_3 = format_Prov_n2_3.readFeatures(json_Prov_n2_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Prov_n2_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Prov_n2_3.addFeatures(features_Prov_n2_3);
var lyr_Prov_n2_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Prov_n2_3, 
                style: style_Prov_n2_3,
                popuplayertitle: 'Prov_n2',
                interactive: true,
                title: '<img src="styles/legend/Prov_n2_3.png" /> Prov_n2'
            });

lyr_GoogleMap_0.setVisible(true);lyr_Tum_n2_1.setVisible(true);lyr_amp_n2_2.setVisible(true);lyr_Prov_n2_3.setVisible(true);
var layersList = [lyr_GoogleMap_0,lyr_Tum_n2_1,lyr_amp_n2_2,lyr_Prov_n2_3];
lyr_Tum_n2_1.set('fieldAliases', {'fid': 'fid', 'PROV_CODE': 'PROV_CODE', 'PROV_NAMT': 'PROV_NAMT', 'PROV_NAME': 'PROV_NAME', 'REG_CODE': 'REG_CODE', 'SHAPE_AREA': 'SHAPE_AREA', 'SHAPE_LEN': 'SHAPE_LEN', 'PROV_CODE_': 'PROV_CODE_', 'AMP_CODE': 'AMP_CODE', 'TAM_CODE': 'TAM_CODE', 'PROV_NAMT_': 'PROV_NAMT_', 'PROV_NAME_': 'PROV_NAME_', 'AMP_NAMT': 'AMP_NAMT', 'AMP_NAME': 'AMP_NAME', 'TAM_NAMT': 'TAM_NAMT', 'TAM_NAME': 'TAM_NAME', 'AREA_CODE': 'AREA_CODE', 'LABELCLASS': 'LABELCLASS', 'CRE_DATE': 'CRE_DATE', 'APP_DATE': 'APP_DATE', 'CRE_USID': 'CRE_USID', 'MOD_USID': 'MOD_USID', 'APP_USID': 'APP_USID', 'APP_STA': 'APP_STA', 'DEPTID': 'DEPTID', 'ADD_EDIT': 'ADD_EDIT', 'REMARK': 'REMARK', 'MOD_DATE': 'MOD_DATE', 'SHAPE_AR_1': 'SHAPE_AR_1', 'SHAPE_LEN_': 'SHAPE_LEN_', });
lyr_amp_n2_2.set('fieldAliases', {'fid': 'fid', 'PROV_CODE': 'PROV_CODE', 'PROV_NAMT': 'PROV_NAMT', 'PROV_NAME': 'PROV_NAME', 'REG_CODE': 'REG_CODE', 'SHAPE_AREA': 'SHAPE_AREA', 'SHAPE_LEN': 'SHAPE_LEN', 'PROV_CODE_': 'PROV_CODE_', 'AMP_CODE': 'AMP_CODE', 'PROV_NAMT_': 'PROV_NAMT_', 'PROV_NAME_': 'PROV_NAME_', 'AMP_NAMT': 'AMP_NAMT', 'AMP_NAME': 'AMP_NAME', 'AREA_CODE': 'AREA_CODE', 'LABELCLASS': 'LABELCLASS', 'CRE_DATE': 'CRE_DATE', 'APP_DATE': 'APP_DATE', 'CRE_USID': 'CRE_USID', 'MOD_USID': 'MOD_USID', 'APP_USID': 'APP_USID', 'APP_STA': 'APP_STA', 'DEPTID': 'DEPTID', 'ADD_EDIT': 'ADD_EDIT', 'REMARK': 'REMARK', 'MOD_DATE': 'MOD_DATE', 'SHAPE_AR_1': 'SHAPE_AR_1', 'SHAPE_LEN_': 'SHAPE_LEN_', });
lyr_Prov_n2_3.set('fieldAliases', {'fid': 'fid', 'PROV_CODE': 'PROV_CODE', 'PROV_NAMT': 'PROV_NAMT', 'PROV_NAME': 'PROV_NAME', 'REG_CODE': 'REG_CODE', 'SHAPE_AREA': 'SHAPE_AREA', 'SHAPE_LEN': 'SHAPE_LEN', });
lyr_Tum_n2_1.set('fieldImages', {'fid': 'TextEdit', 'PROV_CODE': 'TextEdit', 'PROV_NAMT': 'TextEdit', 'PROV_NAME': 'TextEdit', 'REG_CODE': 'TextEdit', 'SHAPE_AREA': 'TextEdit', 'SHAPE_LEN': 'TextEdit', 'PROV_CODE_': 'TextEdit', 'AMP_CODE': 'TextEdit', 'TAM_CODE': 'TextEdit', 'PROV_NAMT_': 'TextEdit', 'PROV_NAME_': 'TextEdit', 'AMP_NAMT': 'TextEdit', 'AMP_NAME': 'TextEdit', 'TAM_NAMT': 'TextEdit', 'TAM_NAME': 'TextEdit', 'AREA_CODE': 'TextEdit', 'LABELCLASS': 'Range', 'CRE_DATE': 'DateTime', 'APP_DATE': 'DateTime', 'CRE_USID': 'TextEdit', 'MOD_USID': 'TextEdit', 'APP_USID': 'TextEdit', 'APP_STA': 'TextEdit', 'DEPTID': 'TextEdit', 'ADD_EDIT': 'TextEdit', 'REMARK': 'TextEdit', 'MOD_DATE': 'DateTime', 'SHAPE_AR_1': 'TextEdit', 'SHAPE_LEN_': 'TextEdit', });
lyr_amp_n2_2.set('fieldImages', {'fid': 'TextEdit', 'PROV_CODE': 'TextEdit', 'PROV_NAMT': 'TextEdit', 'PROV_NAME': 'TextEdit', 'REG_CODE': 'TextEdit', 'SHAPE_AREA': 'TextEdit', 'SHAPE_LEN': 'TextEdit', 'PROV_CODE_': 'TextEdit', 'AMP_CODE': 'TextEdit', 'PROV_NAMT_': 'TextEdit', 'PROV_NAME_': 'TextEdit', 'AMP_NAMT': 'TextEdit', 'AMP_NAME': 'TextEdit', 'AREA_CODE': 'TextEdit', 'LABELCLASS': 'Range', 'CRE_DATE': 'DateTime', 'APP_DATE': 'DateTime', 'CRE_USID': 'TextEdit', 'MOD_USID': 'TextEdit', 'APP_USID': 'TextEdit', 'APP_STA': 'TextEdit', 'DEPTID': 'TextEdit', 'ADD_EDIT': 'TextEdit', 'REMARK': 'TextEdit', 'MOD_DATE': 'DateTime', 'SHAPE_AR_1': 'TextEdit', 'SHAPE_LEN_': 'TextEdit', });
lyr_Prov_n2_3.set('fieldImages', {'fid': 'TextEdit', 'PROV_CODE': 'TextEdit', 'PROV_NAMT': 'TextEdit', 'PROV_NAME': 'TextEdit', 'REG_CODE': 'TextEdit', 'SHAPE_AREA': 'TextEdit', 'SHAPE_LEN': 'TextEdit', });
lyr_Tum_n2_1.set('fieldLabels', {'fid': 'no label', 'PROV_CODE': 'no label', 'PROV_NAMT': 'no label', 'PROV_NAME': 'no label', 'REG_CODE': 'no label', 'SHAPE_AREA': 'no label', 'SHAPE_LEN': 'no label', 'PROV_CODE_': 'no label', 'AMP_CODE': 'no label', 'TAM_CODE': 'no label', 'PROV_NAMT_': 'no label', 'PROV_NAME_': 'no label', 'AMP_NAMT': 'no label', 'AMP_NAME': 'no label', 'TAM_NAMT': 'no label', 'TAM_NAME': 'no label', 'AREA_CODE': 'no label', 'LABELCLASS': 'no label', 'CRE_DATE': 'no label', 'APP_DATE': 'no label', 'CRE_USID': 'no label', 'MOD_USID': 'no label', 'APP_USID': 'no label', 'APP_STA': 'no label', 'DEPTID': 'no label', 'ADD_EDIT': 'no label', 'REMARK': 'no label', 'MOD_DATE': 'no label', 'SHAPE_AR_1': 'no label', 'SHAPE_LEN_': 'no label', });
lyr_amp_n2_2.set('fieldLabels', {'fid': 'no label', 'PROV_CODE': 'no label', 'PROV_NAMT': 'no label', 'PROV_NAME': 'no label', 'REG_CODE': 'no label', 'SHAPE_AREA': 'no label', 'SHAPE_LEN': 'no label', 'PROV_CODE_': 'no label', 'AMP_CODE': 'no label', 'PROV_NAMT_': 'no label', 'PROV_NAME_': 'no label', 'AMP_NAMT': 'no label', 'AMP_NAME': 'no label', 'AREA_CODE': 'no label', 'LABELCLASS': 'no label', 'CRE_DATE': 'no label', 'APP_DATE': 'no label', 'CRE_USID': 'no label', 'MOD_USID': 'no label', 'APP_USID': 'no label', 'APP_STA': 'no label', 'DEPTID': 'no label', 'ADD_EDIT': 'no label', 'REMARK': 'no label', 'MOD_DATE': 'no label', 'SHAPE_AR_1': 'no label', 'SHAPE_LEN_': 'no label', });
lyr_Prov_n2_3.set('fieldLabels', {'fid': 'no label', 'PROV_CODE': 'no label', 'PROV_NAMT': 'no label', 'PROV_NAME': 'no label', 'REG_CODE': 'no label', 'SHAPE_AREA': 'no label', 'SHAPE_LEN': 'no label', });
lyr_Prov_n2_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});