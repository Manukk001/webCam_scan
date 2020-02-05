let page = {
    getAllBrands: function() {
        return axios.get("api/BrandApi/GetAllBrand")
    },
    saveBrand: function() {
        const e = new FormData;
        return e.append("name", $("#brandName").val()), axios.post("api/BrandApi/SaveBrand", e)
    },
    updateBrand: function() {
        const e = new FormData;
        return e.append("brandID", page.props.brandId), e.append("head", $("#brandName").val()), axios.post("api/BrandApi/UpdateBrand", e)
    },
    deleteBrand: function(e) {
        return axios.delete("api/BrandApi/DeleteBrand", {
            params: {
                brandID: e
            }
        })
    },
    tBrands: $("#tBrands").DataTable({
        columns: [{
            data: "Head"
        }, {
            data: "options"
        }],
        columnDefs: [{
            targets: [1],
            orderable: !1,
            searchable: !1
        }],
        paging: !0,
        searching: !0,
        info: !0
    }),

    //SellingPoint
    getAllSellingPoints: function () {
        return axios.get("api/SellingPointApi/GetAllSellingPoint")
    },
    saveSellingPoint: function () {
        const e = new FormData;
        return e.append("Head", $("#sellingPoint").val()), axios.post("api/SellingPointApi/SaveSellingPoint", e)
    },
    updateSellingPoint: function () {
        const e = new FormData;
        return e.append("SPId", page.props.spId), e.append("Head", $("#sellingPoint").val()), axios.post("api/SellingPointApi/UpdateSellingPoint", e)
    },
    deleteSellingPoint: function (e) {
        return axios.delete("api/SellingPointApi/DeleteSellingPoint", {
            params: {
                SPId: e
            }
        })
    },
    tSellingPoints: $("#tSellingPoints").DataTable({
        columns: [{
            data: "Head"
        }, {
            data: "options"
        }],
        columnDefs: [{
            targets: [1],
            orderable: !1,
            searchable: !1
        }],
        paging: !0,
        searching: !0,
        info: !0
    }),
    //end sellingpoint


    getAllModels: function() {
        return axios.get("api/ModelApi/GetAllModel")
    },
    saveModel: function() {
        const e = new FormData;
        return e.append("brandId", $("#modelBrand").val()), e.append("modelName", $("#modelName").val()), axios.post("api/ModelApi/SaveModel", e)
    },
    updateModel: function() {
        const e = new FormData;
        return e.append("ModelID", page.props.modelId), e.append("head", $("#modelName").val()), e.append("BrandID", $("#modelBrand").val()), axios.post("api/ModelApi/UpdateModel", e)
    },
    deleteModel: function(e) {
        return axios.delete("api/ModelApi/DeleteModel", {
            params: {
                modelID: e
            }
        })
    },
    tModels: $("#tModels").DataTable({
        columns: [{
            data: "Head"
        }, {
            data: "options"
        }],
        columnDefs: [{
            targets: [1],
            orderable: !1,
            searchable: !1
        }],
        paging: !0,
        searching: !0,
        info: !0
    }),
    getAllItems: function() {
        return axios.get("api/ItemApi/GetAllItem")
    },
    saveItem: function() {
        const e = new FormData;
        return e.append("head", $("#itemName").val()), e.append("brandid", $("#itemBrand").val()), e.append("modelid", $("#itemModel").val()), axios.post("api/ItemApi/SaveItem", e)
    },
    updateItem: function () {
        const e = new FormData;
        return e.append("ItemID", page.props.itemId), e.append("head", $("#itemName").val()), e.append("BrandID", $("#itemBrand").val()), e.append("ModelID", $("#itemModel").val()), axios.post("api/ItemApi/UpdateItem", e)
    },
    deleteItem: function(e) {
        return axios.delete("api/ItemApi/DeleteItem", {
            params: {
                ItemID: e
            }
        })
    },
    tItems: $("#tItems").DataTable({
        columns: [{
            data: "Head"
        }, {
            data: "Brand"
        }, {
            data: "Model"
        }, {
            data: "options"
        }],
        columnDefs: [{
            targets: [3],
            //orderable: !1,
            searchable: !1
        }],
        paging: !0,
        searching: !0,
        info: !0
    }),
    getAllSuppliers: function() {
        return axios.get("api/SupplierApi/GetAllSuppliers")
    },
    tSupplier: $("#tSupplier").DataTable({
        columns: [{
            data: "Head"
        }, {
            data: "location"
        }, {
            data: "contact"
        }, {
            data: "options"
        }],
        columnDefs: [{
            targets: [3],
            //orderable: !1,
            searchable: !1
        }],
        paging: !0,
        searching: !0,
        info: !0
    }),
    getAllCustomers: function() {
        return axios.get("api/CustomerApi/GetAllCustomers")
    },
    tCustomer: $("#tCustomer").DataTable({
        columns: [{
            data: "Head"
        }, {
            data: "location"
        }, {
            data: "contact"
        }, {
            data: "options"
        }],
        columnDefs: [{
            targets: [3],
            orderable: !1,
            searchable: !1
        }],
        paging: !0,
        searching: !0,
        info: !0
    }),
    getAllPurchases: function() {
        return axios.get("api/PurchaseApi/GetAllPurchase")
    },
    tPurchases: $("#tPurchases").DataTable({
        columns: [{
            data: "EntryDdateShow"
        }, {
            data: "Supplier"
        }, {
            data: "InvNo"
        }, {
            data: "ItemName"
        }, {
            data: "Qty"
        }, {
            data: "options"
        }],
        columnDefs: [{
            targets: [5],
            orderable: !1,
            searchable: !1
        }],
        paging: !0,
        searching: !0,
        info: !0,
        sort: !1
    }),
    getAllSales: function() {
        return axios.get("api/SalesApi/GetAllSales")
    },
    tSales: $("#tSales").DataTable({
        columns: [{
            data: "EntryDdateShow"
        }, {
            data: "Customer"
        }, {
            data: "InvNo"
        }, {
            data: "ItemName"
        }, {
            data: "Qty"
        }, {
            data: "options"
        }],
        columnDefs: [{
            targets: [5],
            orderable: !1,
            searchable: !1
        }],
        paging: !0,
        searching: !0,
        info: !0,
        sort: !1
    }),
    //props: {
    //    form: "",
    //    brandId: null,
    //    modelId: null,
    //    itemId: null,
    //    Refno: null,
    //    supplierId: null,
    //    customerId: null,
    //    spId:null
    //},
    getAllSellPoints: function () {
        return axios.get("api/SellingPointApi/GetAllSellingPoint")
    },
    getAllUserTypes: function () {
        return axios.get("api/UserTypeApi/GetAllUserType")
    },
    getAllUsers: function () {
        return axios.get("api/UserApi/GetAllUsers")
    },
    saveUser: function () {
        const e = new FormData;
        return e.append("UserID", $("#userID").val()), e.append("SPId", $("#sellPoint").val()), e.append("UTypeID", $("#userType").val()), e.append("pwd", $("#password").val()), axios.post("api/UserApi/SaveUser", e)
    },
    updateUser: function () {
        const e = new FormData;
        return e.append("UID", page.props.userID), e.append("UserID", $("#userID").val()), e.append("SPId", $("#sellPoint").val()), e.append("UTypeID", $("#userType").val()), e.append("pwd", $("#password").val()), axios.post("api/UserApi/UpdateUser", e)
    },
    deleteUser: function (e) {
        return axios.delete("api/UserApi/DeleteUser", {
            params: {
                ItemID: e
            }
        })
    },
    tUsers: $("#tUsers").DataTable({
        columns: [{
            data: "Head"
        }, {
            data: "SellingPoint"
        }, {
            data: "UserType"
        }, {
            data: "options"
        }],
        columnDefs: [{
            targets: [3],
            orderable: !1,
            searchable: !1
        }],
        paging: !0,
        searching: !0,
        info: !0
    }),
    props: {
        form: "",
        brandId: null,
        modelId: null,
        itemId: null,
        Refno: null,
        supplierId: null,
        customerId: null,
        usrId: null,
        SPId: null,
        UTypeID: null,
        spId: null
    }
};

