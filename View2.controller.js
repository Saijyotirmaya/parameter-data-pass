sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "sap/m/MessageToast"
    
], function (Controller,JSONModel,MessageToast) {
    "use strict";

    return Controller.extend("com.kt.sap.project6.controller.View2", {
        onInit() {
            this.getOwnerComponent().getRouter().getRoute("View2").attachPatternMatched(this._onRouteMatched, this);
        },
        
        _onRouteMatched: function (oEvent) {
            const oModel = this.getOwnerComponent().getModel("Dmodel");
            const oArgs = oEvent.getParameter("arguments");
            const sMode = oArgs.mode;

            const bIsAdmin = sMode === "admin";

            oModel.setProperty("/isAdmin", bIsAdmin);

            const sIndices = oArgs.indices; 

            const aIndices = sIndices.split(",").map(Number);

            const aData = oModel.getProperty("/Studentdata");
            const aSelectedRows = aIndices.map(index => aData[index]);

            oModel.setProperty("/filteredData", aSelectedRows);
        },
       
        onEditSaveButtonPress:function(){
            
            const oModel = this.getOwnerComponent().getModel("Dmodel")

            var bEditMode = oModel.getProperty("/EditMode");

            if (!bEditMode) {
                oModel.setProperty("/EditMode", true); // Set to 'Edit' mode

                var aTableData = oModel.getProperty("/Studentdata");
                aTableData.forEach(function (oRow) {
                    oRow.editable = true; 
                });
                oModel.setProperty("/Studentdata", aTableData);
            }else {
              
                oModel.setProperty("/EditMode", false); 

                // Disable editing for all rows in the table
                var aTableData = oModel.getProperty("/Studentdata");
                aTableData.forEach(function (oRow) {
                    oRow.editable = false; 
                });
                oModel.setProperty("/Studentdata", aTableData);

             
                MessageToast.show("Data saved successfully!");
            }
        }


















        // onEditRow: function () {
        //     const oTable = this.byId("idDispTable");
        //     const iSelectedIndex = oTable.getSelectedIndex();

        //     if (iSelectedIndex === -1) {
        //         MessageToast.show("Please select a row to edit.");
        //         return;
        //     }

        //     const oModel = this.getView().getModel("Dmodel");
        //     const aData = oModel.getProperty("/filteredData");
        //     const oSelectedRow = aData[iSelectedIndex];

        //     oModel.setProperty("/selectedRow", iSelectedIndex);

        //     if (!this.oDialog) {
        //         Fragment.load({
        //             id: this.getView().getId(),
        //             name: "com.kt.sap.project6.fragment.Editrow",
        //             controller: this
        //         }).then(function (oDialog) {
        //             this.oDialog = oDialog;
        //             this.getView().addDependent(this.oDialog);
        //             this._bindDialogData(oSelectedRow);
        //             this.oDialog.open();
        //         }.bind(this));
        //     } else {
        //         this._bindDialogData(oSelectedRow);
        //         this.oDialog.open();
        //     }
        // },

        // _bindDialogData: function (oData) {
        //     const oView = this.getView();
        //     oView.byId("idDName").setValue(oData.name);
        //     oView.byId("idDAge").setValue(oData.age);
        //     oView.byId("idDDegree").setValue(oData.degree);
        //     oView.byId("idDCGPA").setValue(oData.cgpa);
        //     oView.byId("idDPassout").setValue(oData.passYear);

        //     const oBacklogGroup = oView.byId("idDBacklog");
        //     oBacklogGroup.setSelectedIndex(oData.backlog === "Yes" ? 0 : 1);

        //     const oCollegeSelect = oView.byId("idDCollege");
        //     oCollegeSelect.setSelectedKey(oData.college);
        // },

        // onEditDialog: function () {
        //     const oView = this.getView();
        //     const oModel = oView.getModel("CData");

        //     const sName = oView.byId("idDName").getValue();
        //     const sAge = oView.byId("idDAge").getValue();
        //     const sDegree = oView.byId("idDDegree").getValue();
        //     const sCGPA = oView.byId("idDCGPA").getValue();
        //     const sPassout = oView.byId("idDPassout").getValue();

        //     if (!sName || !sAge || !sDegree || !sCGPA || !sPassout) {
        //         MessageToast.show("Please fill in all the fields.");
        //         return;
        //     }

        //     const sBacklogGroup = oView.byId("idDBacklog");
        //     const sBacklog = sBacklogGroup.getSelectedIndex() === 0 ? "Yes" : "No";

        //     const sCollege = oView.byId("idDCollege").getSelectedKey();

        //     const iSelectedRow = oModel.getProperty("/selectedRow");
        //     const aData = oModel.getProperty("/filteredData");

        //     aData[iSelectedRow] = {
        //         name: sName,
        //         age: sAge,
        //         degree: sDegree,
        //         cgpa: sCGPA,
        //         passYear: sPassout,
        //         backlog: sBacklog,
        //         college: sCollege
        //     };

        //     oModel.setProperty("/filteredmData", aData);
        //     this.oDialog.close();
        //     MessageToast.show("Row updated successfully!");
        // },

        // onCancelDialog: function () {
        //     this.oDialog.close();
        // },

        // onDialogClose: function () {
        //     this.oDialog.destroy();
        //     this.oDialog = null;
        // }
        
    });
});
