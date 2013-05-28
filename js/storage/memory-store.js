var MemoryStore = function(successCallback, errorCallback) {

    this.findByName = function(searchKey, callback) {
        var employees = this.employees.filter(function(element) {
            var fullName = element.firstName + " " + element.lastName;
            return fullName.toLowerCase().indexOf(searchKey.toLowerCase()) > -1;
        });
        callLater(callback, employees);
    }

    this.findById = function(id, callback) {
        var employees = this.employees;
        var employee = null;
        var l = employees.length;
        for (var i=0; i < l; i++) {
            if (employees[i].id === id) {
                employee = employees[i];
                break;
            }
        }
        callLater(callback, employee);
    }

    // Used to simulate async calls. This is done to provide a consistent interface with stores (like WebSqlStore)
    // that use async data access APIs
    var callLater = function(callback, data) {
        if (callback) {
            setTimeout(function() {
                callback(data);
            });
        }
    }

    this.employees = [
            {"id": 1, "firstName": "Daniel", "lastName": "Lizarazo", "title":"Gerente General", "managerId": 0, "city":"Bogota, DC", "cellPhone":"3114753683", "officePhone":"0314757711", "email":"gerencia@wifienter.net"},
            {"id": 2, "firstName": "Alejandro", "lastName": "Osorio", "title":"Gerente IT", "managerId": 1, "city":"Bogota, DC", "cellPhone":"3115340944", "officePhone":"0314757711", "email":"alejandro.c@wifienter.net"},
            {"id": 3, "firstName": "Maria Helena", "lastName": "Gonzalez", "title":"Gerente Financiera", "managerId": 1, "city":"Bogota, DC", "cellPhone":"3108691311", "officePhone":"1 4757711", "email":"direccion.financiera@wifienter.net"},
            {"id": 4, "firstName": "William", "lastName": "Galvis", "title":"Gerente Comercial", "managerId": 1, "city":"Bogota, DC", "cellPhone":"3178266487", "officePhone":"0314757711", "email":"william.g@wifienter.net"},
            {"id": 5, "firstName": "David", "lastName": "Talero", "title":"Gerente Marketing", "managerId": 1, "city":"Bogota, DC", "cellPhone":"3157877919", "officePhone":"0314757711", "email":"david.t@wifienter.net"},
            {"id": 6, "firstName": "Robinson", "lastName": "Gaitan", "title":"Coordinador Soporte", "managerId": 2, "city":"Bogota, DC", "cellPhone":"3164078946", "officePhone":"0318010959", "email":"robinson.g@wifienter.net"},
            {"id": 7, "firstName": "Jaime", "lastName": "Giraldo", "title":"Soporte Capital", "managerId": 6, "city":"Bogota, DC", "cellPhone":"3165899279", "officePhone":"0314233000", "email":"jaime.g@wifienter.net"},
            {"id": 8, "firstName": "Ivan Dario", "lastName": "Becerra", "title":"Soporte Capital", "managerId": 6, "city":"Bogota, DC", "cellPhone":"3125794244", "officePhone":"0314233000", "email":"ivan.b@wifienter.net"},
            {"id": 9, "firstName": "Jonathan", "lastName": "Perez", "title":"Soporte Capital", "managerId": 6, "city":"Bogota, DC", "cellPhone":"3138347176", "officePhone":"0314233000", "email":"jonathan.p@wifienter.net"},
            {"id": 10, "firstName": "Jonathan Stitt", "lastName": "Blanco Cifuentes", "title":"Sistemas Lancaster", "managerId": 6, "city":"Bogota, DC", "cellPhone":"3138347176", "officePhone":"0316291100", "email":"jonathan.b@wifienter.net"},
            {"id": 11, "firstName": "Andrea", "lastName": "Cuao", "title":"Soporte Tequendama", "managerId": 6, "city":"Bogota, DC", "cellPhone":"3138486122", "officePhone":"0318010959", "email":"andrea.c@wifienter.net"},
            {"id": 12, "firstName": "Cesar", "lastName": "Garcia", "title":"Soporte Tequendama", "managerId": 6, "city":"Bogota, DC", "cellPhone":"3123287204", "officePhone":"0318010959", "email":"cesar.g@wifienter.net"},
            {"id": 13, "firstName": "Alejandro", "lastName": "Tiria", "title":"Soporte Tequendama", "managerId": 6, "city":"Bogota, DC", "cellPhone":"3204018104", "officePhone":"0318010959", "email":"alejandro.t@wifienter.net"},
            {"id": 14, "firstName": "Andres", "lastName": "Sepulveda", "title":"Soporte Tequendama", "managerId": 6, "city":"Bogota, DC", "cellPhone":"3112197137", "officePhone":"0318010959", "email":"andres.s@wifienter.net"}
        ];

    callLater(successCallback);

}