function loadCustomer() {
    page.getAllCustomers().then(e => {
        let a = e.data.length;
        for (var t = 0; t < a; ++t) e.data[t].location = e.data[t].Address + ",<br> " + e.data[t].City + ", " + e.data[t].Country + ".", e.data[t].contact = "Phone: " + e.data[t].Phone + ",<br> Email-Id: " + e.data[t].Email, e.data[t].options = "<button type='button' class='btn btn-cyan btn-xs mr-3' onclick='editCustomer(" + JSON.stringify(e.data[t]) + ")'><span class='fas fa-edit pad-right'></span> Edit</button><button type='button' class='btn btn-danger btn-xs mr-3' onclick='deleteCustomer(" + JSON.stringify(e.data[t]) + ")'><span class='fas fa-trash pad-right'></span> Delete</button>";
        page.tCustomer.clear().rows.add(e.data).draw()
    }).catch(function(e) {}).then(function() {
        $("#pageAddCustomer").hide(), $("#pageListCustomer").show(), $(".preloader").fadeOut(100)
    })
}

function editCustomer(e) {
    if ("1" != vm._params.state.s.UtypeID) return toastr.error("You do not have enough right to proceed this action.", "Permission!"), !1;

    $(".preloader").show(), page.props.form = "edit", page.props.customerId = e.CustId, $("#customerName").val(e.Head), $("#customerAddress").val(e.Address), $("#customerCity").val(e.City), $("#customerCountry").val(e.Country), $("#customerPhone").val(e.Phone), $("#customerEmail").val(e.Email), $("#pageListCustomer").hide(), $("#pageAddCustomer").show(), $(".preloader").fadeOut(100)
}

function deleteCustomer(e) {
    if ("1" != vm._params.state.s.UtypeID) return toastr.error("You do not have enough right to proceed this action.", "Permission!"), !1;
    toastr.warning("<br /><button type='button' value='yes'>Yes</button>", 'Are you sure you want to delete this Customer?',
        {
            closeButton: true,
            allowHtml: true,
            onclick: function (toast) {
                value = toast.target.value
                if (value == 'yes') {
                    $(".preloader").show(), axios.delete("api/CustomerApi/DeleteCustomer", {
                        params: {
                            CustID: e.CustId
                        }
                    }).then(function (e) {
                        loadCustomer(), toastr.success("Customer data has been deleted.", "Success!")
                    }).catch(function (e) {
                        toastr.error("Something went wrong or missing.", "Try again!"), $(".preloader").fadeOut(100)
                    })
                }
            }

        })
                    
                         
        }

function loadSupplier() {
    page.getAllSuppliers().then(e => {
        let a = e.data.length;
        for (var t = 0; t < a; ++t) e.data[t].location = e.data[t].Address + ",<br> " + e.data[t].City + ", " + e.data[t].Country + ".", e.data[t].contact = "Phone: " + e.data[t].Phone + ",<br> Email-Id: " + e.data[t].Email, e.data[t].options = "<button type='button' class='btn btn-cyan btn-xs mr-3' onclick='editSupplier(" + JSON.stringify(e.data[t]) + ")'><span class='fas fa-edit pad-right'></span> Edit</button><button type='button' class='btn btn-danger btn-xs mr-3' onclick='deleteSupplier(" + JSON.stringify(e.data[t]) + ")'><span class='fas fa-trash pad-right'></span> Delete</button>";
        page.tSupplier.clear().rows.add(e.data).draw()
    }).catch(function(e) {}).then(function() {
        $("#pageAddSupplier").hide(), $("#pageListSupplier").show(), $(".preloader").fadeOut(100)
    })
}

function editSupplier(e) {
    if ("1" != vm._params.state.s.UtypeID) return toastr.error("You do not have enough right to proceed this action.", "Permission!"), !1;
    $(".preloader").show(), page.props.form = "edit", page.props.supplierId = e.SupId, $("#supplierName").val(e.Head), $("#supplierAddress").val(e.Address), $("#supplierCity").val(e.City), $("#supplierCountry").val(e.Country), $("#supplierPhone").val(e.Phone), $("#supplierEmail").val(e.Email), $("#pageListSupplier").hide(), $("#pageAddSupplier").show(), $(".preloader").fadeOut(100)
}

function deleteSupplier(e) {
    if ("1" != vm._params.state.s.UtypeID) return toastr.error("You do not have enough right to proceed this action.", "Permission!"), !1;
    toastr.warning("<br /><button type='button' value='yes'>Yes</button>", 'Are you sure you want to delete this Supplier?',
        {
            closeButton: true,
            allowHtml: true,
            onclick: function (toast) {
                value = toast.target.value
                if (value == 'yes') {
    $(".preloader").show(), axios.delete("api/SupplierApi/DeleteSupplier", {
        params: {
            SupID: e.SupId
        }
    }).then(function(e) {
        loadSupplier(), toastr.success("Supplier data has been deleted.", "Success!")
    }).catch(function(e) {
        toastr.error("Something went wrong or missing.", "Try again!"), $(".preloader").fadeOut(100)
    })
                }
            }

        })


}


function loadSales() {
    $("#imie1, #imie2").prop("checked", !1), axios.all([page.getAllSales(), page.getAllCustomers(), page.getAllItems()]).then(axios.spread((e, a, t) => {
        let r = e.data.length;
        for (var s = 0; s < r; ++s) e.data[s].EntryDdateShow = vm._utils.formatDate(e.data[s].EntryDdate, ["dmy", "/"]), e.data[s].EntryDdate = vm._utils.formatDate(e.data[s].EntryDdate, ["mdy", "/"]), "1" != vm._params.state.s.UtypeID ? e.data[s].options = "<button type='button' class='btn btn-cyan btn-xs mr-3' disabled onclick=''><span class='fas fa-edit pad-right'></span> Edit</button><button type='button' class='btn btn-danger btn-xs mr-3' disabled onclick=''><span class='fas fa-trash pad-right'></span> Delete</button><button type='button' class='btn btn-warning btn-xs mr-3' onclick='viewSale(" + JSON.stringify(e.data[s]) + ")'><span class='fas fa-eye pad-right'></span> View</button>" : e.data[s].options = "<button type='button' class='btn btn-cyan btn-xs mr-3' onclick='editSale(" + JSON.stringify(e.data[s]) + ")'><span class='fas fa-edit pad-right'></span> Edit</button><button type='button' class='btn btn-danger btn-xs mr-3' onclick='deleteSale(" + JSON.stringify(e.data[s]) + ")'><span class='fas fa-trash pad-right'></span> Delete</button><button type='button' class='btn btn-warning btn-xs mr-3' onclick='viewSale(" + JSON.stringify(e.data[s]) + ")'><span class='fas fa-eye pad-right'></span> View</button>";
        page.tSales.clear().rows.add(e.data).draw();
        let o = {
            options: {},
            selected: "",
            hold: "#salesCustomer"
        };
        o.options = Object.assign({
            "": "-- Select Customer --"
        }, o.options);
        for (let e = 0; e < a.data.length; ++e) o.options[a.data[e].CustId] = a.data[e].Head;
        vm._utils.createSelect(o);
        $("#salesCustomer").select2();
        let i = {
            options: {},
            selected: "",
            hold: "#salesItem"
        };
        i.options = Object.assign({
            "": "-- Select Item --"
        }, i.options);
        for (let e = 0; e < t.data.length; ++e) i.options[t.data[e].ItemId] = t.data[e].Head;
        $("#salesItem").select2();
        vm._utils.createSelect(i)
    })).catch(function(e) {}).then(function(e) {
        $(".preloader").fadeOut(100)
    })
}

function viewSale(e) {
    $(".preloader").show(), $("#pageListSales").hide(), $("#pageAddSales").hide(), $("#viewSaleInvoice").text(e.InvNo), $("#viewSaleCustomer").text(e.Customer), $("#viewSaleDate").text(e.EntryDdateShow), $("#viewSaleQuantity").text(e.Qty), $("#viewSaleItemName").text(e.ItemName), axios.get("api/SalesApi/GetIME?refno=" + e.Refno).then(e => {
        let a = e.data.length;
        const t = [];
        for (let r = 0; r < a; ++r) t.push(e.data[r].IME1), e.data[r].IME2.length > 0 && t.push(e.data[r].IME2);
        createImieViewList(t), $("#pageViewSales").show()
    }).catch(function(e) {}).then(function() {
        $(".preloader").fadeOut(100)
    })
}

function editSale(e) {
    if ("1" != vm._params.state.s.UtypeID) return toastr.error("You do not have enough right to proceed this action.", "Permission!"), !1;
    $(".preloader").show(), axios.get("api/SalesApi/GetIME?refno=" + e.Refno).then(a => {
        let t = a.data.length;
        for (var r = 0; r < t; ++r) vm.dataImie.bundle.push({
            imie1: a.data[r].IME1,
            imie2: 0 == a.data[r].IME2 ? "" : a.data[r].IME2
        });
        vm.dataImie.lastRowId = vm.dataImie.bundle.length - 1, createImieList(), page.props.form = "edit", page.props.Refno = e.Refno, $("#salesCustomer").val(e.PartyID), $('#salesCustomer').select2().trigger('change'), $("#salesDate").val(e.EntryDdate), $("#salesInvoiceNo").val(e.InvNo), $("#salesItem").val(e.ItemId), $('#salesItem').select2().trigger('change'), $("#salesQuantity").val(e.Qty), vm.dataImie.limit = e.Qty, $("#imie1, #imie1").prop("checked", !1), $("#pageListSales").hide(), $("#pageAddSales").show()
    }).catch(function(e) {}).then(function() {
        $(".preloader").fadeOut(100)
    })
}

