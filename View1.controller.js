sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast"
  ], function (Controller, MessageToast) {
      "use strict";
  
      return Controller.extend("com.kt.sap.project6.controller.View1", {
        onInit() {
        },
  
        onAdminpress: function () {
          this._navigateToNextView("admin");
        },
  
        onUserpress: function () {
          this._navigateToNextView("user");
        },
  
        _navigateToNextView: function (mode) {
          const oTable = this.byId("idTable");
          const aSelectedIndices = oTable.getSelectedIndices();
      
          if (aSelectedIndices.length === 0) {
            MessageToast.show("Please select rows to display.");
            return;
          }
      
          const sIndices = aSelectedIndices.join(",");
      
          this.getOwnerComponent().getRouter().navTo("View2", {
            mode: mode, 
            indices: sIndices
          });
        }
      });
    }
  );
  
  
  
  /* 
      onDisplayAsAdmin: function () {
      this._navigateToNextView("admin");
  },
  
  onDisplayAsViewer: function () {
      this._navigateToNextView("viewer");
  },
  
  _navigateToNextView: function (mode) {
      const oTable = this.byId("idTable");
      const aSelectedIndices = oTable.getSelectedIndices();
  
      if (aSelectedIndices.length === 0) {
          sap.m.MessageToast.show("Please select rows to display.");
          return;
      }
  
      // Join selected indices as a comma-separated string
      const sIndices = aSelectedIndices.join(",");
  
      // Navigate to the next view with parameters (mode and indices)
      this.getOwnerComponent()
          .getRouter()
          .navTo("idSecondTable", {
              mode: mode, // admin or viewer
              indices: sIndices
          });
  }
  
  */
  
  
  
  
    //onSubmitForm: function () {
    //   const oView = this.getView();
    //   const sName = oView.byId("idName").getValue();
    //   const sAge = oView.byId("idAge").getValue();
    //   const sDegree = oView.byId("idDegree").getValue();
    //   const sCGPA = oView.byId("idCGPA").getValue();
    //   const sPassout = oView.byId("idPassout").getValue();
  
    //   if (!sName || !sAge || !sPassout || !sDegree || !sCGPA) {
    //     MessageToast.show("Please fill in all the fields.");
    //     return;
    //   }
  
    //   const sSel = oView.byId("idBacklog");
    //   const aOpt = sSel.getButtons();
    //   const sBacklog = aOpt[sSel.getSelectedIndex()].getText();
  
    //   const sCollege = oView.byId("idCollege").getSelectedKey();
  
    //   const oModel = oView.getModel();
    //   const aData = oModel.getProperty("/formData");
  
    //   aData.push({
    //     name: sName, age: sAge, degree: sDegree, cgpa: sCGPA,
    //     passYear: sPassout, backlog: sBacklog, college: sCollege
    //   });
  
    //   oModel.setProperty("/formData", aData);
  
    //   MessageToast.show("Data submitted successfully!");
  
    //   oView.byId("idName").setValue("");
    //   oView.byId("idAge").setValue("");
    //   oView.byId("idDegree").setValue("");
    //   oView.byId("idCGPA").setValue("");
    //   oView.byId("idPassout").setValue("");
    // },
    //  onOpenDialog: function () {
    //   var oView=this.getView();
    //   if (!this.oDialog) {
    //     sap.ui.core.Fragment.load({
    //     name: "com.sap.kt.crecords.project3.fragment.Form",
    //     controller: this
    //     }).then(function (oDialog) {
    //     this.oDialog = oDialog;
    //     oView.addDependent(this.oDialog);
    //     this.oDialog.open();
    //     }.bind(this));
    //     } else {
    //     this.oDialog.open();
    //     }
    //  }, 
  
    // onChangeNameValue:function(oEvent){
    //      console.log(oEvent);
         
    // },
    // onSaveDialog: function () {
    //   const oView = this.getView();
    //   const sName = oView.byId("idName").getValue();
    //   const sAge = oView.byId("idAge").getValue();
    //   const sDegree = oView.byId("idDegree").getValue();
    //   const sCGPA = oView.byId("idCGPA").getValue();
    //   const sPassout = oView.byId("idPassout").getValue();
    //   const sSel = oView.byId("idBacklog");
    //   const aOpt = sSel.getButtons();
    //   const sBacklog = aOpt[sSel.getSelectedIndex()].getText();
    //   const sCollege = oView.byId("idCollege").getSelectedKey();
  
    //   if (!sName || !sAge || !sPassout || !sDegree || !sCGPA) {
    //       MessageToast.show("Please fill in all the fields.");
    //       return;
    //   }
  
    //   const oModel = this.getView().getModel();
    //   const aData = oModel.getProperty("/formData");
  
    //   aData.push({
    //     name: sName, age: sAge, degree: sDegree, cgpa: sCGPA,
    //     passYear: sPassout, backlog: sBacklog, college: sCollege
    //   });
    //   oModel.setProperty("/formData", aData);
  
    //   MessageToast.show("Data submitted successfully!");
  
    //   this.oDialog.close();
    //   oView.byId("idName").setValue("");
    //   oView.byId("idAge").setValue("");
    //   oView.byId("idDegree").setValue("");
    //   oView.byId("idCGPA").setValue("");
    //   oView.byId("idPassout").setValue("");
  
    //   this.oDialog.destroy();
    //   this.oDialog = null;
    // },
  
  
    // onReset: function () {
  
    //   const oView = this.getView();
    //   const sName = oView.byId("idName").getValue();
    //   const sAge = oView.byId("idAge").getValue();
    //   const sDegree = oView.byId("idDegree").getValue();
    //   const sCGPA = oView.byId("idCGPA").getValue();
    //   const sPassout = oView.byId("idPassout").getValue();
  
    //   if (!sName && !sAge && !sPassout && !sDegree && !sCGPA) {
    //     MessageToast.show("Values already empty");
    //     return;
    //   }
  
    //   MessageToast.show("Values Cleared");
    //   oView.byId("idName").setValue("");
    //   oView.byId("idAge").setValue("");
    //   oView.byId("idDegree").setValue("");
    //   oView.byId("idCGPA").setValue("");
    //   oView.byId("idPassout").setValue("");
    // },
  
    // onCancelDialog: function () {
    //   this.oDialog.close();
    // },
  
    // onDialogClose: function () {
    //   this.oDialog.destroy();
    //   this.oDialog = null;
    // },
  
  
  
    //onDeleteSelectedRows: function () {
      //   var oTable = this.byId("idTable");
      //   var aSelectedIndices = oTable.getSelectedIndices();
  
      //   if (aSelectedIndices.length === 0) {
      //     MessageToast.show("No data selected for deletion");
      //     return;
      //   }
  
      //   var oBinding = oTable.getBinding("rows");
      //   var oModel = oBinding.getModel();
      //   var sPath = oBinding.getPath();
      //   var aData = oModel.getProperty(sPath);
  
      //   aSelectedIndices.sort((a, b) => b - a);
  
      //   aSelectedIndices.forEach(function (iIndex) {
      //     aData.splice(iIndex, 1);
      //   });
  
      //   oModel.setProperty(sPath, aData);
      //   oTable.clearSelection();
      //   MessageToast.show("Selected candidates deleted successfully");
      // },
      
  
      // onEdit: function () {
      //   const oTable = this.byId("idTable");
      //   const aSelectedIndices = oTable.getSelectedIndices();
    
      //   if (aSelectedIndices.length === 0) {
      //       MessageToast.show("Please select a row to edit.");
      //       return;
      //   }
    
      //   const oBinding = oTable.getBinding("rows");
      //   const aData = oBinding.getModel().getProperty(oBinding.getPath());
      //   const oSelectedData = aData[aSelectedIndices[0]];
    
      //   this.getView().getModel("CData").setProperty("/selectedCandidate", oSelectedData);
    
      //   this.getOwnerComponent().getRouter().navTo("idForm");
      // }
