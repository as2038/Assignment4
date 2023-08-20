namespace app.interactions;

entity Interactions_Header {
  key PR_ID : String(10);
  ITEMS  : Composition of many Interactions_Items on ITEMS.INTHeader = $self;
  SUPPLIER : String(10);
  COMPANY_CODE : String(4);
  PURCH_ORG : String(4);
  PURCH_GROUP : String(10);
  STATUS : String(10);
};
entity Interactions_Items {
    key INTHeader : association to Interactions_Header;
    key PRI_ID : String(5);
        MATERIAL_NUM : String(18);
        MATERIAL_DESC : String(40);
        QUANTITY : Decimal(15,2);
        QUANTITY_UNIT : String(3);
        NET_PRICE : Decimal(15,2);
        CURRENCY_KEY : String(3);
        TAX_AMOUNT : Decimal(15,2);
};