function deleteSale(e) {
    if ("1" != vm._params.state.s.UtypeID) return toastr.error("You do not have enough right to proceed this action.", "Permission!"), !1;
    toastr.warning("<br /><button type='button' value='yes'>Yes</button>", 'Are you sure you want to delete this Sales Entry?',
        {
            closeButton: true,
            allowHtml: true,
            onclick: function (toast) {
                value = toast.target.value
                if (value == 'yes') {
    $(".preloader").show(), axios.delete("api/SalesApi/DeleteSales", {
        params: {
            Refno: e.Refno
        }
    }).then(function(e) {
        loadSales(), toastr.success("Sales data has been deleted.", "Success!")
    }).catch(function(e) {
        toastr.error("Something went wrong or missing.", "Try again!"), $(".preloader").fadeOut(100)
    })

                }
            }

        })


}

function loadPurchase() {
    $("#imie1, #imie2").prop("checked", !1), axios.all([page.getAllPurchases(), page.getAllSuppliers(), page.getAllItems()]).then(axios.spread((e, a, t) => {
        let r = e.data.length;
        for (var s = 0; s < r; ++s) e.data[s].EntryDdateShow = vm._utils.formatDate(e.data[s].EntryDdate, ["dmy", "/"]), e.data[s].EntryDdate = vm._utils.formatDate(e.data[s].EntryDdate, ["mdy", "/"]), "1" != vm._params.state.s.UtypeID ? e.data[s].options = "<button type='button' class='btn btn-cyan btn-xs mr-3' disabled onclick=''><span class='fas fa-edit pad-right'></span> Edit</button><button type='button' class='btn btn-danger btn-xs mr-3' disabled onclick=''><span class='fas fa-trash pad-right'></span> Delete</button><button type='button' class='btn btn-warning btn-xs mr-3' onclick='viewPurchase(" + JSON.stringify(e.data[s]) + ")'><span class='fas fa-eye pad-right'></span> View</button>" : e.data[s].options = "<button type='button' class='btn btn-cyan btn-xs mr-3' onclick='editPurchase(" + JSON.stringify(e.data[s]) + ")'><span class='fas fa-edit pad-right'></span> Edit</button><button type='button' class='btn btn-danger btn-xs mr-3' onclick='deletePurchase(" + JSON.stringify(e.data[s]) + ")'><span class='fas fa-trash pad-right'></span> Delete</button><button type='button' class='btn btn-warning btn-xs mr-3' onclick='viewPurchase(" + JSON.stringify(e.data[s]) + ")'><span class='fas fa-eye pad-right'></span> View</button>";
        page.tPurchases.clear().rows.add(e.data).draw();
        let o = {
            options: {},
            selected: "",
            hold: "#purchaseSupplier"
        };
        o.options = Object.assign({
            "": "-- Select Supplier --"
        }, o.options);
        for (let e = 0; e < a.data.length; ++e) o.options[a.data[e].SupId] = a.data[e].Head;
        vm._utils.createSelect(o);
        $("#purchaseSupplier").select2();
        let i = {
            options: {},
            selected: "",
            hold: "#purchaseItem"
        };
        i.options = Object.assign({
            "": "-- Select Item --"
        }, i.options);
        for (let e = 0; e < t.data.length; ++e) i.options[t.data[e].ItemId] = t.data[e].Head;
        $("#purchaseItem").select2();
        vm._utils.createSelect(i)
    })).catch(function(e) {}).then(function(e) {
        $(".preloader").fadeOut(100)
    })
}

function viewPurchase(e) {
    $(".preloader").show(), $("#pageListPurchase").hide(), $("#pageAddPurchase").hide(), $("#viewPurchaseInvoice").text(e.InvNo), $("#viewPurchaseSupplier").text(e.Supplier), $("#viewPurchaseDate").text(e.EntryDdateShow), $("#viewPurchaseQuantity").text(e.Qty), $("#viewPurchaseItemName").text(e.ItemName), axios.get("api/PurchaseApi/GetIME?refno=" + e.Refno).then(e => {
        let a = e.data.length;
        const t = [];
        for (let r = 0; r < a; ++r) t.push(e.data[r].IME1), e.data[r].IME2.length > 0 && t.push(e.data[r].IME2);
        createImieViewList(t), $("#pageViewPurchase").show()
    }).catch(function(e) {}).then(function() {
        $(".preloader").fadeOut(100)
    })
}

function createImieViewList(e) {
    let a = e.length,
        t = '<div class="divTableRow">';
    for (let r = 0; r < a; ++r) r && r % 3 == 0 && (t += '</div><div class="divTableRow">'), t = t + '<div class="divTableCell">' + e[r] + "</div>";
    t += "</div>", $(".imeiViewList").html(t)
}

function editPurchase(e) {
    if ("1" != vm._params.state.s.UtypeID) return toastr.error("You do not have enough right to proceed this action.", "Permission!"), !1;
    $(".preloader").show(), axios.get("api/PurchaseApi/GetIME?refno=" + e.Refno).then(a => {
        let t = a.data.length;
        for (var r = 0; r < t; ++r) vm.dataImie.bundle.push({
            imie1: a.data[r].IME1,
            imie2: 0 == a.data[r].IME2 ? "" : a.data[r].IME2
        });
        vm.dataImie.lastRowId = vm.dataImie.bundle.length - 1, createImieList(), page.props.form = "edit", page.props.Refno = e.Refno, $("#purchaseSupplier").val(e.PartyID), $('#purchaseSupplier').select2().trigger('change'), $("#purchaseDate").val(e.EntryDdate), $("#purchaseInvoiceNo").val(e.InvNo), $("#purchaseItem").val(e.ItemId), $('#purchaseItem').select2().trigger('change'), $("#purchaseQuantity").val(e.Qty), vm.dataImie.limit = e.Qty, $("#imie1, #imie1").prop("checked", !1), $("#pageListPurchase").hide(), $("#pageAddPurchase").show()
    }).catch(function (e) { }).then(function () {
        $(".preloader").fadeOut(100)
    })
}

function deletePurchase(e) {
    if ("1" != vm._params.state.s.UtypeID) return toastr.error("You do not have enough right to proceed this action.", "Permission!"), !1;
    toastr.warning("<br /><button type='button' value='yes'>Yes</button>", 'Are you sure you want to delete this Purchase Entry?',
        {
            closeButton: true,
            allowHtml: true,
            onclick: function (toast) {
                value = toast.target.value
                if (value == 'yes') {
    $(".preloader").show(), axios.delete("api/PurchaseApi/DeletePurchase", {
        params: {
            Refno: e.Refno
        }
    }).then(function(e) {
        loadPurchase(), toastr.success("Purchase data has been deleted.", "Success!")
    }).catch(function(e) {
        toastr.error("Something went wrong or missing.", "Try again!"), $(".preloader").fadeOut(100)
    })
                }
            }

        })
}

function createImieList() {
    let e = vm.dataImie.bundle;
    $("#tImei").find("tbody").detach();
    let a = e.length,
        t = "";
    var r = "<tbody>";
    for (let s = 0; s < a; ++s) r += "<tr>", r += "<td>" + parseInt(s + 1) + "</td>", r += "<td>" + e[s].imie1 + "</td>", r += "<td>" + e[s].imie2 + "</td>", r += '<td><button type="button" data-placement="top" title="" onclick="imieDelete(' + s + ');" data-original-title="Delete" class="btn btn-xs btn-danger badge badge-pill"><i class="mdi mdi-close"></i> Delete</button></td>', r += "</tr>", t += e[s].imie1 + "~" + ("" == e[s].imie2 ? 0 : e[s].imie2) + "|";
    r += "<tbody>", $("#tImei").append(r), a > 0 ? $("#tImei").fadeIn() : $("#tImei").fadeOut(), vm.dataImie.dbBundle = t
}

function imieDelete(e) {
    let a = vm.dataImie.bundle;
    vm.dataImie.bundle = [];
    let t = a.length;
    for (let r = 0; r < t; ++r) e != r && vm.dataImie.bundle.push({
        imie1: a[r].imie1,
        imie2: a[r].imie2
    });
    vm.dataImie.lastRowId = vm.dataImie.bundle.length - 1, createImieList()
}

