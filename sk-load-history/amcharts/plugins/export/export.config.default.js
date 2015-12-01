AmCharts.exportPDF = {
    "format": "PDF",
    "content": ["Saved from:", window.location.href, {
        "image": "reference",
        "fit": [523.28, 769.89] // fit image to A4
    }]
};

AmCharts.exportPrint = {
    "format": "PRINT",
    "label": "Print"
};

AmCharts.exportCFG = {
    "enabled": true,
    "menu": [{
        "class": "export-main",
        "label": "Export",
        "menu": [{
            "label": "Download as ...",
            "menu": ["PNG", "JPG", "SVG", AmCharts.exportPDF]
        }, {
            "label": "Save data ...",
            "menu": ["CSV", "XLSX", "JSON"]
        }, AmCharts.exportPrint]
    }]
};