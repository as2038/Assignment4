sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (BaseController, UIComponent, MessageBox, MessageToast) {
        "use strict";
        let PRINum = 10;
        return BaseController.extend("frontend.controller.Main", {
            
            onInit: function () {
                
                let data = [];

                let mylocaljsonModel = new sap.ui.model.json.JSONModel(data);
                this.getView().setModel(mylocaljsonModel,"mylocaljsonModel");

            },
            onSearch: function () {
                alert("Not Found");
            },
            onSaveButton: function () {

                MessageBox.error("Error saving data");

            },
            onSubmitButton: function () {
                
                let PRIDEntry = this.getView().byId("PRID").getValue();
                let supplierEntry = this.getView().byId("ProductNameId").getValue();
                let companyCodeEntry = this.getView().byId("SupplierNameId").getValue();
                let purchOrgEntry = this.getView().byId("QuantityId").getValue();
                let purchGroupEntry = this.getView().byId("DateId").getValue();
                let status = this.getView().byId("UrgentId").getSelectedKey();

                if (PRIDEntry == "") {
                    alert("Please enter the Purchase Requisition ID");
                    return;
                }
                if (supplierEntry == "") {
                    alert("Please enter the Supplier");
                    return;
                }
                if (companyCodeEntry == "") {
                    alert("Please enter the Company Code");
                    return;
                }
                if (purchOrgEntry == "") {
                    alert("Please enter the Purchasing Organisation");
                    return;
                }
                if (purchGroupEntry == "") {
                    alert("Please enter the Purchasing Group");
                    return;
                }
                let myNewData = {
                    
                    "PRIID": newPRIID,
                    "Material_Num": "",
                    "Material_Desc": "",
                    "Quantity": "",
                    "Quantity_Unit": "",
                    "Net_Price": "",
                    "Currency_Key": "",
                    "Tax_Amount": ""
                    
                }

                let myModel = this.getView().getModel("mylocaljsonModel");
                let OldData = myModel.getData();
                OldData.push(myNewData);
                myModel.setData(OldData);
                myModel.refresh();

            },
            onAddButton: function () {
                let newPRIID = "0".repeat(5-PRINum.toString().length)+ PRINum.toString();
                let myNewData = {
                    
                    "PRIID": newPRIID,
                    "Material_Num": "",
                    "Material_Desc": "",
                    "Quantity": "",
                    "Quantity_Unit": "",
                    "Net_Price": "",
                    "Currency_Key": "",
                    "Tax_Amount": ""

                }
                PRINum += 10;
                let myModel = this.getView().getModel("mylocaljsonModel");
                let OldData = myModel.getData();
                OldData.push(myNewData);
                myModel.setData(OldData);
                myModel.refresh();
            },
            onDelete:function(){
                let myModel = this.getView().getModel("mylocaljsonModel");
                let OldData = myModel.getData();

                var oTable = this.getView().byId("t1");
                var oRow = oTable.getSelectedItem();
                var oEntry = oRow.getBindingContext("mylocaljsonModel").getObject();              
                var index = OldData.indexOf(oEntry);

                OldData.splice(index, 1);
                myModel.setData(OldData);
                myModel.refresh();
            }
        });
    });
 