function loadBrands() {
    page.getAllBrands().then(e => {
        let a = e.data.length;
        for (var t = 0; t < a; ++t) e.data[t].BrandName = "test", e.data[t].options = "<button type='button' class='btn btn-cyan btn-xs mr-3' onclick='editBrand(" + JSON.stringify(e.data[t]) + ")'><span class='fas fa-edit pad-right'></span> Edit</button><button type='button' class='btn btn-danger btn-xs mr-3' onclick='deleteBrand(" + JSON.stringify(e.data[t]) + ")'><span class='fas fa-trash pad-right'></span> Delete</button>";
        page.tBrands.clear().rows.add(e.data).draw(), $(".preloader").fadeOut(100)
    })
}

function editBrand(e) {
    if ("1" != vm._params.state.s.UtypeID) return toastr.error("You do not have enough right to proceed this action.", "Permission!"), !1;
    $(".preloader").show(), page.props.form = "edit", page.props.brandId = e.BrandID, $("#brandName").val(e.Head), $("#pageListBrand").hide(), $("#pageAddBrand").show(), $(".preloader").fadeOut(100)
}

function deleteBrand(e) {
    if ("1" != vm._params.state.s.UtypeID) return toastr.error("You do not have enough right to proceed this action.", "Permission!"), !1;
    toastr.warning("<br /><button type='button' value='yes'>Yes</button>", 'Are you sure you want to delete this Brand?',
        {
            closeButton: true,
            allowHtml: true,
            onclick: function (toast) {
                value = toast.target.value
                if (value == 'yes') {
                    $(".preloader").show(), page.deleteBrand(e.BrandID).then(function (e) {
                        loadBrands(), toastr.success("Brand data has been deleted.", "Success!")
                    }).catch(function (e) {
                        toastr.error("Something went wrong or missing.", "Try again!")
                    }).then(function (e) {
                        $(".preloader").fadeOut(100)
                    })
                }
            }
        })
}



function loadSellingPoints() {
    page.getAllSellingPoints().then(e => {
        let a = e.data.length;
        for (var t = 0; t < a; ++t) e.data[t].SellingPoint = "test", e.data[t].options = "<button type='button' class='btn btn-cyan btn-xs mr-3' onclick='editSellingPoint(" + JSON.stringify(e.data[t]) + ")'><span class='fas fa-edit pad-right'></span> Edit</button><button type='button' class='btn btn-danger btn-xs mr-3' onclick='deleteSellingPoint(" + JSON.stringify(e.data[t]) + ")'><span class='fas fa-trash pad-right'></span> Delete</button>";
        page.tSellingPoints.clear().rows.add(e.data).draw(), $(".preloader").fadeOut(100)
    })
}

function editSellingPoint(e) {
    if ("1" != vm._params.state.s.UtypeID) return toastr.error("You do not have enough right to proceed this action.", "Permission!"), !1;
    $(".preloader").show(), page.props.form = "edit", page.props.spId = e.SPId, $("#sellingPoint").val(e.Head), $("#pageListSellingPoint").hide(), $("#pageAddSellingPoint").show(), $(".preloader").fadeOut(100)
}

function deleteSellingPoint(e) {
    if ("1" != vm._params.state.s.UtypeID) return toastr.error("You do not have enough right to proceed this action.", "Permission!"), !1;
    toastr.warning("<br /><button type='button' value='yes'>Yes</button>", 'Are you sure you want to delete this SellingPoint?',
        {
            closeButton: true,
            allowHtml: true,
            onclick: function (toast) {
                value = toast.target.value
                if (value == 'yes') {
                    $(".preloader").show(), page.deleteSellingPoint(e.SPId).then(function (e) {
                        loadSellingPoints(), toastr.success("SellingPoint data has been deleted.", "Success!")
                    }).catch(function (e) {
                        toastr.error("Something went wrong or missing.", "Try again!")
                    }).then(function (e) {
                        $(".preloader").fadeOut(100)
                    })
                }
            }
        })
}
//end seiingpoint



function loadModels() {
    axios.all([page.getAllModels(), page.getAllBrands()]).then(axios.spread((e, a) => {
        let t = e.data.length;
        for (var r = 0; r < t; ++r) e.data[r].options = "<button type='button' class='btn btn-cyan btn-xs mr-3' onclick='editModel(" + JSON.stringify(e.data[r]) + ")'><span class='fas fa-edit pad-right'></span> Edit</button><button type='button' class='btn btn-danger btn-xs mr-3' onclick='deleteModel(" + JSON.stringify(e.data[r]) + ")'><span class='fas fa-trash pad-right'></span> Delete</button>";
        page.tModels.clear().rows.add(e.data).draw();
        let s = {
            options: {},
            selected: "",
            hold: "#modelBrand"
        };
        s.options = Object.assign({
            "": "-- Select Brand --"
        }, s.options);
        for (let e = 0; e < a.data.length; ++e) s.options[a.data[e].BrandID] = a.data[e].Head;
        $("#modelBrand").select2();
        vm._utils.createSelect(s)
    })).catch(function(e) {}).then(function(e) {
        $(".preloader").fadeOut(100)
    })
}

function editModel(e) {
    if ("1" != vm._params.state.s.UtypeID) return toastr.error("You do not have enough right to proceed this action.", "Permission!"), !1;
    $(".preloader").show(), page.props.form = "edit", page.props.modelId = e.ModelId, $("#modelName").val(e.Head), $("#modelBrand").val(e.BrandID), $('#modelBrand').select2().trigger('change'), $("#pageListModel").hide(), $("#pageAddModel").show(), $(".preloader").fadeOut(100)
}

function deleteModel(e) {
    if ("1" != vm._params.state.s.UtypeID) return toastr.error("You do not have enough right to proceed this action.", "Permission!"), !1;
    toastr.warning("<br /><button type='button' value='yes'>Yes</button>", 'Are you sure you want to delete this Model?',
        {
            closeButton: true,
            allowHtml: true,
            onclick: function (toast) {
                value = toast.target.value
                if (value == 'yes') {
                    $(".preloader").show(), page.deleteModel(e.ModelId).then(function (e) {
                        loadModels(), toastr.success("Model data has been deleted.", "Success!")
                    }).catch(function (e) {
                        toastr.error("Something went wrong or missing.", "Try again!")
                    }).then(function (e) {
                        $(".preloader").fadeOut(100)
                    })
                }
            }
        })
}

function loadItems() {
    axios.all([page.getAllBrands(), page.getAllItems()]).then(axios.spread((e, a) => {
        let t = {
            options: {},
            selected: "",
            hold: "#itemBrand"
        };
        t.options = Object.assign({
            "": "-- Select Brand --"
        }, t.options);
        for (let a = 0; a < e.data.length; ++a) t.options[e.data[a].BrandID] = e.data[a].Head;
        vm._utils.createSelect(t);
        $("#itemBrand").select2();
        let r = a.data.length;
        for (var s = 0; s < r; ++s) a.data[s].options = "<button type='button' class='btn btn-cyan btn-xs mr-3' onclick='editItem(" + JSON.stringify(a.data[s]) + ")'><span class='fas fa-edit pad-right'></span> Edit</button><button type='button' class='btn btn-danger btn-xs mr-3' onclick='deleteItem(" + JSON.stringify(a.data[s]) + ")'><span class='fas fa-trash pad-right'></span> Delete</button>";
        page.tItems.clear().rows.add(a.data).draw()
    })).catch(function(e) {}).then(function(e) {
        $(".preloader").fadeOut(100)
    })
}

function editItem(e) {
    if ("1" != vm._params.state.s.UtypeID) return toastr.error("You do not have enough right to proceed this action.", "Permission!"), !1;
    $(".preloader").show(), page.props.form = "edit", page.props.itemId = e.ItemId, $("#itemBrand").val(e.BrandId), $('#itemBrand').select2().trigger('change'), axios.get("api/ItemApi/GetModelByBrandID?BrandID=" + e.BrandId).then(a => {
        let t = {
            options: {},
            selected: e.ModelID,
            hold: "#itemModel"
        };
        t.options = Object.assign({
            "": "-- Select Model --"
        }, t.options);
        for (let e = 0; e < a.data.length; ++e) t.options[a.data[e].ModelId] = a.data[e].Head;
        vm._utils.createSelect(t),
        $('#itemModel').select2().trigger('change')
    }).catch(function(e) {}), $("#itemName").val(e.Head), $("#pageListItem").hide(), $("#pageAddItem").show(), $(".preloader").fadeOut(100)
}

