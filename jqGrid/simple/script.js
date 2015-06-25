var data = [[48803, "DSK1", "", "02200220", "OPEN"], [48769, "APPR", "", "77733337", "ENTERED"]];

$("#grid").jqGrid({
    datatype: "local",
    height: 250,
    colNames: ['Inv No', 'Thingy', 'Blank', 'Number', 'Status'],
    colModel: [{
        name: 'id',
        index: 'id',
        width: 60,
        sorttype: "int"
    },
        {
            name: 'thingy',
            index: 'thingy',
            width: 90,
            sorttype: "date"
        },
        {
            name: 'blank',
            index: 'blank',
            width: 30
        },
        {
            name: 'number',
            index: 'number',
            width: 80,
            sorttype: "float"
        },
        {
            name: 'status',
            index: 'status',
            width: 80,
            sorttype: "float"
        }
    ],
    caption: "Stack Overflow Example",
    // ondblClickRow: function(rowid,iRow,iCol,e){alert('double clicked');}
});

var names = ["id", "thingy", "blank", "number", "status"];
var mydata = [];

for (var i = 0; i < data.length; i++) {
    mydata[i] = {};
    for (var j = 0; j < data[i].length; j++) {
        mydata[i][names[j]] = data[i][j];
    }
}

for (var i = 0; i <= mydata.length; i++) {
    $("#grid").jqGrid('addRowData', i + 1, mydata[i]);
}

/*
 $("#grid").jqGrid('setGridParam', {onSelectRow: function(rowid,iRow,iCol,e){alert('row clicked');}});
 */
$("#grid").jqGrid('setGridParam', {
    ondblClickRow: function (rowid, iRow, iCol, e) {
        alert('double clicked');
    }
});
