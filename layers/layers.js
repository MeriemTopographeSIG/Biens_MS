var wms_layers = [];


        var lyr_Imagesatellite_0 = new ol.layer.Tile({
            'title': 'Image satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_LotAlHafra334_1 = new ol.format.GeoJSON();
var features_LotAlHafra334_1 = format_LotAlHafra334_1.readFeatures(json_LotAlHafra334_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LotAlHafra334_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LotAlHafra334_1.addFeatures(features_LotAlHafra334_1);
var lyr_LotAlHafra334_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LotAlHafra334_1, 
                style: style_LotAlHafra334_1,
                popuplayertitle: 'Lot Al Hafra 334',
                interactive: true,
                title: '<img src="styles/legend/LotAlHafra334_1.png" /> Lot Al Hafra 334'
            });
var format_Kaoukli65C_2 = new ol.format.GeoJSON();
var features_Kaoukli65C_2 = format_Kaoukli65C_2.readFeatures(json_Kaoukli65C_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Kaoukli65C_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Kaoukli65C_2.addFeatures(features_Kaoukli65C_2);
var lyr_Kaoukli65C_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Kaoukli65C_2, 
                style: style_Kaoukli65C_2,
                popuplayertitle: 'Kaoukli-65C',
                interactive: true,
                title: '<img src="styles/legend/Kaoukli65C_2.png" /> Kaoukli-65C'
            });
var format_ERAC1_3 = new ol.format.GeoJSON();
var features_ERAC1_3 = format_ERAC1_3.readFeatures(json_ERAC1_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ERAC1_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ERAC1_3.addFeatures(features_ERAC1_3);
var lyr_ERAC1_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ERAC1_3, 
                style: style_ERAC1_3,
                popuplayertitle: 'ERAC1',
                interactive: true,
                title: '<img src="styles/legend/ERAC1_3.png" /> ERAC1'
            });
var format_TamansourtTIlotI16_4 = new ol.format.GeoJSON();
var features_TamansourtTIlotI16_4 = format_TamansourtTIlotI16_4.readFeatures(json_TamansourtTIlotI16_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TamansourtTIlotI16_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TamansourtTIlotI16_4.addFeatures(features_TamansourtTIlotI16_4);
var lyr_TamansourtTIlotI16_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TamansourtTIlotI16_4, 
                style: style_TamansourtTIlotI16_4,
                popuplayertitle: 'Tamansourt T-I-lot-I-16',
                interactive: true,
                title: '<img src="styles/legend/TamansourtTIlotI16_4.png" /> Tamansourt T-I-lot-I-16'
            });
var format_Tassoultant793T613143_5 = new ol.format.GeoJSON();
var features_Tassoultant793T613143_5 = format_Tassoultant793T613143_5.readFeatures(json_Tassoultant793T613143_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Tassoultant793T613143_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Tassoultant793T613143_5.addFeatures(features_Tassoultant793T613143_5);
var lyr_Tassoultant793T613143_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Tassoultant793T613143_5, 
                style: style_Tassoultant793T613143_5,
                popuplayertitle: 'Tassoultant 793 T.6131-43',
                interactive: true,
                title: '<img src="styles/legend/Tassoultant793T613143_5.png" /> Tassoultant 793 T.6131-43'
            });
var format_Kaouki431_6 = new ol.format.GeoJSON();
var features_Kaouki431_6 = format_Kaouki431_6.readFeatures(json_Kaouki431_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Kaouki431_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Kaouki431_6.addFeatures(features_Kaouki431_6);
var lyr_Kaouki431_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Kaouki431_6, 
                style: style_Kaouki431_6,
                popuplayertitle: 'Kaouki-431',
                interactive: true,
                title: '<img src="styles/legend/Kaouki431_6.png" /> Kaouki-431'
            });
var format_morcellementlaguneEssaouira_7 = new ol.format.GeoJSON();
var features_morcellementlaguneEssaouira_7 = format_morcellementlaguneEssaouira_7.readFeatures(json_morcellementlaguneEssaouira_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_morcellementlaguneEssaouira_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_morcellementlaguneEssaouira_7.addFeatures(features_morcellementlaguneEssaouira_7);
var lyr_morcellementlaguneEssaouira_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_morcellementlaguneEssaouira_7, 
                style: style_morcellementlaguneEssaouira_7,
                popuplayertitle: 'morcellement lagune Essaouira',
                interactive: true,
                title: '<img src="styles/legend/morcellementlaguneEssaouira_7.png" /> morcellement lagune Essaouira'
            });