function deleteItem(e) {
    if ("1" != vm._params.state.s.UtypeID) return toastr.error("You do not have enough right to proceed this action.", "Permission!"), !1;
    toastr.warning("<br /><button type='button' value='yes'>Yes</button>", 'Are you sure you want to delete this Item?',
        {
            closeButton: true,
            allowHtml: true,
            onclick: function (toast) {
                value = toast.target.value
                if (value == 'yes') {
                    axios.delete("api/ItemApi/DeleteItem", {
                        params: {
                            ItemID: e.ItemId
                        }
                    }).then(function (e) {
                        loadItems(), toastr.success("Item data has been deleted.", "Success!")
                    }).catch(function (e) {
                        toastr.error("Something went wrong or missing.", "Try again!")
                    }).then(function (e) {
                        $(".preloader").fadeOut(100)
                    })
                }
            }
        })
}
function loadUsers() {
    axios.all([page.getAllUsers(), page.getAllSellPoints(), page.getAllUserTypes()]).then(axios.spread((e, a, t) => {
        let r = e.data.length;
        for (var s = 0; s < r; ++s) e.data[s].options = "<button type='button' class='btn btn-cyan btn-xs mr-3' onclick='editUser(" + JSON.stringify(e.data[s]) + ")'><span class='fas fa-edit pad-right'></span> Edit</button><button type='button' class='btn btn-danger btn-xs mr-3' onclick='deleteUser(" + JSON.stringify(e.data[s]) + ")'><span class='fas fa-trash pad-right'></span> Delete</button>";
        page.tUsers.clear().rows.add(e.data).draw()
        let o = {
            options: {},
            selected: "",
            hold: "#sellPoint"
        };
        o.options = Object.assign({
            "": "-- Select Selling Point --"
        }, o.options);
        for (let e = 0; e < a.data.length; ++e) o.options[a.data[e].SPId] = a.data[e].Head;
        vm._utils.createSelect(o);
        $("#sellPoint").select2();
        let i = {
            options: {},
            selected: "",
            hold: "#userType"
        };
        i.options = Object.assign({
            "": "-- Select User Type --"
        }, i.options);
        for (let e = 0; e < t.data.length; ++e) i.options[t.data[e].UTypeId] = t.data[e].Head;
        $("#userType").select2();
        vm._utils.createSelect(i)
    })).catch(function (e) { }).then(function (e) {
        $(".preloader").fadeOut(100)
    })
}

function editUser(e) {
    if ("1" != vm._params.state.s.UtypeID) return toastr.error("You do not have enough right to proceed this action.", "Permission!"), !1;
    $(".preloader").show(), page.props.form = "edit", page.props.usrId = e.UId, $("#userName").val(e.Head), $("#sellPoint").val(e.SellingPointID), $('#sellPoint').select2().trigger('change'), $("#userType").val(e.UserTypeId), $('#userType').select2().trigger('change'), $("#password").val(e.pwd), $("#confirmPassword").val(e.pwd), $("#pageListUser").hide(), $("#pageAddUser").show(), $(".preloader").fadeOut(100)
}


function deleteUser(e) {
    if ("1" != vm._params.state.s.UtypeID) return toastr.error("You do not have enough right to proceed this action.", "Permission!"), !1;
    toastr.warning("<br /><button type='button' value='yes'>Yes</button>", 'Are you sure you want to delete this User?',
        {
            closeButton: true,
            allowHtml: true,
            onclick: function (toast) {
                value = toast.target.value
                if (value == 'yes') {
                    axios.delete("api/UserApi/deleteUser", {
                        params: {
                            UID: e.UId
                        }
                    }).then(function (e) {
                        loadUsers(), toastr.success("User data has been deleted.", "Success!")
                    }).catch(function (e) {
                        toastr.error("Something went wrong or missing.", "Try again!")
                    }).then(function (e) {
                        $(".preloader").fadeOut(100)
                    })
                }
            }

        })
}

