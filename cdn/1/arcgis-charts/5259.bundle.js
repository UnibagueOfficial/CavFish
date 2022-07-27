"use strict";(self.webpackChunkexb_client=self.webpackChunkexb_client||[]).push([[5259],{5259:(e,t,a)=>{a.r(t),a.d(t,{additionalProperty:()=>P,anyOfValues:()=>x,bubbleChartValidateMsg:()=>S,default:()=>k,defaultError:()=>i,defaultInvalidChart:()=>s,duplicateSeriesID:()=>u,enumValues:()=>g,histogramEmptyField:()=>E,invalidSeriesType:()=>I,layerLoadFailure:()=>m,lineChartMarkersCannotExceedLimit:()=>D,lineChartSeriesAndMarkersCannotExceedLimit:()=>b,maxItems:()=>L,minItems:()=>c,minLength:()=>h,negativeValueInDataForLogTransformation:()=>l,negativeValueInDataForSqrtTransformation:()=>d,nonNumericAggregation:()=>$,or:()=>v,pieChartCannotHaveMixtureOfPositiveAndNegativeSlices:()=>f,pieChartSlicesCannotExceedLimit:()=>V,queryError:()=>y,requiredProperty:()=>C,threePlusSeriesBarCountCannotExceedLimit:()=>o,twoSeriesBarCountCannotExceedLimit:()=>n,uniqueSeriesBarCountCannotExceedLimit:()=>r,whiteSpacePattern:()=>p});const i="При загрузке диаграммы произошла ошибка.",r="Всего ${ elementCount } столбцов в этой диаграмме. Линейчатые диаграммы с 1 серией ограничиваются ${ totalLimit } столбцами. Выберите поле категории с меньшим количеством уникальных значений или примените фильтр к вашим данным.",n="Линейчатые диаграммы с 2 сериями ограничиваются ${ totalLimit } столбцами или ${ seriesLimit } столбцами на одну серию. Выберите поле категории с меньшим количеством уникальных значений или примените фильтр к вашим данным.",o="Линейчатые диаграммы с тремя и более сериями ограничиваются ${ totalLimit } столбцами или ${ seriesLimit } столбцами на одну серию. Выберите поле категории с меньшим количеством уникальных значений или примените фильтр к вашим данным.",s="При создании диаграммы произошла ошибка.",l="Невозможно применить Логарифмическое преобразование к отрицательным или нулевым значениям.",d="Невозможно применить преобразование по методу квадратного корня к отрицательным значениям.",m="При загрузке слоя произошла ошибка. URL = ${ url }. ID элемента портала = ${ portalItemId }.",u="${ dataPath } должен быть уникальным. У серии с именем ${ seriesName } есть ID (${ seriesID }), который уже используется другой серией.",$="${ dataPath } не должен выполнять не количественное агрегирование для не числового поля.",C="В ${ dataPath } отсутствует свойство с именем ${ missingProperty }.",h="${ dataPath } не должен быть короче, чем ${ limit } символов.",c="В ${ dataPath } должно быть не менее ${ limit } элементов.",L="В ${ dataPath } не должно быть более ${ limit } элементов.",p="${ dataPath } должен содержать, как минимум, один символ, не являющейся пробелом.",P="${ dataPath } не должны иметь ${ additionalProperty }",g="${ dataPath } должен быть равен одному из этих допустимых значений: ${ allowedValues }.",x="${ dataPath } должен совпадать со схемой одного из следующих элементов: ${ schemaOptions }.",S="Точечная диаграмма с пропорциональными символами не поддерживается. Будет использован размер символа по умолчанию.",y="Ошибка чтения входных данных.",E="Для гистограмм необходимы как минимум два числовых значения.",I="Ожидаемый тип рядов в индексе ${ seriesIndex } - '${ expectedType }' но вместо этого было получено '${ receivedType }'",v="или",f="Убедитесь, что сумма выбранных числовых полей возвращает все положительные значения или все отрицательные значения.",V="Всего ${ sliceCount } долей на этой круговой диаграмме. Круговые диаграммы ограничены ${ totalLimit } долями. Выберите поле категории с меньшим количеством уникальных значений, добавьте меньше числовых полей или примените фильтр к вашим данным.",b="На этой диаграмме в общей сложности ${ seriesCount } серий и ${ elementCount } точек данных. Линейные диаграммы ограничиваются ${ seriesLimit } сериями и ${ totalLimit } точками данных. Уменьшите число серий и/или заново агрегируйте либо отфильтруйте свои данные.",D="Линейные диаграммы ограничиваются ${ totalLimit } точками данных. Отфильтруйте или агрегируйте повторно ваши данные и попробуйте снова.";var k={defaultError:i,uniqueSeriesBarCountCannotExceedLimit:r,twoSeriesBarCountCannotExceedLimit:n,threePlusSeriesBarCountCannotExceedLimit:o,defaultInvalidChart:"При создании диаграммы произошла ошибка.",negativeValueInDataForLogTransformation:"Невозможно применить Логарифмическое преобразование к отрицательным или нулевым значениям.",negativeValueInDataForSqrtTransformation:"Невозможно применить преобразование по методу квадратного корня к отрицательным значениям.",layerLoadFailure:m,duplicateSeriesID:u,nonNumericAggregation:$,requiredProperty:C,minLength:h,minItems:c,maxItems:L,whiteSpacePattern:p,additionalProperty:"${ dataPath } не должны иметь ${ additionalProperty }",enumValues:g,anyOfValues:x,bubbleChartValidateMsg:S,queryError:"Ошибка чтения входных данных.",histogramEmptyField:E,invalidSeriesType:I,or:"или",pieChartCannotHaveMixtureOfPositiveAndNegativeSlices:"Убедитесь, что сумма выбранных числовых полей возвращает все положительные значения или все отрицательные значения.",pieChartSlicesCannotExceedLimit:V,lineChartSeriesAndMarkersCannotExceedLimit:b,lineChartMarkersCannotExceedLimit:D}}}]);