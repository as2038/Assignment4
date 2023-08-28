sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("frontend.controller.Main", {
            onInit: function () {
                let status = "NEW"
                let data = [];

                let mylocaljsonModel = new sap.ui.model.json.JSONModel(data);
                this.getView().setModel(mylocaljsonModel,"mylocaljsonModel");
            },
            onSearch: function () {
                alert("Not Found");
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
                    
                    "ProductId": productIdEntry,
                    "Product":productNameEntry,
                    "Supplier": supplierNameEntry,
                    "Quantity": quantityEntry,
                    "OrderDate": dateEntry,
                    "NeedUrgent": urgentEntry,
                    "StoreWarehouse": whereEntry
                    
                }

                let myModel = this.getView().getModel("mylocaljsonModel");
                let OldData = myModel.getData();
                OldData.push(myNewData);
                myModel.setData(OldData);
                myModel.refresh();

                //alert(data.getSize());
                sap.ui.getCore().byId(this.createId("l8")).setText("Items ("+OldData.length+")");
            },
            onAddButton: function () {
                let myNewData = {
                    
                    "PRIID": "IA123",
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

                //alert(data.getSize());
                sap.ui.getCore().byId(this.createId("l8")).setText("Items ("+OldData.length+")");
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