$(function() {
    "brand" == vm._params.state.p && loadBrands(), $(".goNewBrand").on("click", function(e) {
        $(".preloader").show(), page.props.form = "add", $("#brandName").val(""), $("#pageListBrand").hide(), $("#pageAddBrand").show(), $(".preloader").fadeOut(100)
    }), $(".goCancelNewBrand").on("click", function(e) {
        $(".preloader").show(), page.props.form = "", $("#brandName").val(""), $("#pageAddBrand").hide(), $("#pageListBrand").show(), $(".preloader").fadeOut(100)
    }), $("#goUpsertBrand").on("click", function(e) {
        if ("" == $("#brandName").val().trim()) return toastr.error("Brand-Name cannot leave as empty.", "Missing!"), !1;
        $(".preloader").show();
        let a = "";
        if ("add" === page.props.form) a = page.saveBrand();
        else {
            if ("edit" !== page.props.form) return !1;
            a = page.updateBrand()
        }
        a.then(function(e) {
            loadBrands(), page.props.form = "", $("#pageListBrand").show(), $("#pageAddBrand").hide(), toastr.success("Brand data has been saved.", "Success!")
        }).catch(function(e) {
            toastr.error("Something went wrong or missing.", "Try again!")
        }).then(function(e) {
            $(".preloader").fadeOut(100)
        })
    }),"sellingPoint" == vm._params.state.p && loadSellingPoints(), $(".goNewSellingPoint").on("click", function (e) {
        $(".preloader").show(), page.props.form = "add", $("#sellingPoint").val(""), $("#pageListSellingPoint").hide(), $("#pageAddSellingPoint").show(), $(".preloader").fadeOut(100)
    }), $(".goCancelNewSellingPoint").on("click", function (e) {
        $(".preloader").show(), page.props.form = "", $("#sellingPoint").val(""), $("#pageAddSellingPoint").hide(), $("#pageListSellingPoint").show(), $(".preloader").fadeOut(100)
    }), $("#goUpsertSellingPoint").on("click", function (e) {
        if ("" == $("#sellingPoint").val().trim()) return toastr.error("SellingPoint cannot leave as empty.", "Missing!"), !1;
        $(".preloader").show();
        let a = "";
        if ("add" === page.props.form) a = page.saveSellingPoint();
        else {
            if ("edit" !== page.props.form) return !1;
            a = page.updateSellingPoint()
        }
        a.then(function (e) {
            loadSellingPoints(), page.props.form = "", $("#pageListSellingPoint").show(), $("#pageAddSellingPoint").hide(), toastr.success("SellingPoint data has been saved.", "Success!")
        }).catch(function (e) {
            toastr.error("Something went wrong or missing.", "Try again!")
        }).then(function (e) {
            $(".preloader").fadeOut(100)
        })
    }),"model" == vm._params.state.p && loadModels(), $(".goNewModel").on("click", function (e) {
        $(".preloader").show(), page.props.form = "add", $("#modelBrand, #modelName").val(""), $("#pageListModel").hide(), $("#pageAddModel").show(), $(".preloader").fadeOut(100)
    }), $(".goCancelNewModel").on("click", function(e) {
        $(".preloader").show(), page.props.form = "", $("#modelBrand, #modelName").val(""), $("#pageAddModel").hide(), $("#pageListModel").show(), $(".preloader").fadeOut(100)
    }), $("#goUpsertModel").on("click", function(e) {
        if ("" == $("#modelBrand").val().trim()) return toastr.error("Please select a Brand-Name from the list.", "Missing!"), !1;
        if ("" == $("#modelName").val().trim()) return toastr.error("Model-Name cannot leave as empty.", "Missing!"), !1;
        $(".preloader").show();
        let a = "";
        if ("add" === page.props.form) a = page.saveModel();
        else {
            if ("edit" !== page.props.form) return !1;
            a = page.updateModel()
        }
        a.then(function(e) {
            loadModels(), page.props.form = "", $("#pageListModel").show(), $("#pageAddModel").hide(), toastr.success("Model data saved.", "Success !")
        }).catch(function(e) {
            toastr.error("Something went wrong or missing!", "Try again !")
        }).then(function(e) {
            $(".preloader").fadeOut(100)
        })
    }), "item" == vm._params.state.p && loadItems(), $(".goNewItem").on("click", function(e) {
        $(".preloader").show(), page.props.form = "add", $("#itemBrand, #itemModel, #itemName").val(""), $("#pageListItem").hide(), $("#pageAddItem").show(), $(".preloader").fadeOut(100)
    }), $(".goCancelNewItem").on("click", function(e) {
        $(".preloader").show(), page.props.form = "", $("#itemBrand, #itemModel, #itemName").val(""), $("#pageAddItem").hide(), $("#pageListItem").show(), $(".preloader").fadeOut(100)
    }), $("#itemBrand").on("change", function(e) {
        let a = document.getElementById("itemBrand");
        brandValue = "" === a.options[a.selectedIndex].value.trim() ? 0 : a.options[a.selectedIndex].value.trim(), axios.get("api/ItemApi/GetModelByBrandID?BrandID=" + brandValue).then(e => {
            let a = {
                options: {},
                selected: "",
                hold: "#itemModel"
            };
            a.options = Object.assign({
                "": "-- Select Model --"
            }, a.options);
            for (let t = 0; t < e.data.length; ++t) a.options[e.data[t].ModelId] = e.data[t].Head;
            $("#itemModel").select2();
            vm._utils.createSelect(a)
        }).catch(function(e) {})
    }), $("#goUpsertItem").on("click", function(e) {
        if ("" == $("#itemBrand").val().trim()) return toastr.error("Please select a Brand-Name from the list.", "Missing!"), !1;
        if ("" == $("#itemModel").val().trim()) return toastr.error("Please select a Model-Name from the list.", "Missing!"), !1;
        if ("" == $("#itemName").val().trim()) return toastr.error("Item-Name cannot leave as empty.", "Missing!"), !1;
        let a = "";
        if ("add" === page.props.form) a = page.saveItem();
        else {
            if ("edit" !== page.props.form) return !1;
            a = page.updateItem()
        }
        a.then(function(e) {
            loadItems(), page.props.form = "", $("#pageAddItem").hide(), $("#pageListItem").show(), toastr.success("Item data saved.", "Success !")
        }).catch(function(e) {
            toastr.error("Something went wrong or missing!", "Try again !")
        }).then(function(e) {
            $(".preloader").fadeOut(100)
        })
    }), vm.dataImie = {
        limit: 0,
        scan: "off",
        barcode: "",
        imie: 0,
        lastRowId: 0,
        bundle: [],
        dbBundle: ""
    }, $(".goNewPurchase").on("click", function(e) {
        $(".preloader").show(), page.props.form = "add", $("#purchaseSupplier, #purchaseDate, #purchaseInvoiceNo, #purchaseItem, #purchaseQuantity").val(""), $("#imie1").prop("checked", !1), $("#pageListPurchase").hide(), $("#pageAddPurchase").show(), vm.dataImie = {
            limit: 0,
            scan: "off",
            barcode: "",
            imie: 0,
            lastRowId: 0,
            bundle: [],
            dbBundle: ""
        }, createImieList(), $(".preloader").fadeOut(100)
    }), $(".goCancelNewPurchase").on("click", function(e) {
        $(".preloader").show(), page.props.form = "", $("#purchaseSupplier, #purchaseDate, #purchaseInvoiceNo, #purchaseItem, #purchaseQuantity").val(""), $("#imie1").prop("checked", !1), $("#pageAddPurchase").hide(), $("#pageListPurchase").show(), vm.dataImie = {
            limit: 0,
            scan: "off",
            barcode: "",
            imie: 0,
            lastRowId: 0,
            bundle: [],
            dbBundle: ""
        }, createImieList(), $(".preloader").fadeOut(100)
    }), $("#purchaseQuantity").bind("cut copy paste", function(e) {
        return e.preventDefault(), !1
    }).on("keypress", function(e) {
        /[0-9]/.test(String.fromCharCode(e.which)) || e.preventDefault()
    }).on("input", function() {
        var e = parseInt($("#purchaseQuantity").val().trim());
        e ? vm.dataImie.limit = e : (vm.dataImie.limit = 0, vm.dataImie.scan = "off"), $("#imie1, #imie2").prop("checked", !1)
    }), $(".goNewSales").on("click", function(e) {
        $(".preloader").show(), page.props.form = "add", $("#salesCustomer, #salesDate, #salesInvoiceNo, #salesItem, #salesQuantity").val(""), $("#imie1").prop("checked", !1), $("#pageListSales").hide(), $("#pageAddSales").show(), vm.dataImie = {
            limit: 0,
            scan: "off",
            barcode: "",
            imie: 0,
            lastRowId: 0,
            bundle: [],
            dbBundle: ""
        }, createImieList(), $(".preloader").fadeOut(100)
    }), $(".goCancelNewSales").on("click", function(e) {
        $(".preloader").show(), page.props.form = "", $("#salesCustomer, #salesDate, #salesInvoiceNo, #salesItem, #salesQuantity").val(""), $("#imie1").prop("checked", !1), $("#pageAddSales").hide(), $("#pageListSales").show(), vm.dataImie = {
            limit: 0,
            scan: "off",
            barcode: "",
            imie: 0,
            lastRowId: 0,
            bundle: [],
            dbBundle: ""
        }, createImieList(), $(".preloader").fadeOut(100)
    }), $("#salesQuantity").bind("cut copy paste", function(e) {
        return e.preventDefault(), !1
    }).on("keypress", function(e) {
        /[0-9]/.test(String.fromCharCode(e.which)) || e.preventDefault()
    }).on("input", function() {
        var e = parseInt($("#salesQuantity").val().trim());
        e ? vm.dataImie.limit = e : (vm.dataImie.limit = 0, vm.dataImie.scan = "off"), $("#imie1, #imie2").prop("checked", !1)
    }), $("input[name=imie]").click(function() {
        var e = $("input[name=imie]:checked").val();
        (1 == e || 2 == e) && vm.dataImie.limit > 0 && (vm.dataImie.scan = "on", vm.dataImie.imie = e)
    }), $(document).keydown(function(e) {
        if ("on" == vm.dataImie.scan) {
            var a = e.keyCode ? e.keyCode : e.which;
            if (13 == a) {
                var t = vm.dataImie.barcode;
                vm.dataImie.barcode = "";
                let e = vm.dataImie.bundle,
                    a = e.length,
                    r = null;
                if (t) {
                    for (let s = 0; s < a; ++s)
                        if (t == e[s].imie1 || t == e[s].imie2) {
                            r = s + 1;
                            break
                        } if (r) return toastr.error("IMEI " + t + " already scanned, See row " + r + ".", "Duplicate!"), !1;
                    1 == vm.dataImie.imie ? vm.dataImie.limit >= vm.dataImie.bundle.length + 1 ? (vm.dataImie.bundle.push({
                        imie1: t,
                        imie2: ""
                    }), vm.dataImie.lastRowId = vm.dataImie.bundle.length - 1, createImieList()) : toastr.info("Reached your limit as per Quantity Purchase.", "Done!") : 2 == vm.dataImie.imie && vm.dataImie.bundle.length > 0 && ("" == vm.dataImie.bundle[vm.dataImie.lastRowId].imie2 ? (vm.dataImie.bundle[vm.dataImie.lastRowId].imie2 = t, createImieList()) : toastr.warning("IMEI-2 already added, Now select IMEI-1.", "Selection!"))
                }
            } else /[a-z0-9]/.test(String.fromCharCode(a)) && (vm.dataImie.barcode += String.fromCharCode(a))
        }
    }), "purchase" == vm._params.state.p && loadPurchase(), $("#goUpsertPurchase").on("click", function(e) {
        if ("" == $("#purchaseSupplier").val().trim()) return toastr.error("Please select the Supplier-Name from the list.", "Missing!"), !1;
        if ("" == $("#purchaseDate").val().trim()) return toastr.error("Date of Purchase cannot leave as empty.", "Missing!"), !1;
        if ("" == $("#purchaseInvoiceNo").val().trim() && toastr.info("Invoice number is empty, but you can process.", "Info!"), "" == $("#purchaseItem").val().trim()) return toastr.error("Please select the Item-Name from the list.", "Missing!"), !1;
        if ("" == $("#purchaseQuantity").val().trim() || 0 == $("#purchaseQuantity").val().trim()) return toastr.error("Purchase quantity must be greater than 0.", "Missing!"), !1;
        if ("" == vm.dataImie.dbBundle) return toastr.error("Imei data not scanned, please select the IMEI type one and start scanning.", "Missing!"), !1;
        $(".preloader").show();
        let a = "";
        if ("add" === page.props.form) {
            var t = {
                EntryDdate: $("#purchaseDate").val().trim(),
                PartyID: $("#purchaseSupplier").val(),
                InvNo: $("#purchaseInvoiceNo").val().trim(),
                ItemId: $("#purchaseItem").val(),
                Qty: $("#purchaseQuantity").val().trim(),
                SPointid: vm._params.state.s.SPId,
                GridData: vm.dataImie.dbBundle,
                UserID: vm._params.state.s.UserId
            };
            a = axios.post("api/PurchaseApi/SavePurchase", t)
        } else {
            if ("edit" !== page.props.form) return $(".preloader").fadeOut(100), !1;
            t = {
                Refno: page.props.Refno,
                EntryDdate: $("#purchaseDate").val().trim(),
                PartyID: $("#purchaseSupplier").val(),
                InvNo: $("#purchaseInvoiceNo").val().trim(),
                ItemId: $("#purchaseItem").val(),
                Qty: $("#purchaseQuantity").val().trim(),
                SPointID: vm._params.state.s.SPId,
                GridData: vm.dataImie.dbBundle
            };
            a = axios.post("api/PurchaseApi/UpdatePurchase", t)
        }
        a.then(function(e) {
            $("#purchaseSupplier, #purchaseDate, #purchaseInvoiceNo, #purchaseItem, #purchaseQuantity").val(""), $("#imie1, #imie2").prop("checked", !1), loadPurchase(), page.props.form = "", $("#pageAddPurchase").hide(), $("#pageListPurchase").show(), vm.dataImie = {
                limit: 0,
                scan: "off",
                barcode: "",
                imie: 0,
                lastRowId: 0,
                bundle: [],
                dbBundle: ""
            }, createImieList(), toastr.success("Purchase data saved.", "Success!")
        }).catch(function(e) {
            toastr.error("Something went wrong or missing.", "Try again!"), $(".preloader").fadeOut(100)
        })
    }), "sales" == vm._params.state.p && loadSales(), $("#goUpsertSales").on("click", function(e) {
        if ("" == $("#salesCustomer").val().trim()) return toastr.error("Please select the Customer-Name from the list.", "Missing!"), !1;
        if ("" == $("#salesDate").val().trim()) return toastr.error("Date of Sale cannot leave as empty.", "Missing!"), !1;
        if ("" == $("#salesInvoiceNo").val().trim() && toastr.info("Invoice number is empty, but you can process.", "Info!"), "" == $("#salesItem").val().trim()) return toastr.error("Please select the Item-Name from the list.", "Missing!"), !1;
        if ("" == $("#salesQuantity").val().trim() || 0 == $("#salesQuantity").val().trim()) return toastr.error("Sales quantity must be greater than 0.", "Missing!"), !1;
        if ("" == vm.dataImie.dbBundle) return toastr.error("Imei data not scanned, please select the IMEI type one and start scanning.", "Missing!"), !1;
        $(".preloader").show();
        let a = "";
        if ("add" === page.props.form) {
            var t = {
                EntryDdate: $("#salesDate").val().trim(),
                PartyID: $("#salesCustomer").val(),
                InvNo: $("#salesInvoiceNo").val().trim(),
                ItemId: $("#salesItem").val(),
                Qty: $("#salesQuantity").val().trim(),
                SPointid: vm._params.state.s.SPId,
                GridData: vm.dataImie.dbBundle,
                UserID: vm._params.state.s.UserId
            };
            a = axios.post("api/SalesApi/SaveSales", t)
        } else {
            if ("edit" !== page.props.form) return $(".preloader").fadeOut(100), !1;
            t = {
                Refno: page.props.Refno,
                EntryDdate: $("#salesDate").val().trim(),
                PartyID: $("#salesCustomer").val(),
                InvNo: $("#salesInvoiceNo").val().trim(),
                ItemId: $("#salesItem").val(),
                Qty: $("#salesQuantity").val().trim(),
                GridData: vm.dataImie.dbBundle,
                SPointid: vm._params.state.s.SPId
            };
            a = axios.post("api/SalesApi/UpdateSales", t)
        }
        a.then(function(e) {
            $("#salesCustomer, #salesDate, #salesInvoiceNo, #salesItem, #salesQuantity").val(""), $("#imie1, #imie2").prop("checked", !1), loadSales(), page.props.form = "", $("#pageAddSales").hide(), $("#pageListSales").show(), vm.dataImie = {
                limit: 0,
                scan: "off",
                barcode: "",
                imie: 0,
                lastRowId: 0,
                bundle: [],
                dbBundle: ""
            }, createImieList(), toastr.success("Sales data saved.", "Success!")
        }).catch(function(e) {
            toastr.error("Something went wrong or missing.", "Try again!")
        }).then(function() {
            $(".preloader").fadeOut(100)
        })
    }), "user" == vm._params.state.p && loadUsers(),
        $(".viewpassword").on("mousedown mouseup", function (e) {
            var a = document.getElementById("password");
            a.type = "password" === a.type ? "text" : "password"
        }),
        $(".goNewUser").on("click", function (e) {
            if ("1" != vm._params.state.s.UtypeID) return toastr.error("You do not have enough right to proceed this action.", "Permission!"), !1;
            $(".preloader").show(), page.props.form = "add", $("#userName, #sellPoint, #userType, #password, #confirmPassword ").val(""), $("#pageListUser").hide(), $("#pageAddUser").show(), $(".preloader").fadeOut(100)
        }), $(".goCancelNewUser").on("click", function (e) {
            $(".preloader").show(), page.props.form = "", $("#userName, #sellPoint, #userType, #password, #confirmPassword").val(""), $("#pageAddUser").hide(), $("#pageListUser").show(), $(".preloader").fadeOut(100)
        }), $("#goUpsertUser").on("click", function (e) {
             if ("" == $("#userName").val().trim()) return toastr.error("User ID cannot leave as empty.", "Missing!"), !1;
            if ("" == $("#sellPoint").val().trim()) return toastr.error("Please select a Selling-Point from the list.", "Missing!"), !1;
            if ("" == $("#userType").val().trim()) return toastr.error("Please select a User-Type from the list.", "Missing!"), !1;
            if ($("#password").val().trim().length < 3) return toastr.error("Password must have atleast 3 characters.", "Missing!"), !1;
            if ($("#password").val().trim() !== $("#confirmPassword").val().trim()) return toastr.error("Mismatching passwords.", "Missing!"), !1;
            let a = "";
            if ("add" === page.props.form) {
                let e = {
                    Head: $("#userName").val().trim(),
                    UserName: $("#userName").val().trim(),
                    pwd: $("#password").val().trim(),
                    SellingPointID: $("#sellPoint").val(),
                    UserTypeId: $("#userType").val()

                };
                a = axios.post("api/UserApi/SaveUser", e)
            } else {
                if ("edit" !== page.props.form) return $(".preloader").fadeOut(100), !1;
                var t = {
                    UId: page.props.usrId,
                    Head: $("#userName").val().trim(),
                    UserName: $("#userName").val().trim(),
                    pwd: $("#password").val().trim(),
                    SellingPointID: $("#sellPoint").val(),
                    UserTypeId: $("#userType").val()
                };
                a = axios.post("api/UserApi/UpdateUser", t)
            }
            a.then(function (e) {
                loadUsers(), page.props.form = "", $("#pageAddUser").hide(), $("#pageListUser").show(), toastr.success("Item data saved.", "Success !")
            }).catch(function (e) {
                toastr.error("Something went wrong or missing!", "Try again !")
            }).then(function (e) {
                $(".preloader").fadeOut(100)
            })
        }),
        vm.dataImie = {
            limit: 0,
            scan: "off",
            barcode: "",
            imie: 0,
            lastRowId: 0,
            bundle: [],
            dbBundle: ""
        }, "supplier" == vm._params.state.p && loadSupplier(), $(".goNewSupplier").on("click", function (e) {
        $(".preloader").show(), page.props.form = "add", $("#supplierName, #supplierAddress, #supplierCity, #supplierCountry, #supplierPhone, #supplierEmail").val(""), $("#pageListSupplier").hide(), $("#pageAddSupplier").show(), $(".preloader").fadeOut(100)
    }), $(".goCancelNewSupplier").on("click", function(e) {
        $(".preloader").show(), page.props.form = "", $("#supplierName, #supplierAddress, #supplierCity, #supplierCountry, #supplierPhone, #supplierEmail").val(""), $("#pageAddSupplier").hide(), $("#pageListSupplier").show(), $(".preloader").fadeOut(100)
    }), $("#goUpsertSupplier").on("click", function(e) {
        if ("" == $("#supplierName").val().trim()) return toastr.error("Supplier-Name cannot leave as empty.", "Missing!"), !1;
        if ("" == $("#supplierAddress").val().trim()) return toastr.error("Supplier-Address cannot leave as empty.", "Missing!"), !1;
        if ("" == $("#supplierCity").val().trim()) return toastr.error("Supplier-City cannot leave as empty.", "Missing!"), !1;
        if ("" == $("#supplierCountry").val().trim()) return toastr.error("Supplier-Country cannot leave as empty.", "Missing!"), !1;
        if ("" == $("#supplierPhone").val().trim()) return toastr.error("Supplier-Phone cannot leave as empty.", "Missing!"), !1;
        if ("" == $("#supplierEmail").val().trim()) return toastr.error("Supplier-Email cannot leave as empty.", "Missing!"), !1;
        $(".preloader").show();
        let a = "";
        if ("add" === page.props.form) {
            let e = {
                Head: $("#supplierName").val().trim(),
                Address: $("#supplierAddress").val(),
                City: $("#supplierCity").val().trim(),
                Country: $("#supplierCountry").val(),
                Phone: $("#supplierPhone").val().trim(),
                Email: $("#supplierEmail").val().trim(),
                UserID: vm._params.state.s.UserId
            };
            a = axios.post("api/SupplierApi/SaveSupplier", e)
        } else {
            if ("edit" !== page.props.form) return $(".preloader").fadeOut(100), !1;
            var t = {
                SupID: page.props.supplierId,
                Head: $("#supplierName").val().trim(),
                Address: $("#supplierAddress").val(),
                City: $("#supplierCity").val().trim(),
                Country: $("#supplierCountry").val(),
                Phone: $("#supplierPhone").val().trim(),
                Email: $("#supplierEmail").val().trim(),
                UserID: vm._params.state.s.UserId
            };
            a = axios.post("api/SupplierApi/UpdateSupplier", t)
        }
        a.then(function(e) {
            loadSupplier(), page.props.form = "", $("#pageAddSupplier").hide(), $("#pageListSupplier").show(), toastr.success("Supplier data has been saved.", "Success!")
        }).catch(function(e) {
            toastr.error("Something went wrong or missing.", "Try again!")
        }).then(function(e) {
            $(".preloader").fadeOut(100)
        })
    }), "customer" == vm._params.state.p && loadCustomer(), $(".goNewCustomer").on("click", function(e) {
        $(".preloader").show(), page.props.form = "add", $("#customerName, #customerAddress, #customerCity, #customerCountry, #customerPhone, #customerEmail").val(""), $("#pageListCustomer").hide(), $("#pageAddCustomer").show(), $(".preloader").fadeOut(100)
    }), $(".goCancelNewCustomer").on("click", function(e) {
        $(".preloader").show(), page.props.form = "", $("#customerName, #customerAddress, #customerCity, #customerCountry, #customerPhone, #customerEmail").val(""), $("#pageAddCustomer").hide(), $("#pageListCustomer").show(), $(".preloader").fadeOut(100)
    }), $("#goUpsertCustomer").on("click", function(e) {
        if ("" == $("#customerName").val().trim()) return toastr.error("Customer-Name cannot leave as empty.", "Missing!"), !1;
        if ("" == $("#customerAddress").val().trim()) return toastr.error("Customer-Address cannot leave as empty.", "Missing!"), !1;
        if ("" == $("#customerCity").val().trim()) return toastr.error("Customer-City cannot leave as empty.", "Missing!"), !1;
        if ("" == $("#customerCountry").val().trim()) return toastr.error("Customer-Country cannot leave as empty.", "Missing!"), !1;
        if ("" == $("#customerPhone").val().trim()) return toastr.error("Customer-Phone cannot leave as empty.", "Missing!"), !1;
        if ("" == $("#customerEmail").val().trim()) return toastr.error("Customer-Email cannot leave as empty.", "Missing!"), !1;
        $(".preloader").show();
        let a = "";
        if ("add" === page.props.form) {
            let e = {
                Head: $("#customerName").val().trim(),
                Address: $("#customerAddress").val(),
                City: $("#customerCity").val().trim(),
                Country: $("#customerCountry").val(),
                Phone: $("#customerPhone").val().trim(),
                Email: $("#customerEmail").val().trim(),
                UserID: vm._params.state.s.UserId
            };
            a = axios.post("api/CustomerApi/SaveCustomer", e)
        } else {
            if ("edit" !== page.props.form) return $(".preloader").fadeOut(100), !1;
            var t = {
                CustId: page.props.customerId,
                Head: $("#customerName").val().trim(),
                Address: $("#customerAddress").val(),
                City: $("#customerCity").val().trim(),
                Country: $("#customerCountry").val(),
                Phone: $("#customerPhone").val().trim(),
                Email: $("#customerEmail").val().trim(),
                UserID: vm._params.state.s.UserId
            };
            a = axios.post("api/CustomerApi/UpdateCustomer", t)
        }
        a.then(function(e) {
            loadCustomer(), page.props.form = "", $("#pageAddCustomer").hide(), $("#pageListCustomer").show(), toastr.success("Customer data has been saved.", "Success!")
        }).catch(function(e) {
            toastr.error("Something went wrong or missing.", "Try again!")
        }).then(function(e) {
            $(".preloader").fadeOut(100)
        })
    }), "home" == vm._params.state.p && $(".preloader").fadeOut(100), "settings" == vm._params.state.p && ($("#newPassword, #confirmPassword").val(""), $(".preloader").fadeOut(100)), $(".seepassword").on("mousedown mouseup", function(e) {
        var a = document.getElementById("newPassword");
        a.type = "password" === a.type ? "text" : "password"
    }), $("#goChangePassword").on("click", function(e) {
        if ($("#newPassword").val().trim().length < 3) return toastr.error("Password must have atleast 3 characters.", "Missing!"), !1;
        if ($("#newPassword").val().trim() !== $("#confirmPassword").val().trim()) return toastr.error("Mismatching passwords.", "Missing!"), !1;
        var a = window.location.origin + "/"; - 1 !== window.location.pathname.indexOf("mtrack", 1) && (a += "mtrack/"), a += "api/UserApi/ChnagePWD", axios.get(a + "?UserID=" + vm._params.state.s.UserId + "&pwd=" + $("#newPassword").val().trim()).then(e => {
            toastr.success("Password successfully changed.", "Success!")
        }).catch(function(e) {
            toastr.error("Something went wrong or missing.", "Try again!")
        }).then(function(e) {
            $(".preloader").fadeOut(100)
        })
    }), "search" == vm._params.state.p && ($("#searchIme").val(""), $(".preloader").fadeOut(100)), $("#searchImei").on("click", function(e) {
        $("#tSearchImei").hide(), $(".searchInit").text("Loading...").show(), axios.get("api/SearchApi/SearchIME?ime=" + $("#searchIme").val().trim()).then(e => {
            let a = e.data.length;
            if ($("#tSearchImei").find("tbody").detach(), a) {
                $(".searchInit").hide();
                var t = "<tbody>";
                for (let r = 0; r < a; ++r) t += "<tr>", t += '<td><i class="mdi mdi-check"></i></td>', t += "<td> IMEI1: " + e.data[r].IME1 + (e.data[r].IME2.length > 0 ? "<br>IMEI2: " + e.data[r].IME2 : "") + "</td>", t += "<td>" + vm._utils.formatDate(e.data[r].EntryDdate, ["dmy", "/"]) + "</td>", t += "<td>" + (1 == e.data[r].TranType ? '<div class="badge badge-pill badge-cyan"><span class="m-l-15 m-r-15">Purchase</span></div>' : '<span class="badge badge-pill badge-success"><span class="m-l-25 m-r-25">Sale</span></span>') + "</td>", t += "<td>" + e.data[r].InvNo + "</td>", t += "<td>" + e.data[r].ItemName + "</td>", t += "<td>" + e.data[r].Party + "</td>", t += "<td>" + e.data[r].Qty + "</td>", t += "<td>" + e.data[r].SellingPoint + "</td>", t += "</tr>";
                t += "<tbody>", $("#tSearchImei").append(t).show()
            } else $("#tSearchImei").hide(), $(".searchInit").text("Could not find any data based on your search.")
        }).catch(function(e) {})
    }), $(".goCancelViewPurchase").on("click", function(e) {
        $("#pageViewPurchase").hide(), $("#pageAddPurchase").hide(), $("#viewPurchaseInvoice").text(""), $("#viewPurchaseSupplier").text(""), $("#viewPurchaseDate").text(""), $("#viewPurchaseQuantity").text(""), $("#viewPurchaseItemName").text(""), $("#pageListPurchase").show()
    }), $(".goCancelViewSale").on("click", function(e) {
        $("#pageViewSales").hide(), $("#pageAddSales").hide(), $("#viewSaleInvoice").text(""), $("#viewSaleCustomer").text(""), $("#viewSaleDate").text(""), $("#viewSaleQuantity").text(""), $("#viewSaleItemName").text(""), $("#pageListSales").show()
    }), $("#goPrintViewPurchase, #goPrintViewSale").on("click", function(e) {
        window.print()
    })
});