var format_lotalhafra294_8 = new ol.format.GeoJSON();
var features_lotalhafra294_8 = format_lotalhafra294_8.readFeatures(json_lotalhafra294_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_lotalhafra294_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_lotalhafra294_8.addFeatures(features_lotalhafra294_8);
var lyr_lotalhafra294_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_lotalhafra294_8, 
                style: style_lotalhafra294_8,
                popuplayertitle: 'lot al hafra294',
                interactive: true,
                title: '<img src="styles/legend/lotalhafra294_8.png" /> lot al hafra294'
            });
var format_CENTROIDE_9 = new ol.format.GeoJSON();
var features_CENTROIDE_9 = format_CENTROIDE_9.readFeatures(json_CENTROIDE_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CENTROIDE_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CENTROIDE_9.addFeatures(features_CENTROIDE_9);
var lyr_CENTROIDE_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CENTROIDE_9, 
                style: style_CENTROIDE_9,
                popuplayertitle: 'CENTROIDE',
                interactive: true,
                title: '<img src="styles/legend/CENTROIDE_9.png" /> CENTROIDE'
            });

lyr_Imagesatellite_0.setVisible(true);lyr_LotAlHafra334_1.setVisible(true);lyr_Kaoukli65C_2.setVisible(true);lyr_ERAC1_3.setVisible(true);lyr_TamansourtTIlotI16_4.setVisible(true);lyr_Tassoultant793T613143_5.setVisible(true);lyr_Kaouki431_6.setVisible(true);lyr_morcellementlaguneEssaouira_7.setVisible(true);lyr_lotalhafra294_8.setVisible(true);lyr_CENTROIDE_9.setVisible(true);
var layersList = [lyr_Imagesatellite_0,lyr_LotAlHafra334_1,lyr_Kaoukli65C_2,lyr_ERAC1_3,lyr_TamansourtTIlotI16_4,lyr_Tassoultant793T613143_5,lyr_Kaouki431_6,lyr_morcellementlaguneEssaouira_7,lyr_lotalhafra294_8,lyr_CENTROIDE_9];
lyr_LotAlHafra334_1.set('fieldAliases', {'id': 'id', 'Propriét�': 'Propriét�', });
lyr_Kaoukli65C_2.set('fieldAliases', {'id': 'id', 'geometry': 'geometry', 'Centroid.X': 'Centroid.X', });
lyr_ERAC1_3.set('fieldAliases', {'id': 'id', });
lyr_TamansourtTIlotI16_4.set('fieldAliases', {'id': 'id', });
lyr_Tassoultant793T613143_5.set('fieldAliases', {'id': 'id', });
lyr_Kaouki431_6.set('fieldAliases', {'id': 'id', });
lyr_morcellementlaguneEssaouira_7.set('fieldAliases', {'id': 'id', });
lyr_lotalhafra294_8.set('fieldAliases', {'id': 'id', });
lyr_CENTROIDE_9.set('fieldAliases', {'id': 'id', });
lyr_LotAlHafra334_1.set('fieldImages', {'id': '', 'Propriét�': '', });
lyr_Kaoukli65C_2.set('fieldImages', {'id': '', 'geometry': '', 'Centroid.X': '', });
lyr_ERAC1_3.set('fieldImages', {'id': '', });
lyr_TamansourtTIlotI16_4.set('fieldImages', {'id': '', });
lyr_Tassoultant793T613143_5.set('fieldImages', {'id': '', });
lyr_Kaouki431_6.set('fieldImages', {'id': '', });
lyr_morcellementlaguneEssaouira_7.set('fieldImages', {'id': '', });
lyr_lotalhafra294_8.set('fieldImages', {'id': '', });
lyr_CENTROIDE_9.set('fieldImages', {'id': 'TextEdit', });
lyr_LotAlHafra334_1.set('fieldLabels', {'id': 'no label', 'Propriét�': 'no label', });
lyr_Kaoukli65C_2.set('fieldLabels', {'id': 'no label', 'geometry': 'no label', 'Centroid.X': 'no label', });
lyr_ERAC1_3.set('fieldLabels', {'id': 'no label', });
lyr_TamansourtTIlotI16_4.set('fieldLabels', {'id': 'no label', });
lyr_Tassoultant793T613143_5.set('fieldLabels', {'id': 'no label', });
lyr_Kaouki431_6.set('fieldLabels', {'id': 'no label', });
lyr_morcellementlaguneEssaouira_7.set('fieldLabels', {'id': 'no label', });
lyr_lotalhafra294_8.set('fieldLabels', {'id': 'no label', });
lyr_CENTROIDE_9.set('fieldLabels', {'id': 'no label', });
lyr_CENTROIDE_9.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});