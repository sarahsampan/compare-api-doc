define({ api: [
  {
    "type": "delete",
    "url": "/areas/:id",
    "title": "DELETE /areas/:id",
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i -X DELETE \"http://apibeta.compargo.com/v1/areas/4b639068-319b-11e4-988c-7d9574853fac/?countryCode=ph&language=en\"\n    -H \"X-COMPARE-REST-API-KEY: 1234567890\"\n"
      }
    ],
    "description": "<p>Delete an Area</p>",
    "name": "Delete",
    "group": "Areas",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "field": "X-COMPARE-REST-API-KEY",
            "optional": false,
            "description": "<p>Areas unique access-key.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "field": "language",
            "optional": false,
            "description": "<p>Mandatory Language.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "countryCode",
            "optional": false,
            "description": "<p>Mandatory Country Code.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "id",
            "optional": false,
            "description": "<p>Mandatory Area Unique ID.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "field": "id",
            "optional": false,
            "description": "<p>The ID of Area.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "   HTTP/1.1 200 OK\n   {\n     \"id\": \"4b639068-319b-11e4-988c-7d9574853fac\"\n   }\n"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "field": "InvalidAccessToken",
            "optional": false,
            "description": "<p>The access token is invalid.</p>"
          },
          {
            "group": "Error 4xx",
            "field": "MissingAuthenticationCredentials",
            "optional": false,
            "description": "<p>The authentication credentials are missing.</p>"
          },
          {
            "group": "Error 4xx",
            "field": "AreaNotFound",
            "optional": false,
            "description": "<p>The id of the Area was not found.</p>"
          },
          {
            "group": "Error 4xx",
            "field": "RouteNotFound",
            "optional": false,
            "description": "<p>That route was not found on the server.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "   HTTP/1.1 401 Unauthorized\n   {\n     \"error\": \"InvalidAccessToken\"\n   }\n"
        },
        {
          "title": "Error-Response:",
          "content": "   HTTP/1.1 401 Unauthorized\n   {\n     \"error\": \"MissingAuthenticationCredentials\"\n   }\n"
        },
        {
          "title": "Error-Response:",
          "content": "   HTTP/1.1 404 Not Found\n   {\n     \"error\": \"AreaNotFound\"\n   }\n"
        },
        {
          "title": "Error-Response:",
          "content": "   HTTP/1.1 404 \n   {\n     \"error\": \"RouteNotFound\"\n   }\n"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "comparison-api/App/Modules/Backend/Controllers/AreasController.php"
  },
  {
    "type": "get",
    "url": "/areas",
    "title": "GET /areas",
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -H \"X-COMPARE-REST-API-KEY: 1234567890\" \n    -i \"http://apibeta.compargo.com/v1/areas/?countryCode=ph&language=en&query={\"status\":\"1\"}&fields=descriptions&sort=-id,name&limit=10\"\n"
      }
    ],
    "description": "<p>Read data of all Areas</p>",
    "name": "Get",
    "group": "Areas",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "field": "X-COMPARE-REST-API-KEY",
            "optional": false,
            "description": "<p>Areas unique access-key.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "field": "language",
            "optional": false,
            "description": "<p>Mandatory Language.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "countryCode",
            "optional": false,
            "description": "<p>Mandatory Country Code.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "query",
            "optional": true,
            "description": "<p>Optional query conditions that rows must satisfy to be selected.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "fields",
            "optional": true,
            "description": "<p>Optional field indicates a column that you want to retrieve.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "sort",
            "optional": true,
            "description": "<p>Optional sort orders columns selected for output.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "limit",
            "defaultValue": "0",
            "optional": true,
            "description": "<p>Optional limit used to constrain the number of rows returned.                                                     When offset parameter is present, the limit specifies the offset                                                  of the first row to return. When count parameter exists, the limit                                                   identifies all the rows returned and with default 0.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "offset",
            "optional": true,
            "description": "<p>Optional offset specifies the maximum number of rows to return.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "count",
            "defaultValue": "1",
            "optional": true,
            "description": "<p>Optional count with default 1. Returns the count of areas.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "field": "id",
            "optional": false,
            "description": "<p>ID of the Area.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "name",
            "optional": false,
            "description": "<p>Name of the Area.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "category",
            "optional": false,
            "description": "<p>Category of the Area.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "description",
            "optional": false,
            "description": "<p>Description of the Area.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "bounds",
            "optional": false,
            "description": "<p>Bounds of the Area.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "parentId",
            "optional": false,
            "description": "<p>Parent ID of the Area.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "lft",
            "optional": false,
            "description": "<p>Lft of the Area.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "rght",
            "optional": false,
            "description": "<p>Rght of the Area.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "scope",
            "optional": false,
            "description": "<p>Scope of the Area.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "field": "editable",
            "optional": false,
            "description": "<p>Editable Flag of the Area.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "field": "visibility",
            "optional": false,
            "description": "<p>Visibility Flag of the Area.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "field": "status",
            "optional": false,
            "description": "<p>Status Flag of the Area.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "field": "active",
            "optional": false,
            "description": "<p>Active Flag of the Area.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "field": "created",
            "optional": false,
            "description": "<p>Creation date of the Area.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "field": "modified",
            "optional": false,
            "description": "<p>Modification date of the Area.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "createdBy",
            "optional": false,
            "description": "<p>ID of the User who created the Area.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "modifiedBy",
            "optional": false,
            "description": "<p>ID of the User who modified the Area.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "   HTTP/1.1 200 OK\n   {\n     \"id\": \"337b6f34-2282-11e4-b700-0b28aad944c8\",\n     \"name\": \"NCR\",\n     \"category\": \"Region\",\n     \"description\": \"National Capital Region (NCR) of the Philippines, is the seat of government and the most populous region and metropolitan area of the country which is composed of the City of Manila and the cities of Caloocan, Las Pi�as, Makati, Malabon, Mandaluyong, Marikina, Muntinlupa, Navotas, Para�aque, Pasay, Pasig, Quezon City, San Juan, Taguig, and Valenzuela, as well as the Municipality of Pateros.\",\n     \"language\": \"en\",\n     \"bounds\": \"\",\n     \"parentId\": \"\",\n     \"lft\": \"\",\n     \"rght\": \"\",\n     \"scope\": \"\",\n     \"status\": \"1\",\n     \"active\": \"1\",\n     \"created\": \"2014-08-13 02:38:53\",\n     \"modified\": \"2014-08-13 02:42:55\",\n     \"createdBy\": \"a8838d12-1dcc-11e4-b32d-eff91066cccf\",\n     \"modifiedBy\": \"a8838d12-1dcc-11e4-b32d-eff91066cccf\"\n   },\n   {\n     \"id\": \"4b639068-319b-11e4-988c-7d9574853fac\",\n     \"name\": \"CALABARZON\",\n     \"category\": \"Region\",\n     \"description\": \"CALABARZON is one of the regions of the Philippines. It is designated as Region IV-A and its regional center is Calamba City in Laguna. The region is composed of five provinces, namely: Cavite, Laguna, Batangas, Rizal, and Quezon; whose names form the acronym CALABARZON. The region is also more formally known as Southern Tagalog Mainland.\",\n     \"language\": \"en\",\n     \"bounds\": null,\n     \"parentId\": null,\n     \"lft\": null,\n     \"rght\": null,\n     \"scope\": null,\n     \"status\": \"1\",\n     \"active\": \"1\",\n     \"created\": \"2014-09-01 07:46:18\",\n     \"modified\": \"0000-00-00 00:00:00\",\n     \"createdBy\": \"a8838d12-1dcc-11e4-b32d-eff91066cccf\",\n     \"modifiedBy\": \"a8838d12-1dcc-11e4-b32d-eff91066cccf\"\n   }\n"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "field": "InvalidAccessToken",
            "optional": false,
            "description": "<p>The access token is invalid.</p>"
          },
          {
            "group": "Error 4xx",
            "field": "MissingAuthenticationCredentials",
            "optional": false,
            "description": "<p>The authentication credentials are missing.</p>"
          },
          {
            "group": "Error 4xx",
            "field": "WrongFieldsReturned",
            "optional": false,
            "description": "<p>The requested fields are not available.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "   HTTP/1.1 401 Unauthorized\n   {\n     \"error\": \"InvalidAccessToken\"\n   }\n"
        },
        {
          "title": "Error-Response:",
          "content": "   HTTP/1.1 401 Unauthorized\n   {\n     \"error\": \"MissingAuthenticationCredentials\"\n   }\n"
        },
        {
          "title": "Error-Response:",
          "content": "   HTTP/1.1 401 Unauthorized\n   {\n     \"error\": \"WrongFieldsReturned\"\n   }\n"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "comparison-api/App/Modules/Backend/Controllers/AreasController.php"
  },
  {
    "type": "get",
    "url": "/areas/:id",
    "title": "GET /areas/:id",
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -H \"X-COMPARE-REST-API-KEY: 1234567890\" \n    -i \"http://apibeta.compargo.com/v1/areas/337b6f34-2282-11e4-b700-0b28aad944c8/?countryCode=ph&language=en\"\n"
      }
    ],
    "description": "<p>Read data of a Area</p>",
    "name": "GetOne",
    "group": "Areas",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "field": "X-COMPARE-REST-API-KEY",
            "optional": false,
            "description": "<p>Areas unique access-key.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "field": "language",
            "optional": false,
            "description": "<p>Mandatory Language.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "field": "countryCode",
            "optional": false,
            "description": "<p>Mandatory Country Code.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "field": "id",
            "optional": false,
            "description": "<p>Mandatory Area unique ID.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "field": "id",
            "optional": false,
            "description": "<p>ID of the Area.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "name",
            "optional": false,
            "description": "<p>Name of the Area.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "category",
            "optional": false,
            "description": "<p>Category of the Area.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "description",
            "optional": false,
            "description": "<p>Description of the Area.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "bounds",
            "optional": false,
            "description": "<p>Bounds of the Area.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "parentId",
            "optional": false,
            "description": "<p>Parent ID of the Area.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "lft",
            "optional": false,
            "description": "<p>Lft of the Area.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "rght",
            "optional": false,
            "description": "<p>Rght of the Area.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "scope",
            "optional": false,
            "description": "<p>Scope of the Area.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "field": "editable",
            "optional": false,
            "description": "<p>Editable Flag of the Area.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "field": "visibility",
            "optional": false,
            "description": "<p>Visibility Flag of the Area.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "field": "status",
            "optional": false,
            "description": "<p>Status Flag of the Area.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "field": "active",
            "optional": false,
            "description": "<p>Active Flag of the Area.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "field": "created",
            "optional": false,
            "description": "<p>Creation date of the Area.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "field": "modified",
            "optional": false,
            "description": "<p>Modification date of the Area.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "createdBy",
            "optional": false,
            "description": "<p>ID of the User who created the Area.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "modifiedBy",
            "optional": false,
            "description": "<p>ID of the User who modified the Area.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "   HTTP/1.1 200 OK\n   {\n     \"id\": \"337b6f34-2282-11e4-b700-0b28aad944c8\",\n     \"name\": \"NCR\",\n     \"category\": \"Region\",\n     \"description\": \"National Capital Region (NCR) of the Philippines, is the seat of government and the most populous region and metropolitan area of the country which is composed of the City of Manila and the cities of Caloocan, Las Pi�as, Makati, Malabon, Mandaluyong, Marikina, Muntinlupa, Navotas, Para�aque, Pasay, Pasig, Quezon City, San Juan, Taguig, and Valenzuela, as well as the Municipality of Pateros.\",\n     \"language\": \"en\",\n     \"bounds\": \"\",\n     \"parentId\": \"\",\n     \"lft\": \"\",\n     \"rght\": \"\",\n     \"scope\": \"\",\n     \"status\": \"1\",\n     \"active\": \"1\",\n     \"created\": \"2014-08-13 02:38:53\",\n     \"modified\": \"2014-08-13 02:42:55\",\n     \"createdBy\": \"a8838d12-1dcc-11e4-b32d-eff91066cccf\",\n     \"modifiedBy\": \"a8838d12-1dcc-11e4-b32d-eff91066cccf\"\n   }\n"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "field": "AreaNotFound",
            "optional": false,
            "description": "<p>The id of the Area was not found.</p>"
          },
          {
            "group": "Error 4xx",
            "field": "InvalidAccessToken",
            "optional": false,
            "description": "<p>The access token is invalid.</p>"
          },
          {
            "group": "Error 4xx",
            "field": "MissingAuthenticationCredentials",
            "optional": false,
            "description": "<p>The authentication credentials are missing.</p>"
          },
          {
            "group": "Error 4xx",
            "field": "RouteNotFound",
            "optional": false,
            "description": "<p>That route was not found on the server.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "   HTTP/1.1 404 Not Found\n   {\n     \"error\": \"AreaNotFound\"\n   }\n"
        },
        {
          "title": "Error-Response:",
          "content": "   HTTP/1.1 401 Unauthorized\n   {\n     \"error\": \"InvalidAccessToken\"\n   }\n"
        },
        {
          "title": "Error-Response:",
          "content": "   HTTP/1.1 401 Unauthorized\n   {\n     \"error\": \"MissingAuthenticationCredentials\"\n   }\n"
        },
        {
          "title": "Error-Response:",
          "content": "   HTTP/1.1 404 \n   {\n     \"error\": \"RouteNotFound\"\n   }\n"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "comparison-api/App/Modules/Backend/Controllers/AreasController.php"
  },
  {
    "type": "post",
    "url": "/areas",
    "title": "POST /areas",
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i -X POST \"http://apibeta.compargo.com/v1/areas/?countryCode=ph&language=en\"\n    -H \"X-COMPARE-REST-API-KEY: 1234567890\"\n    -d \"name=Central%20Visayas&\n    \tcategory=Region&\n        description=Central%20Visayas%20is%20a%20region%20of%20the%20Philippines,%20designated%20as%20Region%20VII.%20It%20is%20located%20in%20the%20central%20part%20of%20the%20Visayas%20island%20group,%20and%20consists%20of%20four%20provinces�Bohol,%20Cebu,%20Negros%20Oriental,%20and%20Siquijor�%20and%20the%20highly%20urbanized%20cities%20of%20Cebu%20City,%20Lapu-Lapu%20City,%20and%20Mandaue%20City.%20The%20region%20is%20dominated%20by%20the%20native%20speakers%20of%20Cebuano.%20Cebu%20City%20is%20its%20regional%20center.&\n        language=en&\n        editable=1&\n        visibility=1&      \n        status=1\"\n"
      }
    ],
    "description": "<p>Create a new Area</p>",
    "name": "Post",
    "group": "Areas",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "field": "X-COMPARE-REST-API-KEY",
            "optional": false,
            "description": "<p>Area unique access-key.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "field": "language",
            "optional": false,
            "description": "<p>Mandatory Language.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "countryCode",
            "optional": false,
            "description": "<p>Mandatory Country code.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "name",
            "optional": false,
            "description": "<p>Mandatory Name of the Area.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "category",
            "optional": false,
            "description": "<p>Mandatory Category of the Area.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "description",
            "optional": true,
            "description": "<p>Optional Description of the Area.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "bounds",
            "optional": true,
            "description": "<p>Optional Bounds of the Area.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "parentId",
            "optional": true,
            "description": "<p>Optional Parent ID of the Area.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "lft",
            "optional": true,
            "description": "<p>Optional Lft of the Area.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "rght",
            "optional": true,
            "description": "<p>Optional Rght of the Area.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "scope",
            "defaultValue": "0",
            "optional": true,
            "description": "<p>Optional Scope of the Area.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "editable",
            "defaultValue": "0",
            "optional": true,
            "description": "<p>OptionalEditable Flag of the Area.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "visibility",
            "defaultValue": "0",
            "optional": true,
            "description": "<p>Optional Visibility Flag of the Area.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "status",
            "defaultValue": "0",
            "optional": true,
            "description": "<p>Optional Status Flag of the Area.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "field": "id",
            "optional": false,
            "description": "<p>The new Area-ID.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "   HTTP/1.1 200 OK\n   {\n     \"id\": \"d49188a6-1d4e-11e4-b32d-eff91066cccf\"\n   }\n"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "field": "BadInputParameter",
            "optional": false,
            "description": "<p>The request cannot be fulfilled due to bad syntax.</p>"
          },
          {
            "group": "Error 4xx",
            "field": "InvalidAccessToken",
            "optional": false,
            "description": "<p>The access token is invalid.</p>"
          },
          {
            "group": "Error 4xx",
            "field": "MissingAuthenticationCredentials",
            "optional": false,
            "description": "<p>The authentication credentials are missing.</p>"
          },
          {
            "group": "Error 4xx",
            "field": "RouteNotFound",
            "optional": false,
            "description": "<p>That route was not found on the server.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "   HTTP/1.1 400\n   {\n     \"error\": \"BadInputParameter\"\n   }\n"
        },
        {
          "title": "Error-Response:",
          "content": "   HTTP/1.1 401 Unauthorized\n   {\n     \"error\": \"InvalidAccessToken\"\n   }\n"
        },
        {
          "title": "Error-Response:",
          "content": "   HTTP/1.1 401 Unauthorized\n   {\n     \"error\": \"MissingAuthenticationCredentials\"\n   }\n"
        },
        {
          "title": "Error-Response:",
          "content": "   HTTP/1.1 404 \n   {\n     \"error\": \"RouteNotFound\"\n   }\n"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "comparison-api/App/Modules/Backend/Controllers/AreasController.php"
  },
  {
    "type": "post",
    "url": "/areas/search",
    "title": "POST /areas/search",
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -H \"X-COMPARE-REST-API-KEY: 1234567890\" \n    -i \"http://apibeta.compargo.com/v1/areas/?countryCode=ph&language=en\"\n    -d \"query={\"name\":\"Eastern%20Visayas\", \"status\":\"1\"}&fields=descriptions&sort=-id,name&limit=10\"\n"
      }
    ],
    "description": "<p>Read data of all Areas</p>",
    "name": "Search",
    "group": "Areas",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "field": "X-COMPARE-REST-API-KEY",
            "optional": false,
            "description": "<p>Areas unique access-key.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "field": "language",
            "optional": false,
            "description": "<p>Mandatory Language.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "countryCode",
            "optional": false,
            "description": "<p>Mandatory Country Code.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "query",
            "optional": true,
            "description": "<p>Optional query conditions that rows must satisfy to be selected.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "fields",
            "optional": true,
            "description": "<p>Optional fields indicates a column that you want to retrieve.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "sort",
            "optional": true,
            "description": "<p>Optional sort orders columns selected for output.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "limit",
            "defaultValue": "0",
            "optional": true,
            "description": "<p>Optional limit used to constrain the number of rows returned.                                                        When offset parameter is present, the limit specifies the offset                                                  of the first row to return.                                                  When count parameter exists, the limit identifies all the rows returned and with default 0.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "offset",
            "optional": true,
            "description": "<p>Optional offset specifies the maximum number of rows to return.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "count",
            "defaultValue": "1",
            "optional": true,
            "description": "<p>Optional count with default 1. Returns the count of areas.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "field": "id",
            "optional": false,
            "description": "<p>ID of the Area.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "name",
            "optional": false,
            "description": "<p>Name of the Area.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "category",
            "optional": false,
            "description": "<p>Category of the Area.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "description",
            "optional": false,
            "description": "<p>Description of the Area.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "bounds",
            "optional": false,
            "description": "<p>Bounds of the Area.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "parentId",
            "optional": false,
            "description": "<p>Parent ID of the Area.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "lft",
            "optional": false,
            "description": "<p>Lft of the Area.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "rght",
            "optional": false,
            "description": "<p>Rght of the Area.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "scope",
            "optional": false,
            "description": "<p>Scope of the Area.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "field": "editable",
            "optional": false,
            "description": "<p>Editable Flag of the Area.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "field": "visibility",
            "optional": false,
            "description": "<p>Visibility Flag of the Area.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "field": "status",
            "optional": false,
            "description": "<p>Status Flag of the Area.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "field": "active",
            "optional": false,
            "description": "<p>Active Flag of the Area.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "field": "created",
            "optional": false,
            "description": "<p>Creation date of the Area.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "field": "modified",
            "optional": false,
            "description": "<p>Modification date of the Area.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "createdBy",
            "optional": false,
            "description": "<p>ID of the User who created the Area.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "modifiedBy",
            "optional": false,
            "description": "<p>ID of the User who modified the Area.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "field": "InvalidAccessToken",
            "optional": false,
            "description": "<p>The access token is invalid.</p>"
          },
          {
            "group": "Error 4xx",
            "field": "MissingAuthenticationCredentials",
            "optional": false,
            "description": "<p>The authentication credentials are missing.</p>"
          },
          {
            "group": "Error 4xx",
            "field": "WrongFieldsReturned",
            "optional": false,
            "description": "<p>The requested fields are not available.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "   HTTP/1.1 401 Unauthorized\n   {\n     \"error\": \"InvalidAccessToken\"\n   }\n"
        },
        {
          "title": "Error-Response:",
          "content": "   HTTP/1.1 401 Unauthorized\n   {\n     \"error\": \"MissingAuthenticationCredentials\"\n   }\n"
        },
        {
          "title": "Error-Response:",
          "content": "   HTTP/1.1 401 Unauthorized\n   {\n     \"error\": \"WrongFieldsReturned\"\n   }\n"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "comparison-api/App/Modules/Backend/Controllers/AreasController.php"
  },
  {
    "type": "post",
    "url": "/areas/search/:id",
    "title": "POST /areas/search/:id",
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -H \"X-COMPARE-REST-API-KEY: 1234567890\" \n    -i -X POST\"http://apibeta.compargo.com/v1/areas/56c4b6c2-1d54-11e4-b32d-eff91066cccf/?countryCode=ph&language=en\"\n"
      }
    ],
    "description": "<p>Read data of an Area</p>",
    "name": "SearchOne",
    "group": "Areas",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "field": "X-COMPARE-REST-API-KEY",
            "optional": false,
            "description": "<p>Areas unique access-key.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "field": "language",
            "optional": false,
            "description": "<p>Mandatory Language.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "countryCode",
            "optional": false,
            "description": "<p>Mandatory Country Code.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "id",
            "optional": false,
            "description": "<p>Mandatory Area unique ID.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "field": "id",
            "optional": false,
            "description": "<p>ID of the Area.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "name",
            "optional": false,
            "description": "<p>Name of the Area.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "category",
            "optional": false,
            "description": "<p>Category of the Area.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "description",
            "optional": false,
            "description": "<p>Description of the Area.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "bounds",
            "optional": false,
            "description": "<p>Bounds of the Area.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "parentId",
            "optional": false,
            "description": "<p>Parent ID of the Area.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "lft",
            "optional": false,
            "description": "<p>Lft of the Area.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "rght",
            "optional": false,
            "description": "<p>Rght of the Area.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "scope",
            "optional": false,
            "description": "<p>Scope of the Area.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "field": "editable",
            "optional": false,
            "description": "<p>Editable Flag of the Area.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "field": "visibility",
            "optional": false,
            "description": "<p>Visibility Flag of the Area.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "field": "status",
            "optional": false,
            "description": "<p>Status Flag of the Area.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "field": "active",
            "optional": false,
            "description": "<p>Active Flag of the Area.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "field": "created",
            "optional": false,
            "description": "<p>Creation date of the Area.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "field": "modified",
            "optional": false,
            "description": "<p>Modification date of the Area.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "createdBy",
            "optional": false,
            "description": "<p>ID of the User who created the Area.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "modifiedBy",
            "optional": false,
            "description": "<p>ID of the User who modified the Area.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "   HTTP/1.1 200 OK\n   {\n     \"id\": \"337b6f34-2282-11e4-b700-0b28aad944c8\",\n     \"name\": \"NCR\",\n     \"category\": \"Region\",\n     \"description\": \"National Capital Region (NCR) of the Philippines, is the seat of government and the most populous region and metropolitan area of the country which is composed of the City of Manila and the cities of Caloocan, Las Pi�as, Makati, Malabon, Mandaluyong, Marikina, Muntinlupa, Navotas, Para�aque, Pasay, Pasig, Quezon City, San Juan, Taguig, and Valenzuela, as well as the Municipality of Pateros.\",\n     \"language\": \"en\",\n     \"bounds\": \"\",\n     \"parentId\": \"\",\n     \"lft\": \"\",\n     \"rght\": \"\",\n     \"scope\": \"\",\n     \"status\": \"1\",\n     \"active\": \"1\",\n     \"created\": \"2014-08-13 02:38:53\",\n     \"modified\": \"2014-08-13 02:42:55\",\n     \"createdBy\": \"a8838d12-1dcc-11e4-b32d-eff91066cccf\",\n     \"modifiedBy\": \"a8838d12-1dcc-11e4-b32d-eff91066cccf\"\n   }\n"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "field": "AreaNotFound",
            "optional": false,
            "description": "<p>The id of the Area was not found.</p>"
          },
          {
            "group": "Error 4xx",
            "field": "InvalidAccessToken",
            "optional": false,
            "description": "<p>The access token is invalid.</p>"
          },
          {
            "group": "Error 4xx",
            "field": "MissingAuthenticationCredentials",
            "optional": false,
            "description": "<p>The authentication credentials are missing.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "   HTTP/1.1 404 Not Found\n   {\n     \"error\": \"AreaNotFound\"\n   }\n"
        },
        {
          "title": "Error-Response:",
          "content": "   HTTP/1.1 401 Unauthorized\n   {\n     \"error\": \"InvalidAccessToken\"\n   }\n"
        },
        {
          "title": "Error-Response:",
          "content": "   HTTP/1.1 401 Unauthorized\n   {\n     \"error\": \"MissingAuthenticationCredentials\"\n   }\n"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "comparison-api/App/Modules/Backend/Controllers/AreasController.php"
  },
  {
    "type": "put",
    "url": "/areas/:id",
    "title": "PUT /areas/:id",
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i -X PUT \"http://apibeta.compargo.com/v1/areas/4b639068-319b-11e4-988c-7d9574853fac/?countryCode=ph&language=en\"\n    -H \"X-COMPARE-REST-API-KEY: 1234567890\"\n    -d \"name=Western%20Visayas&status=1\"\n"
      }
    ],
    "description": "<p>Update an Area</p>",
    "name": "Update",
    "group": "Areas",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "field": "X-COMPARE-REST-API-KEY",
            "optional": false,
            "description": "<p>Areas unique access-key.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "field": "language",
            "optional": false,
            "description": "<p>Mandatory Language.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "countryCode",
            "optional": false,
            "description": "<p>Mandatory Country Code.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "id",
            "optional": false,
            "description": "<p>Mandatory Area Unique ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "name",
            "optional": false,
            "description": "<p>Mandatory Name of the Area.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "category",
            "optional": false,
            "description": "<p>Mandatory Category of the Area.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "description",
            "optional": true,
            "description": "<p>Optional Description of the Area.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "bounds",
            "optional": true,
            "description": "<p>Optional Bounds of the Area.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "parentId",
            "optional": true,
            "description": "<p>Optional Parent ID of the Area.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "lft",
            "optional": true,
            "description": "<p>Optional Lft of the Area.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "rght",
            "optional": true,
            "description": "<p>Optional Rght of the Area.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "field": "scope",
            "defaultValue": "0",
            "optional": true,
            "description": "<p>Optional Scope of the Area.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "field": "editable",
            "defaultValue": "0",
            "optional": true,
            "description": "<p>OptionalEditable Flag of the Area.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "field": "visibility",
            "defaultValue": "0",
            "optional": true,
            "description": "<p>Optional Visibility Flag of the Area.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "field": "status",
            "defaultValue": "0",
            "optional": true,
            "description": "<p>Optional Status Flag of the Area.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "   HTTP/1.1 200 OK\n   {\n     \"id\": \"574a5eb2-1d59-11e4-b32d-eff91066cccf\"\n   }\n"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "field": "BadInputParameter",
            "optional": false,
            "description": "<p>The request cannot be fulfilled due to bad syntax.</p>"
          },
          {
            "group": "Error 4xx",
            "field": "InvalidAccessToken",
            "optional": false,
            "description": "<p>The access token is invalid.</p>"
          },
          {
            "group": "Error 4xx",
            "field": "MissingAuthenticationCredentials",
            "optional": false,
            "description": "<p>The authentication credentials are missing.</p>"
          },
          {
            "group": "Error 4xx",
            "field": "AreaNotFound",
            "optional": false,
            "description": "<p>The id of the Area was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "   HTTP/1.1 400\n   {\n     \"error\": \"BadInputParameter\"\n   }\n"
        },
        {
          "title": "Error-Response:",
          "content": "   HTTP/1.1 401 Unauthorized\n   {\n     \"error\": \"InvalidAccessToken\"\n   }\n"
        },
        {
          "title": "Error-Response:",
          "content": "   HTTP/1.1 401 Unauthorized\n   {\n     \"error\": \"MissingAuthenticationCredentials\"\n   }\n"
        },
        {
          "title": "Error-Response:",
          "content": "   HTTP/1.1 404 Not Found\n   {\n     \"error\": \"AreaNotFound\"\n   }\n"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "comparison-api/App/Modules/Backend/Controllers/AreasController.php"
  },
  {
    "type": "delete",
    "url": "/brands/:id",
    "title": "DELETE /brands/:id",
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i -X DELETE \"http://apibeta.compargo.com/v1/brands/dec7a1fe-370a-11e4-b18a-fe7344fb1ea4/?countryCode=ph&language=en\"\n    -H \"X-COMPARE-REST-API-KEY: 1234567890\"\n"
      }
    ],
    "description": "<p>Delete a Brand</p>",
    "name": "Delete",
    "group": "Brands",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "field": "X-COMPARE-REST-API-KEY",
            "optional": false,
            "description": "<p>Brand unique access-key.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "field": "language",
            "optional": false,
            "description": "<p>Mandatory Language.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "countryCode",
            "optional": false,
            "description": "<p>Mandatory Country Code.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "id",
            "optional": false,
            "description": "<p>Mandatory Brand Unique ID.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "field": "id",
            "optional": false,
            "description": "<p>The ID of Brand.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "   HTTP/1.1 200 OK\n   {\n     \"id\": \"574a5eb2-1d59-11e4-b32d-eff91066cccf\"\n   }\n"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "field": "InvalidAccessToken",
            "optional": false,
            "description": "<p>The access token is invalid.</p>"
          },
          {
            "group": "Error 4xx",
            "field": "MissingAuthenticationCredentials",
            "optional": false,
            "description": "<p>The authentication credentials are missing.</p>"
          },
          {
            "group": "Error 4xx",
            "field": "BrandNotFound",
            "optional": false,
            "description": "<p>The id of the Brand was not found.</p>"
          },
          {
            "group": "Error 4xx",
            "field": "RouteNotFound",
            "optional": false,
            "description": "<p>That route was not found on the server.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "   HTTP/1.1 401 Unauthorized\n   {\n     \"error\": \"InvalidAccessToken\"\n   }\n"
        },
        {
          "title": "Error-Response:",
          "content": "   HTTP/1.1 401 Unauthorized\n   {\n     \"error\": \"MissingAuthenticationCredentials\"\n   }\n"
        },
        {
          "title": "Error-Response:",
          "content": "   HTTP/1.1 404 Not Found\n   {\n     \"error\": \"BrandNotFound\"\n   }\n"
        },
        {
          "title": "Error-Response:",
          "content": "   HTTP/1.1 404 \n   {\n     \"error\": \"RouteNotFound\"\n   }\n"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "comparison-api/App/Modules/Backend/Controllers/BrandsController.php"
  },
  {
    "type": "get",
    "url": "/brands",
    "title": "GET /brands",
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -H \"X-COMPARE-REST-API-KEY: 1234567890\" \n    -i \"http://apibeta.compargo.com/v1/brands/?countryCode=ph&language=en&query={\"status\":\"1\"}&fields=id,companyId,name,alias,logo,link,description,language,revenueValue,created,modified,createdBy,modifiedBy&sort=-id,companyId,name&limit=10\"\n"
      }
    ],
    "description": "<p>Read data of all Brands</p>",
    "name": "Get",
    "group": "Brands",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "field": "X-COMPARE-REST-API-KEY",
            "optional": false,
            "description": "<p>Brand unique access-key.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "field": "language",
            "optional": false,
            "description": "<p>Mandatory Language.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "countryCode",
            "optional": false,
            "description": "<p>Mandatory Country Code.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "query",
            "optional": true,
            "description": "<p>Optional query conditions that rows must satisfy to be selected.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "fields",
            "optional": true,
            "description": "<p>Optional field indicates a column that you want to retrieve.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "sort",
            "optional": true,
            "description": "<p>Optional sort orders columns selected for output.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "limit",
            "defaultValue": "0",
            "optional": true,
            "description": "<p>Optional limit used to constrain the number of rows returned.                                                     When offset parameter is present, the limit specifies the offset                                                  of the first row to return. When count parameter exists, the limit                                                   identifies all the rows returned and with default 0.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "offset",
            "optional": true,
            "description": "<p>Optional offset specifies the maximum number of rows to return.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "count",
            "defaultValue": "1",
            "optional": true,
            "description": "<p>Optional count with default 1. Returns the count of brands.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "field": "id",
            "optional": false,
            "description": "<p>ID of the Brand.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "companyId",
            "optional": false,
            "description": "<p>Company ID of the Brand.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "name",
            "optional": false,
            "description": "<p>Name of the Brand.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "alias",
            "optional": false,
            "description": "<p>Alias of the Brand.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "logo",
            "optional": false,
            "description": "<p>Logo of the Brand.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "link",
            "optional": false,
            "description": "<p>Link of the Brand.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "description",
            "optional": false,
            "description": "<p>Description of the Brand.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "language",
            "optional": false,
            "description": "<p>Language of the Brand.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "revenueValue",
            "optional": false,
            "description": "<p>Language of the Brand.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "field": "status",
            "optional": false,
            "description": "<p>Status Flag of the Brand.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "field": "active",
            "optional": false,
            "description": "<p>Active Flag of the Brand.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "field": "created",
            "optional": false,
            "description": "<p>Creation date of the Brand.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "field": "modified",
            "optional": false,
            "description": "<p>Modification date of the Brand.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "createdBy",
            "optional": false,
            "description": "<p>ID of the User who created the Brand.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "modifiedBy",
            "optional": false,
            "description": "<p>ID of the User who modified the Brand.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "   HTTP/1.1 200 OK\n   {\n     \"id\": \"1ded6cc0-21de-11e4-b700-0b28aad944c8\",\n     \"companyId\": \"10f0c896-2134-11e4-bb06-0a68ec684316\",\n     \"name\": \"BPI\",\n     \"alias\": \"bpi\",\n     \"logo\": \"ph/companies/bpi_1.jpg\",\n     \"link\": \"bpicards.com\",\n     \"description\": \"BPI\",\n     \"language\": \"en\",\n     \"revenueValue\": \"5.00\",\n     \"status\": \"1\",\n     \"active\": \"1\",\n     \"created\": \"2014-08-12 07:04:19\",\n     \"modified\": \"2014-08-12 14:10:43\",\n     \"createdBy\": \"a8838d12-1dcc-11e4-b32d-eff91066cccf\",\n     \"modifiedBy\": \"a8838d12-1dcc-11e4-b32d-eff91066cccf\"\n   },\n   {\n    \"id\": \"bc75db6e-2dde-11e4-988c-7d9574853fac\",\n    \"companyId\": \"ce0f98c6-2ddc-11e4-988c-7d9574853fac\",\n    \"name\": \"Bank of Commerce\",\n    \"alias\": \"bank-of-commerce\",\n    \"logo\": null,\n    \"link\": null,\n    \"description\": null,\n    \"language\": \"en\",\n    \"revenueValue\": null,\n    \"status\": \"1\",\n    \"active\": \"1\",\n    \"created\": \"2014-08-27 13:38:59\",\n    \"modified\": \"0000-00-00 00:00:00\",\n    \"createdBy\": \"a8838d12-1dcc-11e4-b32d-eff91066cccf\",\n    \"modifiedBy\": \"a8838d12-1dcc-11e4-b32d-eff91066cccf\"\n   }\n"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "field": "InvalidAccessToken",
            "optional": false,
            "description": "<p>The access token is invalid.</p>"
          },
          {
            "group": "Error 4xx",
            "field": "MissingAuthenticationCredentials",
            "optional": false,
            "description": "<p>The authentication credentials are missing.</p>"
          },
          {
            "group": "Error 4xx",
            "field": "WrongFieldsReturned",
            "optional": false,
            "description": "<p>The requested fields are not available.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "   HTTP/1.1 401 Unauthorized\n   {\n     \"error\": \"InvalidAccessToken\"\n   }\n"
        },
        {
          "title": "Error-Response:",
          "content": "   HTTP/1.1 401 Unauthorized\n   {\n     \"error\": \"MissingAuthenticationCredentials\"\n   }\n"
        },
        {
          "title": "Error-Response:",
          "content": "   HTTP/1.1 401 Unauthorized\n   {\n     \"error\": \"WrongFieldsReturned\"\n   }\n"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "comparison-api/App/Modules/Backend/Controllers/BrandsController.php"
  },
  {
    "type": "get",
    "url": "/brands/:id",
    "title": "GET /brands/:id",
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -H \"X-COMPARE-REST-API-KEY: 1234567890\" \n    -i \"http://apibeta.compargo.com/v1/brands/07f44e24-1d43-11e4-b32d-eff91066cccf/?countryCode=ph&language=en\"\n"
      }
    ],
    "description": "<p>Read data of a Brand</p>",
    "name": "GetOne",
    "group": "Brands",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "field": "X-COMPARE-REST-API-KEY",
            "optional": false,
            "description": "<p>Brands unique access-key.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "field": "language",
            "optional": false,
            "description": "<p>Mandatory Language.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "countryCode",
            "optional": false,
            "description": "<p>Mandatory Country Code.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "id",
            "optional": false,
            "description": "<p>Mandatory Brands unique ID.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "field": "id",
            "optional": false,
            "description": "<p>ID of the Brand.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "name",
            "optional": false,
            "description": "<p>Name of the Brand.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "alias",
            "optional": false,
            "description": "<p>Alias of the Brand.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "description",
            "optional": false,
            "description": "<p>Description of the Brand.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "field": "status",
            "optional": false,
            "description": "<p>Status of the Brand.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "field": "active",
            "optional": false,
            "description": "<p>Flag of the Brand.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "field": "created",
            "optional": false,
            "description": "<p>Creation date of the Brand.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "field": "modified",
            "optional": false,
            "description": "<p>Modification date of the Brand.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "createdBy",
            "optional": false,
            "description": "<p>ID of the User who created the Brand.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "modifiedBy",
            "optional": false,
            "description": "<p>ID of the User who modified the Brand.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "   HTTP/1.1 200 OK\n   {\n    \"id\": \"bc75db6e-2dde-11e4-988c-7d9574853fac\",\n    \"companyId\": \"ce0f98c6-2ddc-11e4-988c-7d9574853fac\",\n    \"name\": \"Bank of Commerce\",\n    \"alias\": \"bank-of-commerce\",\n    \"logo\": null,\n    \"link\": null,\n    \"description\": null,\n    \"language\": \"en\",\n    \"revenueValue\": null,\n    \"status\": \"1\",\n    \"active\": \"1\",\n    \"created\": \"2014-08-27 13:38:59\",\n    \"modified\": \"0000-00-00 00:00:00\",\n    \"createdBy\": \"a8838d12-1dcc-11e4-b32d-eff91066cccf\",\n    \"modifiedBy\": \"a8838d12-1dcc-11e4-b32d-eff91066cccf\"\n   }\n"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "field": "BrandNotFound",
            "optional": false,
            "description": "<p>The id of the Brand was not found.</p>"
          },
          {
            "group": "Error 4xx",
            "field": "InvalidAccessToken",
            "optional": false,
            "description": "<p>The access token is invalid.</p>"
          },
          {
            "group": "Error 4xx",
            "field": "MissingAuthenticationCredentials",
            "optional": false,
            "description": "<p>The authentication credentials are missing.</p>"
          },
          {
            "group": "Error 4xx",
            "field": "RouteNotFound",
            "optional": false,
            "description": "<p>That route was not found on the server.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "   HTTP/1.1 404 Not Found\n   {\n     \"error\": \"BrandNotFound\"\n   }\n"
        },
        {
          "title": "Error-Response:",
          "content": "   HTTP/1.1 401 Unauthorized\n   {\n     \"error\": \"InvalidAccessToken\"\n   }\n"
        },
        {
          "title": "Error-Response:",
          "content": "   HTTP/1.1 401 Unauthorized\n   {\n     \"error\": \"MissingAuthenticationCredentials\"\n   }\n"
        },
        {
          "title": "Error-Response:",
          "content": "   HTTP/1.1 404 \n   {\n     \"error\": \"RouteNotFound\"\n   }\n"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "comparison-api/App/Modules/Backend/Controllers/BrandsController.php"
  },
  {
    "type": "post",
    "url": "/brands",
    "title": "POST /brands",
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i -X POST \"http://apibeta.compargo.com/v1/brands/?countryCode=ph&language=en\"\n    -H \"X-COMPARE-REST-API-KEY: 1234567890\"\n    -d \"companyId=4c8367bc-319a-11e4-988c-7d9574853fac&name=BDO&language=en&status=1\"\n"
      }
    ],
    "description": "<p>Create a new Brand</p>",
    "name": "Post",
    "group": "Brands",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "field": "X-COMPARE-REST-API-KEY",
            "optional": false,
            "description": "<p>Brand unique access-key.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "field": "language",
            "optional": false,
            "description": "<p>Mandatory Language.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "countryCode",
            "optional": false,
            "description": "<p>Mandatory Country code.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "name",
            "optional": false,
            "description": "<p>Mandatory Name of the Brand.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "alias",
            "optional": false,
            "description": "<p>Mandatory Alias of the Brand.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "logo",
            "optional": true,
            "description": "<p>Optional Logo of the Brand.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "link",
            "optional": true,
            "description": "<p>Optional Link of the Brand.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "description",
            "optional": true,
            "description": "<p>Optional Description of the Brand.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "revenueValue",
            "optional": true,
            "description": "<p>Optional Revenue Value of the Brand.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "status",
            "defaultValue": "0",
            "optional": true,
            "description": "<p>Optional Status of the Brand.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "createdBy",
            "optional": true,
            "description": "<p>Optional ID of the User who created the Vertical.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "modifiedBy",
            "optional": true,
            "description": "<p>Optional ID of the User who modified the Vertical.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "field": "id",
            "optional": false,
            "description": "<p>The new Brand-ID.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "   HTTP/1.1 200 OK\n   {\n     \"id\": \"dec7a1fe-370a-11e4-b18a-fe7344fb1ea4\"\n   }\n"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "field": "BadInputParameter",
            "optional": false,
            "description": "<p>The request cannot be fulfilled due to bad syntax.</p>"
          },
          {
            "group": "Error 4xx",
            "field": "InvalidAccessToken",
            "optional": false,
            "description": "<p>The access token is invalid.</p>"
          },
          {
            "group": "Error 4xx",
            "field": "MissingAuthenticationCredentials",
            "optional": false,
            "description": "<p>The authentication credentials are missing.</p>"
          },
          {
            "group": "Error 4xx",
            "field": "RouteNotFound",
            "optional": false,
            "description": "<p>That route was not found on the server.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "   HTTP/1.1 400\n   {\n     \"error\": \"BadInputParameter\"\n   }\n"
        },
        {
          "title": "Error-Response:",
          "content": "   HTTP/1.1 401 Unauthorized\n   {\n     \"error\": \"InvalidAccessToken\"\n   }\n"
        },
        {
          "title": "Error-Response:",
          "content": "   HTTP/1.1 401 Unauthorized\n   {\n     \"error\": \"MissingAuthenticationCredentials\"\n   }\n"
        },
        {
          "title": "Error-Response:",
          "content": "   HTTP/1.1 404 \n   {\n     \"error\": \"RouteNotFound\"\n   }\n"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "comparison-api/App/Modules/Backend/Controllers/BrandsController.php"
  },
  {
    "type": "put",
    "url": "/brands/:id",
    "title": "PUT /brands/:id",
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i -X PUT \"http://apibeta.compargo.com/v1/brands/1c28fefa-319b-11e4-988c-7d9574853fac/?countryCode=ph&language=en\"\n    -H \"X-COMPARE-REST-API-KEY: 1234567890\"\n    -d \"name=PNB&link=http://www.pnb.com.ph&logo=ph/brands/10_pnb.gif\"\n"
      }
    ],
    "description": "<p>Update a Brand</p>",
    "name": "Put",
    "group": "Brands",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "field": "X-COMPARE-REST-API-KEY",
            "optional": false,
            "description": "<p>Vertical unique access-key.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "field": "language",
            "optional": false,
            "description": "<p>Mandatory Language.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "countryCode",
            "optional": false,
            "description": "<p>Mandatory Country Code.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "id",
            "optional": false,
            "description": "<p>Mandatory Brand Unique ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "companyId",
            "optional": false,
            "description": "<p>Mandatory Company ID of the Brand.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "name",
            "optional": false,
            "description": "<p>Mandatory Name of the Brand.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "alias",
            "optional": true,
            "description": "<p>Optional Alias of the Brand.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "logo",
            "optional": true,
            "description": "<p>Optional Logo of the Brand.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "link",
            "optional": true,
            "description": "<p>Optional Link of the Brand.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "description",
            "optional": true,
            "description": "<p>Optional Description of the Brand.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "revenueValue",
            "optional": true,
            "description": "<p>Optional Revenue Value of the Brand.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "status",
            "optional": true,
            "description": "<p>Optional Status of the Brand.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "createdBy",
            "optional": true,
            "description": "<p>Optional ID of the User who created the Vertical.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "modifiedBy",
            "optional": true,
            "description": "<p>Optional ID of the User who modified the Vertical.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "   HTTP/1.1 200 OK\n   {\n     \"id\": \"07f44e24-1d43-11e4-b32d-eff91066cccf\"\n   }\n"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "field": "BadInputParameter",
            "optional": false,
            "description": "<p>The request cannot be fulfilled due to bad syntax.</p>"
          },
          {
            "group": "Error 4xx",
            "field": "InvalidAccessToken",
            "optional": false,
            "description": "<p>The access token is invalid.</p>"
          },
          {
            "group": "Error 4xx",
            "field": "MissingAuthenticationCredentials",
            "optional": false,
            "description": "<p>The authentication credentials are missing.</p>"
          },
          {
            "group": "Error 4xx",
            "field": "BrandNotFound",
            "optional": false,
            "description": "<p>The id of the Brand was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "   HTTP/1.1 400\n   {\n     \"error\": \"BadInputParameter\"\n   }\n"
        },
        {
          "title": "Error-Response:",
          "content": "   HTTP/1.1 401 Unauthorized\n   {\n     \"error\": \"InvalidAccessToken\"\n   }\n"
        },
        {
          "title": "Error-Response:",
          "content": "   HTTP/1.1 401 Unauthorized\n   {\n     \"error\": \"MissingAuthenticationCredentials\"\n   }\n"
        },
        {
          "title": "Error-Response:",
          "content": "   HTTP/1.1 404 Not Found\n   {\n     \"error\": \"BrandNotFound\"\n   }\n"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "comparison-api/App/Modules/Backend/Controllers/BrandsController.php"
  },
  {
    "type": "post",
    "url": "/brands",
    "title": "POST /brands/search",
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -H \"X-COMPARE-REST-API-KEY: 1234567890\" \n    -i \"http://apibeta.compargo.com/v1/brands/search/?countryCode=ph&language=en\"\n    -d \"query={\"status\":\"1\"}&\n        fields=id,companyId,name,alias,logo,link,description,language,revenueValue,created,modified,createdBy,modifiedBy&\n        sort=-id,-companyId,name&\n        limit=10\"\n"
      }
    ],
    "description": "<p>Read data of all Brands</p>",
    "name": "Search",
    "group": "Brands",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "field": "X-COMPARE-REST-API-KEY",
            "optional": false,
            "description": "<p>Brand unique access-key.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "field": "language",
            "optional": false,
            "description": "<p>Mandatory Language.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "countryCode",
            "optional": false,
            "description": "<p>Mandatory Country Code.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "query",
            "optional": true,
            "description": "<p>Optional query conditions that rows must satisfy to be selected.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "fields",
            "optional": true,
            "description": "<p>Optional field indicates a column that you want to retrieve.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "sort",
            "optional": true,
            "description": "<p>Optional sort orders columns selected for output.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "limit",
            "defaultValue": "0",
            "optional": true,
            "description": "<p>Optional limit used to constrain the number of rows returned.                                                     When offset parameter is present, the limit specifies the offset                                                  of the first row to return. When count parameter exists, the limit                                                   identifies all the rows returned and with default 0.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "offset",
            "optional": true,
            "description": "<p>Optional offset specifies the maximum number of rows to return.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "count",
            "defaultValue": "1",
            "optional": true,
            "description": "<p>Optional count with default 1. Returns the count of brands.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "field": "id",
            "optional": false,
            "description": "<p>ID of the Brand.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "companyId",
            "optional": false,
            "description": "<p>Company ID of the Brand.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "name",
            "optional": false,
            "description": "<p>Name of the Brand.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "alias",
            "optional": false,
            "description": "<p>Alias of the Brand.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "logo",
            "optional": false,
            "description": "<p>Logo of the Brand.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "link",
            "optional": false,
            "description": "<p>Link of the Brand.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "description",
            "optional": false,
            "description": "<p>Description of the Brand.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "language",
            "optional": false,
            "description": "<p>Language of the Brand.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "revenueValue",
            "optional": false,
            "description": "<p>Language of the Brand.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "field": "status",
            "optional": false,
            "description": "<p>Status Flag of the Brand.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "field": "active",
            "optional": false,
            "description": "<p>Active Flag of the Brand.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "field": "created",
            "optional": false,
            "description": "<p>Creation date of the Brand.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "field": "modified",
            "optional": false,
            "description": "<p>Modification date of the Brand.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "createdBy",
            "optional": false,
            "description": "<p>ID of the User who created the Brand.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "modifiedBy",
            "optional": false,
            "description": "<p>ID of the User who modified the Brand.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "   HTTP/1.1 200 OK\n   {\n     \"id\": \"1ded6cc0-21de-11e4-b700-0b28aad944c8\",\n     \"companyId\": \"10f0c896-2134-11e4-bb06-0a68ec684316\",\n     \"name\": \"BPI\",\n     \"alias\": \"bpi\",\n     \"logo\": \"ph/companies/bpi_1.jpg\",\n     \"link\": \"bpicards.com\",\n     \"description\": \"BPI\",\n     \"language\": \"en\",\n     \"revenueValue\": \"5.00\",\n     \"status\": \"1\",\n     \"active\": \"1\",\n     \"created\": \"2014-08-12 07:04:19\",\n     \"modified\": \"2014-08-12 14:10:43\",\n     \"createdBy\": \"a8838d12-1dcc-11e4-b32d-eff91066cccf\",\n     \"modifiedBy\": \"a8838d12-1dcc-11e4-b32d-eff91066cccf\"\n   },\n   {\n    \"id\": \"bc75db6e-2dde-11e4-988c-7d9574853fac\",\n    \"companyId\": \"ce0f98c6-2ddc-11e4-988c-7d9574853fac\",\n    \"name\": \"Bank of Commerce\",\n    \"alias\": \"bank-of-commerce\",\n    \"logo\": null,\n    \"link\": null,\n    \"description\": null,\n    \"language\": \"en\",\n    \"revenueValue\": null,\n    \"status\": \"1\",\n    \"active\": \"1\",\n    \"created\": \"2014-08-27 13:38:59\",\n    \"modified\": \"0000-00-00 00:00:00\",\n    \"createdBy\": \"a8838d12-1dcc-11e4-b32d-eff91066cccf\",\n    \"modifiedBy\": \"a8838d12-1dcc-11e4-b32d-eff91066cccf\"\n   }\n"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "field": "InvalidAccessToken",
            "optional": false,
            "description": "<p>The access token is invalid.</p>"
          },
          {
            "group": "Error 4xx",
            "field": "MissingAuthenticationCredentials",
            "optional": false,
            "description": "<p>The authentication credentials are missing.</p>"
          },
          {
            "group": "Error 4xx",
            "field": "WrongFieldsReturned",
            "optional": false,
            "description": "<p>The requested fields are not available.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "   HTTP/1.1 401 Unauthorized\n   {\n     \"error\": \"InvalidAccessToken\"\n   }\n"
        },
        {
          "title": "Error-Response:",
          "content": "   HTTP/1.1 401 Unauthorized\n   {\n     \"error\": \"MissingAuthenticationCredentials\"\n   }\n"
        },
        {
          "title": "Error-Response:",
          "content": "   HTTP/1.1 401 Unauthorized\n   {\n     \"error\": \"WrongFieldsReturned\"\n   }\n"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "comparison-api/App/Modules/Backend/Controllers/BrandsController.php"
  },
  {
    "type": "post",
    "url": "/brands/search/:id",
    "title": "POST /brands/search/:id",
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -H \"X-COMPARE-REST-API-KEY: 1234567890\" \n    -i \"http://apibeta.compargo.com/v1/brands/search/07f44e24-1d43-11e4-b32d-eff91066cccf/?countryCode=ph&language=en\"\n"
      }
    ],
    "description": "<p>Read data of a Brand</p>",
    "name": "SearchOne",
    "group": "Brands",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "field": "X-COMPARE-REST-API-KEY",
            "optional": false,
            "description": "<p>Brands unique access-key.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "field": "language",
            "optional": false,
            "description": "<p>Mandatory Language.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "countryCode",
            "optional": false,
            "description": "<p>Mandatory Country Code.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "id",
            "optional": false,
            "description": "<p>Mandatory Brands unique ID.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "field": "id",
            "optional": false,
            "description": "<p>ID of the Brand.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "name",
            "optional": false,
            "description": "<p>Name of the Brand.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "alias",
            "optional": false,
            "description": "<p>Alias of the Brand.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "description",
            "optional": false,
            "description": "<p>Description of the Brand.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "field": "status",
            "optional": false,
            "description": "<p>Status of the Brand.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "field": "active",
            "optional": false,
            "description": "<p>Flag of the Brand.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "field": "created",
            "optional": false,
            "description": "<p>Creation date of the Brand.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "field": "modified",
            "optional": false,
            "description": "<p>Modification date of the Brand.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "createdBy",
            "optional": false,
            "description": "<p>ID of the User who created the Brand.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "modifiedBy",
            "optional": false,
            "description": "<p>ID of the User who modified the Brand.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "   HTTP/1.1 200 OK\n   {\n    \"id\": \"bc75db6e-2dde-11e4-988c-7d9574853fac\",\n    \"companyId\": \"ce0f98c6-2ddc-11e4-988c-7d9574853fac\",\n    \"name\": \"Bank of Commerce\",\n    \"alias\": \"bank-of-commerce\",\n    \"logo\": null,\n    \"link\": null,\n    \"description\": null,\n    \"language\": \"en\",\n    \"revenueValue\": null,\n    \"status\": \"1\",\n    \"active\": \"1\",\n    \"created\": \"2014-08-27 13:38:59\",\n    \"modified\": \"0000-00-00 00:00:00\",\n    \"createdBy\": \"a8838d12-1dcc-11e4-b32d-eff91066cccf\",\n    \"modifiedBy\": \"a8838d12-1dcc-11e4-b32d-eff91066cccf\"\n   }\n"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "field": "BrandNotFound",
            "optional": false,
            "description": "<p>The id of the Brand was not found.</p>"
          },
          {
            "group": "Error 4xx",
            "field": "InvalidAccessToken",
            "optional": false,
            "description": "<p>The access token is invalid.</p>"
          },
          {
            "group": "Error 4xx",
            "field": "MissingAuthenticationCredentials",
            "optional": false,
            "description": "<p>The authentication credentials are missing.</p>"
          },
          {
            "group": "Error 4xx",
            "field": "RouteNotFound",
            "optional": false,
            "description": "<p>That route was not found on the server.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "   HTTP/1.1 404 Not Found\n   {\n     \"error\": \"BrandNotFound\"\n   }\n"
        },
        {
          "title": "Error-Response:",
          "content": "   HTTP/1.1 401 Unauthorized\n   {\n     \"error\": \"InvalidAccessToken\"\n   }\n"
        },
        {
          "title": "Error-Response:",
          "content": "   HTTP/1.1 401 Unauthorized\n   {\n     \"error\": \"MissingAuthenticationCredentials\"\n   }\n"
        },
        {
          "title": "Error-Response:",
          "content": "   HTTP/1.1 404 \n   {\n     \"error\": \"RouteNotFound\"\n   }\n"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "comparison-api/App/Modules/Backend/Controllers/BrandsController.php"
  },
  {
    "type": "delete",
    "url": "/channels/:id",
    "title": "DELETE /channels/:id",
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i -X DELETE \"http://apibeta.compargo.com/v1/channels/96b3d052-3716-11e4-b18a-fe7344fb1ea4\t\n    -H \"X-COMPARE-REST-API-KEY: 1234567890\"\n"
      }
    ],
    "description": "<p>Delete a Channel</p>",
    "name": "Delete",
    "group": "Channels",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "field": "X-COMPARE-REST-API-KEY",
            "optional": false,
            "description": "<p>Channels unique access-key.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "field": "language",
            "optional": false,
            "description": "<p>Mandatory Language.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "countryCode",
            "optional": false,
            "description": "<p>Mandatory Country Code.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "id",
            "optional": false,
            "description": "<p>Mandatory Channel Unique ID.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "field": "id",
            "optional": false,
            "description": "<p>The ID of Channel.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "   HTTP/1.1 200 OK\n   {\n     \"id\": \"96b3d052-3716-11e4-b18a-fe7344fb1ea4\"\n   }\n"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "field": "InvalidAccessToken",
            "optional": false,
            "description": "<p>The access token is invalid.</p>"
          },
          {
            "group": "Error 4xx",
            "field": "MissingAuthenticationCredentials",
            "optional": false,
            "description": "<p>The authentication credentials are missing.</p>"
          },
          {
            "group": "Error 4xx",
            "field": "ChannelNotFound",
            "optional": false,
            "description": "<p>The id of the Channel was not found.</p>"
          },
          {
            "group": "Error 4xx",
            "field": "RouteNotFound",
            "optional": false,
            "description": "<p>That route was not found on the server.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "   HTTP/1.1 401 Unauthorized\n   {\n     \"error\": \"InvalidAccessToken\"\n   }\n"
        },
        {
          "title": "Error-Response:",
          "content": "   HTTP/1.1 401 Unauthorized\n   {\n     \"error\": \"MissingAuthenticationCredentials\"\n   }\n"
        },
        {
          "title": "Error-Response:",
          "content": "   HTTP/1.1 404 Not Found\n   {\n     \"error\": \"ChannelNotFound\"\n   }\n"
        },
        {
          "title": "Error-Response:",
          "content": "   HTTP/1.1 404 \n   {\n     \"error\": \"RouteNotFound\"\n   }\n"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "comparison-api/App/Modules/Backend/Controllers/ChannelsController.php"
  },
  {
    "type": "get",
    "url": "/channels",
    "title": "GET /channels",
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -H \"X-COMPARE-REST-API-KEY: 1234567890\" \n    -i \"http://apibeta.compargo.com/v1/channels/?countryCode=ph&language=en&query={\"status\":\"1\"}&fields=id,verticalId,name,description,alias,language,revenueValue,perPage,status&sort=-id,verticalId,name&limit=10\"\n"
      }
    ],
    "description": "<p>Read data of all Channels</p>",
    "name": "Get",
    "group": "Channels",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "field": "X-COMPARE-REST-API-KEY",
            "optional": false,
            "description": "<p>Channels unique access-key.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "field": "language",
            "optional": false,
            "description": "<p>Mandatory Language.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "countryCode",
            "optional": false,
            "description": "<p>Mandatory Country Code.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "query",
            "optional": true,
            "description": "<p>Optional query conditions that rows must satisfy to be selected.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "fields",
            "optional": true,
            "description": "<p>Optional field indicates a column that you want to retrieve.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "sort",
            "optional": true,
            "description": "<p>Optional sort orders columns selected for output.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "limit",
            "defaultValue": "0",
            "optional": true,
            "description": "<p>Optional limit used to constrain the number of rows returned.                                                     When offset parameter is present, the limit specifies the offset                                                  of the first row to return. When count parameter exists, the limit                                                   identifies all the rows returned and with default 0.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "offset",
            "optional": true,
            "description": "<p>Optional offset specifies the maximum number of rows to return.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "count",
            "defaultValue": "1",
            "optional": true,
            "description": "<p>Optional count with default 1. Returns the count of channels.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "field": "id",
            "optional": false,
            "description": "<p>ID of the Channel.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "verticalId",
            "optional": false,
            "description": "<p>Vertical ID of the Channel.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "name",
            "optional": false,
            "description": "<p>Name of the Channel.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "description",
            "optional": false,
            "description": "<p>Description of the Channel.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "alias",
            "optional": false,
            "description": "<p>Alias of the Channel.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "revenueValue",
            "optional": false,
            "description": "<p>Language of the Channel.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "perPage",
            "optional": false,
            "description": "<p>Per Page of the Channel.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "field": "status",
            "optional": false,
            "description": "<p>Status Flag of the Channel.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "field": "active",
            "optional": false,
            "description": "<p>Active Flag of the Channel.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "field": "created",
            "optional": false,
            "description": "<p>Creation date of the Channel.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "field": "modified",
            "optional": false,
            "description": "<p>Modification date of the Channel.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "createdBy",
            "optional": false,
            "description": "<p>ID of the User who created the Channel.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "modifiedBy",
            "optional": false,
            "description": "<p>ID of the User who modified the Channel.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "   HTTP/1.1 200 OK\n   {\n     \"id\": \"a1d14206-1ea9-11e4-b32d-eff91066cccf\",\n     \"verticalId\": \"07f44e24-1d43-11e4-b32d-eff91066cccf\",\n     \"name\": \"Credit Card\",\n     \"description\": \"Credit Card\",\n     \"alias\": \"credit-card\",\n     \"revenueValue\": \"5.00\",\n     \"perPage\": \"10\",\n     \"columns\": \"[\\\"cashback\\\", \\\"airmiles\\\", \\\"points\\\", \\\"annualFee\\\"]\",\n     \"badges\": \"[{\\\"label\\\": \\\"Octopus Card\\\", \\\"icon\\\": \\\"octo-card\\\"}, {\\\"label\\\": \\\"valid TaoBao\\\", \\\"icon\\\": \\\"taobao-card\\\"}]\",\n     \"status\": \"1\"\n   },\n   {\n     \"id\": \"dc7c34e2-1eae-11e4-b32d-eff91066cccf\",\n     \"verticalId\": \"07f44e24-1d43-11e4-b32d-eff91066cccf\",\n     \"name\": \"Home Loans\",\n     \"description\": \"Home Loans\",\n     \"alias\": \"home-loans\",\n     \"revenueValue\": \"5.00\",\n     \"perPage\": \"10\",\n     \"status\": \"1\"\n   },\n   {  \n     \"id\": \"a212fb3c-1eaf-11e4-b32d-eff91066cccf\",\n     \"verticalId\": \"07f44e24-1d43-11e4-b32d-eff91066cccf\",\n     \"name\": \"Personal Loan\",\n     \"description\": \"Personal Loan\",\n     \"alias\": \"personal-loan\",\n     \"revenueValue\": \"5.00\",\n     \"perPage\": \"10\",\n     \"status\": \"1\"\n   }\n"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "field": "InvalidAccessToken",
            "optional": false,
            "description": "<p>The access token is invalid.</p>"
          },
          {
            "group": "Error 4xx",
            "field": "MissingAuthenticationCredentials",
            "optional": false,
            "description": "<p>The authentication credentials are missing.</p>"
          },
          {
            "group": "Error 4xx",
            "field": "WrongFieldsReturned",
            "optional": false,
            "description": "<p>The requested fields are not available.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "   HTTP/1.1 401 Unauthorized\n   {\n     \"error\": \"InvalidAccessToken\"\n   }\n"
        },
        {
          "title": "Error-Response:",
          "content": "   HTTP/1.1 401 Unauthorized\n   {\n     \"error\": \"MissingAuthenticationCredentials\"\n   }\n"
        },
        {
          "title": "Error-Response:",
          "content": "   HTTP/1.1 401 Unauthorized\n   {\n     \"error\": \"WrongFieldsReturned\"\n   }\n"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "comparison-api/App/Modules/Backend/Controllers/ChannelsController.php"
  },
  {
    "type": "get",
    "url": "/channels/:id",
    "title": "GET /channels/:id",
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -H \"X-COMPARE-REST-API-KEY: 1234567890\" \n    -i \"http://apibeta.compargo.com/v1/channels/a1d14206-1ea9-11e4-b32d-eff91066cccf/?countryCode=ph&language=en\"\n"
      }
    ],
    "description": "<p>Read data of a Channel</p>",
    "name": "GetOne",
    "group": "Channels",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "field": "X-COMPARE-REST-API-KEY",
            "optional": false,
            "description": "<p>Channels unique access-key.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "field": "language",
            "optional": false,
            "description": "<p>Mandatory Language.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "countryCode",
            "optional": false,
            "description": "<p>Mandatory Country Code.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "id",
            "optional": false,
            "description": "<p>Mandatory Channel unique ID.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "field": "id",
            "optional": false,
            "description": "<p>ID of the Channel.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "verticalId",
            "optional": false,
            "description": "<p>Vertical ID of the Channel.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "name",
            "optional": false,
            "description": "<p>Name of the Channel.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "description",
            "optional": false,
            "description": "<p>Description of the Channel.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "alias",
            "optional": false,
            "description": "<p>Alias of the Channel.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "revenueValue",
            "optional": false,
            "description": "<p>Revenue Value of the Channel.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "perPage",
            "optional": false,
            "description": "<p>Per Page of the Channel.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "field": "status",
            "optional": false,
            "description": "<p>Status of the Channel.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "field": "active",
            "optional": false,
            "description": "<p>Flag of the Channel.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "field": "created",
            "optional": false,
            "description": "<p>Creation date of the Channel.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "field": "modified",
            "optional": false,
            "description": "<p>Modification date of the Channel.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "createdBy",
            "optional": false,
            "description": "<p>ID of the User who created the Channel.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "modifiedBy",
            "optional": false,
            "description": "<p>ID of the User who modified the Channel.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "   HTTP/1.1 200 OK\n   {\n     \"id\": \"c6b5edee-1eac-11e4-b32d-eff91066cccf\",\n     \"verticalId\": \"78d7ca20-1dd0-11e4-b32d-eff91066cccf\",\n     \"name\": \"Broadband\",\n     \"description\": \"Broadband\",\n     \"alias\": \"broadband\",\n     \"revenueValue\": \"5.00\",\n     \"perPage\": \"10\",\n     \"status\": \"1\",\n     \"active\": \"1\",\n     \"created\": \"2014-08-08 05:33:34\",\n     \"modified\": \"0000-00-00 00:00:00\",\n     \"createdBy\": \"a8838d12-1dcc-11e4-b32d-eff91066cccf\",\n     \"modifiedBy\": \"a8838d12-1dcc-11e4-b32d-eff91066cccf\"\n   }\n"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "field": "ChannelNotFound",
            "optional": false,
            "description": "<p>The id of the Channel was not found.</p>"
          },
          {
            "group": "Error 4xx",
            "field": "InvalidAccessToken",
            "optional": false,
            "description": "<p>The access token is invalid.</p>"
          },
          {
            "group": "Error 4xx",
            "field": "MissingAuthenticationCredentials",
            "optional": false,
            "description": "<p>The authentication credentials are missing.</p>"
          },
          {
            "group": "Error 4xx",
            "field": "RouteNotFound",
            "optional": false,
            "description": "<p>That route was not found on the server.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "   HTTP/1.1 404 Not Found\n   {\n     \"error\": \"ChannelNotFound\"\n   }\n"
        },
        {
          "title": "Error-Response:",
          "content": "   HTTP/1.1 401 Unauthorized\n   {\n     \"error\": \"InvalidAccessToken\"\n   }\n"
        },
        {
          "title": "Error-Response:",
          "content": "   HTTP/1.1 401 Unauthorized\n   {\n     \"error\": \"MissingAuthenticationCredentials\"\n   }\n"
        },
        {
          "title": "Error-Response:",
          "content": "   HTTP/1.1 404 \n   {\n     \"error\": \"RouteNotFound\"\n   }\n"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "comparison-api/App/Modules/Backend/Controllers/ChannelsController.php"
  },
  {
    "type": "post",
    "url": "/channels",
    "title": "POST /channels",
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i -X POST \"http://apibeta.compargo.com/v1/channels/?countryCode=ph&language=en\"\n    -H \"X-COMPARE-REST-API-KEY: 1234567890\"\n    -d \"verticalId=07f44e24-1d43-11e4-b32d-eff91066cccf&\n        name=Home%20Loans&\n        description=Home%20Loans&\n        revenueValue=5.00&\n        perPage=10&\n        status=1\"\n"
      }
    ],
    "description": "<p>Create a new Channel</p>",
    "name": "Post",
    "group": "Channels",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "field": "X-COMPARE-REST-API-KEY",
            "optional": false,
            "description": "<p>Channel unique access-key.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "field": "language",
            "optional": false,
            "description": "<p>Mandatory Language.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "countryCode",
            "optional": false,
            "description": "<p>Mandatory Country code.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "verticalId",
            "optional": false,
            "description": "<p>Mandatory Vertical ID of Channel.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "name",
            "optional": false,
            "description": "<p>Mandatory Name of the Channel.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "description",
            "optional": true,
            "description": "<p>Optional Description of the Channel.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "alias",
            "optional": true,
            "description": "<p>Optional Alias of the Channel.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "revenueValue",
            "optional": true,
            "description": "<p>Optional Revenue Value of the Channel.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "perPage",
            "optional": true,
            "description": "<p>Optional Per Page of the Channel.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "status",
            "defaultValue": "0",
            "optional": true,
            "description": "<p>Optional Status of the Channel.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "createdBy",
            "optional": true,
            "description": "<p>Optional ID of the User who created the Channel.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "modifiedBy",
            "optional": true,
            "description": "<p>Optional ID of the User who modified the Channel.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "field": "id",
            "optional": false,
            "description": "<p>The new Channel-ID.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "   HTTP/1.1 200 OK\n   {\n     \"id\": \"96b3d052-3716-11e4-b18a-fe7344fb1ea4\"\n   }\n"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "field": "BadInputParameter",
            "optional": false,
            "description": "<p>The request cannot be fulfilled due to bad syntax.</p>"
          },
          {
            "group": "Error 4xx",
            "field": "InvalidAccessToken",
            "optional": false,
            "description": "<p>The access token is invalid.</p>"
          },
          {
            "group": "Error 4xx",
            "field": "MissingAuthenticationCredentials",
            "optional": false,
            "description": "<p>The authentication credentials are missing.</p>"
          },
          {
            "group": "Error 4xx",
            "field": "RouteNotFound",
            "optional": false,
            "description": "<p>That route was not found on the server.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "   HTTP/1.1 400\n   {\n     \"error\": \"BadInputParameter\"\n   }\n"
        },
        {
          "title": "Error-Response:",
          "content": "   HTTP/1.1 401 Unauthorized\n   {\n     \"error\": \"InvalidAccessToken\"\n   }\n"
        },
        {
          "title": "Error-Response:",
          "content": "   HTTP/1.1 401 Unauthorized\n   {\n     \"error\": \"MissingAuthenticationCredentials\"\n   }\n"
        },
        {
          "title": "Error-Response:",
          "content": "   HTTP/1.1 404 \n   {\n     \"error\": \"RouteNotFound\"\n   }\n"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "comparison-api/App/Modules/Backend/Controllers/ChannelsController.php"
  },
  {
    "type": "put",
    "url": "/channels/:id",
    "title": "PUT /channels/:id",
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i -X PUT \"http://apibeta.compargo.com/v1/channels/96b3d052-3716-11e4-b18a-fe7344fb1ea4/?countryCode=ph&language=en\"\n    -H \"X-COMPARE-REST-API-KEY: 1234567890\"\n    -d \"name=PNB&link=http://www.pnb.com.ph&logo=ph/brands/10_pnb.gif\"\n"
      }
    ],
    "description": "<p>Update a Channel</p>",
    "name": "Put",
    "group": "Channels",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "field": "X-COMPARE-REST-API-KEY",
            "optional": false,
            "description": "<p>Channels unique access-key.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "field": "language",
            "optional": false,
            "description": "<p>Mandatory Language.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "countryCode",
            "optional": false,
            "description": "<p>Mandatory Country Code.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "id",
            "optional": false,
            "description": "<p>Mandatory Channel Unique ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "verticalId",
            "optional": false,
            "description": "<p>Mandatory Vertical ID of the Channel.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "name",
            "optional": false,
            "description": "<p>Mandatory Name of the Channel.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "description",
            "optional": true,
            "description": "<p>Optional Description of the Channel.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "alias",
            "optional": true,
            "description": "<p>Optional Alias of the Channel.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "revenueValue",
            "optional": true,
            "description": "<p>Optional Revenue Value of the Channel.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "perPage",
            "optional": true,
            "description": "<p>Optional Per Page of the Channel.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "status",
            "optional": true,
            "description": "<p>Optional Status of the Channel.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "createdBy",
            "optional": true,
            "description": "<p>Optional ID of the User who created the Channel.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "modifiedBy",
            "optional": true,
            "description": "<p>Optional ID of the User who modified the Channel.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "   HTTP/1.1 200 OK\n   {\n     \"id\": \"96b3d052-3716-11e4-b18a-fe7344fb1ea4\"\n   }\n"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "field": "BadInputParameter",
            "optional": false,
            "description": "<p>The request cannot be fulfilled due to bad syntax.</p>"
          },
          {
            "group": "Error 4xx",
            "field": "InvalidAccessToken",
            "optional": false,
            "description": "<p>The access token is invalid.</p>"
          },
          {
            "group": "Error 4xx",
            "field": "MissingAuthenticationCredentials",
            "optional": false,
            "description": "<p>The authentication credentials are missing.</p>"
          },
          {
            "group": "Error 4xx",
            "field": "ChannelNotFound",
            "optional": false,
            "description": "<p>The id of the Channel was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "   HTTP/1.1 400\n   {\n     \"error\": \"BadInputParameter\"\n   }\n"
        },
        {
          "title": "Error-Response:",
          "content": "   HTTP/1.1 401 Unauthorized\n   {\n     \"error\": \"InvalidAccessToken\"\n   }\n"
        },
        {
          "title": "Error-Response:",
          "content": "   HTTP/1.1 401 Unauthorized\n   {\n     \"error\": \"MissingAuthenticationCredentials\"\n   }\n"
        },
        {
          "title": "Error-Response:",
          "content": "   HTTP/1.1 404 Not Found\n   {\n     \"error\": \"ChannelNotFound\"\n   }\n"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "comparison-api/App/Modules/Backend/Controllers/ChannelsController.php"
  },
  {
    "type": "post",
    "url": "/channels/search",
    "title": "POST /channels/search",
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -H \"X-COMPARE-REST-API-KEY: 1234567890\" \n    -i \"http://apibeta.compargo.com/v1/channels/search/?countryCode=ph&language=en\"\n    -d \"query={\"status\":\"1\"}&fields=id,verticalId,name,description,alias,language,revenueValue,perPage,status&sort=-id,verticalId,name&limit=10\"\n"
      }
    ],
    "description": "<p>Read data of all Channels</p>",
    "name": "Search",
    "group": "Channels",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "field": "X-COMPARE-REST-API-KEY",
            "optional": false,
            "description": "<p>Channels unique access-key.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "field": "language",
            "optional": false,
            "description": "<p>Mandatory Language.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "countryCode",
            "optional": false,
            "description": "<p>Mandatory Country Code.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "query",
            "optional": true,
            "description": "<p>Optional query conditions that rows must satisfy to be selected.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "fields",
            "optional": true,
            "description": "<p>Optional field indicates a column that you want to retrieve.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "sort",
            "optional": true,
            "description": "<p>Optional sort orders columns selected for output.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "limit",
            "defaultValue": "0",
            "optional": true,
            "description": "<p>Optional limit used to constrain the number of rows returned.                                                     When offset parameter is present, the limit specifies the offset                                                  of the first row to return. When count parameter exists, the limit                                                   identifies all the rows returned and with default 0.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "offset",
            "optional": true,
            "description": "<p>Optional offset specifies the maximum number of rows to return.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "count",
            "defaultValue": "1",
            "optional": true,
            "description": "<p>Optional count with default 1. Returns the count of channels.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "field": "id",
            "optional": false,
            "description": "<p>ID of the Channel.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "verticalId",
            "optional": false,
            "description": "<p>Vertical ID of the Channel.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "name",
            "optional": false,
            "description": "<p>Name of the Channel.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "description",
            "optional": false,
            "description": "<p>Description of the Channel.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "alias",
            "optional": false,
            "description": "<p>Alias of the Channel.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "revenueValue",
            "optional": false,
            "description": "<p>Language of the Channel.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "perPage",
            "optional": false,
            "description": "<p>Per Page of the Channel.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "field": "status",
            "optional": false,
            "description": "<p>Status Flag of the Channel.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "field": "active",
            "optional": false,
            "description": "<p>Active Flag of the Channel.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "field": "created",
            "optional": false,
            "description": "<p>Creation date of the Channel.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "field": "modified",
            "optional": false,
            "description": "<p>Modification date of the Channel.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "createdBy",
            "optional": false,
            "description": "<p>ID of the User who created the Channel.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "modifiedBy",
            "optional": false,
            "description": "<p>ID of the User who modified the Channel.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "   HTTP/1.1 200 OK\n   {\n     \"id\": \"a1d14206-1ea9-11e4-b32d-eff91066cccf\",\n     \"verticalId\": \"07f44e24-1d43-11e4-b32d-eff91066cccf\",\n     \"name\": \"Credit Card\",\n     \"description\": \"Credit Card\",\n     \"alias\": \"credit-card\",\n     \"revenueValue\": \"5.00\",\n     \"perPage\": \"10\",\n     \"status\": \"1\"\n   },\n   {\n     \"id\": \"dc7c34e2-1eae-11e4-b32d-eff91066cccf\",\n     \"verticalId\": \"07f44e24-1d43-11e4-b32d-eff91066cccf\",\n     \"name\": \"Home Loans\",\n     \"description\": \"Home Loans\",\n     \"alias\": \"home-loans\",\n     \"revenueValue\": \"5.00\",\n     \"perPage\": \"10\",\n     \"status\": \"1\"\n   },\n   {  \n     \"id\": \"a212fb3c-1eaf-11e4-b32d-eff91066cccf\",\n     \"verticalId\": \"07f44e24-1d43-11e4-b32d-eff91066cccf\",\n     \"name\": \"Personal Loan\",\n     \"description\": \"Personal Loan\",\n     \"alias\": \"personal-loan\",\n     \"revenueValue\": \"5.00\",\n     \"perPage\": \"10\",\n     \"status\": \"1\"\n   }\n"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "field": "InvalidAccessToken",
            "optional": false,
            "description": "<p>The access token is invalid.</p>"
          },
          {
            "group": "Error 4xx",
            "field": "MissingAuthenticationCredentials",
            "optional": false,
            "description": "<p>The authentication credentials are missing.</p>"
          },
          {
            "group": "Error 4xx",
            "field": "WrongFieldsReturned",
            "optional": false,
            "description": "<p>The requested fields are not available.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "   HTTP/1.1 401 Unauthorized\n   {\n     \"error\": \"InvalidAccessToken\"\n   }\n"
        },
        {
          "title": "Error-Response:",
          "content": "   HTTP/1.1 401 Unauthorized\n   {\n     \"error\": \"MissingAuthenticationCredentials\"\n   }\n"
        },
        {
          "title": "Error-Response:",
          "content": "   HTTP/1.1 401 Unauthorized\n   {\n     \"error\": \"WrongFieldsReturned\"\n   }\n"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "comparison-api/App/Modules/Backend/Controllers/ChannelsController.php"
  },
  {
    "type": "post",
    "url": "/channels/search/:id",
    "title": "POST /channels/search/:id",
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -H \"X-COMPARE-REST-API-KEY: 1234567890\" \n    -i \"http://apibeta.compargo.com/v1/channels/search/a1d14206-1ea9-11e4-b32d-eff91066cccf/?countryCode=ph&language=en\"\n"
      }
    ],
    "description": "<p>Read data of a Channel</p>",
    "name": "SearchOne",
    "group": "Channels",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "field": "X-COMPARE-REST-API-KEY",
            "optional": false,
            "description": "<p>Channels unique access-key.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "field": "language",
            "optional": false,
            "description": "<p>Mandatory Language.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "countryCode",
            "optional": false,
            "description": "<p>Mandatory Country Code.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "id",
            "optional": false,
            "description": "<p>Mandatory Channel unique ID.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "field": "id",
            "optional": false,
            "description": "<p>ID of the Channel.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "verticalId",
            "optional": false,
            "description": "<p>Vertical ID of the Channel.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "name",
            "optional": false,
            "description": "<p>Name of the Channel.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "description",
            "optional": false,
            "description": "<p>Description of the Channel.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "alias",
            "optional": false,
            "description": "<p>Alias of the Channel.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "revenueValue",
            "optional": false,
            "description": "<p>Revenue Value of the Channel.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "perPage",
            "optional": false,
            "description": "<p>Per Page of the Channel.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "field": "status",
            "optional": false,
            "description": "<p>Status of the Channel.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "field": "active",
            "optional": false,
            "description": "<p>Flag of the Channel.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "field": "created",
            "optional": false,
            "description": "<p>Creation date of the Channel.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "field": "modified",
            "optional": false,
            "description": "<p>Modification date of the Channel.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "createdBy",
            "optional": false,
            "description": "<p>ID of the User who created the Channel.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "modifiedBy",
            "optional": false,
            "description": "<p>ID of the User who modified the Channel.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "   HTTP/1.1 200 OK\n   {\n     \"id\": \"c6b5edee-1eac-11e4-b32d-eff91066cccf\",\n     \"verticalId\": \"78d7ca20-1dd0-11e4-b32d-eff91066cccf\",\n     \"name\": \"Broadband\",\n     \"description\": \"Broadband\",\n     \"alias\": \"broadband\",\n     \"revenueValue\": \"5.00\",\n     \"perPage\": \"10\",\n     \"status\": \"1\",\n     \"active\": \"1\",\n     \"created\": \"2014-08-08 05:33:34\",\n     \"modified\": \"0000-00-00 00:00:00\",\n     \"createdBy\": \"a8838d12-1dcc-11e4-b32d-eff91066cccf\",\n     \"modifiedBy\": \"a8838d12-1dcc-11e4-b32d-eff91066cccf\"\n   }\n"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "field": "ChannelNotFound",
            "optional": false,
            "description": "<p>The id of the Channel was not found.</p>"
          },
          {
            "group": "Error 4xx",
            "field": "InvalidAccessToken",
            "optional": false,
            "description": "<p>The access token is invalid.</p>"
          },
          {
            "group": "Error 4xx",
            "field": "MissingAuthenticationCredentials",
            "optional": false,
            "description": "<p>The authentication credentials are missing.</p>"
          },
          {
            "group": "Error 4xx",
            "field": "RouteNotFound",
            "optional": false,
            "description": "<p>That route was not found on the server.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "   HTTP/1.1 404 Not Found\n   {\n     \"error\": \"ChannelNotFound\"\n   }\n"
        },
        {
          "title": "Error-Response:",
          "content": "   HTTP/1.1 401 Unauthorized\n   {\n     \"error\": \"InvalidAccessToken\"\n   }\n"
        },
        {
          "title": "Error-Response:",
          "content": "   HTTP/1.1 401 Unauthorized\n   {\n     \"error\": \"MissingAuthenticationCredentials\"\n   }\n"
        },
        {
          "title": "Error-Response:",
          "content": "   HTTP/1.1 404 \n   {\n     \"error\": \"RouteNotFound\"\n   }\n"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "comparison-api/App/Modules/Backend/Controllers/ChannelsController.php"
  },
  {
    "type": "delete",
    "url": "/channels_options/:id",
    "title": "DELETE /channels_options/:id",
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i -X DELETE \"http://apibeta.compargo.com/v1/channels_options/96b3d052-3716-11e4-b18a-fe7344fb1ea4\t\n    -H \"X-COMPARE-REST-API-KEY: 1234567890\"\n"
      }
    ],
    "description": "<p>Delete a Channels Option</p>",
    "name": "Delete",
    "group": "Channels_Options",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "field": "X-COMPARE-REST-API-KEY",
            "optional": false,
            "description": "<p>Channels Options unique access-key.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "field": "language",
            "optional": false,
            "description": "<p>Mandatory Language.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "countryCode",
            "optional": false,
            "description": "<p>Mandatory Country Code.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "id",
            "optional": false,
            "description": "<p>Mandatory Channels Option Unique ID.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "field": "id",
            "optional": false,
            "description": "<p>The ID of Channels Option.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "   HTTP/1.1 200 OK\n   {\n     \"id\": \"f8a145d4-20fe-11e4-b94f-085fc4b84f62\"\n   }\n"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "field": "InvalidAccessToken",
            "optional": false,
            "description": "<p>The access token is invalid.</p>"
          },
          {
            "group": "Error 4xx",
            "field": "MissingAuthenticationCredentials",
            "optional": false,
            "description": "<p>The authentication credentials are missing.</p>"
          },
          {
            "group": "Error 4xx",
            "field": "ChannelsOptionNotFound",
            "optional": false,
            "description": "<p>The id of the Channels Option was not found.</p>"
          },
          {
            "group": "Error 4xx",
            "field": "RouteNotFound",
            "optional": false,
            "description": "<p>That route was not found on the server.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "   HTTP/1.1 401 Unauthorized\n   {\n     \"error\": \"InvalidAccessToken\"\n   }\n"
        },
        {
          "title": "Error-Response:",
          "content": "   HTTP/1.1 401 Unauthorized\n   {\n     \"error\": \"MissingAuthenticationCredentials\"\n   }\n"
        },
        {
          "title": "Error-Response:",
          "content": "   HTTP/1.1 404 Not Found\n   {\n     \"error\": \"ChannelsOptionNotFound\"\n   }\n"
        },
        {
          "title": "Error-Response:",
          "content": "   HTTP/1.1 404 \n   {\n     \"error\": \"RouteNotFound\"\n   }\n"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "comparison-api/App/Modules/Backend/Controllers/ChannelsOptionsController.php"
  },
  {
    "type": "get",
    "url": "/channels_options",
    "title": "GET /channels_options",
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -H \"X-COMPARE-REST-API-KEY: 1234567890\" \n    -i \"http://apibeta.compargo.com/v1/channels_options/?countryCode=ph&language=en&\n        query={\"status\":\"1\"}&fields=id,verticalId,name,description,alias,language,revenueValue,perPage,status&\n        sort=-id,verticalId,name&\n        limit=10\"\n"
      }
    ],
    "description": "<p>Read data of all Channels Options</p>",
    "name": "Get",
    "group": "Channels_Options",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "field": "X-COMPARE-REST-API-KEY",
            "optional": false,
            "description": "<p>Channels Options unique access-key.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "field": "language",
            "optional": false,
            "description": "<p>Mandatory Language.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "countryCode",
            "optional": false,
            "description": "<p>Mandatory Country Code.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "query",
            "optional": true,
            "description": "<p>Optional query conditions that rows must satisfy to be selected.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "fields",
            "optional": true,
            "description": "<p>Optional field indicates a column that you want to retrieve.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "sort",
            "optional": true,
            "description": "<p>Optional sort orders columns selected for output.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "limit",
            "defaultValue": "0",
            "optional": true,
            "description": "<p>Optional limit used to constrain the number of rows returned.                                                     When offset parameter is present, the limit specifies the offset                                                  of the first row to return. When count parameter exists, the limit                                                   identifies all the rows returned and with default 0.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "offset",
            "optional": true,
            "description": "<p>Optional offset specifies the maximum number of rows to return.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "count",
            "defaultValue": "1",
            "optional": true,
            "description": "<p>Optional count with default 1. Returns the count of channels options.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "field": "id",
            "optional": false,
            "description": "<p>ID of the Channels Options.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "channelId",
            "optional": false,
            "description": "<p>Channel ID of the Channels Options.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "name",
            "optional": false,
            "description": "<p>Name of the Channels Options.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "value",
            "optional": false,
            "description": "<p>Value of the Channels Options.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "label",
            "optional": false,
            "description": "<p>Label of the Channels Options.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "editable",
            "optional": false,
            "description": "<p>Editable Flag of the Channels Options.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "visibility",
            "optional": false,
            "description": "<p>Visibility Flag of the Channels Options.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "field": "status",
            "optional": false,
            "description": "<p>Status Flag of the Channels Options.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "field": "active",
            "optional": false,
            "description": "<p>Active Flag of the Channels Options.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "field": "created",
            "optional": false,
            "description": "<p>Creation date of the Channels Options.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "field": "modified",
            "optional": false,
            "description": "<p>Modification date of the Channels Options.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "createdBy",
            "optional": false,
            "description": "<p>ID of the User who created the Channels Options.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "modifiedBy",
            "optional": false,
            "description": "<p>ID of the User who modified the Channels Options.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "   HTTP/1.1 200 OK\n   {\n     \"id\": \"f8a145d4-20fe-11e4-b94f-085fc4b84f62\",\n     \"channelId\": \"a1d14206-1ea9-11e4-b32d-eff91066cccf\",\n     \"name\": \"columns\",\n     \"value\": \"[\\\"cashback\\\", \\\"airmiles\\\", \\\"points\\\", \\\"annualFee\\\"]\",\n     \"label\": \"\",\n     \"editable\": \"1\",\n     \"visibility\": \"1\",\n     \"status\": \"1\"\n   },\n   {\n     \"id\": \"05a5ec26-372a-11e4-b18a-fe7344fb1ea4\",\n     \"channelId\": \"a1d14206-1ea9-11e4-b32d-eff91066cccf\",\n     \"name\": \"badges\",\n     \"value\": \"[{\\\"label\\\": \\\"Octopus Card\\\", \\\"icon\\\": \\\"octo-card\\\"}, {\\\"label\\\": \\\"valid TaoBao\\\", \\\"icon\\\": \\\"taobao-card\\\"}]\",\n     \"label\": \"\",\n     \"editable\": \"1\",\n     \"visibility\": \"1\",\n     \"status\": \"1\"\n   }\n"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "field": "InvalidAccessToken",
            "optional": false,
            "description": "<p>The access token is invalid.</p>"
          },
          {
            "group": "Error 4xx",
            "field": "MissingAuthenticationCredentials",
            "optional": false,
            "description": "<p>The authentication credentials are missing.</p>"
          },
          {
            "group": "Error 4xx",
            "field": "WrongFieldsReturned",
            "optional": false,
            "description": "<p>The requested fields are not available.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "   HTTP/1.1 401 Unauthorized\n   {\n     \"error\": \"InvalidAccessToken\"\n   }\n"
        },
        {
          "title": "Error-Response:",
          "content": "   HTTP/1.1 401 Unauthorized\n   {\n     \"error\": \"MissingAuthenticationCredentials\"\n   }\n"
        },
        {
          "title": "Error-Response:",
          "content": "   HTTP/1.1 401 Unauthorized\n   {\n     \"error\": \"WrongFieldsReturned\"\n   }\n"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "comparison-api/App/Modules/Backend/Controllers/ChannelsOptionsController.php"
  },
  {
    "type": "get",
    "url": "/channels_options/:id",
    "title": "GET /channels_options/:id",
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -H \"X-COMPARE-REST-API-KEY: 1234567890\" \n    -i \"http://apibeta.compargo.com/v1/channels_options/05a5ec26-372a-11e4-b18a-fe7344fb1ea4/?countryCode=ph&language=en\"\n"
      }
    ],
    "description": "<p>Read data of a Channel Options</p>",
    "name": "GetOne",
    "group": "Channels_Options",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "field": "X-COMPARE-REST-API-KEY",
            "optional": false,
            "description": "<p>Channels Options unique access-key.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "field": "language",
            "optional": false,
            "description": "<p>Mandatory Language.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "countryCode",
            "optional": false,
            "description": "<p>Mandatory Country Code.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "id",
            "optional": false,
            "description": "<p>Mandatory Channel Options unique ID.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "field": "id",
            "optional": false,
            "description": "<p>ID of the Channels Option.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "channelId",
            "optional": false,
            "description": "<p>Channel ID of the Channels Option.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "name",
            "optional": false,
            "description": "<p>Name of the Channels Option.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "value",
            "optional": false,
            "description": "<p>Value of the Channels Option.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "label",
            "optional": false,
            "description": "<p>Label of the Channels Option.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "editable",
            "optional": false,
            "description": "<p>Editable Flag of the Channels Option.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "visibility",
            "optional": false,
            "description": "<p>Visibility Flag of the Channels Option.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "field": "status",
            "optional": false,
            "description": "<p>Status Flag of the Channels Option.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "field": "active",
            "optional": false,
            "description": "<p>Active Flag of the Channels Option.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "field": "created",
            "optional": false,
            "description": "<p>Creation date of the Channels Option.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "field": "modified",
            "optional": false,
            "description": "<p>Modification date of the Channels Option.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "createdBy",
            "optional": false,
            "description": "<p>ID of the User who created the Channels Option.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "modifiedBy",
            "optional": false,
            "description": "<p>ID of the User who modified the Channels Option.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "   HTTP/1.1 200 OK\n   {\n     \"id\": \"f8a145d4-20fe-11e4-b94f-085fc4b84f62\",\n     \"channelId\": \"a1d14206-1ea9-11e4-b32d-eff91066cccf\",\n     \"name\": \"columns\",\n     \"value\": \"[\\\"cashback\\\", \\\"airmiles\\\", \\\"points\\\", \\\"annualFee\\\"]\",\n     \"label\": \"\",\n     \"editable\": \"1\",\n     \"visibility\": \"1\",\n     \"status\": \"1\"\n   }\n"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "field": "ChannelsOptionNotFound",
            "optional": false,
            "description": "<p>The id of the Channels Option was not found.</p>"
          },
          {
            "group": "Error 4xx",
            "field": "InvalidAccessToken",
            "optional": false,
            "description": "<p>The access token is invalid.</p>"
          },
          {
            "group": "Error 4xx",
            "field": "MissingAuthenticationCredentials",
            "optional": false,
            "description": "<p>The authentication credentials are missing.</p>"
          },
          {
            "group": "Error 4xx",
            "field": "RouteNotFound",
            "optional": false,
            "description": "<p>That route was not found on the server.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "   HTTP/1.1 404 Not Found\n   {\n     \"error\": \"ChannelsOptionNotFound\"\n   }\n"
        },
        {
          "title": "Error-Response:",
          "content": "   HTTP/1.1 401 Unauthorized\n   {\n     \"error\": \"InvalidAccessToken\"\n   }\n"
        },
        {
          "title": "Error-Response:",
          "content": "   HTTP/1.1 401 Unauthorized\n   {\n     \"error\": \"MissingAuthenticationCredentials\"\n   }\n"
        },
        {
          "title": "Error-Response:",
          "content": "   HTTP/1.1 404 \n   {\n     \"error\": \"RouteNotFound\"\n   }\n"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "comparison-api/App/Modules/Backend/Controllers/ChannelsOptionsController.php"
  },
  {
    "type": "post",
    "url": "/channels_options",
    "title": "POST /channels_options",
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i -X POST \"http://apibeta.compargo.com/v1/channels_options/?countryCode=ph&language=en\"\n    -H \"X-COMPARE-REST-API-KEY: 1234567890\"\n    -d \"channelId=a1d14206-1ea9-11e4-b32d-eff91066cccf&\n        name=keyInfo&\n        value={\\\"greatFor\\\":{\\\"columns\\\":[\\\"greatFor1\\\",\\\"greatFor2\\\"],\\\"limit\\\":\\\"2\\\"},\\\"bewareThat\\\":{\\\"columns\\\":[\\\"bewareThat1\\\"],\\\"limit\\\":\"1\"}}&\n        status=1\"\n"
      }
    ],
    "description": "<p>Create a new Channels Options</p>",
    "name": "Post",
    "group": "Channels_Options",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "field": "X-COMPARE-REST-API-KEY",
            "optional": false,
            "description": "<p>Channels Options unique access-key.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "field": "language",
            "optional": false,
            "description": "<p>Mandatory Language.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "countryCode",
            "optional": false,
            "description": "<p>Mandatory Country code.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "channelId",
            "optional": false,
            "description": "<p>Mandatory Vertical ID of Channels Options.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "name",
            "optional": false,
            "description": "<p>Mandatory Name of the Channels Options.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "value",
            "optional": false,
            "description": "<p>Mandatory Value of the Channels Options.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "label",
            "optional": true,
            "description": "<p>Optional Label of the Channels Options.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "editable",
            "defaultValue": "0",
            "optional": true,
            "description": "<p>Optional Editable Flag of the Channels Options.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "visibility",
            "defaultValue": "0",
            "optional": true,
            "description": "<p>Optional Revenue Value of the Channels Options.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "status",
            "defaultValue": "0",
            "optional": true,
            "description": "<p>Optional Status of the Channels Options.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "createdBy",
            "optional": true,
            "description": "<p>Optional ID of the User who created the Channels Options.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "modifiedBy",
            "optional": true,
            "description": "<p>Optional ID of the User who modified the Channels Options.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "field": "id",
            "optional": false,
            "description": "<p>The new Channel-ID.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "   HTTP/1.1 200 OK\n   {\n     \"id\": \"96b3d052-3716-11e4-b18a-fe7344fb1ea4\"\n   }\n"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "field": "BadInputParameter",
            "optional": false,
            "description": "<p>The request cannot be fulfilled due to bad syntax.</p>"
          },
          {
            "group": "Error 4xx",
            "field": "InvalidAccessToken",
            "optional": false,
            "description": "<p>The access token is invalid.</p>"
          },
          {
            "group": "Error 4xx",
            "field": "MissingAuthenticationCredentials",
            "optional": false,
            "description": "<p>The authentication credentials are missing.</p>"
          },
          {
            "group": "Error 4xx",
            "field": "RouteNotFound",
            "optional": false,
            "description": "<p>That route was not found on the server.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "   HTTP/1.1 400\n   {\n     \"error\": \"BadInputParameter\"\n   }\n"
        },
        {
          "title": "Error-Response:",
          "content": "   HTTP/1.1 401 Unauthorized\n   {\n     \"error\": \"InvalidAccessToken\"\n   }\n"
        },
        {
          "title": "Error-Response:",
          "content": "   HTTP/1.1 401 Unauthorized\n   {\n     \"error\": \"MissingAuthenticationCredentials\"\n   }\n"
        },
        {
          "title": "Error-Response:",
          "content": "   HTTP/1.1 404 \n   {\n     \"error\": \"RouteNotFound\"\n   }\n"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "comparison-api/App/Modules/Backend/Controllers/ChannelsOptionsController.php"
  },
  {
    "type": "post",
    "url": "/channels_options/search",
    "title": "POST /channels_options/search",
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -H \"X-COMPARE-REST-API-KEY: 1234567890\" \n    -i \"http://apibeta.compargo.com/v1/channels_options/search/?countryCode=ph&language=en&\n    -d \"query={\"status\":\"1\"}&fields=id,verticalId,name,description,alias,language,revenueValue,perPage,status&\n        sort=-id,verticalId,name&\n        limit=10\"\n"
      }
    ],
    "description": "<p>Read data of all Channels Options</p>",
    "name": "Post",
    "group": "Channels_Options",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "field": "X-COMPARE-REST-API-KEY",
            "optional": false,
            "description": "<p>Channels Options unique access-key.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "field": "language",
            "optional": false,
            "description": "<p>Mandatory Language.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "countryCode",
            "optional": false,
            "description": "<p>Mandatory Country Code.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "query",
            "optional": true,
            "description": "<p>Optional query conditions that rows must satisfy to be selected.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "fields",
            "optional": true,
            "description": "<p>Optional field indicates a column that you want to retrieve.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "sort",
            "optional": true,
            "description": "<p>Optional sort orders columns selected for output.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "limit",
            "defaultValue": "0",
            "optional": true,
            "description": "<p>Optional limit used to constrain the number of rows returned.                                                     When offset parameter is present, the limit specifies the offset                                                  of the first row to return. When count parameter exists, the limit                                                   identifies all the rows returned and with default 0.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "offset",
            "optional": true,
            "description": "<p>Optional offset specifies the maximum number of rows to return.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "count",
            "defaultValue": "1",
            "optional": true,
            "description": "<p>Optional count with default 1. Returns the count of channels options.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "field": "id",
            "optional": false,
            "description": "<p>ID of the Channels Options.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "channelId",
            "optional": false,
            "description": "<p>Channel ID of the Channels Options.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "name",
            "optional": false,
            "description": "<p>Name of the Channels Options.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "value",
            "optional": false,
            "description": "<p>Value of the Channels Options.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "label",
            "optional": false,
            "description": "<p>Label of the Channels Options.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "editable",
            "optional": false,
            "description": "<p>Editable Flag of the Channels Options.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "visibility",
            "optional": false,
            "description": "<p>Visibility Flag of the Channels Options.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "field": "status",
            "optional": false,
            "description": "<p>Status Flag of the Channels Options.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "field": "active",
            "optional": false,
            "description": "<p>Active Flag of the Channels Options.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "field": "created",
            "optional": false,
            "description": "<p>Creation date of the Channels Options.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "field": "modified",
            "optional": false,
            "description": "<p>Modification date of the Channels Options.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "createdBy",
            "optional": false,
            "description": "<p>ID of the User who created the Channels Options.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "modifiedBy",
            "optional": false,
            "description": "<p>ID of the User who modified the Channels Options.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "   HTTP/1.1 200 OK\n   {\n     \"id\": \"f8a145d4-20fe-11e4-b94f-085fc4b84f62\",\n     \"channelId\": \"a1d14206-1ea9-11e4-b32d-eff91066cccf\",\n     \"name\": \"columns\",\n     \"value\": \"[\\\"cashback\\\", \\\"airmiles\\\", \\\"points\\\", \\\"annualFee\\\"]\",\n     \"label\": \"\",\n     \"editable\": \"1\",\n     \"visibility\": \"1\",\n     \"status\": \"1\"\n   },\n   {\n     \"id\": \"05a5ec26-372a-11e4-b18a-fe7344fb1ea4\",\n     \"channelId\": \"a1d14206-1ea9-11e4-b32d-eff91066cccf\",\n     \"name\": \"badges\",\n     \"value\": \"[{\\\"label\\\": \\\"Octopus Card\\\", \\\"icon\\\": \\\"octo-card\\\"}, {\\\"label\\\": \\\"valid TaoBao\\\", \\\"icon\\\": \\\"taobao-card\\\"}]\",\n     \"label\": \"\",\n     \"editable\": \"1\",\n     \"visibility\": \"1\",\n     \"status\": \"1\"\n   }\n"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "field": "InvalidAccessToken",
            "optional": false,
            "description": "<p>The access token is invalid.</p>"
          },
          {
            "group": "Error 4xx",
            "field": "MissingAuthenticationCredentials",
            "optional": false,
            "description": "<p>The authentication credentials are missing.</p>"
          },
          {
            "group": "Error 4xx",
            "field": "WrongFieldsReturned",
            "optional": false,
            "description": "<p>The requested fields are not available.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "   HTTP/1.1 401 Unauthorized\n   {\n     \"error\": \"InvalidAccessToken\"\n   }\n"
        },
        {
          "title": "Error-Response:",
          "content": "   HTTP/1.1 401 Unauthorized\n   {\n     \"error\": \"MissingAuthenticationCredentials\"\n   }\n"
        },
        {
          "title": "Error-Response:",
          "content": "   HTTP/1.1 401 Unauthorized\n   {\n     \"error\": \"WrongFieldsReturned\"\n   }\n"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "comparison-api/App/Modules/Backend/Controllers/ChannelsOptionsController.php"
  },
  {
    "type": "put",
    "url": "/channels_options/:id",
    "title": "PUT /channels_options/:id",
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i -X PUT \"http://apibeta.compargo.com/v1/channels_options/f8a145d4-20fe-11e4-b94f-085fc4b84f62/?countryCode=ph&language=en\"\n    -H \"X-COMPARE-REST-API-KEY: 1234567890\"\n    -d \"channelId=f8a145d4-20fe-11e4-b94f-085fc4b84f62&\n        value=[\\\"cashback\\\", \\\"airmiles\\\", \\\"points\\\"]&\n        editable=0&\n        visibility=0&\n        status=1\"\n"
      }
    ],
    "description": "<p>Update a Channels Option</p>",
    "name": "Put",
    "group": "Channels_Options",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "field": "X-COMPARE-REST-API-KEY",
            "optional": false,
            "description": "<p>Channels Options unique access-key.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "field": "language",
            "optional": false,
            "description": "<p>Mandatory Language.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "countryCode",
            "optional": false,
            "description": "<p>Mandatory Country Code.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "id",
            "optional": false,
            "description": "<p>Mandatory Channels Option Unique ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "channelId",
            "optional": false,
            "description": "<p>Mandatory Channel ID of the Channels Option.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "name",
            "optional": false,
            "description": "<p>Mandatory Name of the Channels Option.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "value",
            "optional": false,
            "description": "<p>Mandatory Value of the Channels Option.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "label",
            "optional": true,
            "description": "<p>Optional Label of the Channels Option.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "editable",
            "optional": true,
            "description": "<p>Optional Editable Flag of the Channels Option.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "visibility",
            "optional": true,
            "description": "<p>Optional Visibility Flag of the Channels Option.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "status",
            "optional": true,
            "description": "<p>Optional Status of the Channels Option.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "createdBy",
            "optional": true,
            "description": "<p>Optional ID of the User who created the Channels Option.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "modifiedBy",
            "optional": true,
            "description": "<p>Optional ID of the User who modified the Channels Option.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "   HTTP/1.1 200 OK\n   {\n     \"id\": \"f8a145d4-20fe-11e4-b94f-085fc4b84f62\"\n   }\n"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "field": "BadInputParameter",
            "optional": false,
            "description": "<p>The request cannot be fulfilled due to bad syntax.</p>"
          },
          {
            "group": "Error 4xx",
            "field": "InvalidAccessToken",
            "optional": false,
            "description": "<p>The access token is invalid.</p>"
          },
          {
            "group": "Error 4xx",
            "field": "MissingAuthenticationCredentials",
            "optional": false,
            "description": "<p>The authentication credentials are missing.</p>"
          },
          {
            "group": "Error 4xx",
            "field": "ChannelsOptionsNotFound",
            "optional": false,
            "description": "<p>The id of the Channels Option was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "   HTTP/1.1 400\n   {\n     \"error\": \"BadInputParameter\"\n   }\n"
        },
        {
          "title": "Error-Response:",
          "content": "   HTTP/1.1 401 Unauthorized\n   {\n     \"error\": \"InvalidAccessToken\"\n   }\n"
        },
        {
          "title": "Error-Response:",
          "content": "   HTTP/1.1 401 Unauthorized\n   {\n     \"error\": \"MissingAuthenticationCredentials\"\n   }\n"
        },
        {
          "title": "Error-Response:",
          "content": "   HTTP/1.1 404 Not Found\n   {\n     \"error\": \"ChannelsOptionNotFound\"\n   }\n"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "comparison-api/App/Modules/Backend/Controllers/ChannelsOptionsController.php"
  },
  {
    "type": "post",
    "url": "/channels_options/search/:id",
    "title": "POST /channels_options/search/:id",
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -H \"X-COMPARE-REST-API-KEY: 1234567890\" \n    -i \"http://apibeta.compargo.com/v1/channels_options/search/05a5ec26-372a-11e4-b18a-fe7344fb1ea4/?countryCode=ph&language=en\"\n"
      }
    ],
    "description": "<p>Read data of a Channel Options</p>",
    "name": "SearchOne",
    "group": "Channels_Options",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "field": "X-COMPARE-REST-API-KEY",
            "optional": false,
            "description": "<p>Channels Options unique access-key.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "field": "language",
            "optional": false,
            "description": "<p>Mandatory Language.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "countryCode",
            "optional": false,
            "description": "<p>Mandatory Country Code.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "id",
            "optional": false,
            "description": "<p>Mandatory Channel Options unique ID.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "field": "id",
            "optional": false,
            "description": "<p>ID of the Channels Option.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "channelId",
            "optional": false,
            "description": "<p>Channel ID of the Channels Option.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "name",
            "optional": false,
            "description": "<p>Name of the Channels Option.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "value",
            "optional": false,
            "description": "<p>Value of the Channels Option.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "label",
            "optional": false,
            "description": "<p>Label of the Channels Option.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "editable",
            "optional": false,
            "description": "<p>Editable Flag of the Channels Option.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "visibility",
            "optional": false,
            "description": "<p>Visibility Flag of the Channels Option.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "field": "status",
            "optional": false,
            "description": "<p>Status Flag of the Channels Option.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "field": "active",
            "optional": false,
            "description": "<p>Active Flag of the Channels Option.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "field": "created",
            "optional": false,
            "description": "<p>Creation date of the Channels Option.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "field": "modified",
            "optional": false,
            "description": "<p>Modification date of the Channels Option.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "createdBy",
            "optional": false,
            "description": "<p>ID of the User who created the Channels Option.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "modifiedBy",
            "optional": false,
            "description": "<p>ID of the User who modified the Channels Option.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "   HTTP/1.1 200 OK\n   {\n     \"id\": \"f8a145d4-20fe-11e4-b94f-085fc4b84f62\",\n     \"channelId\": \"a1d14206-1ea9-11e4-b32d-eff91066cccf\",\n     \"name\": \"columns\",\n     \"value\": \"[\\\"cashback\\\", \\\"airmiles\\\", \\\"points\\\", \\\"annualFee\\\"]\",\n     \"label\": \"\",\n     \"editable\": \"1\",\n     \"visibility\": \"1\",\n     \"status\": \"1\"\n   }\n"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "field": "ChannelsOptionNotFound",
            "optional": false,
            "description": "<p>The id of the Channels Option was not found.</p>"
          },
          {
            "group": "Error 4xx",
            "field": "InvalidAccessToken",
            "optional": false,
            "description": "<p>The access token is invalid.</p>"
          },
          {
            "group": "Error 4xx",
            "field": "MissingAuthenticationCredentials",
            "optional": false,
            "description": "<p>The authentication credentials are missing.</p>"
          },
          {
            "group": "Error 4xx",
            "field": "RouteNotFound",
            "optional": false,
            "description": "<p>That route was not found on the server.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "   HTTP/1.1 404 Not Found\n   {\n     \"error\": \"ChannelsOptionsNotFound\"\n   }\n"
        },
        {
          "title": "Error-Response:",
          "content": "   HTTP/1.1 401 Unauthorized\n   {\n     \"error\": \"InvalidAccessToken\"\n   }\n"
        },
        {
          "title": "Error-Response:",
          "content": "   HTTP/1.1 401 Unauthorized\n   {\n     \"error\": \"MissingAuthenticationCredentials\"\n   }\n"
        },
        {
          "title": "Error-Response:",
          "content": "   HTTP/1.1 404 \n   {\n     \"error\": \"RouteNotFound\"\n   }\n"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "comparison-api/App/Modules/Backend/Controllers/ChannelsOptionsController.php"
  },
  {
    "type": "delete",
    "url": "/companies/:id",
    "title": "DELETE /companies/:id",
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i -X DELETE \"http://apibeta.compargo.com/v1/companies/96b3d052-3716-11e4-b18a-fe7344fb1ea4\t\n    -H \"X-COMPARE-REST-API-KEY: 1234567890\"\n"
      }
    ],
    "description": "<p>Delete a Company</p>",
    "name": "Delete",
    "group": "Companies",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "field": "X-COMPARE-REST-API-KEY",
            "optional": false,
            "description": "<p>Companies unique access-key.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "field": "language",
            "optional": false,
            "description": "<p>Mandatory Language.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "countryCode",
            "optional": false,
            "description": "<p>Mandatory Country Code.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "id",
            "optional": false,
            "description": "<p>Mandatory Company Unique ID.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "field": "id",
            "optional": false,
            "description": "<p>The ID of Company.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "   HTTP/1.1 200 OK\n   {\n     \"id\": \"96b3d052-3716-11e4-b18a-fe7344fb1ea4\"\n   }\n"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "field": "InvalidAccessToken",
            "optional": false,
            "description": "<p>The access token is invalid.</p>"
          },
          {
            "group": "Error 4xx",
            "field": "MissingAuthenticationCredentials",
            "optional": false,
            "description": "<p>The authentication credentials are missing.</p>"
          },
          {
            "group": "Error 4xx",
            "field": "CompanyNotFound",
            "optional": false,
            "description": "<p>The id of the Company was not found.</p>"
          },
          {
            "group": "Error 4xx",
            "field": "RouteNotFound",
            "optional": false,
            "description": "<p>That route was not found on the server.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "   HTTP/1.1 401 Unauthorized\n   {\n     \"error\": \"InvalidAccessToken\"\n   }\n"
        },
        {
          "title": "Error-Response:",
          "content": "   HTTP/1.1 401 Unauthorized\n   {\n     \"error\": \"MissingAuthenticationCredentials\"\n   }\n"
        },
        {
          "title": "Error-Response:",
          "content": "   HTTP/1.1 404 Not Found\n   {\n     \"error\": \"CompanyNotFound\"\n   }\n"
        },
        {
          "title": "Error-Response:",
          "content": "   HTTP/1.1 404 \n   {\n     \"error\": \"RouteNotFound\"\n   }\n"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "comparison-api/App/Modules/Backend/Controllers/CompaniesController.php"
  },
  {
    "type": "get",
    "url": "/companies",
    "title": "GET /companies",
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -H \"X-COMPARE-REST-API-KEY: 1234567890\" \n    -i \"http://apibeta.compargo.com/v1/companies/?countryCode=ph&language=en&query={\"status\":\"1\"}&\n        fields=id,name,description,alias,logo,link,language,revenueValue,status,fax,phone&\n        sort=-id,name&\n        limit=10\"\n"
      }
    ],
    "description": "<p>Read data of all Companies</p>",
    "name": "Get",
    "group": "Companies",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "field": "X-COMPARE-REST-API-KEY",
            "optional": false,
            "description": "<p>Companies unique access-key.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "field": "language",
            "optional": false,
            "description": "<p>Mandatory Language.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "countryCode",
            "optional": false,
            "description": "<p>Mandatory Country Code.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "query",
            "optional": true,
            "description": "<p>Optional query conditions that rows must satisfy to be selected.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "fields",
            "optional": true,
            "description": "<p>Optional field indicates a column that you want to retrieve.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "sort",
            "optional": true,
            "description": "<p>Optional sort orders columns selected for output.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "limit",
            "defaultValue": "0",
            "optional": true,
            "description": "<p>Optional limit used to constrain the number of rows returned.                                                     When offset parameter is present, the limit specifies the offset                                                  of the first row to return. When count parameter exists, the limit                                                   identifies all the rows returned and with default 0.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "offset",
            "optional": true,
            "description": "<p>Optional offset specifies the maximum number of rows to return.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "count",
            "defaultValue": "1",
            "optional": true,
            "description": "<p>Optional count with default 1. Returns the count of companies.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "field": "id",
            "optional": false,
            "description": "<p>ID of the Company.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "name",
            "optional": false,
            "description": "<p>Name of the Company.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "description",
            "optional": false,
            "description": "<p>Description of the Company.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "alias",
            "optional": false,
            "description": "<p>Alias of the Company.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "logo",
            "optional": false,
            "description": "<p>Logo of the Company.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "link",
            "optional": false,
            "description": "<p>Link of the Company.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "revenueValue",
            "optional": false,
            "description": "<p>Language of the Company.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "field": "status",
            "optional": false,
            "description": "<p>Status Flag of the Company.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "field": "active",
            "optional": false,
            "description": "<p>Active Flag of the Company.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "field": "created",
            "optional": false,
            "description": "<p>Creation date of the Company.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "field": "modified",
            "optional": false,
            "description": "<p>Modification date of the Company.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "createdBy",
            "optional": false,
            "description": "<p>ID of the User who created the Company.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "modifiedBy",
            "optional": false,
            "description": "<p>ID of the User who modified the Company.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "   HTTP/1.1 200 OK\n   {\n     \"id\": \"10f0c896-2134-11e4-bb06-0a68ec684316\",\n     \"name\": \"BPI\",\n     \"alias\": \"bpi\",\n     \"logo\": \"ph/companies/1_bpi.jpg\",\n     \"link\": \"bpicards.com\",\n     \"description\": \"BPI\",\n     \"language\": \"en\",\n     \"revenueValue\": \"5.00\",\n     \"status\": \"1\",\n     \"fax\": \"1234567\",\n     \"phone\": \"1234567\"\n   },\n   {\n     \"id\": \"dc7c34e2-1eae-11e4-b32d-eff91066cccf\",\n     \"name\": \"BDO\",\n     \"alias\": \"bdo\",\n     \"description\": \"BDO\",\n     \"logo\": \"ph/companies/bdo.jpg\",\n     \"link\": \"bdo.com\",\n     \"language\": \"en\",\n     \"revenueValue\": \"5.00\",\n     \"status\": \"1\",\n     \"fax\": \"1234567\",\n     \"phone\": \"1234567\"\n   }\n"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "field": "InvalidAccessToken",
            "optional": false,
            "description": "<p>The access token is invalid.</p>"
          },
          {
            "group": "Error 4xx",
            "field": "MissingAuthenticationCredentials",
            "optional": false,
            "description": "<p>The authentication credentials are missing.</p>"
          },
          {
            "group": "Error 4xx",
            "field": "WrongFieldsReturned",
            "optional": false,
            "description": "<p>The requested fields are not available.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "   HTTP/1.1 401 Unauthorized\n   {\n     \"error\": \"InvalidAccessToken\"\n   }\n"
        },
        {
          "title": "Error-Response:",
          "content": "   HTTP/1.1 401 Unauthorized\n   {\n     \"error\": \"MissingAuthenticationCredentials\"\n   }\n"
        },
        {
          "title": "Error-Response:",
          "content": "   HTTP/1.1 401 Unauthorized\n   {\n     \"error\": \"WrongFieldsReturned\"\n   }\n"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "comparison-api/App/Modules/Backend/Controllers/CompaniesController.php"
  },
  {
    "type": "get",
    "url": "/companies/:id",
    "title": "GET /companies/:id",
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -H \"X-COMPARE-REST-API-KEY: 1234567890\"\n    -i \"http://apibeta.compargo.com/v1/companies/4c8367bc-319a-11e4-988c-7d9574853fac/?countryCode=ph&language=en\"\n"
      }
    ],
    "description": "<p>Read data of a Companies</p>",
    "name": "GetOne",
    "group": "Companies",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "field": "X-COMPARE-REST-API-KEY",
            "optional": false,
            "description": "<p>Companies unique access-key.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "field": "language",
            "optional": false,
            "description": "<p>Mandatory Language.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "countryCode",
            "optional": false,
            "description": "<p>Mandatory Country Code.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "id",
            "optional": false,
            "description": "<p>Mandatory Company unique ID.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "field": "id",
            "optional": false,
            "description": "<p>ID of the Company.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "name",
            "optional": false,
            "description": "<p>Name of the Company.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "description",
            "optional": false,
            "description": "<p>Description of the Company.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "alias",
            "optional": false,
            "description": "<p>Alias of the Company.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "logo",
            "optional": false,
            "description": "<p>Logo of the Company.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "link",
            "optional": false,
            "description": "<p>Link of the Company.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "revenueValue",
            "optional": false,
            "description": "<p>Language of the Company.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "field": "status",
            "optional": false,
            "description": "<p>Status Flag of the Company.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "field": "active",
            "optional": false,
            "description": "<p>Active Flag of the Company.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "field": "created",
            "optional": false,
            "description": "<p>Creation date of the Company.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "field": "modified",
            "optional": false,
            "description": "<p>Modification date of the Company.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "createdBy",
            "optional": false,
            "description": "<p>ID of the User who created the Company.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "modifiedBy",
            "optional": false,
            "description": "<p>ID of the User who modified the Company.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "   HTTP/1.1 200 OK\n   {\n     \"id\": \"10f0c896-2134-11e4-bb06-0a68ec684316\",\n     \"name\": \"BPI\",\n     \"alias\": \"bpi\",\n     \"logo\": \"ph/companies/1_bpi.jpg\",\n     \"link\": \"bpicards.com\",\n     \"description\": \"BPI\",\n     \"language\": \"en\",\n     \"revenueValue\": \"5.00\",\n     \"status\": \"1\",\n     \"created\": \"2014-08-11 10:47:03\",\n     \"modified\": \"2014-08-19 12:36:58\",\n     \"createdBy\": \"a8838d12-1dcc-11e4-b32d-eff91066cccf\",\n     \"modifiedBy\": \"a8838d12-1dcc-11e4-b32d-eff91066cccf\",\n      \"fax\": \"1234567\",\n     \"phone\": \"1234567\"\n   }\n"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "field": "CompanyNotFound",
            "optional": false,
            "description": "<p>The id of the Company was not found.</p>"
          },
          {
            "group": "Error 4xx",
            "field": "InvalidAccessToken",
            "optional": false,
            "description": "<p>The access token is invalid.</p>"
          },
          {
            "group": "Error 4xx",
            "field": "MissingAuthenticationCredentials",
            "optional": false,
            "description": "<p>The authentication credentials are missing.</p>"
          },
          {
            "group": "Error 4xx",
            "field": "RouteNotFound",
            "optional": false,
            "description": "<p>That route was not found on the server.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "   HTTP/1.1 404 Not Found\n   {\n     \"error\": \"CompanyNotFound\"\n   }\n"
        },
        {
          "title": "Error-Response:",
          "content": "   HTTP/1.1 401 Unauthorized\n   {\n     \"error\": \"InvalidAccessToken\"\n   }\n"
        },
        {
          "title": "Error-Response:",
          "content": "   HTTP/1.1 401 Unauthorized\n   {\n     \"error\": \"MissingAuthenticationCredentials\"\n   }\n"
        },
        {
          "title": "Error-Response:",
          "content": "   HTTP/1.1 404\n   {\n     \"error\": \"RouteNotFound\"\n   }\n"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "comparison-api/App/Modules/Backend/Controllers/CompaniesController.php"
  },
  {
    "type": "post",
    "url": "/companies",
    "title": "POST /companies",
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i -X POST \"http://apibeta.compargo.com/v1/companies/?countryCode=ph&language=en\"\n    -H \"X-COMPARE-REST-API-KEY: 1234567890\"\n    -d \"verticalId=07f44e24-1d43-11e4-b32d-eff91066cccf&\n        name=HSBC&\n        alias=hsbc&\n        logo=ph/companies/hsbc.jpg&\n        link=hsbc.com.ph&\n        description=HSBC&\n        language=en&\n        revenueValue=5.00&\n        status=1\"\n"
      }
    ],
    "description": "<p>Create a new Company</p>",
    "name": "Post",
    "group": "Companies",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "field": "X-COMPARE-REST-API-KEY",
            "optional": false,
            "description": "<p>Companies unique access-key.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "field": "language",
            "optional": false,
            "description": "<p>Mandatory Language.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "countryCode",
            "optional": false,
            "description": "<p>Mandatory Country code.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "name",
            "optional": false,
            "description": "<p>Mandatory Name of the Company.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "description",
            "optional": true,
            "description": "<p>Optional Description of the Company.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "alias",
            "optional": true,
            "description": "<p>Optional Alias of the Company.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "logo",
            "optional": true,
            "description": "<p>Optional Logo of the Company.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "link",
            "optional": true,
            "description": "<p>Optional Link of the Company.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "revenueValue",
            "optional": true,
            "description": "<p>Optional Revenue Value of the Company.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "createdBy",
            "optional": true,
            "description": "<p>Optional ID of the User who created the Company.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "modifiedBy",
            "optional": true,
            "description": "<p>Optional ID of the User who modified the Company.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "field": "id",
            "optional": false,
            "description": "<p>The new Company-ID.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "   HTTP/1.1 200 OK\n   {\n     \"id\": \"33f42f48-37b6-11e4-b18a-fe7344fb1ea4\"\n   }\n"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "field": "BadInputParameter",
            "optional": false,
            "description": "<p>The request cannot be fulfilled due to bad syntax.</p>"
          },
          {
            "group": "Error 4xx",
            "field": "InvalidAccessToken",
            "optional": false,
            "description": "<p>The access token is invalid.</p>"
          },
          {
            "group": "Error 4xx",
            "field": "MissingAuthenticationCredentials",
            "optional": false,
            "description": "<p>The authentication credentials are missing.</p>"
          },
          {
            "group": "Error 4xx",
            "field": "RouteNotFound",
            "optional": false,
            "description": "<p>That route was not found on the server.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "   HTTP/1.1 400\n   {\n     \"error\": \"BadInputParameter\"\n   }\n"
        },
        {
          "title": "Error-Response:",
          "content": "   HTTP/1.1 401 Unauthorized\n   {\n     \"error\": \"InvalidAccessToken\"\n   }\n"
        },
        {
          "title": "Error-Response:",
          "content": "   HTTP/1.1 401 Unauthorized\n   {\n     \"error\": \"MissingAuthenticationCredentials\"\n   }\n"
        },
        {
          "title": "Error-Response:",
          "content": "   HTTP/1.1 404\n   {\n     \"error\": \"RouteNotFound\"\n   }\n"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "comparison-api/App/Modules/Backend/Controllers/CompaniesController.php"
  },
  {
    "type": "put",
    "url": "/companies/:id",
    "title": "PUT /companies/:id",
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i -X PUT \"http://apibeta.compargo.com/v1/companies/96b3d052-3716-11e4-b18a-fe7344fb1ea4/?countryCode=ph&language=en\"\n    -H \"X-COMPARE-REST-API-KEY: 1234567890\"\n    -d \"name=PNB&link=http://www.pnb.com.ph&logo=ph/brands/10_pnb.gif\"\n"
      }
    ],
    "description": "<p>Update a Company</p>",
    "name": "Put",
    "group": "Companies",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "field": "X-COMPARE-REST-API-KEY",
            "optional": false,
            "description": "<p>Companies unique access-key.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "field": "language",
            "optional": false,
            "description": "<p>Mandatory Language.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "countryCode",
            "optional": false,
            "description": "<p>Mandatory Country Code.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "id",
            "optional": false,
            "description": "<p>Mandatory Company Unique ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "name",
            "optional": false,
            "description": "<p>Mandatory Name of the Company.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "description",
            "optional": true,
            "description": "<p>Optional Description of the Company.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "alias",
            "optional": true,
            "description": "<p>Optional Alias of the Company.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "logo",
            "optional": true,
            "description": "<p>Optional Logo of the Company.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "link",
            "optional": true,
            "description": "<p>Optional Link of the Company.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "revenueValue",
            "optional": true,
            "description": "<p>Optional Revenue Value of the Company.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "status",
            "optional": true,
            "description": "<p>Optional Status of the Company.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "createdBy",
            "optional": true,
            "description": "<p>Optional ID of the User who created the Company.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "modifiedBy",
            "optional": true,
            "description": "<p>Optional ID of the User who modified the Company.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "   HTTP/1.1 200 OK\n   {\n     \"id\": \"4c8367bc-319a-11e4-988c-7d9574853fac\"\n   }\n"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "field": "BadInputParameter",
            "optional": false,
            "description": "<p>The request cannot be fulfilled due to bad syntax.</p>"
          },
          {
            "group": "Error 4xx",
            "field": "InvalidAccessToken",
            "optional": false,
            "description": "<p>The access token is invalid.</p>"
          },
          {
            "group": "Error 4xx",
            "field": "MissingAuthenticationCredentials",
            "optional": false,
            "description": "<p>The authentication credentials are missing.</p>"
          },
          {
            "group": "Error 4xx",
            "field": "CompanyNotFound",
            "optional": false,
            "description": "<p>The id of the Company was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "   HTTP/1.1 400\n   {\n     \"error\": \"BadInputParameter\"\n   }\n"
        },
        {
          "title": "Error-Response:",
          "content": "   HTTP/1.1 401 Unauthorized\n   {\n     \"error\": \"InvalidAccessToken\"\n   }\n"
        },
        {
          "title": "Error-Response:",
          "content": "   HTTP/1.1 401 Unauthorized\n   {\n     \"error\": \"MissingAuthenticationCredentials\"\n   }\n"
        },
        {
          "title": "Error-Response:",
          "content": "   HTTP/1.1 404 Not Found\n   {\n     \"error\": \"CompanyNotFound\"\n   }\n"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "comparison-api/App/Modules/Backend/Controllers/CompaniesController.php"
  },
  {
    "type": "POST",
    "url": "/companies/search",
    "title": "POST /companies/search",
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -H \"X-COMPARE-REST-API-KEY: 1234567890\" \n    -i \"http://apibeta.compargo.com/v1/companies/?countryCode=ph&language=en\"\n    -d \"query={\"status\":\"1\"}&\n        fields=id,name,description,alias,logo,link,language,revenueValue,status,fax,phone&\n        sort=-id,name&\n        limit=10\"\n"
      }
    ],
    "description": "<p>Read data of all Companies</p>",
    "name": "Search",
    "group": "Companies",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "field": "X-COMPARE-REST-API-KEY",
            "optional": false,
            "description": "<p>Companies unique access-key.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "field": "language",
            "optional": false,
            "description": "<p>Mandatory Language.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "countryCode",
            "optional": false,
            "description": "<p>Mandatory Country Code.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "query",
            "optional": true,
            "description": "<p>Optional query conditions that rows must satisfy to be selected.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "fields",
            "optional": true,
            "description": "<p>Optional field indicates a column that you want to retrieve.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "sort",
            "optional": true,
            "description": "<p>Optional sort orders columns selected for output.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "limit",
            "defaultValue": "0",
            "optional": true,
            "description": "<p>Optional limit used to constrain the number of rows returned.                                                     When offset parameter is present, the limit specifies the offset                                                  of the first row to return. When count parameter exists, the limit                                                   identifies all the rows returned and with default 0.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "offset",
            "optional": true,
            "description": "<p>Optional offset specifies the maximum number of rows to return.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "count",
            "defaultValue": "1",
            "optional": true,
            "description": "<p>Optional count with default 1. Returns the count of companies.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "field": "id",
            "optional": false,
            "description": "<p>ID of the Company.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "name",
            "optional": false,
            "description": "<p>Name of the Company.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "description",
            "optional": false,
            "description": "<p>Description of the Company.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "alias",
            "optional": false,
            "description": "<p>Alias of the Company.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "logo",
            "optional": false,
            "description": "<p>Logo of the Company.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "link",
            "optional": false,
            "description": "<p>Link of the Company.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "revenueValue",
            "optional": false,
            "description": "<p>Language of the Company.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "field": "status",
            "optional": false,
            "description": "<p>Status Flag of the Company.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "field": "active",
            "optional": false,
            "description": "<p>Active Flag of the Company.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "field": "created",
            "optional": false,
            "description": "<p>Creation date of the Company.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "field": "modified",
            "optional": false,
            "description": "<p>Modification date of the Company.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "createdBy",
            "optional": false,
            "description": "<p>ID of the User who created the Company.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "modifiedBy",
            "optional": false,
            "description": "<p>ID of the User who modified the Company.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "   HTTP/1.1 200 OK\n   {\n     \"id\": \"10f0c896-2134-11e4-bb06-0a68ec684316\",\n     \"name\": \"BPI\",\n     \"alias\": \"bpi\",\n     \"logo\": \"ph/companies/1_bpi.jpg\",\n     \"link\": \"bpicards.com\",\n     \"description\": \"BPI\",\n     \"language\": \"en\",\n     \"revenueValue\": \"5.00\",\n     \"status\": \"1\",\n      \"fax\": \"1234567\",\n     \"phone\": \"1234567\"\n   },\n   {\n     \"id\": \"dc7c34e2-1eae-11e4-b32d-eff91066cccf\",\n     \"name\": \"BDO\",\n     \"alias\": \"bdo\",\n     \"description\": \"BDO\",\n     \"logo\": \"ph/companies/bdo.jpg\",\n     \"link\": \"bdo.com\",\n     \"language\": \"en\",\n     \"revenueValue\": \"5.00\",\n     \"status\": \"1\",\n     \"fax\": \"1234567\",\n     \"phone\": \"1234567\"\n   }\n"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "field": "InvalidAccessToken",
            "optional": false,
            "description": "<p>The access token is invalid.</p>"
          },
          {
            "group": "Error 4xx",
            "field": "MissingAuthenticationCredentials",
            "optional": false,
            "description": "<p>The authentication credentials are missing.</p>"
          },
          {
            "group": "Error 4xx",
            "field": "WrongFieldsReturned",
            "optional": false,
            "description": "<p>The requested fields are not available.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "   HTTP/1.1 401 Unauthorized\n   {\n     \"error\": \"InvalidAccessToken\"\n   }\n"
        },
        {
          "title": "Error-Response:",
          "content": "   HTTP/1.1 401 Unauthorized\n   {\n     \"error\": \"MissingAuthenticationCredentials\"\n   }\n"
        },
        {
          "title": "Error-Response:",
          "content": "   HTTP/1.1 401 Unauthorized\n   {\n     \"error\": \"WrongFieldsReturned\"\n   }\n"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "comparison-api/App/Modules/Backend/Controllers/CompaniesController.php"
  },
  {
    "type": "post",
    "url": "/companies/search/:id",
    "title": "GET /companies/search/:id",
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -H \"X-COMPARE-REST-API-KEY: 1234567890\"\n    -i \"http://apibeta.compargo.com/v1/companies/search/4c8367bc-319a-11e4-988c-7d9574853fac/?countryCode=ph&language=en\"\n"
      }
    ],
    "description": "<p>Read data of a Companies</p>",
    "name": "SearchOne",
    "group": "Companies",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "field": "X-COMPARE-REST-API-KEY",
            "optional": false,
            "description": "<p>Companies unique access-key.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "field": "language",
            "optional": false,
            "description": "<p>Mandatory Language.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "countryCode",
            "optional": false,
            "description": "<p>Mandatory Country Code.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "id",
            "optional": false,
            "description": "<p>Mandatory Company unique ID.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "field": "id",
            "optional": false,
            "description": "<p>ID of the Company.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "name",
            "optional": false,
            "description": "<p>Name of the Company.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "description",
            "optional": false,
            "description": "<p>Description of the Company.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "alias",
            "optional": false,
            "description": "<p>Alias of the Company.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "logo",
            "optional": false,
            "description": "<p>Logo of the Company.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "link",
            "optional": false,
            "description": "<p>Link of the Company.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "revenueValue",
            "optional": false,
            "description": "<p>Language of the Company.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "field": "status",
            "optional": false,
            "description": "<p>Status Flag of the Company.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "field": "active",
            "optional": false,
            "description": "<p>Active Flag of the Company.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "field": "created",
            "optional": false,
            "description": "<p>Creation date of the Company.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "field": "modified",
            "optional": false,
            "description": "<p>Modification date of the Company.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "createdBy",
            "optional": false,
            "description": "<p>ID of the User who created the Company.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "modifiedBy",
            "optional": false,
            "description": "<p>ID of the User who modified the Company.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "   HTTP/1.1 200 OK\n   {\n     \"id\": \"10f0c896-2134-11e4-bb06-0a68ec684316\",\n     \"name\": \"BPI\",\n     \"alias\": \"bpi\",\n     \"logo\": \"ph/companies/1_bpi.jpg\",\n     \"link\": \"bpicards.com\",\n     \"description\": \"BPI\",\n     \"language\": \"en\",\n     \"revenueValue\": \"5.00\",\n     \"status\": \"1\",\n     \"created\": \"2014-08-11 10:47:03\",\n     \"modified\": \"2014-08-19 12:36:58\",\n     \"createdBy\": \"a8838d12-1dcc-11e4-b32d-eff91066cccf\",\n     \"modifiedBy\": \"a8838d12-1dcc-11e4-b32d-eff91066cccf\",\n     \"fax\": \"1234567\",\n     \"phone\": \"1234567\"\n   }\n"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "field": "CompanyNotFound",
            "optional": false,
            "description": "<p>The id of the Company was not found.</p>"
          },
          {
            "group": "Error 4xx",
            "field": "InvalidAccessToken",
            "optional": false,
            "description": "<p>The access token is invalid.</p>"
          },
          {
            "group": "Error 4xx",
            "field": "MissingAuthenticationCredentials",
            "optional": false,
            "description": "<p>The authentication credentials are missing.</p>"
          },
          {
            "group": "Error 4xx",
            "field": "RouteNotFound",
            "optional": false,
            "description": "<p>That route was not found on the server.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "   HTTP/1.1 404 Not Found\n   {\n     \"error\": \"CompanyNotFound\"\n   }\n"
        },
        {
          "title": "Error-Response:",
          "content": "   HTTP/1.1 401 Unauthorized\n   {\n     \"error\": \"InvalidAccessToken\"\n   }\n"
        },
        {
          "title": "Error-Response:",
          "content": "   HTTP/1.1 401 Unauthorized\n   {\n     \"error\": \"MissingAuthenticationCredentials\"\n   }\n"
        },
        {
          "title": "Error-Response:",
          "content": "   HTTP/1.1 404\n   {\n     \"error\": \"RouteNotFound\"\n   }\n"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "comparison-api/App/Modules/Backend/Controllers/CompaniesController.php"
  },
  {
    "type": "delete",
    "url": "/companies_options/:id",
    "title": "DELETE /companies_options/:id",
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i -X DELETE \"http://apibeta.compargo.com/v1/companies_options/6916ee92-2805-11e4-bd33-17609cecca2f\t\n    -H \"X-COMPARE-REST-API-KEY: 1234567890\"\n"
      }
    ],
    "description": "<p>Delete a Companies Option</p>",
    "name": "Delete",
    "group": "Companies_Options",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "field": "X-COMPARE-REST-API-KEY",
            "optional": false,
            "description": "<p>Companies Options unique access-key.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "field": "language",
            "optional": false,
            "description": "<p>Mandatory Language.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "countryCode",
            "optional": false,
            "description": "<p>Mandatory Country Code.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "id",
            "optional": false,
            "description": "<p>Mandatory Companies Option Unique ID.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "field": "id",
            "optional": false,
            "description": "<p>The ID of Companies Option.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "   HTTP/1.1 200 OK\n   {\n     \"id\": \"6916ee92-2805-11e4-bd33-17609cecca2f\"\n   }\n"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "field": "InvalidAccessToken",
            "optional": false,
            "description": "<p>The access token is invalid.</p>"
          },
          {
            "group": "Error 4xx",
            "field": "MissingAuthenticationCredentials",
            "optional": false,
            "description": "<p>The authentication credentials are missing.</p>"
          },
          {
            "group": "Error 4xx",
            "field": "CompaniesOptionNotFound",
            "optional": false,
            "description": "<p>The id of the Companies Option was not found.</p>"
          },
          {
            "group": "Error 4xx",
            "field": "RouteNotFound",
            "optional": false,
            "description": "<p>That route was not found on the server.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "   HTTP/1.1 401 Unauthorized\n   {\n     \"error\": \"InvalidAccessToken\"\n   }\n"
        },
        {
          "title": "Error-Response:",
          "content": "   HTTP/1.1 401 Unauthorized\n   {\n     \"error\": \"MissingAuthenticationCredentials\"\n   }\n"
        },
        {
          "title": "Error-Response:",
          "content": "   HTTP/1.1 404 Not Found\n   {\n     \"error\": \"CompaniesOptionNotFound\"\n   }\n"
        },
        {
          "title": "Error-Response:",
          "content": "   HTTP/1.1 404 \n   {\n     \"error\": \"RouteNotFound\"\n   }\n"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "comparison-api/App/Modules/Backend/Controllers/CompaniesOptionsController.php"
  },
  {
    "type": "get",
    "url": "/companies_options",
    "title": "GET /companies_options",
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -H \"X-COMPARE-REST-API-KEY: 1234567890\" \n    -i \"http://apibeta.compargo.com/v1/companies_options/?countryCode=ph&language=en&\n        query={\"status\":\"1\"}&fields=id,modelId,category,name,value,label,editable,visibility,status&\n        sort=-id,category,name&\n        limit=20\"\n"
      }
    ],
    "description": "<p>Read data of all Companies Options</p>",
    "name": "Get",
    "group": "Companies_Options",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "field": "X-COMPARE-REST-API-KEY",
            "optional": false,
            "description": "<p>Companies Options unique access-key.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "field": "language",
            "optional": false,
            "description": "<p>Mandatory Language.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "countryCode",
            "optional": false,
            "description": "<p>Mandatory Country Code.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "query",
            "optional": true,
            "description": "<p>Optional query conditions that rows must satisfy to be selected.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "fields",
            "optional": true,
            "description": "<p>Optional field indicates a column that you want to retrieve.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "sort",
            "optional": true,
            "description": "<p>Optional sort orders columns selected for output.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "limit",
            "defaultValue": "0",
            "optional": true,
            "description": "<p>Optional limit used to constrain the number of rows returned.                                                     When offset parameter is present, the limit specifies the offset                                                  of the first row to return. When count parameter exists, the limit                                                   identifies all the rows returned and with default 0.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "offset",
            "optional": true,
            "description": "<p>Optional offset specifies the maximum number of rows to return.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "count",
            "defaultValue": "1",
            "optional": true,
            "description": "<p>Optional count with default 1. Returns the count of companies options.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "field": "id",
            "optional": false,
            "description": "<p>ID of the Companies Options.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "modelId",
            "optional": false,
            "description": "<p>Brand ID/Company ID of the Companies Options.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "category",
            "optional": false,
            "description": "<p>Brand/Company Category of the Companies Options.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "name",
            "optional": false,
            "description": "<p>Name of the Companies Options.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "value",
            "optional": false,
            "description": "<p>Value of the Companies Options.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "label",
            "optional": false,
            "description": "<p>Label of the Companies Options.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "editable",
            "optional": false,
            "description": "<p>Editable Flag of the Companies Options.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "visibility",
            "optional": false,
            "description": "<p>Visibility Flag of the Companies Options.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "field": "status",
            "optional": false,
            "description": "<p>Status Flag of the Companies Options.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "field": "active",
            "optional": false,
            "description": "<p>Active Flag of the Companies Options.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "field": "created",
            "optional": false,
            "description": "<p>Creation date of the Companies Options.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "field": "modified",
            "optional": false,
            "description": "<p>Modification date of the Companies Options.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "createdBy",
            "optional": false,
            "description": "<p>ID of the User who created the Companies Options.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "modifiedBy",
            "optional": false,
            "description": "<p>ID of the User who modified the Companies Options.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "   HTTP/1.1 200 OK\n   {\n     \"id\": \"8a048714-2791-11e4-bd33-17609cecca2f\",\n     \"modelId\": \"10f0c896-2134-11e4-bb06-0a68ec684316\",\n     \"category\": \"company\",\n     \"name\": \"fax\",\n     \"value\": \"123456789\",\n     \"label\": \"\",\n     \"editable\": \"0\",\n     \"visibility\": \"0\",\n     \"status\": \"1\"\n   },\n   {\n     \"id\": \"6916ee92-2805-11e4-bd33-17609cecca2f\",\n     \"modelId\": \"10f0c896-2134-11e4-bb06-0a68ec684316\",\n     \"category\": \"company\",\n     \"name\": \"phone\",\n     \"value\": \"6775467897\",\n     \"label\": \"\",\n     \"editable\": \"0\",\n     \"visibility\": \"0\",\n     \"status\": \"1\"\n   }\n"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "field": "InvalidAccessToken",
            "optional": false,
            "description": "<p>The access token is invalid.</p>"
          },
          {
            "group": "Error 4xx",
            "field": "MissingAuthenticationCredentials",
            "optional": false,
            "description": "<p>The authentication credentials are missing.</p>"
          },
          {
            "group": "Error 4xx",
            "field": "WrongFieldsReturned",
            "optional": false,
            "description": "<p>The requested fields are not available.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "   HTTP/1.1 401 Unauthorized\n   {\n     \"error\": \"InvalidAccessToken\"\n   }\n"
        },
        {
          "title": "Error-Response:",
          "content": "   HTTP/1.1 401 Unauthorized\n   {\n     \"error\": \"MissingAuthenticationCredentials\"\n   }\n"
        },
        {
          "title": "Error-Response:",
          "content": "   HTTP/1.1 401 Unauthorized\n   {\n     \"error\": \"WrongFieldsReturned\"\n   }\n"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "comparison-api/App/Modules/Backend/Controllers/CompaniesOptionsController.php"
  },
  {
    "type": "get",
    "url": "/companies_options/:id",
    "title": "GET /companies_options/:id",
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -H \"X-COMPARE-REST-API-KEY: 1234567890\" \n    -i \"http://apibeta.compargo.com/v1/companies_options/05a5ec26-372a-11e4-b18a-fe7344fb1ea4/?countryCode=ph&language=en\"\n"
      }
    ],
    "description": "<p>Read data of a Companies Options</p>",
    "name": "GetOne",
    "group": "Companies_Options",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "field": "X-COMPARE-REST-API-KEY",
            "optional": false,
            "description": "<p>Companies Options unique access-key.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "field": "language",
            "optional": false,
            "description": "<p>Mandatory Language.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "countryCode",
            "optional": false,
            "description": "<p>Mandatory Country Code.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "id",
            "optional": false,
            "description": "<p>Mandatory Companies Options unique ID.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "field": "id",
            "optional": false,
            "description": "<p>ID of the Companies Option.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "modelId",
            "optional": false,
            "description": "<p>Brand ID/Company ID of the Companies Option.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "category",
            "optional": false,
            "description": "<p>Brand/Company Category of the Companies Option.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "name",
            "optional": false,
            "description": "<p>Name of the Companies Option.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "value",
            "optional": false,
            "description": "<p>Value of the Companies Option.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "label",
            "optional": false,
            "description": "<p>Label of the Companies Option.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "editable",
            "optional": false,
            "description": "<p>Editable Flag of the Companies Option.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "visibility",
            "optional": false,
            "description": "<p>Visibility Flag of the Companies Option.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "field": "status",
            "optional": false,
            "description": "<p>Status Flag of the Companies Option.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "field": "active",
            "optional": false,
            "description": "<p>Active Flag of the Companies Option.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "field": "created",
            "optional": false,
            "description": "<p>Creation date of the Companies Option.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "field": "modified",
            "optional": false,
            "description": "<p>Modification date of the Companies Option.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "createdBy",
            "optional": false,
            "description": "<p>ID of the User who created the Companies Option.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "modifiedBy",
            "optional": false,
            "description": "<p>ID of the User who modified the Companies Option.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "   HTTP/1.1 200 OK\n   {\n     \"id\": \"8a048714-2791-11e4-bd33-17609cecca2f\",\n     \"modelId\": \"10f0c896-2134-11e4-bb06-0a68ec684316\",\n     \"category\": \"company\",\n     \"name\": \"fax\",\n     \"value\": \"123456789\",\n     \"label\": \"\",\n     \"editable\": \"0\",\n     \"visibility\": \"0\",\n     \"status\": \"1\"\n   }\n"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "field": "CompaniesOptionNotFound",
            "optional": false,
            "description": "<p>The id of the Companies Option was not found.</p>"
          },
          {
            "group": "Error 4xx",
            "field": "InvalidAccessToken",
            "optional": false,
            "description": "<p>The access token is invalid.</p>"
          },
          {
            "group": "Error 4xx",
            "field": "MissingAuthenticationCredentials",
            "optional": false,
            "description": "<p>The authentication credentials are missing.</p>"
          },
          {
            "group": "Error 4xx",
            "field": "RouteNotFound",
            "optional": false,
            "description": "<p>That route was not found on the server.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "   HTTP/1.1 404 Not Found\n   {\n     \"error\": \"CompaniesOptionNotFound\"\n   }\n"
        },
        {
          "title": "Error-Response:",
          "content": "   HTTP/1.1 401 Unauthorized\n   {\n     \"error\": \"InvalidAccessToken\"\n   }\n"
        },
        {
          "title": "Error-Response:",
          "content": "   HTTP/1.1 401 Unauthorized\n   {\n     \"error\": \"MissingAuthenticationCredentials\"\n   }\n"
        },
        {
          "title": "Error-Response:",
          "content": "   HTTP/1.1 404 \n   {\n     \"error\": \"RouteNotFound\"\n   }\n"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "comparison-api/App/Modules/Backend/Controllers/CompaniesOptionsController.php"
  },
  {
    "type": "post",
    "url": "/companies_options",
    "title": "POST /companies_options",
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i -X POST \"http://apibeta.compargo.com/v1/companies_options/?countryCode=ph&language=en\"\n    -H \"X-COMPARE-REST-API-KEY: 1234567890\"\n    -d \"modelId=10f0c896-2134-11e4-bb06-0a68ec684316&\n        category=company&\n        name=address&\n        value=4th Floor-Ayala Wing, BPI Head Office, Ayala Ave cor Paseo de Roxas, Makati City&\n        status=1&\n        editable=1&\n        visibility=1\"\n"
      }
    ],
    "description": "<p>Create a new Companies Options</p>",
    "name": "Post",
    "group": "Companies_Options",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "field": "X-COMPARE-REST-API-KEY",
            "optional": false,
            "description": "<p>Companies Options unique access-key.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "field": "language",
            "optional": false,
            "description": "<p>Mandatory Language.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "countryCode",
            "optional": false,
            "description": "<p>Mandatory Country code.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "modelId",
            "optional": false,
            "description": "<p>Mandatory Brand ID/Company ID of Companies Options.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "category",
            "optional": false,
            "description": "<p>Mandatory Brand/Company Category of Companies Options.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "name",
            "optional": false,
            "description": "<p>Mandatory Name of the Companies Options.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "value",
            "optional": false,
            "description": "<p>Mandatory Value of the Companies Options.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "label",
            "optional": true,
            "description": "<p>Optional Label of the Companies Options.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "editable",
            "defaultValue": "0",
            "optional": true,
            "description": "<p>Optional Editable Flag of the Companies Options.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "visibility",
            "defaultValue": "0",
            "optional": true,
            "description": "<p>Optional Visibility Value of the Companies Options.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "status",
            "defaultValue": "0",
            "optional": true,
            "description": "<p>Optional Status of the Companies Options.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "createdBy",
            "optional": true,
            "description": "<p>Optional ID of the User who created the Companies Options.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "modifiedBy",
            "optional": true,
            "description": "<p>Optional ID of the User who modified the Companies Options.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "field": "id",
            "optional": false,
            "description": "<p>The new Channel-ID.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "   HTTP/1.1 200 OK\n   {\n     \"id\": \"96b3d052-3716-11e4-b18a-fe7344fb1ea4\"\n   }\n"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "field": "BadInputParameter",
            "optional": false,
            "description": "<p>The request cannot be fulfilled due to bad syntax.</p>"
          },
          {
            "group": "Error 4xx",
            "field": "InvalidAccessToken",
            "optional": false,
            "description": "<p>The access token is invalid.</p>"
          },
          {
            "group": "Error 4xx",
            "field": "MissingAuthenticationCredentials",
            "optional": false,
            "description": "<p>The authentication credentials are missing.</p>"
          },
          {
            "group": "Error 4xx",
            "field": "RouteNotFound",
            "optional": false,
            "description": "<p>That route was not found on the server.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "   HTTP/1.1 400\n   {\n     \"error\": \"BadInputParameter\"\n   }\n"
        },
        {
          "title": "Error-Response:",
          "content": "   HTTP/1.1 401 Unauthorized\n   {\n     \"error\": \"InvalidAccessToken\"\n   }\n"
        },
        {
          "title": "Error-Response:",
          "content": "   HTTP/1.1 401 Unauthorized\n   {\n     \"error\": \"MissingAuthenticationCredentials\"\n   }\n"
        },
        {
          "title": "Error-Response:",
          "content": "   HTTP/1.1 404 \n   {\n     \"error\": \"RouteNotFound\"\n   }\n"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "comparison-api/App/Modules/Backend/Controllers/CompaniesOptionsController.php"
  },
  {
    "type": "put",
    "url": "/companies_options/:id",
    "title": "PUT /companies_options/:id",
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i -X PUT \"http://apibeta.compargo.com/v1/companies_options/8a048714-2791-11e4-bd33-17609cecca2f/?countryCode=ph&language=en\"\n    -H \"X-COMPARE-REST-API-KEY: 1234567890\"\n    -d \"category=brand&\n        value=1234567&\n        editable=1&\n        visibility=1&\n        status=0\"\n"
      }
    ],
    "description": "<p>Update a Companies Option</p>",
    "name": "Put",
    "group": "Companies_Options",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "field": "X-COMPARE-REST-API-KEY",
            "optional": false,
            "description": "<p>Companies Options unique access-key.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "field": "language",
            "optional": false,
            "description": "<p>Mandatory Language.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "countryCode",
            "optional": false,
            "description": "<p>Mandatory Country Code.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "id",
            "optional": false,
            "description": "<p>Mandatory Companies Option Unique ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "modelId",
            "optional": false,
            "description": "<p>Mandatory Company ID/Brand ID of the Companies Option.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "category",
            "optional": false,
            "description": "<p>Mandatory Company/Model ID of the Companies Option.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "name",
            "optional": false,
            "description": "<p>Mandatory Name of the Companies Option.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "value",
            "optional": false,
            "description": "<p>Mandatory Value of the Companies Option.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "label",
            "optional": true,
            "description": "<p>Optional Label of the Companies Option.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "editable",
            "optional": true,
            "description": "<p>Optional Editable Flag of the Companies Option.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "visibility",
            "optional": true,
            "description": "<p>Optional Visibility Flag of the Companies Option.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "status",
            "optional": true,
            "description": "<p>Optional Status of the Companies Option.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "createdBy",
            "optional": true,
            "description": "<p>Optional ID of the User who created the Companies Option.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "modifiedBy",
            "optional": true,
            "description": "<p>Optional ID of the User who modified the Companies Option.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "   HTTP/1.1 200 OK\n   {\n     \"id\": \"8a048714-2791-11e4-bd33-17609cecca2f\"\n   }\n"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "field": "BadInputParameter",
            "optional": false,
            "description": "<p>The request cannot be fulfilled due to bad syntax.</p>"
          },
          {
            "group": "Error 4xx",
            "field": "InvalidAccessToken",
            "optional": false,
            "description": "<p>The access token is invalid.</p>"
          },
          {
            "group": "Error 4xx",
            "field": "MissingAuthenticationCredentials",
            "optional": false,
            "description": "<p>The authentication credentials are missing.</p>"
          },
          {
            "group": "Error 4xx",
            "field": "CompaniesOptionNotFound",
            "optional": false,
            "description": "<p>The id of the Companies Option was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "   HTTP/1.1 400\n   {\n     \"error\": \"BadInputParameter\"\n   }\n"
        },
        {
          "title": "Error-Response:",
          "content": "   HTTP/1.1 401 Unauthorized\n   {\n     \"error\": \"InvalidAccessToken\"\n   }\n"
        },
        {
          "title": "Error-Response:",
          "content": "   HTTP/1.1 401 Unauthorized\n   {\n     \"error\": \"MissingAuthenticationCredentials\"\n   }\n"
        },
        {
          "title": "Error-Response:",
          "content": "   HTTP/1.1 404 Not Found\n   {\n     \"error\": \"CompaniesOptionNotFound\"\n   }\n"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "comparison-api/App/Modules/Backend/Controllers/CompaniesOptionsController.php"
  },
  {
    "type": "post",
    "url": "/companies_options",
    "title": "POST /companies_options",
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -H \"X-COMPARE-REST-API-KEY: 1234567890\" \n    -i -X POST \"http://apibeta.compargo.com/v1/companies_options/?countryCode=ph&language=en\"\n    -D \"query={\"status\":\"1\"}&fields=id,modelId,category,name,value,label,editable,visibility,status&\n        sort=-id,category,name&\n        limit=20\"\n"
      }
    ],
    "description": "<p>Read data of all Companies Options</p>",
    "name": "Search",
    "group": "Companies_Options",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "field": "X-COMPARE-REST-API-KEY",
            "optional": false,
            "description": "<p>Companies Options unique access-key.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "field": "language",
            "optional": false,
            "description": "<p>Mandatory Language.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "countryCode",
            "optional": false,
            "description": "<p>Mandatory Country Code.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "query",
            "optional": true,
            "description": "<p>Optional query conditions that rows must satisfy to be selected.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "fields",
            "optional": true,
            "description": "<p>Optional field indicates a column that you want to retrieve.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "sort",
            "optional": true,
            "description": "<p>Optional sort orders columns selected for output.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "limit",
            "defaultValue": "0",
            "optional": true,
            "description": "<p>Optional limit used to constrain the number of rows returned.                                                     When offset parameter is present, the limit specifies the offset                                                  of the first row to return. When count parameter exists, the limit                                                   identifies all the rows returned and with default 0.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "offset",
            "optional": true,
            "description": "<p>Optional offset specifies the maximum number of rows to return.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "count",
            "defaultValue": "1",
            "optional": true,
            "description": "<p>Optional count with default 1. Returns the count of companies options.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "field": "id",
            "optional": false,
            "description": "<p>ID of the Companies Options.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "modelId",
            "optional": false,
            "description": "<p>Brand ID/Company ID of the Companies Options.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "category",
            "optional": false,
            "description": "<p>Brand/Company Category of the Companies Options.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "name",
            "optional": false,
            "description": "<p>Name of the Companies Options.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "value",
            "optional": false,
            "description": "<p>Value of the Companies Options.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "label",
            "optional": false,
            "description": "<p>Label of the Companies Options.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "editable",
            "optional": false,
            "description": "<p>Editable Flag of the Companies Options.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "visibility",
            "optional": false,
            "description": "<p>Visibility Flag of the Companies Options.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "field": "status",
            "optional": false,
            "description": "<p>Status Flag of the Companies Options.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "field": "active",
            "optional": false,
            "description": "<p>Active Flag of the Companies Options.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "field": "created",
            "optional": false,
            "description": "<p>Creation date of the Companies Options.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "field": "modified",
            "optional": false,
            "description": "<p>Modification date of the Companies Options.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "createdBy",
            "optional": false,
            "description": "<p>ID of the User who created the Companies Options.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "modifiedBy",
            "optional": false,
            "description": "<p>ID of the User who modified the Companies Options.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "   HTTP/1.1 200 OK\n   {\n     \"id\": \"8a048714-2791-11e4-bd33-17609cecca2f\",\n     \"modelId\": \"10f0c896-2134-11e4-bb06-0a68ec684316\",\n     \"category\": \"company\",\n     \"name\": \"fax\",\n     \"value\": \"123456789\",\n     \"label\": \"\",\n     \"editable\": \"0\",\n     \"visibility\": \"0\",\n     \"status\": \"1\"\n   },\n   {\n     \"id\": \"6916ee92-2805-11e4-bd33-17609cecca2f\",\n     \"modelId\": \"10f0c896-2134-11e4-bb06-0a68ec684316\",\n     \"category\": \"company\",\n     \"name\": \"phone\",\n     \"value\": \"6775467897\",\n     \"label\": \"\",\n     \"editable\": \"0\",\n     \"visibility\": \"0\",\n     \"status\": \"1\"\n   }\n"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "field": "InvalidAccessToken",
            "optional": false,
            "description": "<p>The access token is invalid.</p>"
          },
          {
            "group": "Error 4xx",
            "field": "MissingAuthenticationCredentials",
            "optional": false,
            "description": "<p>The authentication credentials are missing.</p>"
          },
          {
            "group": "Error 4xx",
            "field": "WrongFieldsReturned",
            "optional": false,
            "description": "<p>The requested fields are not available.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "   HTTP/1.1 401 Unauthorized\n   {\n     \"error\": \"InvalidAccessToken\"\n   }\n"
        },
        {
          "title": "Error-Response:",
          "content": "   HTTP/1.1 401 Unauthorized\n   {\n     \"error\": \"MissingAuthenticationCredentials\"\n   }\n"
        },
        {
          "title": "Error-Response:",
          "content": "   HTTP/1.1 401 Unauthorized\n   {\n     \"error\": \"WrongFieldsReturned\"\n   }\n"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "comparison-api/App/Modules/Backend/Controllers/CompaniesOptionsController.php"
  },
  {
    "type": "post",
    "url": "/companies_options/:id",
    "title": "POST /companies_options/:id",
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -H \"X-COMPARE-REST-API-KEY: 1234567890\" \n    -i -X POST \"http://apibeta.compargo.com/v1/companies_options/05a5ec26-372a-11e4-b18a-fe7344fb1ea4/?countryCode=ph&language=en\"\n"
      }
    ],
    "description": "<p>Read data of a Companies Options</p>",
    "name": "SearchOne",
    "group": "Companies_Options",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "field": "X-COMPARE-REST-API-KEY",
            "optional": false,
            "description": "<p>Companies Options unique access-key.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "field": "language",
            "optional": false,
            "description": "<p>Mandatory Language.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "countryCode",
            "optional": false,
            "description": "<p>Mandatory Country Code.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "id",
            "optional": false,
            "description": "<p>Mandatory Companies Options unique ID.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "field": "id",
            "optional": false,
            "description": "<p>ID of the Companies Option.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "modelId",
            "optional": false,
            "description": "<p>Brand ID/Company ID of the Companies Option.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "category",
            "optional": false,
            "description": "<p>Brand/Company Category of the Companies Option.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "name",
            "optional": false,
            "description": "<p>Name of the Companies Option.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "value",
            "optional": false,
            "description": "<p>Value of the Companies Option.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "label",
            "optional": false,
            "description": "<p>Label of the Companies Option.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "editable",
            "optional": false,
            "description": "<p>Editable Flag of the Companies Option.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "visibility",
            "optional": false,
            "description": "<p>Visibility Flag of the Companies Option.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "field": "status",
            "optional": false,
            "description": "<p>Status Flag of the Companies Option.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "field": "active",
            "optional": false,
            "description": "<p>Active Flag of the Companies Option.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "field": "created",
            "optional": false,
            "description": "<p>Creation date of the Companies Option.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "field": "modified",
            "optional": false,
            "description": "<p>Modification date of the Companies Option.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "createdBy",
            "optional": false,
            "description": "<p>ID of the User who created the Companies Option.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "modifiedBy",
            "optional": false,
            "description": "<p>ID of the User who modified the Companies Option.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "   HTTP/1.1 200 OK\n   {\n     \"id\": \"8a048714-2791-11e4-bd33-17609cecca2f\",\n     \"modelId\": \"10f0c896-2134-11e4-bb06-0a68ec684316\",\n     \"category\": \"company\",\n     \"name\": \"fax\",\n     \"value\": \"123456789\",\n     \"label\": \"\",\n     \"editable\": \"0\",\n     \"visibility\": \"0\",\n     \"status\": \"1\"\n   }\n"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "field": "CompaniesOptionNotFound",
            "optional": false,
            "description": "<p>The id of the Companies Option was not found.</p>"
          },
          {
            "group": "Error 4xx",
            "field": "InvalidAccessToken",
            "optional": false,
            "description": "<p>The access token is invalid.</p>"
          },
          {
            "group": "Error 4xx",
            "field": "MissingAuthenticationCredentials",
            "optional": false,
            "description": "<p>The authentication credentials are missing.</p>"
          },
          {
            "group": "Error 4xx",
            "field": "RouteNotFound",
            "optional": false,
            "description": "<p>That route was not found on the server.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "   HTTP/1.1 404 Not Found\n   {\n     \"error\": \"CompaniesOptionNotFound\"\n   }\n"
        },
        {
          "title": "Error-Response:",
          "content": "   HTTP/1.1 401 Unauthorized\n   {\n     \"error\": \"InvalidAccessToken\"\n   }\n"
        },
        {
          "title": "Error-Response:",
          "content": "   HTTP/1.1 401 Unauthorized\n   {\n     \"error\": \"MissingAuthenticationCredentials\"\n   }\n"
        },
        {
          "title": "Error-Response:",
          "content": "   HTTP/1.1 404 \n   {\n     \"error\": \"RouteNotFound\"\n   }\n"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "comparison-api/App/Modules/Backend/Controllers/CompaniesOptionsController.php"
  },
  {
    "type": "delete",
    "url": "/country/:id",
    "title": "DELETE /country/:id",
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i -X DELETE \"http://apibeta.compargo.com/v1/country/07f44e24-1d43-11e4-b32d-eff91066cccf/?countryCode=ph&language=en\"\n    -H \"X-COMPARE-REST-API-KEY: 1234567890\"\n"
      }
    ],
    "description": "<p>Delete a Country</p>",
    "name": "Delete",
    "group": "Country",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "field": "X-COMPARE-REST-API-KEY",
            "optional": false,
            "description": "<p>Country unique access-key.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "field": "language",
            "optional": false,
            "description": "<p>Mandatory Language.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "countryCode",
            "optional": false,
            "description": "<p>Mandatory Country Code.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "id",
            "optional": false,
            "description": "<p>Mandatory Country Unique ID.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "field": "id",
            "optional": false,
            "description": "<p>The ID of Country.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "   HTTP/1.1 200 OK\n   {\n     \"id\": \"1535ebcc-22b8-11e4-bd33-17609cecca2f\"\n   }\n"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "field": "InvalidAccessToken",
            "optional": false,
            "description": "<p>The access token is invalid.</p>"
          },
          {
            "group": "Error 4xx",
            "field": "MissingAuthenticationCredentials",
            "optional": false,
            "description": "<p>The authentication credentials are missing.</p>"
          },
          {
            "group": "Error 4xx",
            "field": "CountryNotFound",
            "optional": false,
            "description": "<p>The id of the Country was not found.</p>"
          },
          {
            "group": "Error 4xx",
            "field": "RouteNotFound",
            "optional": false,
            "description": "<p>That route was not found on the server.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "   HTTP/1.1 401 Unauthorized\n   {\n     \"error\": \"InvalidAccessToken\"\n   }\n"
        },
        {
          "title": "Error-Response:",
          "content": "   HTTP/1.1 401 Unauthorized\n   {\n     \"error\": \"MissingAuthenticationCredentials\"\n   }\n"
        },
        {
          "title": "Error-Response:",
          "content": "   HTTP/1.1 404 Not Found\n   {\n     \"error\": \"CountryNotFound\"\n   }\n"
        },
        {
          "title": "Error-Response:",
          "content": "   HTTP/1.1 404 \n   {\n     \"error\": \"RouteNotFound\"\n   }\n"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "comparison-api/App/Modules/Backend/Controllers/CountryController.php"
  },
  {
    "type": "get",
    "url": "/country",
    "title": "GET /country",
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -H \"X-COMPARE-REST-API-KEY: 1234567890\" \n    -i \"http://apibeta.compargo.com/v1/country/?countryCode=ph&language=en&\n        query={\"status\":\"1\"}&\n        fields=id,name,description,status,active,created,modified,createdBy,modifiedBy&\n        sort=id,name&\n        limit=10\"\n"
      }
    ],
    "description": "<p>Read data of a Country</p>",
    "name": "Get",
    "group": "Country",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "field": "X-COMPARE-REST-API-KEY",
            "optional": false,
            "description": "<p>Area unique access-key.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "field": "language",
            "optional": false,
            "description": "<p>Mandatory Language.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "countryCode",
            "optional": false,
            "description": "<p>Mandatory Country Code.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "query",
            "optional": true,
            "description": "<p>Optional query conditions that rows must satisfy to be selected.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "fields",
            "optional": true,
            "description": "<p>Optional field indicates a column that you want to retrieve.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "sort",
            "optional": true,
            "description": "<p>Optional sort orders columns selected for output.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "limit",
            "defaultValue": "0",
            "optional": true,
            "description": "<p>Optional limit used to constrain the number of rows returned.                                                     When offset parameter is present, the limit specifies the offset                                                  of the first row to return. When count parameter exists, the limit                                                   identifies all the rows returned and with default 0.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "offset",
            "optional": true,
            "description": "<p>Optional offset specifies the maximum number of rows to return.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "count",
            "defaultValue": "1",
            "optional": true,
            "description": "<p>Optional count with default 1. Returns the count of country.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "field": "id",
            "optional": false,
            "description": "<p>ID of the Country.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "name",
            "optional": false,
            "description": "<p>Name of the Country.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "description",
            "optional": false,
            "description": "<p>Description of the Country.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "field": "status",
            "optional": false,
            "description": "<p>Status Flag of the Country.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "field": "active",
            "optional": false,
            "description": "<p>Active Flag of the Country.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "field": "created",
            "optional": false,
            "description": "<p>Creation date of the Country.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "field": "modified",
            "optional": false,
            "description": "<p>Modification date of the Country.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "createdBy",
            "optional": false,
            "description": "<p>ID of the User who created the Country.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "modifiedBy",
            "optional": false,
            "description": "<p>ID of the User who modified the Country.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "   HTTP/1.1 200 OK\n   {\n     \"id\": \"4de2ec7a-22b5-11e4-bd33-17609cecca2f\",\n     \"name\": \"Philippines\",\n     \"description\": \"\",\n     \"status\": \"1\",\n     \"active\": \"1\",\n     \"created\": \"2014-08-13 08:44:42\",\n     \"modified\": \"0000-00-00 00:00:00\",\n     \"createdBy\": \"a8838d12-1dcc-11e4-b32d-eff91066cccf\",\n     \"modifiedBy\": \"a8838d12-1dcc-11e4-b32d-eff91066cccf\"\n   }\n"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "field": "InvalidAccessToken",
            "optional": false,
            "description": "<p>The access token is invalid.</p>"
          },
          {
            "group": "Error 4xx",
            "field": "MissingAuthenticationCredentials",
            "optional": false,
            "description": "<p>The authentication credentials are missing.</p>"
          },
          {
            "group": "Error 4xx",
            "field": "WrongFieldsReturned",
            "optional": false,
            "description": "<p>The requested fields are not available.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "   HTTP/1.1 401 Unauthorized\n   {\n     \"error\": \"InvalidAccessToken\"\n   }\n"
        },
        {
          "title": "Error-Response:",
          "content": "   HTTP/1.1 401 Unauthorized\n   {\n     \"error\": \"MissingAuthenticationCredentials\"\n   }\n"
        },
        {
          "title": "Error-Response:",
          "content": "   HTTP/1.1 401 Unauthorized\n   {\n     \"error\": \"WrongFieldsReturned\"\n   }\n"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "comparison-api/App/Modules/Backend/Controllers/CountryController.php"
  },
  {
    "type": "get",
    "url": "/country/:id",
    "title": "GET /country/:id",
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -H \"X-COMPARE-REST-API-KEY: 1234567890\" \n    -i \"http://apibeta.compargo.com/v1/country/4de2ec7a-22b5-11e4-bd33-17609cecca2f/?countryCode=ph&language=en\"\n"
      }
    ],
    "description": "<p>Read data of a Country</p>",
    "name": "GetOne",
    "group": "Country",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "field": "X-COMPARE-REST-API-KEY",
            "optional": false,
            "description": "<p>Country unique access-key.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "field": "language",
            "optional": false,
            "description": "<p>Mandatory Language.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "countryCode",
            "optional": false,
            "description": "<p>Mandatory Country Code.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "id",
            "optional": false,
            "description": "<p>Mandatory Country unique ID.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "field": "id",
            "optional": false,
            "description": "<p>ID of the Country.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "name",
            "optional": false,
            "description": "<p>Name of the Country.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "alias",
            "optional": false,
            "description": "<p>Alias of the Country.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "description",
            "optional": false,
            "description": "<p>Description of the Country.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "field": "status",
            "optional": false,
            "description": "<p>Status of the Country.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "field": "active",
            "optional": false,
            "description": "<p>Flag of the Country.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "field": "created",
            "optional": false,
            "description": "<p>Creation date of the Country.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "field": "modified",
            "optional": false,
            "description": "<p>Modification date of the Country.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "createdBy",
            "optional": false,
            "description": "<p>ID of the User who created the Country.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "modifiedBy",
            "optional": false,
            "description": "<p>ID of the User who modified the Country.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "   HTTP/1.1 200 OK\n   {\n     \"id\": \"4de2ec7a-22b5-11e4-bd33-17609cecca2f\",\n     \"name\": \"Philippines\",\n     \"description\": \"\",\n     \"status\": \"1\",\n     \"active\": \"1\",\n     \"created\": \"2014-08-13 08:44:42\",\n     \"modified\": \"0000-00-00 00:00:00\",\n     \"createdBy\": \"a8838d12-1dcc-11e4-b32d-eff91066cccf\",\n     \"modifiedBy\": \"a8838d12-1dcc-11e4-b32d-eff91066cccf\"\n   }\n"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "field": "CountryNotFound",
            "optional": false,
            "description": "<p>The id of the Country was not found.</p>"
          },
          {
            "group": "Error 4xx",
            "field": "InvalidAccessToken",
            "optional": false,
            "description": "<p>The access token is invalid.</p>"
          },
          {
            "group": "Error 4xx",
            "field": "MissingAuthenticationCredentials",
            "optional": false,
            "description": "<p>The authentication credentials are missing.</p>"
          },
          {
            "group": "Error 4xx",
            "field": "RouteNotFound",
            "optional": false,
            "description": "<p>That route was not found on the server.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "   HTTP/1.1 404 Not Found\n   {\n     \"error\": \"CountryNotFound\"\n   }\n"
        },
        {
          "title": "Error-Response:",
          "content": "   HTTP/1.1 401 Unauthorized\n   {\n     \"error\": \"InvalidAccessToken\"\n   }\n"
        },
        {
          "title": "Error-Response:",
          "content": "   HTTP/1.1 401 Unauthorized\n   {\n     \"error\": \"MissingAuthenticationCredentials\"\n   }\n"
        },
        {
          "title": "Error-Response:",
          "content": "   HTTP/1.1 404 \n   {\n     \"error\": \"RouteNotFound\"\n   }\n"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "comparison-api/App/Modules/Backend/Controllers/CountryController.php"
  },
  {
    "type": "post",
    "url": "/country",
    "title": "POST /country",
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i -X POST \"http://apibeta.compargo.com/v1/country/?countryCode=ph&language=en\"\n    -H \"X-COMPARE-REST-API-KEY: 1234567890\"\n    -d \"name=Philippines&\n        description=Philippines&\n        status=1\"\n"
      }
    ],
    "description": "<p>Create a new Country</p>",
    "name": "Post",
    "group": "Country",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "field": "X-COMPARE-REST-API-KEY",
            "optional": false,
            "description": "<p>Country unique access-key.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "field": "language",
            "optional": false,
            "description": "<p>Mandatory Language.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "countryCode",
            "optional": false,
            "description": "<p>Mandatory Country code.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "name",
            "optional": false,
            "description": "<p>Mandatory Name of the Country.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "description",
            "optional": true,
            "description": "<p>Optional Description of the Country.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "alias",
            "optional": true,
            "description": "<p>Optional Alias of the Country.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "status",
            "defaultValue": "0",
            "optional": true,
            "description": "<p>Optional Status of the Country.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "createdBy",
            "optional": true,
            "description": "<p>Optional ID of the User who created the Country.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "modifiedBy",
            "optional": true,
            "description": "<p>Optional ID of the User who modified the Country.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "field": "id",
            "optional": false,
            "description": "<p>The new Country-ID.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "   HTTP/1.1 200 OK\n   {\n     \"id\": \"a33f2342-37c7-11e4-b18a-fe7344fb1ea4\"\n   }\n"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "field": "BadInputParameter",
            "optional": false,
            "description": "<p>The request cannot be fulfilled due to bad syntax.</p>"
          },
          {
            "group": "Error 4xx",
            "field": "InvalidAccessToken",
            "optional": false,
            "description": "<p>The access token is invalid.</p>"
          },
          {
            "group": "Error 4xx",
            "field": "MissingAuthenticationCredentials",
            "optional": false,
            "description": "<p>The authentication credentials are missing.</p>"
          },
          {
            "group": "Error 4xx",
            "field": "RouteNotFound",
            "optional": false,
            "description": "<p>That route was not found on the server.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "   HTTP/1.1 400\n   {\n     \"error\": \"BadInputParameter\"\n   }\n"
        },
        {
          "title": "Error-Response:",
          "content": "   HTTP/1.1 401 Unauthorized\n   {\n     \"error\": \"InvalidAccessToken\"\n   }\n"
        },
        {
          "title": "Error-Response:",
          "content": "   HTTP/1.1 401 Unauthorized\n   {\n     \"error\": \"MissingAuthenticationCredentials\"\n   }\n"
        },
        {
          "title": "Error-Response:",
          "content": "   HTTP/1.1 404 \n   {\n     \"error\": \"RouteNotFound\"\n   }\n"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "comparison-api/App/Modules/Backend/Controllers/CountryController.php"
  },
  {
    "type": "put",
    "url": "/country/:id",
    "title": "PUT /country/:id",
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i -X PUT \"http://apibeta.compargo.com/v1/country/07f44e24-1d43-11e4-b32d-eff91066cccf/?countryCode=ph&language=en\"\n    -H \"X-COMPARE-REST-API-KEY: 1234567890\"\n    -d \"name=Philippines&description=&status=1\"\n"
      }
    ],
    "description": "<p>Update a Country</p>",
    "name": "Put",
    "group": "Country",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "field": "X-COMPARE-REST-API-KEY",
            "optional": false,
            "description": "<p>Country unique access-key.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "field": "language",
            "optional": false,
            "description": "<p>Mandatory Language.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "countryCode",
            "optional": false,
            "description": "<p>Mandatory Country Code.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "id",
            "optional": false,
            "description": "<p>Mandatory Country Unique ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "name",
            "optional": false,
            "description": "<p>Mandatory Name of the Country.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "description",
            "optional": true,
            "description": "<p>Optional Description of the Country.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "status",
            "optional": true,
            "description": "<p>Optional Status of the Country.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "createdBy",
            "optional": true,
            "description": "<p>Optional ID of the User who created the Country.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "modifiedBy",
            "optional": true,
            "description": "<p>Optional ID of the User who modified the Country.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "   HTTP/1.1 200 OK\n   {\n     \"id\": \"07f44e24-1d43-11e4-b32d-eff91066cccf\"\n   }\n"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "field": "BadInputParameter",
            "optional": false,
            "description": "<p>The request cannot be fulfilled due to bad syntax.</p>"
          },
          {
            "group": "Error 4xx",
            "field": "InvalidAccessToken",
            "optional": false,
            "description": "<p>The access token is invalid.</p>"
          },
          {
            "group": "Error 4xx",
            "field": "MissingAuthenticationCredentials",
            "optional": false,
            "description": "<p>The authentication credentials are missing.</p>"
          },
          {
            "group": "Error 4xx",
            "field": "CountryNotFound",
            "optional": false,
            "description": "<p>The id of the Country was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "   HTTP/1.1 400\n   {\n     \"error\": \"BadInputParameter\"\n   }\n"
        },
        {
          "title": "Error-Response:",
          "content": "   HTTP/1.1 401 Unauthorized\n   {\n     \"error\": \"InvalidAccessToken\"\n   }\n"
        },
        {
          "title": "Error-Response:",
          "content": "   HTTP/1.1 401 Unauthorized\n   {\n     \"error\": \"MissingAuthenticationCredentials\"\n   }\n"
        },
        {
          "title": "Error-Response:",
          "content": "   HTTP/1.1 404 Not Found\n   {\n     \"error\": \"CountryNotFound\"\n   }\n"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "comparison-api/App/Modules/Backend/Controllers/CountryController.php"
  },
  {
    "type": "post",
    "url": "/country/search",
    "title": "POST /country/search",
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -H \"X-COMPARE-REST-API-KEY: 1234567890\" \n    -i \"http://apibeta.compargo.com/v1/country/search/?countryCode=ph&language=en\"\n    -d \"query={\"status\":\"1\"}&\n        fields=id,name,description,status,active,created,modified,createdBy,modifiedBy&\n        sort=id,name&\n        limit=10\"\n"
      }
    ],
    "description": "<p>Read data of a Country</p>",
    "name": "Search",
    "group": "Country",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "field": "X-COMPARE-REST-API-KEY",
            "optional": false,
            "description": "<p>Area unique access-key.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "field": "language",
            "optional": false,
            "description": "<p>Mandatory Language.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "countryCode",
            "optional": false,
            "description": "<p>Mandatory Country Code.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "query",
            "optional": true,
            "description": "<p>Optional query conditions that rows must satisfy to be selected.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "fields",
            "optional": true,
            "description": "<p>Optional field indicates a column that you want to retrieve.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "sort",
            "optional": true,
            "description": "<p>Optional sort orders columns selected for output.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "limit",
            "defaultValue": "0",
            "optional": true,
            "description": "<p>Optional limit used to constrain the number of rows returned.                                                     When offset parameter is present, the limit specifies the offset                                                  of the first row to return. When count parameter exists, the limit                                                   identifies all the rows returned and with default 0.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "offset",
            "optional": true,
            "description": "<p>Optional offset specifies the maximum number of rows to return.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "count",
            "defaultValue": "1",
            "optional": true,
            "description": "<p>Optional count with default 1. Returns the count of country.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "field": "id",
            "optional": false,
            "description": "<p>ID of the Country.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "name",
            "optional": false,
            "description": "<p>Name of the Country.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "description",
            "optional": false,
            "description": "<p>Description of the Country.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "field": "status",
            "optional": false,
            "description": "<p>Status Flag of the Country.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "field": "active",
            "optional": false,
            "description": "<p>Active Flag of the Country.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "field": "created",
            "optional": false,
            "description": "<p>Creation date of the Country.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "field": "modified",
            "optional": false,
            "description": "<p>Modification date of the Country.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "createdBy",
            "optional": false,
            "description": "<p>ID of the User who created the Country.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "modifiedBy",
            "optional": false,
            "description": "<p>ID of the User who modified the Country.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "   HTTP/1.1 200 OK\n   {\n     \"id\": \"4de2ec7a-22b5-11e4-bd33-17609cecca2f\",\n     \"name\": \"Philippines\",\n     \"description\": \"\",\n     \"status\": \"1\",\n     \"active\": \"1\",\n     \"created\": \"2014-08-13 08:44:42\",\n     \"modified\": \"0000-00-00 00:00:00\",\n     \"createdBy\": \"a8838d12-1dcc-11e4-b32d-eff91066cccf\",\n     \"modifiedBy\": \"a8838d12-1dcc-11e4-b32d-eff91066cccf\"\n   }\n"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "field": "InvalidAccessToken",
            "optional": false,
            "description": "<p>The access token is invalid.</p>"
          },
          {
            "group": "Error 4xx",
            "field": "MissingAuthenticationCredentials",
            "optional": false,
            "description": "<p>The authentication credentials are missing.</p>"
          },
          {
            "group": "Error 4xx",
            "field": "WrongFieldsReturned",
            "optional": false,
            "description": "<p>The requested fields are not available.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "   HTTP/1.1 401 Unauthorized\n   {\n     \"error\": \"InvalidAccessToken\"\n   }\n"
        },
        {
          "title": "Error-Response:",
          "content": "   HTTP/1.1 401 Unauthorized\n   {\n     \"error\": \"MissingAuthenticationCredentials\"\n   }\n"
        },
        {
          "title": "Error-Response:",
          "content": "   HTTP/1.1 401 Unauthorized\n   {\n     \"error\": \"WrongFieldsReturned\"\n   }\n"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "comparison-api/App/Modules/Backend/Controllers/CountryController.php"
  },
  {
    "type": "get",
    "url": "/country/search/:id",
    "title": "GET /country/search/:id",
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -H \"X-COMPARE-REST-API-KEY: 1234567890\" \n    -i \"http://apibeta.compargo.com/v1/country/search/4de2ec7a-22b5-11e4-bd33-17609cecca2f/?countryCode=ph&language=en\"\n"
      }
    ],
    "description": "<p>Read data of a Country</p>",
    "name": "SearchOne",
    "group": "Country",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "field": "X-COMPARE-REST-API-KEY",
            "optional": false,
            "description": "<p>Country unique access-key.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "field": "language",
            "optional": false,
            "description": "<p>Mandatory Language.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "countryCode",
            "optional": false,
            "description": "<p>Mandatory Country Code.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "id",
            "optional": false,
            "description": "<p>Mandatory Country unique ID.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "field": "id",
            "optional": false,
            "description": "<p>ID of the Country.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "name",
            "optional": false,
            "description": "<p>Name of the Country.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "alias",
            "optional": false,
            "description": "<p>Alias of the Country.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "description",
            "optional": false,
            "description": "<p>Description of the Country.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "field": "status",
            "optional": false,
            "description": "<p>Status of the Country.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "field": "active",
            "optional": false,
            "description": "<p>Flag of the Country.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "field": "created",
            "optional": false,
            "description": "<p>Creation date of the Country.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "field": "modified",
            "optional": false,
            "description": "<p>Modification date of the Country.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "createdBy",
            "optional": false,
            "description": "<p>ID of the User who created the Country.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "modifiedBy",
            "optional": false,
            "description": "<p>ID of the User who modified the Country.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "   HTTP/1.1 200 OK\n   {\n     \"id\": \"4de2ec7a-22b5-11e4-bd33-17609cecca2f\",\n     \"name\": \"Philippines\",\n     \"description\": \"\",\n     \"status\": \"1\",\n     \"active\": \"1\",\n     \"created\": \"2014-08-13 08:44:42\",\n     \"modified\": \"0000-00-00 00:00:00\",\n     \"createdBy\": \"a8838d12-1dcc-11e4-b32d-eff91066cccf\",\n     \"modifiedBy\": \"a8838d12-1dcc-11e4-b32d-eff91066cccf\"\n   }\n"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "field": "CountryNotFound",
            "optional": false,
            "description": "<p>The id of the Country was not found.</p>"
          },
          {
            "group": "Error 4xx",
            "field": "InvalidAccessToken",
            "optional": false,
            "description": "<p>The access token is invalid.</p>"
          },
          {
            "group": "Error 4xx",
            "field": "MissingAuthenticationCredentials",
            "optional": false,
            "description": "<p>The authentication credentials are missing.</p>"
          },
          {
            "group": "Error 4xx",
            "field": "RouteNotFound",
            "optional": false,
            "description": "<p>That route was not found on the server.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "   HTTP/1.1 404 Not Found\n   {\n     \"error\": \"CountryNotFound\"\n   }\n"
        },
        {
          "title": "Error-Response:",
          "content": "   HTTP/1.1 401 Unauthorized\n   {\n     \"error\": \"InvalidAccessToken\"\n   }\n"
        },
        {
          "title": "Error-Response:",
          "content": "   HTTP/1.1 401 Unauthorized\n   {\n     \"error\": \"MissingAuthenticationCredentials\"\n   }\n"
        },
        {
          "title": "Error-Response:",
          "content": "   HTTP/1.1 404 \n   {\n     \"error\": \"RouteNotFound\"\n   }\n"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "comparison-api/App/Modules/Backend/Controllers/CountryController.php"
  },
  {
    "type": "delete",
    "url": "/country_options/:id",
    "title": "DELETE /country_options/:id",
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i -X DELETE \"http://apibeta.compargo.com/v1/country_options/594942d8-3815-11e4-b18a-fe7344fb1ea4\t\n    -H \"X-COMPARE-REST-API-KEY: 1234567890\"\n"
      }
    ],
    "description": "<p>Delete a Country Option</p>",
    "name": "Delete",
    "group": "Country_Options",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "field": "X-COMPARE-REST-API-KEY",
            "optional": false,
            "description": "<p>Country Options unique access-key.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "field": "language",
            "optional": false,
            "description": "<p>Mandatory Language.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "countryCode",
            "optional": false,
            "description": "<p>Mandatory Country Code.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "id",
            "optional": false,
            "description": "<p>Mandatory Country Options Unique ID.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "field": "id",
            "optional": false,
            "description": "<p>The ID of Country Options.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "   HTTP/1.1 200 OK\n   {\n     \"id\": \"594942d8-3815-11e4-b18a-fe7344fb1ea4\"\n   }\n"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "field": "InvalidAccessToken",
            "optional": false,
            "description": "<p>The access token is invalid.</p>"
          },
          {
            "group": "Error 4xx",
            "field": "MissingAuthenticationCredentials",
            "optional": false,
            "description": "<p>The authentication credentials are missing.</p>"
          },
          {
            "group": "Error 4xx",
            "field": "CountryOptionNotFound",
            "optional": false,
            "description": "<p>The id of the Country Option was not found.</p>"
          },
          {
            "group": "Error 4xx",
            "field": "RouteNotFound",
            "optional": false,
            "description": "<p>That route was not found on the server.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "   HTTP/1.1 401 Unauthorized\n   {\n     \"error\": \"InvalidAccessToken\"\n   }\n"
        },
        {
          "title": "Error-Response:",
          "content": "   HTTP/1.1 401 Unauthorized\n   {\n     \"error\": \"MissingAuthenticationCredentials\"\n   }\n"
        },
        {
          "title": "Error-Response:",
          "content": "   HTTP/1.1 404 Not Found\n   {\n     \"error\": \"CountryOptionNotFound\"\n   }\n"
        },
        {
          "title": "Error-Response:",
          "content": "   HTTP/1.1 404 \n   {\n     \"error\": \"RouteNotFound\"\n   }\n"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "comparison-api/App/Modules/Backend/Controllers/CountryOptionsController.php"
  },
  {
    "type": "get",
    "url": "/country_options",
    "title": "GET /country_options",
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -H \"X-COMPARE-REST-API-KEY: 1234567890\" \n    -i \"http://apibeta.compargo.com/v1/country_options/?countryCode=ph&language=en&\n        query={\"status\":\"1\"}&fields=id,countryId,name,value,label,editable,visibility,status&\n        sort=id,name&\n        limit=10\"\n"
      }
    ],
    "description": "<p>Read data of all Country Options</p>",
    "name": "Get",
    "group": "Country_Options",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "field": "X-COMPARE-REST-API-KEY",
            "optional": false,
            "description": "<p>Country Options unique access-key.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "field": "language",
            "optional": false,
            "description": "<p>Mandatory Language.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "countryCode",
            "optional": false,
            "description": "<p>Mandatory Country Code.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "query",
            "optional": true,
            "description": "<p>Optional query conditions that rows must satisfy to be selected.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "fields",
            "optional": true,
            "description": "<p>Optional field indicates a column that you want to retrieve.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "sort",
            "optional": true,
            "description": "<p>Optional sort orders columns selected for output.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "limit",
            "defaultValue": "0",
            "optional": true,
            "description": "<p>Optional limit used to constrain the number of rows returned.                                                     When offset parameter is present, the limit specifies the offset                                                  of the first row to return. When count parameter exists, the limit                                                   identifies all the rows returned and with default 0.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "offset",
            "optional": true,
            "description": "<p>Optional offset specifies the maximum number of rows to return.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "count",
            "defaultValue": "1",
            "optional": true,
            "description": "<p>Optional count with default 1. Returns the count of country options.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "field": "id",
            "optional": false,
            "description": "<p>ID of the Country Options.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "countryId",
            "optional": false,
            "description": "<p>Country ID of the Country Options.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "name",
            "optional": false,
            "description": "<p>Name of the Channels Options.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "value",
            "optional": false,
            "description": "<p>Value of the Channels Options.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "label",
            "optional": false,
            "description": "<p>Label of the Channels Options.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "editable",
            "optional": false,
            "description": "<p>Editable Flag of the Country Options.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "visibility",
            "optional": false,
            "description": "<p>Visibility Flag of the Country Options.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "field": "status",
            "optional": false,
            "description": "<p>Status Flag of the Country Options.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "field": "active",
            "optional": false,
            "description": "<p>Active Flag of the Country Options.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "field": "created",
            "optional": false,
            "description": "<p>Creation date of the Country Options.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "field": "modified",
            "optional": false,
            "description": "<p>Modification date of the Country Options.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "createdBy",
            "optional": false,
            "description": "<p>ID of the User who created the Country Options.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "modifiedBy",
            "optional": false,
            "description": "<p>ID of the User who modified the Country Options.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "   HTTP/1.1 200 OK\n   {\n     \"id\": \"1535ebcc-22b8-11e4-bd33-17609cecca2f\",\n     \"name\": \"iso2\",\n     \"description\": \"\",\n     \"editable\": \"1\",\n     \"visibility\": \"1\",\n     \"status\": \"1\"\n   },\n   {\n     \"id\": \"1535ebcc-22b8-11e4-bd33-17609cecca2f\",\n     \"name\": \"shortname\",\n     \"description\": \"\",\n     \"editable\": \"1\",\n     \"visibility\": \"1\",\n     \"status\": \"1\"\t\n   }\n"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "field": "InvalidAccessToken",
            "optional": false,
            "description": "<p>The access token is invalid.</p>"
          },
          {
            "group": "Error 4xx",
            "field": "MissingAuthenticationCredentials",
            "optional": false,
            "description": "<p>The authentication credentials are missing.</p>"
          },
          {
            "group": "Error 4xx",
            "field": "WrongFieldsReturned",
            "optional": false,
            "description": "<p>The requested fields are not available.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "   HTTP/1.1 401 Unauthorized\n   {\n     \"error\": \"InvalidAccessToken\"\n   }\n"
        },
        {
          "title": "Error-Response:",
          "content": "   HTTP/1.1 401 Unauthorized\n   {\n     \"error\": \"MissingAuthenticationCredentials\"\n   }\n"
        },
        {
          "title": "Error-Response:",
          "content": "   HTTP/1.1 401 Unauthorized\n   {\n     \"error\": \"WrongFieldsReturned\"\n   }\n"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "comparison-api/App/Modules/Backend/Controllers/CountryOptionsController.php"
  },
  {
    "type": "get",
    "url": "/country_options/:id",
    "title": "GET /country_options/:id",
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -H \"X-COMPARE-REST-API-KEY: 1234567890\"\n    -i \"http://apibeta.compargo.com/v1/country_options/05a5ec26-372a-11e4-b18a-fe7344fb1ea4/?countryCode=ph&language=en\"\n"
      }
    ],
    "description": "<p>Read data of a Countries Options</p>",
    "name": "GetOne",
    "group": "Country_Options",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "field": "X-COMPARE-REST-API-KEY",
            "optional": false,
            "description": "<p>Country Options unique access-key.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "field": "language",
            "optional": false,
            "description": "<p>Mandatory Language.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "countryCode",
            "optional": false,
            "description": "<p>Mandatory Country Code.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "id",
            "optional": false,
            "description": "<p>Mandatory Countries Options unique ID.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "field": "id",
            "optional": false,
            "description": "<p>ID of the Country Options.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "countryId",
            "optional": false,
            "description": "<p>Country ID of the Country Options.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "name",
            "optional": false,
            "description": "<p>Name of the Channels Options.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "value",
            "optional": false,
            "description": "<p>Value of the Channels Options.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "label",
            "optional": false,
            "description": "<p>Label of the Channels Options.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "editable",
            "optional": false,
            "description": "<p>Editable Flag of the Country Options.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "visibility",
            "optional": false,
            "description": "<p>Visibility Flag of the Country Options.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "field": "status",
            "optional": false,
            "description": "<p>Status Flag of the Country Options.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "field": "active",
            "optional": false,
            "description": "<p>Active Flag of the Country Options.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "field": "created",
            "optional": false,
            "description": "<p>Creation date of the Country Options.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "field": "modified",
            "optional": false,
            "description": "<p>Modification date of the Country Options.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "createdBy",
            "optional": false,
            "description": "<p>ID of the User who created the Country Options.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "modifiedBy",
            "optional": false,
            "description": "<p>ID of the User who modified the Country Options.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "   HTTP/1.1 200 OK\n   {\n     \"id\": \"1535ebcc-22b8-11e4-bd33-17609cecca2f\",\n     \"name\": \"iso2\",\n     \"description\": \"\",\n     \"editable\": \"1\",\n     \"visibility\": \"1\",\n     \"status\": \"1\"\n   }\n"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "field": "CountryOptionNotFound",
            "optional": false,
            "description": "<p>The id of the Country Option was not found.</p>"
          },
          {
            "group": "Error 4xx",
            "field": "InvalidAccessToken",
            "optional": false,
            "description": "<p>The access token is invalid.</p>"
          },
          {
            "group": "Error 4xx",
            "field": "MissingAuthenticationCredentials",
            "optional": false,
            "description": "<p>The authentication credentials are missing.</p>"
          },
          {
            "group": "Error 4xx",
            "field": "RouteNotFound",
            "optional": false,
            "description": "<p>That route was not found on the server.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "   HTTP/1.1 404 Not Found\n   {\n     \"error\": \"CountryOptionNotFound\"\n   }\n"
        },
        {
          "title": "Error-Response:",
          "content": "   HTTP/1.1 401 Unauthorized\n   {\n     \"error\": \"InvalidAccessToken\"\n   }\n"
        },
        {
          "title": "Error-Response:",
          "content": "   HTTP/1.1 401 Unauthorized\n   {\n     \"error\": \"MissingAuthenticationCredentials\"\n   }\n"
        },
        {
          "title": "Error-Response:",
          "content": "   HTTP/1.1 404\n   {\n     \"error\": \"RouteNotFound\"\n   }\n"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "comparison-api/App/Modules/Backend/Controllers/CountryOptionsController.php"
  },
  {
    "type": "post",
    "url": "/country_options",
    "title": "POST /country_options",
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i -X POST \"http://apibeta.compargo.com/v1/country_options/?countryCode=ph&language=en\"\n    -H \"X-COMPARE-REST-API-KEY: 1234567890\"\n    -d \"countryId=4de2ec7a-22b5-11e4-bd33-17609cecca2f&\n        name=iso3&\n        value=PHL&\n        status=1&\n        editable=1&\n        visibility=1\"\n"
      }
    ],
    "description": "<p>Create a new Country Options</p>",
    "name": "Post",
    "group": "Country_Options",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "field": "X-COMPARE-REST-API-KEY",
            "optional": false,
            "description": "<p>Country Options unique access-key.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "field": "language",
            "optional": false,
            "description": "<p>Mandatory Language.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "countryCode",
            "optional": false,
            "description": "<p>Mandatory Country code.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "countryId",
            "optional": false,
            "description": "<p>Mandatory Country ID of Country Options.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "name",
            "optional": false,
            "description": "<p>Mandatory Name of the Country Options.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "value",
            "optional": false,
            "description": "<p>Mandatory Value of the Country Options.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "label",
            "optional": true,
            "description": "<p>Optional Label of the Country Options.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "editable",
            "defaultValue": "0",
            "optional": true,
            "description": "<p>Optional Editable Flag of the Country Options.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "visibility",
            "defaultValue": "0",
            "optional": true,
            "description": "<p>Optional Visibility Value of the Country Options.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "status",
            "defaultValue": "0",
            "optional": true,
            "description": "<p>Optional Status of the Country Options.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "createdBy",
            "optional": true,
            "description": "<p>Optional ID of the User who created the Country Options.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "modifiedBy",
            "optional": true,
            "description": "<p>Optional ID of the User who modified the Country Options.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "field": "id",
            "optional": false,
            "description": "<p>The new Country-ID.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "   HTTP/1.1 200 OK\n   {\n     \"id\": \"594942d8-3815-11e4-b18a-fe7344fb1ea4\"\n   }\n"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "field": "BadInputParameter",
            "optional": false,
            "description": "<p>The request cannot be fulfilled due to bad syntax.</p>"
          },
          {
            "group": "Error 4xx",
            "field": "InvalidAccessToken",
            "optional": false,
            "description": "<p>The access token is invalid.</p>"
          },
          {
            "group": "Error 4xx",
            "field": "MissingAuthenticationCredentials",
            "optional": false,
            "description": "<p>The authentication credentials are missing.</p>"
          },
          {
            "group": "Error 4xx",
            "field": "RouteNotFound",
            "optional": false,
            "description": "<p>That route was not found on the server.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "   HTTP/1.1 400\n   {\n     \"error\": \"BadInputParameter\"\n   }\n"
        },
        {
          "title": "Error-Response:",
          "content": "   HTTP/1.1 401 Unauthorized\n   {\n     \"error\": \"InvalidAccessToken\"\n   }\n"
        },
        {
          "title": "Error-Response:",
          "content": "   HTTP/1.1 401 Unauthorized\n   {\n     \"error\": \"MissingAuthenticationCredentials\"\n   }\n"
        },
        {
          "title": "Error-Response:",
          "content": "   HTTP/1.1 404 \n   {\n     \"error\": \"RouteNotFound\"\n   }\n"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "comparison-api/App/Modules/Backend/Controllers/CountryOptionsController.php"
  },
  {
    "type": "put",
    "url": "/country_options/:id",
    "title": "PUT /country_options/:id",
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i -X PUT \"http://apibeta.compargo.com/v1/country_options/8c1291d6-22b9-11e4-bd33-17609cecca2f/?countryCode=ph&language=en\"\n    -H \"X-COMPARE-REST-API-KEY: 1234567890\"\n    -d \"name=numcode\n        value=004&\n        editable=1&\n        visibility=1&\n        status=1\"\n"
      }
    ],
    "description": "<p>Update a Country Option</p>",
    "name": "Put",
    "group": "Country_Options",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "field": "X-COMPARE-REST-API-KEY",
            "optional": false,
            "description": "<p>Country Options unique access-key.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "field": "language",
            "optional": false,
            "description": "<p>Mandatory Language.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "countryCode",
            "optional": false,
            "description": "<p>Mandatory Country Code.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "id",
            "optional": false,
            "description": "<p>Mandatory Country Option Unique ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "name",
            "optional": false,
            "description": "<p>Mandatory Name of the Country Option.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "value",
            "optional": false,
            "description": "<p>Mandatory Value of the Country Option.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "label",
            "optional": true,
            "description": "<p>Optional Label of the Country Option.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "editable",
            "optional": true,
            "description": "<p>Optional Editable Flag of the Country Option.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "visibility",
            "optional": true,
            "description": "<p>Optional Visibility Flag of the Country Option.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "status",
            "optional": true,
            "description": "<p>Optional Status of the Country Option.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "createdBy",
            "optional": true,
            "description": "<p>Optional ID of the User who created the Country Option.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "modifiedBy",
            "optional": true,
            "description": "<p>Optional ID of the User who modified the Country Option.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "   HTTP/1.1 200 OK\n   {\n     \"id\": \"8c1291d6-22b9-11e4-bd33-17609cecca2f\"\n   }\n"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "field": "BadInputParameter",
            "optional": false,
            "description": "<p>The request cannot be fulfilled due to bad syntax.</p>"
          },
          {
            "group": "Error 4xx",
            "field": "InvalidAccessToken",
            "optional": false,
            "description": "<p>The access token is invalid.</p>"
          },
          {
            "group": "Error 4xx",
            "field": "MissingAuthenticationCredentials",
            "optional": false,
            "description": "<p>The authentication credentials are missing.</p>"
          },
          {
            "group": "Error 4xx",
            "field": "CountryOptionNotFound",
            "optional": false,
            "description": "<p>The id of the Country Option was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "   HTTP/1.1 400\n   {\n     \"error\": \"BadInputParameter\"\n   }\n"
        },
        {
          "title": "Error-Response:",
          "content": "   HTTP/1.1 401 Unauthorized\n   {\n     \"error\": \"InvalidAccessToken\"\n   }\n"
        },
        {
          "title": "Error-Response:",
          "content": "   HTTP/1.1 401 Unauthorized\n   {\n     \"error\": \"MissingAuthenticationCredentials\"\n   }\n"
        },
        {
          "title": "Error-Response:",
          "content": "   HTTP/1.1 404 Not Found\n   {\n     \"error\": \"CountryOptionNotFound\"\n   }\n"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "comparison-api/App/Modules/Backend/Controllers/CountryOptionsController.php"
  },
  {
    "type": "post",
    "url": "/country_options/search",
    "title": "POST /country_options/search",
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -H \"X-COMPARE-REST-API-KEY: 1234567890\" \n    -i \"http://apibeta.compargo.com/v1/country_options/search/?countryCode=ph&language=en\"\n    -d \"query={\"status\":\"1\"}&fields=id,countryId,name,value,label,editable,visibility,status&\n        sort=id,name&\n        limit=10\"\n"
      }
    ],
    "description": "<p>Read data of all Country Options</p>",
    "name": "Search",
    "group": "Country_Options",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "field": "X-COMPARE-REST-API-KEY",
            "optional": false,
            "description": "<p>Country Options unique access-key.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "field": "language",
            "optional": false,
            "description": "<p>Mandatory Language.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "countryCode",
            "optional": false,
            "description": "<p>Mandatory Country Code.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "query",
            "optional": true,
            "description": "<p>Optional query conditions that rows must satisfy to be selected.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "fields",
            "optional": true,
            "description": "<p>Optional field indicates a column that you want to retrieve.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "sort",
            "optional": true,
            "description": "<p>Optional sort orders columns selected for output.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "limit",
            "defaultValue": "0",
            "optional": true,
            "description": "<p>Optional limit used to constrain the number of rows returned.                                                     When offset parameter is present, the limit specifies the offset                                                  of the first row to return. When count parameter exists, the limit                                                   identifies all the rows returned and with default 0.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "offset",
            "optional": true,
            "description": "<p>Optional offset specifies the maximum number of rows to return.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "count",
            "defaultValue": "1",
            "optional": true,
            "description": "<p>Optional count with default 1. Returns the count of country options.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "field": "id",
            "optional": false,
            "description": "<p>ID of the Country Options.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "countryId",
            "optional": false,
            "description": "<p>Country ID of the Country Options.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "name",
            "optional": false,
            "description": "<p>Name of the Channels Options.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "value",
            "optional": false,
            "description": "<p>Value of the Channels Options.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "label",
            "optional": false,
            "description": "<p>Label of the Channels Options.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "editable",
            "optional": false,
            "description": "<p>Editable Flag of the Country Options.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "visibility",
            "optional": false,
            "description": "<p>Visibility Flag of the Country Options.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "field": "status",
            "optional": false,
            "description": "<p>Status Flag of the Country Options.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "field": "active",
            "optional": false,
            "description": "<p>Active Flag of the Country Options.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "field": "created",
            "optional": false,
            "description": "<p>Creation date of the Country Options.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "field": "modified",
            "optional": false,
            "description": "<p>Modification date of the Country Options.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "createdBy",
            "optional": false,
            "description": "<p>ID of the User who created the Country Options.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "modifiedBy",
            "optional": false,
            "description": "<p>ID of the User who modified the Country Options.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "   HTTP/1.1 200 OK\n   {\n     \"id\": \"1535ebcc-22b8-11e4-bd33-17609cecca2f\",\n     \"name\": \"iso2\",\n     \"description\": \"\",\n     \"editable\": \"1\",\n     \"visibility\": \"1\",\n     \"status\": \"1\"\n   },\n   {\n     \"id\": \"1535ebcc-22b8-11e4-bd33-17609cecca2f\",\n     \"name\": \"shortname\",\n     \"description\": \"\",\n     \"editable\": \"1\",\n     \"visibility\": \"1\",\n     \"status\": \"1\"\t\n   }\n"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "field": "InvalidAccessToken",
            "optional": false,
            "description": "<p>The access token is invalid.</p>"
          },
          {
            "group": "Error 4xx",
            "field": "MissingAuthenticationCredentials",
            "optional": false,
            "description": "<p>The authentication credentials are missing.</p>"
          },
          {
            "group": "Error 4xx",
            "field": "WrongFieldsReturned",
            "optional": false,
            "description": "<p>The requested fields are not available.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "   HTTP/1.1 401 Unauthorized\n   {\n     \"error\": \"InvalidAccessToken\"\n   }\n"
        },
        {
          "title": "Error-Response:",
          "content": "   HTTP/1.1 401 Unauthorized\n   {\n     \"error\": \"MissingAuthenticationCredentials\"\n   }\n"
        },
        {
          "title": "Error-Response:",
          "content": "   HTTP/1.1 401 Unauthorized\n   {\n     \"error\": \"WrongFieldsReturned\"\n   }\n"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "comparison-api/App/Modules/Backend/Controllers/CountryOptionsController.php"
  },
  {
    "type": "post",
    "url": "/country_options/search/:id",
    "title": "POST /country_options/search/:id",
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -H \"X-COMPARE-REST-API-KEY: 1234567890\"\n    -i \"http://apibeta.compargo.com/v1/country_options/search/05a5ec26-372a-11e4-b18a-fe7344fb1ea4/?countryCode=ph&language=en\"\n"
      }
    ],
    "description": "<p>Read data of a Countries Options</p>",
    "name": "SearchOne",
    "group": "Country_Options",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "field": "X-COMPARE-REST-API-KEY",
            "optional": false,
            "description": "<p>Country Options unique access-key.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "field": "language",
            "optional": false,
            "description": "<p>Mandatory Language.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "countryCode",
            "optional": false,
            "description": "<p>Mandatory Country Code.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "id",
            "optional": false,
            "description": "<p>Mandatory Countries Options unique ID.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "field": "id",
            "optional": false,
            "description": "<p>ID of the Country Options.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "countryId",
            "optional": false,
            "description": "<p>Country ID of the Country Options.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "name",
            "optional": false,
            "description": "<p>Name of the Channels Options.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "value",
            "optional": false,
            "description": "<p>Value of the Channels Options.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "label",
            "optional": false,
            "description": "<p>Label of the Channels Options.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "editable",
            "optional": false,
            "description": "<p>Editable Flag of the Country Options.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "visibility",
            "optional": false,
            "description": "<p>Visibility Flag of the Country Options.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "field": "status",
            "optional": false,
            "description": "<p>Status Flag of the Country Options.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "field": "active",
            "optional": false,
            "description": "<p>Active Flag of the Country Options.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "field": "created",
            "optional": false,
            "description": "<p>Creation date of the Country Options.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "field": "modified",
            "optional": false,
            "description": "<p>Modification date of the Country Options.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "createdBy",
            "optional": false,
            "description": "<p>ID of the User who created the Country Options.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "modifiedBy",
            "optional": false,
            "description": "<p>ID of the User who modified the Country Options.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "   HTTP/1.1 200 OK\n   {\n     \"id\": \"1535ebcc-22b8-11e4-bd33-17609cecca2f\",\n     \"name\": \"iso2\",\n     \"description\": \"\",\n     \"editable\": \"1\",\n     \"visibility\": \"1\",\n     \"status\": \"1\"\n   }\n"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "field": "CountryOptionNotFound",
            "optional": false,
            "description": "<p>The id of the Country Option was not found.</p>"
          },
          {
            "group": "Error 4xx",
            "field": "InvalidAccessToken",
            "optional": false,
            "description": "<p>The access token is invalid.</p>"
          },
          {
            "group": "Error 4xx",
            "field": "MissingAuthenticationCredentials",
            "optional": false,
            "description": "<p>The authentication credentials are missing.</p>"
          },
          {
            "group": "Error 4xx",
            "field": "RouteNotFound",
            "optional": false,
            "description": "<p>That route was not found on the server.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "   HTTP/1.1 404 Not Found\n   {\n     \"error\": \"CountryOptionNotFound\"\n   }\n"
        },
        {
          "title": "Error-Response:",
          "content": "   HTTP/1.1 401 Unauthorized\n   {\n     \"error\": \"InvalidAccessToken\"\n   }\n"
        },
        {
          "title": "Error-Response:",
          "content": "   HTTP/1.1 401 Unauthorized\n   {\n     \"error\": \"MissingAuthenticationCredentials\"\n   }\n"
        },
        {
          "title": "Error-Response:",
          "content": "   HTTP/1.1 404\n   {\n     \"error\": \"RouteNotFound\"\n   }\n"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "comparison-api/App/Modules/Backend/Controllers/CountryOptionsController.php"
  },
  {
    "type": "put",
    "url": "/products/upload/:id",
    "title": "PUT /products/upload/:id",
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl --upload-file /home/moneymax/bpi.png \"http://apibeta.compargo.com/v1/products/upload/96b3d052-3716-11e4-b18a-fe7344fb1ea4/?language=en&countryCode=ph\n    -H \"X-COMPARE-REST-API-KEY: 1234567890\"\n"
      }
    ],
    "description": "<p>Upload a Product Image</p>",
    "name": "Delete",
    "group": "Products",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "field": "X-COMPARE-REST-API-KEY",
            "optional": false,
            "description": "<p>Products unique access-key.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "field": "language",
            "optional": false,
            "description": "<p>Mandatory Language.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "countryCode",
            "optional": false,
            "description": "<p>Mandatory Country Code.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "id",
            "optional": false,
            "description": "<p>Mandatory Product Unique ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "file",
            "optional": false,
            "description": "<p>Mandatory File.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "field": "id",
            "optional": false,
            "description": "<p>The ID of Product.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "   HTTP/1.1 200 OK\n   {\n     \"id\": \"96b3d052-3716-11e4-b18a-fe7344fb1ea4\"\n   }\n"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "field": "InvalidAccessToken",
            "optional": false,
            "description": "<p>The access token is invalid.</p>"
          },
          {
            "group": "Error 4xx",
            "field": "MissingAuthenticationCredentials",
            "optional": false,
            "description": "<p>The authentication credentials are missing.</p>"
          },
          {
            "group": "Error 4xx",
            "field": "ProductNotFound",
            "optional": false,
            "description": "<p>The id of the Product was not found.</p>"
          },
          {
            "group": "Error 4xx",
            "field": "RouteNotFound",
            "optional": false,
            "description": "<p>That route was not found on the server.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "   HTTP/1.1 401 Unauthorized\n   {\n     \"error\": \"InvalidAccessToken\"\n   }\n"
        },
        {
          "title": "Error-Response:",
          "content": "   HTTP/1.1 401 Unauthorized\n   {\n     \"error\": \"MissingAuthenticationCredentials\"\n   }\n"
        },
        {
          "title": "Error-Response:",
          "content": "   HTTP/1.1 404 Not Found\n   {\n     \"error\": \"ProductNotFound\"\n   }\n"
        },
        {
          "title": "Error-Response:",
          "content": "   HTTP/1.1 404 \n   {\n     \"error\": \"RouteNotFound\"\n   }\n"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "comparison-api/App/Modules/Backend/Controllers/ProductsController.php"
  },
  {
    "type": "delete",
    "url": "/products/:id",
    "title": "DELETE /products/:id",
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i -X DELETE \"http://apibeta.compargo.com/v1/products/96b3d052-3716-11e4-b18a-fe7344fb1ea4\t\n    -H \"X-COMPARE-REST-API-KEY: 1234567890\"\n"
      }
    ],
    "description": "<p>Delete a Product</p>",
    "name": "Delete",
    "group": "Products",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "field": "X-COMPARE-REST-API-KEY",
            "optional": false,
            "description": "<p>Products unique access-key.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "field": "language",
            "optional": false,
            "description": "<p>Mandatory Language.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "countryCode",
            "optional": false,
            "description": "<p>Mandatory Country Code.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "id",
            "optional": false,
            "description": "<p>Mandatory Product Unique ID.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "field": "id",
            "optional": false,
            "description": "<p>The ID of Product.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "   HTTP/1.1 200 OK\n   {\n     \"id\": \"96b3d052-3716-11e4-b18a-fe7344fb1ea4\"\n   }\n"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "field": "InvalidAccessToken",
            "optional": false,
            "description": "<p>The access token is invalid.</p>"
          },
          {
            "group": "Error 4xx",
            "field": "MissingAuthenticationCredentials",
            "optional": false,
            "description": "<p>The authentication credentials are missing.</p>"
          },
          {
            "group": "Error 4xx",
            "field": "ProductNotFound",
            "optional": false,
            "description": "<p>The id of the Product was not found.</p>"
          },
          {
            "group": "Error 4xx",
            "field": "RouteNotFound",
            "optional": false,
            "description": "<p>That route was not found on the server.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "   HTTP/1.1 401 Unauthorized\n   {\n     \"error\": \"InvalidAccessToken\"\n   }\n"
        },
        {
          "title": "Error-Response:",
          "content": "   HTTP/1.1 401 Unauthorized\n   {\n     \"error\": \"MissingAuthenticationCredentials\"\n   }\n"
        },
        {
          "title": "Error-Response:",
          "content": "   HTTP/1.1 404 Not Found\n   {\n     \"error\": \"ProductNotFound\"\n   }\n"
        },
        {
          "title": "Error-Response:",
          "content": "   HTTP/1.1 404 \n   {\n     \"error\": \"RouteNotFound\"\n   }\n"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "comparison-api/App/Modules/Backend/Controllers/ProductsController.php"
  },
  {
    "type": "get",
    "url": "/products",
    "title": "GET /products",
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -H \"X-COMPARE-REST-API-KEY: 1234567890\" \n    -i \"http://apibeta.compargo.com/v1/products/?countryCode=ph&language=en&query={\"status\":\"1\"}&fields=id,channelId,brandId,name,alias,description,featured,icon,language&sort=id,channelId,brandId&limit=10\"\n"
      }
    ],
    "description": "<p>Read data of all Products</p>",
    "name": "Get",
    "group": "Products",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "field": "X-COMPARE-REST-API-KEY",
            "optional": false,
            "description": "<p>Product unique access-key.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "field": "language",
            "optional": false,
            "description": "<p>Mandatory Language.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "countryCode",
            "optional": false,
            "description": "<p>Mandatory Country Code.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "query",
            "optional": true,
            "description": "<p>Optional query conditions that rows must satisfy to be selected.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "fields",
            "optional": true,
            "description": "<p>Optional field indicates a column that you want to retrieve.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "sort",
            "optional": true,
            "description": "<p>Optional sort orders columns selected for output.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "limit",
            "defaultValue": "0",
            "optional": true,
            "description": "<p>Optional limit used to constrain the number of rows returned.                                                     When offset parameter is present, the limit specifies the offset                                                  of the first row to return. When count parameter exists, the limit                                                   identifies all the rows returned and with default 0.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "offset",
            "optional": true,
            "description": "<p>Optional offset specifies the maximum number of rows to return.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "count",
            "defaultValue": "1",
            "optional": true,
            "description": "<p>Optional count with default 1. Returns the count of products.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "field": "id",
            "optional": false,
            "description": "<p>ID of the Product.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "channelId",
            "optional": false,
            "description": "<p>Channel ID of the Product.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "brandId",
            "optional": false,
            "description": "<p>Brand ID of the Product.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "name",
            "optional": false,
            "description": "<p>Name of the Product.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "description",
            "optional": false,
            "description": "<p>Description of the Product.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "alias",
            "optional": false,
            "description": "<p>Alias of the Product.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "featured",
            "optional": false,
            "description": "<p>Featured Flag of the Product.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "icon",
            "optional": false,
            "description": "<p>Icon of the Product.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "language",
            "optional": false,
            "description": "<p>Language of the Product.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "field": "status",
            "optional": false,
            "description": "<p>Status Flag of the Product.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "field": "active",
            "optional": false,
            "description": "<p>Active Flag of the Product.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "field": "created",
            "optional": false,
            "description": "<p>Creation date of the Product.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "field": "modified",
            "optional": false,
            "description": "<p>Modification date of the Product.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "createdBy",
            "optional": false,
            "description": "<p>ID of the User who created the Product.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "modifiedBy",
            "optional": false,
            "description": "<p>ID of the User who modified the Product.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "   HTTP/1.1 200 OK\n   {\n     \"id\": \"8c17dab6-2e8e-11e4-988c-7d9574853fac\",\n     \"channelId\": \"a1d14206-1ea9-11e4-b32d-eff91066cccf\",\n     \"brandId\": \"bc75db6e-2dde-11e4-988c-7d9574853fac\",\n     \"name\": \"Visa Classic\",\n     \"description\": null,\n     \"alias\": \"visa-classic\",\n     \"featured\": \"0\",\n     \"icon\": null,\n     \"language\": \"en\",\n     \"status\": \"1\",\n     \"active\": \"1\",\n     \"created\": \"2014-08-28 10:37:29\",\n     \"modified\": \"0000-00-00 00:00:00\",\n     \"createdBy\": \"a8838d12-1dcc-11e4-b32d-eff91066cccf\",\n     \"modifiedBy\": \"a8838d12-1dcc-11e4-b32d-eff91066cccf\"\n },\n {\n     \"id\": \"b4b42cb2-32fe-11e4-8ce3-5bbea8105782\",\n     \"channelId\": \"a1d14206-1ea9-11e4-b32d-eff91066cccf\",\n     \"brandId\": \"1c28fefa-319b-11e4-988c-7d9574853fac\",\n     \"name\": \"Visa Gold\",\n     \"description\": null,\n     \"alias\": \"visa-gold\",\n     \"featured\": \"0\",\n     \"icon\": null,\n     \"language\": \"en\",\n     \"status\": \"1\",\n     \"active\": \"1\",\n     \"created\": \"2014-09-03 02:10:26\",\n     \"modified\": \"0000-00-00 00:00:00\",\n     \"createdBy\": \"a8838d12-1dcc-11e4-b32d-eff91066cccf\",\n     \"modifiedBy\": \"a8838d12-1dcc-11e4-b32d-eff91066cccf\"\n }\n"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "field": "InvalidAccessToken",
            "optional": false,
            "description": "<p>The access token is invalid.</p>"
          },
          {
            "group": "Error 4xx",
            "field": "MissingAuthenticationCredentials",
            "optional": false,
            "description": "<p>The authentication credentials are missing.</p>"
          },
          {
            "group": "Error 4xx",
            "field": "WrongFieldsReturned",
            "optional": false,
            "description": "<p>The requested fields are not available.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "   HTTP/1.1 401 Unauthorized\n   {\n     \"error\": \"InvalidAccessToken\"\n   }\n"
        },
        {
          "title": "Error-Response:",
          "content": "   HTTP/1.1 401 Unauthorized\n   {\n     \"error\": \"MissingAuthenticationCredentials\"\n   }\n"
        },
        {
          "title": "Error-Response:",
          "content": "   HTTP/1.1 401 Unauthorized\n   {\n     \"error\": \"WrongFieldsReturned\"\n   }\n"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "comparison-api/App/Modules/Backend/Controllers/ProductsController.php"
  },
  {
    "type": "get",
    "url": "/products/:id",
    "title": "GET /products/:id",
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -H \"X-COMPARE-REST-API-KEY: 1234567890\" \n    -i \"http://apibeta.compargo.com/v1/products/e8f2a77f-3a19-11e4-96e3-06f157c98b98/?countryCode=ph&language=en\"\n"
      }
    ],
    "description": "<p>Read data of a Product</p>",
    "name": "GetOne",
    "group": "Products",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "field": "X-COMPARE-REST-API-KEY",
            "optional": false,
            "description": "<p>Channels unique access-key.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "field": "language",
            "optional": false,
            "description": "<p>Mandatory Language.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "countryCode",
            "optional": false,
            "description": "<p>Mandatory Country Code.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "id",
            "optional": false,
            "description": "<p>Mandatory Channel unique ID.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "field": "id",
            "optional": false,
            "description": "<p>ID of the Product.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "channelId",
            "optional": false,
            "description": "<p>Vertical ID of the Product.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "brandId",
            "optional": false,
            "description": "<p>Brand ID of the Product.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "name",
            "optional": false,
            "description": "<p>Name of the Product.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "description",
            "optional": false,
            "description": "<p>Description of the Product.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "alias",
            "optional": false,
            "description": "<p>Alias of the Product.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "featured",
            "optional": false,
            "description": "<p>Featured Flag of the Product.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "icon",
            "optional": false,
            "description": "<p>Icon of the Product.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "language",
            "optional": false,
            "description": "<p>Language of the Product.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "field": "status",
            "optional": false,
            "description": "<p>Status of the Product.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "field": "active",
            "optional": false,
            "description": "<p>Flag of the Product.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "field": "created",
            "optional": false,
            "description": "<p>Creation date of the Product.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "field": "modified",
            "optional": false,
            "description": "<p>Modification date of the Product.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "createdBy",
            "optional": false,
            "description": "<p>ID of the User who created the Product.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "modifiedBy",
            "optional": false,
            "description": "<p>ID of the User who modified the Product.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "   HTTP/1.1 200 OK\n   {\n     \"id\": \"e8f2a77f-3a19-11e4-96e3-06f157c98b98\",\n     \"channelId\": \"83e63b14-3a15-11e4-96e3-06f157c98b98\",\n     \"brandId\": \"3a1a5074-3a19-11e4-96e3-06f157c98b98\",\n     \"name\": \"Petron-BPI MasterCard\",\n     \"description\": \"Petron-BPI MasterCard\",\n     \"alias\": \"petron-bpi-mastercard\",\n     \"featured\": \"0\",\n     \"icon\": \"0\",\n     \"language\": \"en\",\n     \"status\": \"1\",\n     \"active\": \"1\",\n     \"created\": \"2014-09-12 01:12:48\",\n     \"modified\": \"0000-00-00 00:00:00\",\n     \"createdBy\": \"a8838d12-1dcc-11e4-b32d-eff91066cccf\",\n     \"modifiedBy\": \"a8838d12-1dcc-11e4-b32d-eff91066cccf\"\n   }\n"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "field": "ProductNotFound",
            "optional": false,
            "description": "<p>The id of the Product was not found.</p>"
          },
          {
            "group": "Error 4xx",
            "field": "InvalidAccessToken",
            "optional": false,
            "description": "<p>The access token is invalid.</p>"
          },
          {
            "group": "Error 4xx",
            "field": "MissingAuthenticationCredentials",
            "optional": false,
            "description": "<p>The authentication credentials are missing.</p>"
          },
          {
            "group": "Error 4xx",
            "field": "RouteNotFound",
            "optional": false,
            "description": "<p>That route was not found on the server.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "   HTTP/1.1 404 Not Found\n   {\n     \"error\": \"ProductNotFound\"\n   }\n"
        },
        {
          "title": "Error-Response:",
          "content": "   HTTP/1.1 401 Unauthorized\n   {\n     \"error\": \"InvalidAccessToken\"\n   }\n"
        },
        {
          "title": "Error-Response:",
          "content": "   HTTP/1.1 401 Unauthorized\n   {\n     \"error\": \"MissingAuthenticationCredentials\"\n   }\n"
        },
        {
          "title": "Error-Response:",
          "content": "   HTTP/1.1 404 \n   {\n     \"error\": \"RouteNotFound\"\n   }\n"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "comparison-api/App/Modules/Backend/Controllers/ProductsController.php"
  },
  {
    "type": "post",
    "url": "/products/import/",
    "title": "POST /products/import/",
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i -X POST \"http://apibeta.compargo.com/v1/products/import/?language=en&countryCode=ph\n    -H \"X-COMPARE-REST-API-KEY: 1234567890\"\n    -d \"channelId=a1d14206-1ea9-11e4-b32d-eff91066cccf&\n        data=[{\"areaName\": \"NCR Luzon, Visayas and Mindanao\",\n          \t   \"brandName\": \"Bank of Commerce\",\n          \t   \"companyName\": \"Bank of Commerce\",\n          \t   \"productName\": \"Visa Classic\",\n          \t   \"productImage\": \"bank-of-commerce-visa-classic.jpg\",\n          \t   \"linkInformation\": \"http://www.bankcom.com.ph/percc.php#vc\",\n          \t   \"linkApplication\": \"http://www.bankcom.com.ph/img/ccaf.pdf\",\n          \t   \"featured\": 0,\n          \t   \"hasApplyButton\": 0,\n          \t   \"overlayOrClickthrough\": 0,\n          \t   \"phoneNumber\": 0,\n          \t   \"status\": 1,\n          \t   \"providerCard\": 1,\n          \t   \"premiumCard\": 0,\n          \t   \"octopusCard\": 0,\n          \t   \"islamicCard\": 0,\n          \t   \"businessCard\": 0,\n          \t   \"studentCard\": 0,\n          \t   \"travelCard\": 0,\n          \t   \"shoppingCard\": 0,\n          \t   \"specialtyCard\": 0,\n          \t   \"onlineShoppingCard\": 0,\n          \t   \"coBranded\": 0,\n          \t   \"greatFor1\": \"Get a separate credit limit for your local and foreign transactions\",\n          \t   \"greatFor2\": \"Get up to 30% of your credit limit as cash advance\",\n          \t   \"greatFor3\": \"Purchase new appliances, gadgets or other high-ticket items by installment\",\n          \t   \"bewareThat1\": 0,\n          \t   \"bewareThat2\": 0,\n          \t   \"bewareThat3\": 0,\n          \t   \"promoPicture\": 0,\n          \t   \"promoTitle\": 0,\n          \t   \"promoApplyPicture\": 0,\n          \t   \"promoApplyContent\": 0,\n          \t   \"ribbonBest\": 0,\n          \t   \"rewardConversion\": \"P50 spent = 1 point\",\n          \t   \"rewardConversionCondition\": \"Only principal cardholders can redeem reward points\",\n          \t   \"rewardMultiplier\": \"No points multiplier\",\n          \t   \"rewardMultiplierCondition\": 0,\n          \t   \"rewardSpendingShopping\": \"SM P500 Gift Card (3,711 points)\",\n          \t   \"rewardSpendingEntertainment\": \"SM Cinema Tickets for Two (3,149 points)\",\n          \t   \"rewardSpendingDining\": 0,\n          \t   \"rewardSpendingOther\": 0,\n          \t   \"earningPointsOctopus\": 0,\n          \t   \"earningPointsAutomaticTransaction\": 0,\n          \t   \"earningPointsOnlineBillPayments\": 0,\n          \t   \"earningPointsOnlineShopping\": 0,\n          \t   \"earningPointsInstallment\": 0,\n          \t   \"cashbackDining\": 0,\n          \t   \"cashbackDiningCondition\": 0,\n          \t   \"cashbackShopping\": 0,\n          \t   \"cashbackShoppingCondition\": 0,\n          \t   \"cashbackGroceries\": 0,\n          \t   \"cashbackGroceriesCondition\": 0,\n          \t   \"cashbackEntertainment\": 0,\n          \t   \"cashbackEntertainmentCondition\": 0,\n          \t   \"cashbackPetrol\": 0,\n          \t   \"cashbackPetrolCondition\": 0,\n          \t   \"cashbackLocalRetail\": 0,\n          \t   \"cashbackLocalRetailCondition\": 0,\n          \t   \"cashbackOverseasSpending\": 0,\n          \t   \"cashbackOverseasCondition\": 0,\n          \t   \"cashbackGeneral\": 0,\n          \t   \"cashbackGeneralCondition\": 0,\n          \t   \"cashbackOther\": 0,\n          \t   \"cashbackOtherCondition\": 0,\n          \t   \"cashbackMetaCondition\": 0,\n          \t   \"cbeLocalRetails\": 0,\n          \t   \"cbeLocalRetailsCondition\": 0,\n          \t   \"cbeLocalDining\": 0,\n          \t   \"cbeLocalDiningCondition\": 0,\n          \t   \"cbeOverseasTransaction\": 0,\n          \t   \"cbeOverseasTransactionCondition\": 0,\n          \t   \"cbeOnlineShopping\": 0,\n          \t   \"cbeOnlineShoppingCondition\": 0,\n          \t   \"cbeOnlineBillPayment\": 0,\n          \t   \"cbeOnlineBillPaymentCondition\": 0,\n          \t   \"cbeOctopusAavs\": 0,\n          \t   \"cbeOctopusAavsCondition\": 0,\n          \t   \"cbeAutomaticTransaction\": 0,\n          \t   \"cbeAutomaticTransactionCondition\": 0,\n          \t   \"cbeInstalment\": 0,\n          \t   \"cbeInstalmentConditi\": 0,\n          \t   \"cbeSpecialCondition\": 0,\n          \t   \"cbsAllNewTransactions\": 0,\n          \t   \"cbsCashCoupons\": 0,\n          \t   \"cbsAutopusAavs\": 0,\n          \t   \"cbsPetrol\": 0,\n          \t   \"cbsDining\": 0,\n          \t   \"cbsShopping\": 0,\n          \t   \"cbsEntertainment\": 0,\n          \t   \"cbsTravel\": 0,\n          \t   \"cbsSpecialCondition\": 0,\n          \t   \"discountsDining\": 0,\n          \t   \"discountsDiningCondition\": 0,\n          \t   \"discountsShopping\": 0,\n          \t   \"discountsShoppingCondition\": 0,\n          \t   \"discountsGroceries\": 0,\n          \t   \"discountsGroceriesCondition\": 0,\n          \t   \"discountsEntertainment\": 0,\n          \t   \"discountsEntertainmentCondition\": 0,\n          \t   \"discountsPetrol\": 0,\n          \t   \"discountsPetrolCondition\": 0,\n          \t   \"discountsOther\": 0,\n          \t   \"discountsOtherCondition\": 0,\n          \t   \"discountsMetaCondition\": 0,\n          \t   \"milesConversionLocal\": 0,\n          \t   \"milesConversionConditionLocal\": 0,\n          \t   \"milesConversionOverseas\": 0,\n          \t   \"milesConversionConditionOverseas\": 0,\n          \t   \"milesPogram\": 0,\n          \t   \"insurance\": 0,\n          \t   \"airportLounge\": 0,\n          \t   \"travelOther\": 0,\n          \t   \"fraudProtection\": 0,\n          \t   \"installmentPlan\": 0,\n          \t   \"personalAssistant\": 0,\n          \t   \"parking\": 0,\n          \t   \"creditLimit\": 0,\n          \t   \"purchaseInterest\": 3.5,\n          \t   \"purchaseApr\": 0,\n          \t   \"cashAdvanceInterest\": 0,\n          \t   \"cashAdvanceApr\": 0,\n          \t   \"interestFreePeriod\": 21,\n          \t   \"delinquencyRetailPurchaseApr\": 0,\n          \t   \"delinquencyCashAdvanceApr\": 0,\n          \t   \"annualFee\": 1500,\n          \t   \"annualFeePromo\": 0,\n          \t   \"annualFeeWaiver\": \"Request for a reversal by calling Customer Care and spend P5,000 within the specified period\",\n          \t   \"foreignTransactionFee\": \"2% of the converted amount\",\n          \t   \"annualFeeSupplementary\": \"P750\",\n          \t   \"annualFeeSupplementaryCondition\": 0,\n          \t   \"cashAdvanceFee\": \"5% of the amount withdrawn \",\n          \t   \"cashAdvanceFee2\": 0,\n          \t   \"cardReplacementFee\": \"P300\",\n          \t   \"annualFeeAfterFirst\": 1500,\n          \t   \"partlyWaivedCondition\": 0,\n          \t   \"minimumRepayment\": \"5% of the amount due\",\n          \t   \"minimumRepayment2\": \"P500, whichever is higher\",\n          \t   \"latePayment\": \"2% of the overdue amount\",\n          \t   \"latePayment2\": 0,\n          \t   \"creditOverLimit\": 0,\n          \t   \"balanceTransferLowest\": 0.88,\n          \t   \"balanceTransferMonth\": 18,\n          \t   \"balanceTransferLongest\": 0,\n          \t   \"balanceTransferHighlight\": 0,\n          \t   \"balanceTransferAware\": 0,\n          \t   \"monthlyIncomeLocals\": 10000,\n          \t   \"monthlyIncomeForeigners\": 0,\n          \t   \"minimumEmploymentSalaried\": 0,\n          \t   \"minimumEmploymentSelfEmployed\": 0,\n          \t   \"minimumAge\": 21,\n          \t   \"minimumAgeSupplementary\": 18,\n          \t   \"existingCardHolder\": 1,\n          \t   \"nationality\": 1,\n          \t   \"residence\": 0,\n          \t   \"other1\": 0,\n          \t   \"other2\": 0,\n          \t   \"minimumAnnualIncome\": 10000,\n          \t   \"maxAge\": 65,\n          \t   \"language\": \"en\"\n             }]\"\n"
      }
    ],
    "description": "<p>Bulk import of Products</p>",
    "name": "Import",
    "group": "Products",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "field": "X-COMPARE-REST-API-KEY",
            "optional": false,
            "description": "<p>Products unique access-key.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "field": "language",
            "optional": false,
            "description": "<p>Mandatory Language.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "countryCode",
            "optional": false,
            "description": "<p>Mandatory Country Code.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "id",
            "optional": false,
            "description": "<p>Mandatory Product Unique ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "channelId",
            "optional": false,
            "description": "<p>Mandatory ChannelId of the Product.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "date",
            "optional": false,
            "description": "<p>Mandatory Data of the Product.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "field": "id",
            "optional": false,
            "description": "<p>The ID of Product.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "   HTTP/1.1 200 OK\n   {\n     \"id\": \"96b3d052-3716-11e4-b18a-fe7344fb1ea4\"\n   }\n"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "field": "InvalidAccessToken",
            "optional": false,
            "description": "<p>The access token is invalid.</p>"
          },
          {
            "group": "Error 4xx",
            "field": "MissingAuthenticationCredentials",
            "optional": false,
            "description": "<p>The authentication credentials are missing.</p>"
          },
          {
            "group": "Error 4xx",
            "field": "ProductNotFound",
            "optional": false,
            "description": "<p>The id of the Product was not found.</p>"
          },
          {
            "group": "Error 4xx",
            "field": "RouteNotFound",
            "optional": false,
            "description": "<p>That route was not found on the server.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "   HTTP/1.1 401 Unauthorized\n   {\n     \"error\": \"InvalidAccessToken\"\n   }\n"
        },
        {
          "title": "Error-Response:",
          "content": "   HTTP/1.1 401 Unauthorized\n   {\n     \"error\": \"MissingAuthenticationCredentials\"\n   }\n"
        },
        {
          "title": "Error-Response:",
          "content": "   HTTP/1.1 404 Not Found\n   {\n     \"error\": \"ProductNotFound\"\n   }\n"
        },
        {
          "title": "Error-Response:",
          "content": "   HTTP/1.1 404 \n   {\n     \"error\": \"RouteNotFound\"\n   }\n"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "comparison-api/App/Modules/Backend/Controllers/ProductsController.php"
  },
  {
    "type": "post",
    "url": "/products",
    "title": "POST /products",
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i -X POST \"http://apibeta.compargo.com/v1/products/?countryCode=ph&language=en\"\n    -H \"X-COMPARE-REST-API-KEY: 1234567890\"\n    -d \"channelId=a1d14206-1ea9-11e4-b32d-eff91066cccf&\n        brandId=1c28fefa-319b-11e4-988c-7d9574853fac&\n        name=Visa%20Gold&\n        featured=0&\n        status=1\"\n"
      }
    ],
    "description": "<p>Create a new Product</p>",
    "name": "Post",
    "group": "Products",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "field": "X-COMPARE-REST-API-KEY",
            "optional": false,
            "description": "<p>Product unique access-key.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "field": "language",
            "optional": false,
            "description": "<p>Mandatory Language.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "countryCode",
            "optional": false,
            "description": "<p>Mandatory Country code.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "channelId",
            "optional": false,
            "description": "<p>Mandatory Channel ID of Product.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "brandId",
            "optional": false,
            "description": "<p>Mandatory Brand ID of Product.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "name",
            "optional": false,
            "description": "<p>Mandatory Name of the Product.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "description",
            "optional": true,
            "description": "<p>Optional Description of the Product.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "alias",
            "optional": true,
            "description": "<p>Optional Alias of the Product.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "feaured",
            "defaultValue": "0",
            "optional": true,
            "description": "<p>Optional Featured Value of the Product.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "icon",
            "defaultValue": "0",
            "optional": true,
            "description": "<p>Optional Icon of the Product.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "perPage",
            "optional": true,
            "description": "<p>Optional Per Page of the Product.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "status",
            "defaultValue": "0",
            "optional": true,
            "description": "<p>Optional Status of the Product.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "createdBy",
            "optional": true,
            "description": "<p>Optional ID of the User who created the Product.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "modifiedBy",
            "optional": true,
            "description": "<p>Optional ID of the User who modified the Product.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "field": "id",
            "optional": false,
            "description": "<p>The new Product-ID.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "   HTTP/1.1 200 OK\n   {\n     \"id\": \"f77cf470-3bdc-11e4-b18a-fe7344fb1ea4\"\n   }\n"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "field": "BadInputParameter",
            "optional": false,
            "description": "<p>The request cannot be fulfilled due to bad syntax.</p>"
          },
          {
            "group": "Error 4xx",
            "field": "InvalidAccessToken",
            "optional": false,
            "description": "<p>The access token is invalid.</p>"
          },
          {
            "group": "Error 4xx",
            "field": "MissingAuthenticationCredentials",
            "optional": false,
            "description": "<p>The authentication credentials are missing.</p>"
          },
          {
            "group": "Error 4xx",
            "field": "RouteNotFound",
            "optional": false,
            "description": "<p>That route was not found on the server.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "   HTTP/1.1 400\n   {\n     \"error\": \"BadInputParameter\"\n   }\n"
        },
        {
          "title": "Error-Response:",
          "content": "   HTTP/1.1 401 Unauthorized\n   {\n     \"error\": \"InvalidAccessToken\"\n   }\n"
        },
        {
          "title": "Error-Response:",
          "content": "   HTTP/1.1 401 Unauthorized\n   {\n     \"error\": \"MissingAuthenticationCredentials\"\n   }\n"
        },
        {
          "title": "Error-Response:",
          "content": "   HTTP/1.1 404 \n   {\n     \"error\": \"RouteNotFound\"\n   }\n"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "comparison-api/App/Modules/Backend/Controllers/ProductsController.php"
  },
  {
    "type": "put",
    "url": "/products/:id",
    "title": "PUT /products/:id",
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i -X PUT \"http://apibeta.compargo.com/v1/products/b4b42cb2-32fe-11e4-8ce3-5bbea8105782/?countryCode=ph&language=en\"\n    -H \"X-COMPARE-REST-API-KEY: 1234567890\"\n    -d \"channelId=a1d14206-1ea9-11e4-b32d-eff91066cccf&\n        brandId=10ab7190-38bf-11e4-b18a-fe7344fb1ea4&\n        name=Petron-BPI MasterCard&\n        featured=1\n"
      }
    ],
    "description": "<p>Update a Product</p>",
    "name": "Put",
    "group": "Products",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "field": "X-COMPARE-REST-API-KEY",
            "optional": false,
            "description": "<p>Products unique access-key.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "field": "language",
            "optional": false,
            "description": "<p>Mandatory Language.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "countryCode",
            "optional": false,
            "description": "<p>Mandatory Country Code.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "id",
            "optional": false,
            "description": "<p>Mandatory Product Unique ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "channelId",
            "optional": false,
            "description": "<p>Mandatory Channel ID of the Product.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "brandId",
            "optional": false,
            "description": "<p>Mandatory Brand ID of the Product.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "name",
            "optional": false,
            "description": "<p>Mandatory Name of the Product.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "description",
            "optional": true,
            "description": "<p>Optional Description of the Product.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "alias",
            "optional": true,
            "description": "<p>Optional Alias of the Product.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "featured",
            "defaultValue": "0",
            "optional": true,
            "description": "<p>Optional Featured Flag of the Product.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "icon",
            "optional": true,
            "description": "<p>Optional Icon of the Product.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "status",
            "defaultValue": "0",
            "optional": true,
            "description": "<p>Optional Status of the Product.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "createdBy",
            "optional": true,
            "description": "<p>Optional ID of the User who created the Product.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "modifiedBy",
            "optional": true,
            "description": "<p>Optional ID of the User who modified the Product.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "   HTTP/1.1 200 OK\n   {\n     \"id\": \"96b3d052-3716-11e4-b18a-fe7344fb1ea4\"\n   }\n"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "field": "BadInputParameter",
            "optional": false,
            "description": "<p>The request cannot be fulfilled due to bad syntax.</p>"
          },
          {
            "group": "Error 4xx",
            "field": "InvalidAccessToken",
            "optional": false,
            "description": "<p>The access token is invalid.</p>"
          },
          {
            "group": "Error 4xx",
            "field": "MissingAuthenticationCredentials",
            "optional": false,
            "description": "<p>The authentication credentials are missing.</p>"
          },
          {
            "group": "Error 4xx",
            "field": "ProductNotFound",
            "optional": false,
            "description": "<p>The id of the Product was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "   HTTP/1.1 400\n   {\n     \"error\": \"BadInputParameter\"\n   }\n"
        },
        {
          "title": "Error-Response:",
          "content": "   HTTP/1.1 401 Unauthorized\n   {\n     \"error\": \"InvalidAccessToken\"\n   }\n"
        },
        {
          "title": "Error-Response:",
          "content": "   HTTP/1.1 401 Unauthorized\n   {\n     \"error\": \"MissingAuthenticationCredentials\"\n   }\n"
        },
        {
          "title": "Error-Response:",
          "content": "   HTTP/1.1 404 Not Found\n   {\n     \"error\": \"ProductlNotFound\"\n   }\n"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "comparison-api/App/Modules/Backend/Controllers/ProductsController.php"
  },
  {
    "type": "post",
    "url": "/products/search",
    "title": "POST /products/search",
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -H \"X-COMPARE-REST-API-KEY: 1234567890\" \n    -i -X POST \"http://apibeta.compargo.com/v1/products/search/?countryCode=ph&language=en\n    -d \"query={\"status\":\"1\"}&fields=id,channelId,brandId,name,alias,description,featured,icon,language&\n        sort=id,channelId,brandId&\n        limit=10\"\n"
      }
    ],
    "description": "<p>Read data of all Products</p>",
    "name": "Search",
    "group": "Products",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "field": "X-COMPARE-REST-API-KEY",
            "optional": false,
            "description": "<p>Product unique access-key.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "field": "language",
            "optional": false,
            "description": "<p>Mandatory Language.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "countryCode",
            "optional": false,
            "description": "<p>Mandatory Country Code.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "query",
            "optional": true,
            "description": "<p>Optional query conditions that rows must satisfy to be selected.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "fields",
            "optional": true,
            "description": "<p>Optional field indicates a column that you want to retrieve.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "sort",
            "optional": true,
            "description": "<p>Optional sort orders columns selected for output.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "limit",
            "defaultValue": "0",
            "optional": true,
            "description": "<p>Optional limit used to constrain the number of rows returned.                                                     When offset parameter is present, the limit specifies the offset                                                  of the first row to return. When count parameter exists, the limit                                                   identifies all the rows returned and with default 0.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "offset",
            "optional": true,
            "description": "<p>Optional offset specifies the maximum number of rows to return.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "count",
            "defaultValue": "1",
            "optional": true,
            "description": "<p>Optional count with default 1. Returns the count of products.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "field": "id",
            "optional": false,
            "description": "<p>ID of the Product.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "channelId",
            "optional": false,
            "description": "<p>Channel ID of the Product.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "brandId",
            "optional": false,
            "description": "<p>Brand ID of the Product.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "name",
            "optional": false,
            "description": "<p>Name of the Product.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "description",
            "optional": false,
            "description": "<p>Description of the Product.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "alias",
            "optional": false,
            "description": "<p>Alias of the Product.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "featured",
            "optional": false,
            "description": "<p>Featured Flag of the Product.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "icon",
            "optional": false,
            "description": "<p>Icon of the Product.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "language",
            "optional": false,
            "description": "<p>Language of the Product.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "field": "status",
            "optional": false,
            "description": "<p>Status Flag of the Product.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "field": "active",
            "optional": false,
            "description": "<p>Active Flag of the Product.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "field": "created",
            "optional": false,
            "description": "<p>Creation date of the Product.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "field": "modified",
            "optional": false,
            "description": "<p>Modification date of the Product.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "createdBy",
            "optional": false,
            "description": "<p>ID of the User who created the Product.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "modifiedBy",
            "optional": false,
            "description": "<p>ID of the User who modified the Product.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "   HTTP/1.1 200 OK\n   {\n     \"id\": \"8c17dab6-2e8e-11e4-988c-7d9574853fac\",\n     \"channelId\": \"a1d14206-1ea9-11e4-b32d-eff91066cccf\",\n     \"brandId\": \"bc75db6e-2dde-11e4-988c-7d9574853fac\",\n     \"name\": \"Visa Classic\",\n     \"description\": null,\n     \"alias\": \"visa-classic\",\n     \"featured\": \"0\",\n     \"icon\": null,\n     \"language\": \"en\",\n     \"status\": \"1\",\n     \"active\": \"1\",\n     \"created\": \"2014-08-28 10:37:29\",\n     \"modified\": \"0000-00-00 00:00:00\",\n     \"createdBy\": \"a8838d12-1dcc-11e4-b32d-eff91066cccf\",\n     \"modifiedBy\": \"a8838d12-1dcc-11e4-b32d-eff91066cccf\"\n },\n {\n     \"id\": \"b4b42cb2-32fe-11e4-8ce3-5bbea8105782\",\n     \"channelId\": \"a1d14206-1ea9-11e4-b32d-eff91066cccf\",\n     \"brandId\": \"1c28fefa-319b-11e4-988c-7d9574853fac\",\n     \"name\": \"Visa Gold\",\n     \"description\": null,\n     \"alias\": \"visa-gold\",\n     \"featured\": \"0\",\n     \"icon\": null,\n     \"language\": \"en\",\n     \"status\": \"1\",\n     \"active\": \"1\",\n     \"created\": \"2014-09-03 02:10:26\",\n     \"modified\": \"0000-00-00 00:00:00\",\n     \"createdBy\": \"a8838d12-1dcc-11e4-b32d-eff91066cccf\",\n     \"modifiedBy\": \"a8838d12-1dcc-11e4-b32d-eff91066cccf\"\n }\n"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "field": "InvalidAccessToken",
            "optional": false,
            "description": "<p>The access token is invalid.</p>"
          },
          {
            "group": "Error 4xx",
            "field": "MissingAuthenticationCredentials",
            "optional": false,
            "description": "<p>The authentication credentials are missing.</p>"
          },
          {
            "group": "Error 4xx",
            "field": "WrongFieldsReturned",
            "optional": false,
            "description": "<p>The requested fields are not available.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "   HTTP/1.1 401 Unauthorized\n   {\n     \"error\": \"InvalidAccessToken\"\n   }\n"
        },
        {
          "title": "Error-Response:",
          "content": "   HTTP/1.1 401 Unauthorized\n   {\n     \"error\": \"MissingAuthenticationCredentials\"\n   }\n"
        },
        {
          "title": "Error-Response:",
          "content": "   HTTP/1.1 401 Unauthorized\n   {\n     \"error\": \"WrongFieldsReturned\"\n   }\n"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "comparison-api/App/Modules/Backend/Controllers/ProductsController.php"
  },
  {
    "type": "post",
    "url": "/products/search/:id",
    "title": "POST /products/search/:id",
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -H \"X-COMPARE-REST-API-KEY: 1234567890\" \n    -i -X POST \"http://apibeta.compargo.com/v1/products/search/e8f2a77f-3a19-11e4-96e3-06f157c98b98/?countryCode=ph&language=en\"\n"
      }
    ],
    "description": "<p>Read data of a Product</p>",
    "name": "SearchOne",
    "group": "Products",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "field": "X-COMPARE-REST-API-KEY",
            "optional": false,
            "description": "<p>Product unique access-key.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "field": "language",
            "optional": false,
            "description": "<p>Mandatory Language.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "countryCode",
            "optional": false,
            "description": "<p>Mandatory Country Code.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "id",
            "optional": false,
            "description": "<p>Mandatory Product unique ID.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "field": "id",
            "optional": false,
            "description": "<p>ID of the Product.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "channelId",
            "optional": false,
            "description": "<p>Vertical ID of the Product.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "brandId",
            "optional": false,
            "description": "<p>Brand ID of the Product.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "name",
            "optional": false,
            "description": "<p>Name of the Product.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "description",
            "optional": false,
            "description": "<p>Description of the Product.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "alias",
            "optional": false,
            "description": "<p>Alias of the Product.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "featured",
            "optional": false,
            "description": "<p>Featured Flag of the Product.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "icon",
            "optional": false,
            "description": "<p>Icon of the Product.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "language",
            "optional": false,
            "description": "<p>Language of the Product.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "field": "status",
            "optional": false,
            "description": "<p>Status of the Product.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "field": "active",
            "optional": false,
            "description": "<p>Flag of the Product.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "field": "created",
            "optional": false,
            "description": "<p>Creation date of the Product.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "field": "modified",
            "optional": false,
            "description": "<p>Modification date of the Product.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "createdBy",
            "optional": false,
            "description": "<p>ID of the User who created the Product.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "modifiedBy",
            "optional": false,
            "description": "<p>ID of the User who modified the Product.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "   HTTP/1.1 200 OK\n   {\n     \"id\": \"e8f2a77f-3a19-11e4-96e3-06f157c98b98\",\n     \"channelId\": \"83e63b14-3a15-11e4-96e3-06f157c98b98\",\n     \"brandId\": \"3a1a5074-3a19-11e4-96e3-06f157c98b98\",\n     \"name\": \"Petron-BPI MasterCard\",\n     \"description\": \"Petron-BPI MasterCard\",\n     \"alias\": \"petron-bpi-mastercard\",\n     \"featured\": \"0\",\n     \"icon\": \"0\",\n     \"language\": \"en\",\n     \"status\": \"1\",\n     \"active\": \"1\",\n     \"created\": \"2014-09-12 01:12:48\",\n     \"modified\": \"0000-00-00 00:00:00\",\n     \"createdBy\": \"a8838d12-1dcc-11e4-b32d-eff91066cccf\",\n     \"modifiedBy\": \"a8838d12-1dcc-11e4-b32d-eff91066cccf\"\n   }\n"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "field": "ProductNotFound",
            "optional": false,
            "description": "<p>The id of the Product was not found.</p>"
          },
          {
            "group": "Error 4xx",
            "field": "InvalidAccessToken",
            "optional": false,
            "description": "<p>The access token is invalid.</p>"
          },
          {
            "group": "Error 4xx",
            "field": "MissingAuthenticationCredentials",
            "optional": false,
            "description": "<p>The authentication credentials are missing.</p>"
          },
          {
            "group": "Error 4xx",
            "field": "RouteNotFound",
            "optional": false,
            "description": "<p>That route was not found on the server.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "   HTTP/1.1 404 Not Found\n   {\n     \"error\": \"ProductNotFound\"\n   }\n"
        },
        {
          "title": "Error-Response:",
          "content": "   HTTP/1.1 401 Unauthorized\n   {\n     \"error\": \"InvalidAccessToken\"\n   }\n"
        },
        {
          "title": "Error-Response:",
          "content": "   HTTP/1.1 401 Unauthorized\n   {\n     \"error\": \"MissingAuthenticationCredentials\"\n   }\n"
        },
        {
          "title": "Error-Response:",
          "content": "   HTTP/1.1 404 \n   {\n     \"error\": \"RouteNotFound\"\n   }\n"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "comparison-api/App/Modules/Backend/Controllers/ProductsController.php"
  },
  {
    "type": "delete",
    "url": "/products_options/:id",
    "title": "DELETE /products_options/:id",
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i -X DELETE \"http://apibeta.compargo.com/v1/products_options/74685aea-3a45-11e4-b18a-fe7344fb1ea4\n    -H \"X-COMPARE-REST-API-KEY: 1234567890\"\n"
      }
    ],
    "description": "<p>Delete a Products Option</p>",
    "name": "Delete",
    "group": "Products_Options",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "field": "X-COMPARE-REST-API-KEY",
            "optional": false,
            "description": "<p>Products Options unique access-key.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "field": "language",
            "optional": false,
            "description": "<p>Mandatory Language.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "countryCode",
            "optional": false,
            "description": "<p>Mandatory Country Code.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "id",
            "optional": false,
            "description": "<p>Mandatory Products Option Unique ID.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "field": "id",
            "optional": false,
            "description": "<p>The ID of Products Option.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "   HTTP/1.1 200 OK\n   {\n     \"id\": \"74685aea-3a45-11e4-b18a-fe7344fb1ea4\"\n   }\n"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "field": "InvalidAccessToken",
            "optional": false,
            "description": "<p>The access token is invalid.</p>"
          },
          {
            "group": "Error 4xx",
            "field": "MissingAuthenticationCredentials",
            "optional": false,
            "description": "<p>The authentication credentials are missing.</p>"
          },
          {
            "group": "Error 4xx",
            "field": "ProductsOptionNotFound",
            "optional": false,
            "description": "<p>The id of the Products Option was not found.</p>"
          },
          {
            "group": "Error 4xx",
            "field": "RouteNotFound",
            "optional": false,
            "description": "<p>That route was not found on the server.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "   HTTP/1.1 401 Unauthorized\n   {\n     \"error\": \"InvalidAccessToken\"\n   }\n"
        },
        {
          "title": "Error-Response:",
          "content": "   HTTP/1.1 401 Unauthorized\n   {\n     \"error\": \"MissingAuthenticationCredentials\"\n   }\n"
        },
        {
          "title": "Error-Response:",
          "content": "   HTTP/1.1 404 Not Found\n   {\n     \"error\": \"ProductsOptionNotFound\"\n   }\n"
        },
        {
          "title": "Error-Response:",
          "content": "   HTTP/1.1 404 \n   {\n     \"error\": \"RouteNotFound\"\n   }\n"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "comparison-api/App/Modules/Backend/Controllers/ProductsOptionsController.php"
  },
  {
    "type": "get",
    "url": "/products_options",
    "title": "GET /products_options",
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -H \"X-COMPARE-REST-API-KEY: 1234567890\" \n    -i \"http://apibeta.compargo.com/v1/products_options/?countryCode=ph&language=en&\n        query={\"status\":\"1\"}&fields=id,productId,areaId,name,value,label,editable,visibility,status&\n        sort=-id,name&\n        limit=20\"\n"
      }
    ],
    "description": "<p>Read data of all Products Options</p>",
    "name": "Get",
    "group": "Products_Options",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "field": "X-COMPARE-REST-API-KEY",
            "optional": false,
            "description": "<p>Products Options unique access-key.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "field": "language",
            "optional": false,
            "description": "<p>Mandatory Language.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "countryCode",
            "optional": false,
            "description": "<p>Mandatory Country Code.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "query",
            "optional": true,
            "description": "<p>Optional query conditions that rows must satisfy to be selected.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "fields",
            "optional": true,
            "description": "<p>Optional field indicates a column that you want to retrieve.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "sort",
            "optional": true,
            "description": "<p>Optional sort orders columns selected for output.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "limit",
            "defaultValue": "0",
            "optional": true,
            "description": "<p>Optional limit used to constrain the number of rows returned.                                                     When offset parameter is present, the limit specifies the offset                                                  of the first row to return. When count parameter exists, the limit                                                   identifies all the rows returned and with default 0.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "offset",
            "optional": true,
            "description": "<p>Optional offset specifies the maximum number of rows to return.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "count",
            "defaultValue": "1",
            "optional": true,
            "description": "<p>Optional count with default 1. Returns the count of products options.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "field": "id",
            "optional": false,
            "description": "<p>ID of the Products Options.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "productId",
            "optional": false,
            "description": "<p>Product ID of the Products Options.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "areaId",
            "optional": false,
            "description": "<p>Area ID of the Products Options.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "name",
            "optional": false,
            "description": "<p>Name of the Products Options.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "value",
            "optional": false,
            "description": "<p>Value of the Products Options.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "label",
            "optional": false,
            "description": "<p>Label of the Products Options.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "editable",
            "optional": false,
            "description": "<p>Editable Flag of the Products Options.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "visibility",
            "optional": false,
            "description": "<p>Visibility Flag of the Products Options.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "field": "status",
            "optional": false,
            "description": "<p>Status Flag of the Products Options.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "field": "active",
            "optional": false,
            "description": "<p>Active Flag of the Products Options.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "field": "created",
            "optional": false,
            "description": "<p>Creation date of the Products Options.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "field": "modified",
            "optional": false,
            "description": "<p>Modification date of the Products Options.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "createdBy",
            "optional": false,
            "description": "<p>ID of the User who created the Products Options.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "modifiedBy",
            "optional": false,
            "description": "<p>ID of the User who modified the Products Options.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "   HTTP/1.1 200 OK\n   {\n     \"id\": \"e36429f8-3a61-11e4-b18a-fe7344fb1ea4\",\n     \"productId\": \"6de2478a-3a45-11e4-b18a-fe7344fb1ea4\",\n     \"areaId\": \"0b412a0e-397a-11e4-b18a-fe7344fb1ea4\",\n     \"name\": \"minimumAgeSupplementary\",\n     \"value\": \"13\",\n     \"label\": null,\n     \"editable\": null,\n     \"visibility\": null,\n     \"status\": \"1\"\n },\n {\n     \"id\": \"e7ddeeba-3a61-11e4-b18a-fe7344fb1ea4\",\n     \"productId\": \"71e00fd4-3a45-11e4-b18a-fe7344fb1ea4\",\n     \"areaId\": \"0b412a0e-397a-11e4-b18a-fe7344fb1ea4\",\n     \"name\": \"existingCardHolder\",\n     \"value\": \"1\",\n     \"label\": null,\n     \"editable\": null,\n     \"visibility\": null,\n     \"status\": \"1\"\n },\n {\n     \"id\": \"e8227346-3a61-11e4-b18a-fe7344fb1ea4\",\n     \"productId\": \"72c28c74-3a45-11e4-b18a-fe7344fb1ea4\",\n     \"areaId\": \"0b412a0e-397a-11e4-b18a-fe7344fb1ea4\",\n     \"name\": \"featured\",\n     \"value\": \"0\",\n     \"label\": null,\n     \"editable\": null,\n     \"visibility\": null,\n     \"status\": \"1\"\n }\n"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "field": "InvalidAccessToken",
            "optional": false,
            "description": "<p>The access token is invalid.</p>"
          },
          {
            "group": "Error 4xx",
            "field": "MissingAuthenticationCredentials",
            "optional": false,
            "description": "<p>The authentication credentials are missing.</p>"
          },
          {
            "group": "Error 4xx",
            "field": "WrongFieldsReturned",
            "optional": false,
            "description": "<p>The requested fields are not available.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "   HTTP/1.1 401 Unauthorized\n   {\n     \"error\": \"InvalidAccessToken\"\n   }\n"
        },
        {
          "title": "Error-Response:",
          "content": "   HTTP/1.1 401 Unauthorized\n   {\n     \"error\": \"MissingAuthenticationCredentials\"\n   }\n"
        },
        {
          "title": "Error-Response:",
          "content": "   HTTP/1.1 401 Unauthorized\n   {\n     \"error\": \"WrongFieldsReturned\"\n   }\n"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "comparison-api/App/Modules/Backend/Controllers/ProductsOptionsController.php"
  },
  {
    "type": "get",
    "url": "/products_options/:id",
    "title": "GET /products_options/:id",
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -H \"X-COMPARE-REST-API-KEY: 1234567890\" \n    -i \"http://apibeta.compargo.com/v1/products_options/e8227346-3a61-11e4-b18a-fe7344fb1ea4/?countryCode=ph&language=en\"\n"
      }
    ],
    "description": "<p>Read data of a Products Options</p>",
    "name": "GetOne",
    "group": "Products_Options",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "field": "X-COMPARE-REST-API-KEY",
            "optional": false,
            "description": "<p>Products Options unique access-key.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "field": "language",
            "optional": false,
            "description": "<p>Mandatory Language.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "countryCode",
            "optional": false,
            "description": "<p>Mandatory Country Code.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "id",
            "optional": false,
            "description": "<p>Mandatory Products Options unique ID.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "field": "id",
            "optional": false,
            "description": "<p>ID of the Products Option.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "productId",
            "optional": false,
            "description": "<p>Product ID of the Products Option.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "areaID",
            "optional": false,
            "description": "<p>Area ID of the Products Option.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "name",
            "optional": false,
            "description": "<p>Name of the Products Option.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "value",
            "optional": false,
            "description": "<p>Value of the Products Option.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "label",
            "optional": false,
            "description": "<p>Label of the Products Option.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "editable",
            "optional": false,
            "description": "<p>Editable Flag of the Products Option.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "visibility",
            "optional": false,
            "description": "<p>Visibility Flag of the Products Option.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "field": "status",
            "optional": false,
            "description": "<p>Status Flag of the Products Option.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "field": "active",
            "optional": false,
            "description": "<p>Active Flag of the Products Option.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "field": "created",
            "optional": false,
            "description": "<p>Creation date of the Products Option.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "field": "modified",
            "optional": false,
            "description": "<p>Modification date of the Products Option.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "createdBy",
            "optional": false,
            "description": "<p>ID of the User who created the Products Option.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "modifiedBy",
            "optional": false,
            "description": "<p>ID of the User who modified the Products Option.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "   HTTP/1.1 200 OK\n   {\n     \"id\": \"e8227346-3a61-11e4-b18a-fe7344fb1ea4\",\n     \"productId\": \"72c28c74-3a45-11e4-b18a-fe7344fb1ea4\",\n     \"areaId\": \"0b412a0e-397a-11e4-b18a-fe7344fb1ea4\",\n     \"name\": \"featured\",\n     \"value\": \"0\",\n     \"label\": null,\n     \"editable\": null,\n     \"visibility\": null,\n     \"status\": \"1\",\n     \"created\": \"2014-07-11 09:13:27\",\n     \"modified\": \"2014-07-11 09:52:08\",\n     \"createdBy\": \"a8838d12-1dcc-11e4-b32d-eff91066cccf\",\n     \"modifiedBy\": \"c6bcb740-1dcc-11e4-b32d-eff91066cccf\"              \n   }\n"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "field": "ProductsOptionNotFound",
            "optional": false,
            "description": "<p>The id of the Products Option was not found.</p>"
          },
          {
            "group": "Error 4xx",
            "field": "InvalidAccessToken",
            "optional": false,
            "description": "<p>The access token is invalid.</p>"
          },
          {
            "group": "Error 4xx",
            "field": "MissingAuthenticationCredentials",
            "optional": false,
            "description": "<p>The authentication credentials are missing.</p>"
          },
          {
            "group": "Error 4xx",
            "field": "RouteNotFound",
            "optional": false,
            "description": "<p>That route was not found on the server.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "   HTTP/1.1 404 Not Found\n   {\n     \"error\": \"ProductsOptionNotFound\"\n   }\n"
        },
        {
          "title": "Error-Response:",
          "content": "   HTTP/1.1 401 Unauthorized\n   {\n     \"error\": \"InvalidAccessToken\"\n   }\n"
        },
        {
          "title": "Error-Response:",
          "content": "   HTTP/1.1 401 Unauthorized\n   {\n     \"error\": \"MissingAuthenticationCredentials\"\n   }\n"
        },
        {
          "title": "Error-Response:",
          "content": "   HTTP/1.1 404 \n   {\n     \"error\": \"RouteNotFound\"\n   }\n"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "comparison-api/App/Modules/Backend/Controllers/ProductsOptionsController.php"
  },
  {
    "type": "post",
    "url": "/products_options",
    "title": "POST /products_options",
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i -X POST \"http://apibeta.compargo.com/v1/products_options/?countryCode=ph&language=en\"\n    -H \"X-COMPARE-REST-API-KEY: 1234567890\"\n    -d \"productId=73a4f032-3a45-11e4-b18a-fe7344fb1ea4&\n        areaId=0b412a0e-397a-11e4-b18a-fe7344fb1ea4&\n        name=maxAge&\n        value=70&\n        status=1&\n        editable=1&\n        visibility=1\"\n"
      }
    ],
    "description": "<p>Create a new Products Options</p>",
    "name": "Post",
    "group": "Products_Options",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "field": "X-COMPARE-REST-API-KEY",
            "optional": false,
            "description": "<p>Products Options unique access-key.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "field": "language",
            "optional": false,
            "description": "<p>Mandatory Language.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "countryCode",
            "optional": false,
            "description": "<p>Mandatory Country code.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "productId",
            "optional": false,
            "description": "<p>Mandatory Product ID of Products Options.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "areaId",
            "optional": false,
            "description": "<p>Mandatory Area ID of Products Options.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "name",
            "optional": false,
            "description": "<p>Mandatory Name of the Products Options.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "value",
            "optional": false,
            "description": "<p>Mandatory Value of the Products Options.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "label",
            "optional": true,
            "description": "<p>Optional Label of the Products Options.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "editable",
            "defaultValue": "0",
            "optional": true,
            "description": "<p>Optional Editable Flag of the Products Options.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "visibility",
            "defaultValue": "0",
            "optional": true,
            "description": "<p>Optional Visibility Value of the Products Options.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "status",
            "defaultValue": "0",
            "optional": true,
            "description": "<p>Optional Status of the Products Options.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "createdBy",
            "optional": true,
            "description": "<p>Optional ID of the User who created the Products Options.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "modifiedBy",
            "optional": true,
            "description": "<p>Optional ID of the User who modified the Products Options.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "field": "id",
            "optional": false,
            "description": "<p>The new ProductsOptions-ID.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "   HTTP/1.1 200 OK\n   {\n     \"id\": \"3aa61eec-3c06-11e4-9a7a-90a27a7c008a\"\n   }\n"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "field": "BadInputParameter",
            "optional": false,
            "description": "<p>The request cannot be fulfilled due to bad syntax.</p>"
          },
          {
            "group": "Error 4xx",
            "field": "InvalidAccessToken",
            "optional": false,
            "description": "<p>The access token is invalid.</p>"
          },
          {
            "group": "Error 4xx",
            "field": "MissingAuthenticationCredentials",
            "optional": false,
            "description": "<p>The authentication credentials are missing.</p>"
          },
          {
            "group": "Error 4xx",
            "field": "RouteNotFound",
            "optional": false,
            "description": "<p>That route was not found on the server.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "   HTTP/1.1 400\n   {\n     \"error\": \"BadInputParameter\"\n   }\n"
        },
        {
          "title": "Error-Response:",
          "content": "   HTTP/1.1 401 Unauthorized\n   {\n     \"error\": \"InvalidAccessToken\"\n   }\n"
        },
        {
          "title": "Error-Response:",
          "content": "   HTTP/1.1 401 Unauthorized\n   {\n     \"error\": \"MissingAuthenticationCredentials\"\n   }\n"
        },
        {
          "title": "Error-Response:",
          "content": "   HTTP/1.1 404 \n   {\n     \"error\": \"RouteNotFound\"\n   }\n"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "comparison-api/App/Modules/Backend/Controllers/ProductsOptionsController.php"
  },
  {
    "type": "put",
    "url": "/products_options/:id",
    "title": "PUT /products_options/:id",
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i -X PUT \"http://apibeta.compargo.com/v1/products_options/e8227346-3a61-11e4-b18a-fe7344fb1ea4/?countryCode=ph&language=en\"\n    -H \"X-COMPARE-REST-API-KEY: 1234567890\"\n    -d \"areaId=0b412a0e-397a-11e4-b18a-fe7344fb1ea4&\n        value=1&\n        status=0\"\n"
      }
    ],
    "description": "<p>Update a Products Option</p>",
    "name": "Put",
    "group": "Products_Options",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "field": "X-COMPARE-REST-API-KEY",
            "optional": false,
            "description": "<p>Products Options unique access-key.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "field": "language",
            "optional": false,
            "description": "<p>Mandatory Language.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "countryCode",
            "optional": false,
            "description": "<p>Mandatory Country Code.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "id",
            "optional": false,
            "description": "<p>Mandatory Products Option Unique ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "productId",
            "optional": false,
            "description": "<p>Mandatory Product ID of the Products Option.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "areaId",
            "optional": false,
            "description": "<p>Mandatory Area ID of the Products Option.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "name",
            "optional": false,
            "description": "<p>Mandatory Name of the Products Option.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "value",
            "optional": false,
            "description": "<p>Mandatory Value of the Products Option.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "label",
            "optional": true,
            "description": "<p>Optional Label of the Products Option.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "editable",
            "optional": true,
            "description": "<p>Optional Editable Flag of the Products Option.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "visibility",
            "optional": true,
            "description": "<p>Optional Visibility Flag of the Products Option.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "status",
            "optional": true,
            "description": "<p>Optional Status of the Products Option.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "createdBy",
            "optional": true,
            "description": "<p>Optional ID of the User who created the Products Option.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "modifiedBy",
            "optional": true,
            "description": "<p>Optional ID of the User who modified the Products Option.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "   HTTP/1.1 200 OK\n   {\n     \"id\": \"e8227346-3a61-11e4-b18a-fe7344fb1ea4\"\n   }\n"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "field": "BadInputParameter",
            "optional": false,
            "description": "<p>The request cannot be fulfilled due to bad syntax.</p>"
          },
          {
            "group": "Error 4xx",
            "field": "InvalidAccessToken",
            "optional": false,
            "description": "<p>The access token is invalid.</p>"
          },
          {
            "group": "Error 4xx",
            "field": "MissingAuthenticationCredentials",
            "optional": false,
            "description": "<p>The authentication credentials are missing.</p>"
          },
          {
            "group": "Error 4xx",
            "field": "ProductsOptionNotFound",
            "optional": false,
            "description": "<p>The id of the Products Option was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "   HTTP/1.1 400\n   {\n     \"error\": \"BadInputParameter\"\n   }\n"
        },
        {
          "title": "Error-Response:",
          "content": "   HTTP/1.1 401 Unauthorized\n   {\n     \"error\": \"InvalidAccessToken\"\n   }\n"
        },
        {
          "title": "Error-Response:",
          "content": "   HTTP/1.1 401 Unauthorized\n   {\n     \"error\": \"MissingAuthenticationCredentials\"\n   }\n"
        },
        {
          "title": "Error-Response:",
          "content": "   HTTP/1.1 404 Not Found\n   {\n     \"error\": \"ProductsOptionNotFound\"\n   }\n"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "comparison-api/App/Modules/Backend/Controllers/ProductsOptionsController.php"
  },
  {
    "type": "post",
    "url": "/products_options/search",
    "title": "POST /products_options/search",
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -H \"X-COMPARE-REST-API-KEY: 1234567890\" \n    -i -X POST \"http://apibeta.compargo.com/v1/products_options/?countryCode=ph&language=en\"\n    -d \"query={\"status\":\"1\"}&\n        fields=id,productId,areaId,name,value,label,editable,visibility,status&\n        sort=-id,name&\n        limit=20\"\n"
      }
    ],
    "description": "<p>Read data of all Products Options</p>",
    "name": "Search",
    "group": "Products_Options",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "field": "X-COMPARE-REST-API-KEY",
            "optional": false,
            "description": "<p>Products Options unique access-key.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "field": "language",
            "optional": false,
            "description": "<p>Mandatory Language.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "countryCode",
            "optional": false,
            "description": "<p>Mandatory Country Code.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "query",
            "optional": true,
            "description": "<p>Optional query conditions that rows must satisfy to be selected.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "fields",
            "optional": true,
            "description": "<p>Optional field indicates a column that you want to retrieve.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "sort",
            "optional": true,
            "description": "<p>Optional sort orders columns selected for output.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "limit",
            "defaultValue": "0",
            "optional": true,
            "description": "<p>Optional limit used to constrain the number of rows returned.                                                     When offset parameter is present, the limit specifies the offset                                                  of the first row to return. When count parameter exists, the limit                                                   identifies all the rows returned and with default 0.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "offset",
            "optional": true,
            "description": "<p>Optional offset specifies the maximum number of rows to return.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "count",
            "defaultValue": "1",
            "optional": true,
            "description": "<p>Optional count with default 1. Returns the count of products options.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "field": "id",
            "optional": false,
            "description": "<p>ID of the Products Options.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "productId",
            "optional": false,
            "description": "<p>Product ID of the Products Options.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "areaId",
            "optional": false,
            "description": "<p>Area ID of the Products Options.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "name",
            "optional": false,
            "description": "<p>Name of the Products Options.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "value",
            "optional": false,
            "description": "<p>Value of the Products Options.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "label",
            "optional": false,
            "description": "<p>Label of the Products Options.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "editable",
            "optional": false,
            "description": "<p>Editable Flag of the Products Options.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "visibility",
            "optional": false,
            "description": "<p>Visibility Flag of the Products Options.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "field": "status",
            "optional": false,
            "description": "<p>Status Flag of the Products Options.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "field": "active",
            "optional": false,
            "description": "<p>Active Flag of the Products Options.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "field": "created",
            "optional": false,
            "description": "<p>Creation date of the Products Options.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "field": "modified",
            "optional": false,
            "description": "<p>Modification date of the Products Options.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "createdBy",
            "optional": false,
            "description": "<p>ID of the User who created the Products Options.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "modifiedBy",
            "optional": false,
            "description": "<p>ID of the User who modified the Products Options.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "   HTTP/1.1 200 OK\n   {\n     \"id\": \"e36429f8-3a61-11e4-b18a-fe7344fb1ea4\",\n     \"productId\": \"6de2478a-3a45-11e4-b18a-fe7344fb1ea4\",\n     \"areaId\": \"0b412a0e-397a-11e4-b18a-fe7344fb1ea4\",\n     \"name\": \"minimumAgeSupplementary\",\n     \"value\": \"13\",\n     \"label\": null,\n     \"editable\": null,\n     \"visibility\": null,\n     \"status\": \"1\"\n },\n {\n     \"id\": \"e7ddeeba-3a61-11e4-b18a-fe7344fb1ea4\",\n     \"productId\": \"71e00fd4-3a45-11e4-b18a-fe7344fb1ea4\",\n     \"areaId\": \"0b412a0e-397a-11e4-b18a-fe7344fb1ea4\",\n     \"name\": \"existingCardHolder\",\n     \"value\": \"1\",\n     \"label\": null,\n     \"editable\": null,\n     \"visibility\": null,\n     \"status\": \"1\"\n },\n {\n     \"id\": \"e8227346-3a61-11e4-b18a-fe7344fb1ea4\",\n     \"productId\": \"72c28c74-3a45-11e4-b18a-fe7344fb1ea4\",\n     \"areaId\": \"0b412a0e-397a-11e4-b18a-fe7344fb1ea4\",\n     \"name\": \"featured\",\n     \"value\": \"0\",\n     \"label\": null,\n     \"editable\": null,\n     \"visibility\": null,\n     \"status\": \"1\"\n }\n"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "field": "InvalidAccessToken",
            "optional": false,
            "description": "<p>The access token is invalid.</p>"
          },
          {
            "group": "Error 4xx",
            "field": "MissingAuthenticationCredentials",
            "optional": false,
            "description": "<p>The authentication credentials are missing.</p>"
          },
          {
            "group": "Error 4xx",
            "field": "WrongFieldsReturned",
            "optional": false,
            "description": "<p>The requested fields are not available.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "   HTTP/1.1 401 Unauthorized\n   {\n     \"error\": \"InvalidAccessToken\"\n   }\n"
        },
        {
          "title": "Error-Response:",
          "content": "   HTTP/1.1 401 Unauthorized\n   {\n     \"error\": \"MissingAuthenticationCredentials\"\n   }\n"
        },
        {
          "title": "Error-Response:",
          "content": "   HTTP/1.1 401 Unauthorized\n   {\n     \"error\": \"WrongFieldsReturned\"\n   }\n"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "comparison-api/App/Modules/Backend/Controllers/ProductsOptionsController.php"
  },
  {
    "type": "post",
    "url": "/products_options/search/:id",
    "title": "POST /products_options/search/:id",
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -H \"X-COMPARE-REST-API-KEY: 1234567890\" \n    -i -X POST \"http://apibeta.compargo.com/v1/products_options/e8227346-3a61-11e4-b18a-fe7344fb1ea4/?countryCode=ph&language=en\"\n"
      }
    ],
    "description": "<p>Read data of a Products Options</p>",
    "name": "SearchOne",
    "group": "Products_Options",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "field": "X-COMPARE-REST-API-KEY",
            "optional": false,
            "description": "<p>Products Options unique access-key.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "field": "language",
            "optional": false,
            "description": "<p>Mandatory Language.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "countryCode",
            "optional": false,
            "description": "<p>Mandatory Country Code.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "id",
            "optional": false,
            "description": "<p>Mandatory Products Options unique ID.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "field": "id",
            "optional": false,
            "description": "<p>ID of the Products Option.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "productId",
            "optional": false,
            "description": "<p>Product ID of the Products Option.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "areaID",
            "optional": false,
            "description": "<p>Area ID of the Products Option.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "name",
            "optional": false,
            "description": "<p>Name of the Products Option.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "value",
            "optional": false,
            "description": "<p>Value of the Products Option.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "label",
            "optional": false,
            "description": "<p>Label of the Products Option.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "editable",
            "optional": false,
            "description": "<p>Editable Flag of the Products Option.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "visibility",
            "optional": false,
            "description": "<p>Visibility Flag of the Products Option.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "field": "status",
            "optional": false,
            "description": "<p>Status Flag of the Products Option.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "field": "active",
            "optional": false,
            "description": "<p>Active Flag of the Products Option.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "field": "created",
            "optional": false,
            "description": "<p>Creation date of the Products Option.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "field": "modified",
            "optional": false,
            "description": "<p>Modification date of the Products Option.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "createdBy",
            "optional": false,
            "description": "<p>ID of the User who created the Products Option.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "modifiedBy",
            "optional": false,
            "description": "<p>ID of the User who modified the Products Option.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "   HTTP/1.1 200 OK\n   {\n     \"id\": \"e8227346-3a61-11e4-b18a-fe7344fb1ea4\",\n     \"productId\": \"72c28c74-3a45-11e4-b18a-fe7344fb1ea4\",\n     \"areaId\": \"0b412a0e-397a-11e4-b18a-fe7344fb1ea4\",\n     \"name\": \"featured\",\n     \"value\": \"0\",\n     \"label\": null,\n     \"editable\": null,\n     \"visibility\": null,\n     \"status\": \"1\",\n     \"created\": \"2014-07-11 09:13:27\",\n     \"modified\": \"2014-07-11 09:52:08\",\n     \"createdBy\": \"a8838d12-1dcc-11e4-b32d-eff91066cccf\",\n     \"modifiedBy\": \"c6bcb740-1dcc-11e4-b32d-eff91066cccf\"              \n   }\n"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "field": "ProductsOptionNotFound",
            "optional": false,
            "description": "<p>The id of the Products Option was not found.</p>"
          },
          {
            "group": "Error 4xx",
            "field": "InvalidAccessToken",
            "optional": false,
            "description": "<p>The access token is invalid.</p>"
          },
          {
            "group": "Error 4xx",
            "field": "MissingAuthenticationCredentials",
            "optional": false,
            "description": "<p>The authentication credentials are missing.</p>"
          },
          {
            "group": "Error 4xx",
            "field": "RouteNotFound",
            "optional": false,
            "description": "<p>That route was not found on the server.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "   HTTP/1.1 404 Not Found\n   {\n     \"error\": \"ProductsOptionNotFound\"\n   }\n"
        },
        {
          "title": "Error-Response:",
          "content": "   HTTP/1.1 401 Unauthorized\n   {\n     \"error\": \"InvalidAccessToken\"\n   }\n"
        },
        {
          "title": "Error-Response:",
          "content": "   HTTP/1.1 401 Unauthorized\n   {\n     \"error\": \"MissingAuthenticationCredentials\"\n   }\n"
        },
        {
          "title": "Error-Response:",
          "content": "   HTTP/1.1 404 \n   {\n     \"error\": \"RouteNotFound\"\n   }\n"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "comparison-api/App/Modules/Backend/Controllers/ProductsOptionsController.php"
  },
  {
    "type": "get",
    "url": "/properties",
    "title": "GET /properties",
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -H \"X-COMPARE-REST-API-KEY: 1234567890\" \n    -i \"http://apibeta.compargo.com/v1/properties/?countryCode=ph&language=en&\n        title=brands\n"
      }
    ],
    "description": "<p>Read data of a Property</p>",
    "name": "GetOne",
    "group": "Properties",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "field": "X-COMPARE-REST-API-KEY",
            "optional": false,
            "description": "<p>Properties unique access-key.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "field": "language",
            "optional": false,
            "description": "<p>Mandatory Language.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "countryCode",
            "optional": false,
            "description": "<p>Mandatory Country Code.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "title",
            "optional": false,
            "description": "<p>Mandatory Title.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "field": "id",
            "optional": false,
            "description": "<p>ID of the Country.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "   HTTP/1.1 200 OK\n   {\n     \"$schema\": \"http://json-schema.org/draft-04/schema#\",\n     \"title\": \"brands\",\n     \"type\": \"object\",\n     \"properties\": {\n     \"name\": {\n        \"label\": \"name\",\n        \"type\": \"string\",\n        \"validators\": [\n         {\n             \"rule\": \"minLength\",\n             \"options\": {\n                 \"min\": 2\n             },\n            \"message\": \"name must be greater than 2 characters long\"\n         },\n         {\n             \"rule\": \"maxLength\",\n             \"options\": {\n                 \"max\": 255\n             },\n             \"message\": \"name must be less than 255 characters long\"\n         }\n     ],\n     \"required\": true\n },\n \"alias\": {\n     \"label\": \"alias\",\n     \"type\": \"string\",\n     \"validators\": [\n         {\n             \"rule\": \"minLength\",\n             \"options\": {\n                 \"min\": 2\n             },\n             \"message\": \"alias must be greater than 2 characters long\"\n         },\n         {\n             \"rule\": \"maxLength\",\n             \"options\": {\n                 \"max\": 255\n             },\n             \"message\": \"alias must be less than 255 characters long\"\n         },\n         {\n             \"rule\": \"slug\",\n             \"options\": {\n                 \"separator\": \"-\"\n             },\n             \"message\": \"alias must only have alpha-numeric and -\"\n         }\n     ],\n     \"required\": false\n  }\n}\n"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "field": "InvalidAccessToken",
            "optional": false,
            "description": "<p>The access token is invalid.</p>"
          },
          {
            "group": "Error 4xx",
            "field": "MissingAuthenticationCredentials",
            "optional": false,
            "description": "<p>The authentication credentials are missing.</p>"
          },
          {
            "group": "Error 4xx",
            "field": "PropertyNotFound",
            "optional": false,
            "description": "<p>The name of the Property was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "   HTTP/1.1 401 Unauthorized\n   {\n     \"error\": \"InvalidAccessToken\"\n   }\n"
        },
        {
          "title": "Error-Response:",
          "content": "   HTTP/1.1 401 Unauthorized\n   {\n     \"error\": \"MissingAuthenticationCredentials\"\n   }\n"
        },
        {
          "title": "Error-Response:",
          "content": "   HTTP/1.1 404 Not Found\n   {\n     \"error\": \"PropertyNotFound\"\n   }\n"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "comparison-api/App/Modules/Backend/Controllers/PropertiesController.php"
  },
  {
    "type": "delete",
    "url": "/verticals/:id",
    "title": "DELETE /verticals/:id",
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i -X DELETE \"http://apibeta.compargo.com/v1/verticals/07f44e24-1d43-11e4-b32d-eff91066cccf/?countryCode=ph&language=en\"\n    -H \"X-COMPARE-REST-API-KEY: 1234567890\"\n"
      }
    ],
    "description": "<p>Delete a Vertical</p>",
    "name": "Delete",
    "group": "Verticals",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "field": "X-COMPARE-REST-API-KEY",
            "optional": false,
            "description": "<p>Vertical unique access-key.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "field": "language",
            "optional": false,
            "description": "<p>Mandatory Language.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "countryCode",
            "optional": false,
            "description": "<p>Mandatory Country Code.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "id",
            "optional": false,
            "description": "<p>Mandatory Vertical Unique ID.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "field": "id",
            "optional": false,
            "description": "<p>The ID of Vertical.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "   HTTP/1.1 200 OK\n   {\n     \"id\": \"574a5eb2-1d59-11e4-b32d-eff91066cccf\"\n   }\n"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "field": "InvalidAccessToken",
            "optional": false,
            "description": "<p>The access token is invalid.</p>"
          },
          {
            "group": "Error 4xx",
            "field": "MissingAuthenticationCredentials",
            "optional": false,
            "description": "<p>The authentication credentials are missing.</p>"
          },
          {
            "group": "Error 4xx",
            "field": "VerticalNotFound",
            "optional": false,
            "description": "<p>The id of the Vertical was not found.</p>"
          },
          {
            "group": "Error 4xx",
            "field": "RouteNotFound",
            "optional": false,
            "description": "<p>That route was not found on the server.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "   HTTP/1.1 401 Unauthorized\n   {\n     \"error\": \"InvalidAccessToken\"\n   }\n"
        },
        {
          "title": "Error-Response:",
          "content": "   HTTP/1.1 401 Unauthorized\n   {\n     \"error\": \"MissingAuthenticationCredentials\"\n   }\n"
        },
        {
          "title": "Error-Response:",
          "content": "   HTTP/1.1 404 Not Found\n   {\n     \"error\": \"VerticalNotFound\"\n   }\n"
        },
        {
          "title": "Error-Response:",
          "content": "   HTTP/1.1 404 \n   {\n     \"error\": \"RouteNotFound\"\n   }\n"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "comparison-api/App/Modules/Backend/Controllers/VerticalsController.php"
  },
  {
    "type": "get",
    "url": "/verticals",
    "title": "GET /verticals",
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -H \"X-COMPARE-REST-API-KEY: 1234567890\" \n    -i \"http://apibeta.compargo.com/v1/verticals/?countryCode=ph&language=en&query={\"status\":\"1\"}&fields=id,name,description,status,active,created,modified,createdBy,modifiedBy&sort=-id,name&limit=10\"\n"
      }
    ],
    "description": "<p>Read data of all Verticals</p>",
    "name": "Get",
    "group": "Verticals",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "field": "X-COMPARE-REST-API-KEY",
            "optional": false,
            "description": "<p>Area unique access-key.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "field": "language",
            "optional": false,
            "description": "<p>Mandatory Language.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "countryCode",
            "optional": false,
            "description": "<p>Mandatory Country Code.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "query",
            "optional": true,
            "description": "<p>Optional query conditions that rows must satisfy to be selected.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "fields",
            "optional": true,
            "description": "<p>Optional field indicates a column that you want to retrieve.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "sort",
            "optional": true,
            "description": "<p>Optional sort orders columns selected for output.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "limit",
            "defaultValue": "0",
            "optional": true,
            "description": "<p>Optional limit used to constrain the number of rows returned.                                                     When offset parameter is present, the limit specifies the offset                                                  of the first row to return. When count parameter exists, the limit                                                   identifies all the rows returned and with default 0.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "offset",
            "optional": true,
            "description": "<p>Optional offset specifies the maximum number of rows to return.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "count",
            "defaultValue": "1",
            "optional": true,
            "description": "<p>Optional count with default 1. Returns the count of verticals.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "field": "id",
            "optional": false,
            "description": "<p>ID of the Vertical.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "name",
            "optional": false,
            "description": "<p>Name of the Vertical.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "description",
            "optional": false,
            "description": "<p>Description of the Vertical.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "field": "status",
            "optional": false,
            "description": "<p>Status Flag of the Vertical.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "field": "active",
            "optional": false,
            "description": "<p>Active Flag of the Vertical.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "field": "created",
            "optional": false,
            "description": "<p>Creation date of the Vertical.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "field": "modified",
            "optional": false,
            "description": "<p>Modification date of the Vertical.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "createdBy",
            "optional": false,
            "description": "<p>ID of the User who created the Vertical.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "modifiedBy",
            "optional": false,
            "description": "<p>ID of the User who modified the Vertical.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "   HTTP/1.1 200 OK\n   {\n     \"id\": \"07f44e24-1d43-11e4-b32d-eff91066cccf\",\n     \"name\": \"Money\",\n     \"description\": \"Money\",\n     \"status\": \"1\",\n     \"active\": \"1\",\n     \"created\": \"2014-08-06 10:24:06\",\n     \"modified\": \"2014-08-07 03:06:37\",\n     \"createdBy\": \"a8838d12-1dcc-11e4-b32d-eff91066cccf\",\n     \"modifiedBy\": \"a8838d12-1dcc-11e4-b32d-eff91066cccf\"\n   },\n   {\n     \"id\": \"3140c21c-1d43-11e4-b32d-eff91066cccf\",\n     \"name\": \"Insurance\",\n     \"description\": \"Insurance\",\n     \"status\": \"1\",\n     \"active\": \"1\",\n     \"created\": \"2014-08-06 10:25:15\",\n     \"modified\": \"2014-08-07 03:07:03\",\n     \"createdBy\": \"a8838d12-1dcc-11e4-b32d-eff91066cccf\",\n     \"modifiedBy\": \"a8838d12-1dcc-11e4-b32d-eff91066cccf\"\n   }\n"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "field": "InvalidAccessToken",
            "optional": false,
            "description": "<p>The access token is invalid.</p>"
          },
          {
            "group": "Error 4xx",
            "field": "MissingAuthenticationCredentials",
            "optional": false,
            "description": "<p>The authentication credentials are missing.</p>"
          },
          {
            "group": "Error 4xx",
            "field": "WrongFieldsReturned",
            "optional": false,
            "description": "<p>The requested fields are not available.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "   HTTP/1.1 401 Unauthorized\n   {\n     \"error\": \"InvalidAccessToken\"\n   }\n"
        },
        {
          "title": "Error-Response:",
          "content": "   HTTP/1.1 401 Unauthorized\n   {\n     \"error\": \"MissingAuthenticationCredentials\"\n   }\n"
        },
        {
          "title": "Error-Response:",
          "content": "   HTTP/1.1 401 Unauthorized\n   {\n     \"error\": \"WrongFieldsReturned\"\n   }\n"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "comparison-api/App/Modules/Backend/Controllers/VerticalsController.php"
  },
  {
    "type": "get",
    "url": "/verticals/:id",
    "title": "GET /verticals/:id",
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -H \"X-COMPARE-REST-API-KEY: 1234567890\" \n    -i \"http://apibeta.compargo.com/v1/verticals/07f44e24-1d43-11e4-b32d-eff91066cccf/?countryCode=ph&language=en\"\n"
      }
    ],
    "description": "<p>Read data of a Vertical</p>",
    "name": "GetOne",
    "group": "Verticals",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "field": "X-COMPARE-REST-API-KEY",
            "optional": false,
            "description": "<p>Vertical unique access-key.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "field": "language",
            "optional": false,
            "description": "<p>Mandatory Language.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "countryCode",
            "optional": false,
            "description": "<p>Mandatory Country Code.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "id",
            "optional": false,
            "description": "<p>Mandatory Verticals unique ID.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "field": "id",
            "optional": false,
            "description": "<p>ID of the Vertical.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "name",
            "optional": false,
            "description": "<p>Name of the Vertical.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "alias",
            "optional": false,
            "description": "<p>Alias of the Vertical.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "description",
            "optional": false,
            "description": "<p>Description of the Vertical.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "field": "status",
            "optional": false,
            "description": "<p>Status of the Vertical.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "field": "active",
            "optional": false,
            "description": "<p>Flag of the Vertical.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "field": "created",
            "optional": false,
            "description": "<p>Creation date of the Vertical.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "field": "modified",
            "optional": false,
            "description": "<p>Modification date of the Vertical.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "createdBy",
            "optional": false,
            "description": "<p>ID of the User who created the Vertical.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "modifiedBy",
            "optional": false,
            "description": "<p>ID of the User who modified the Vertical.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "   HTTP/1.1 200 OK\n   {\n     \"id\": \"07f44e24-1d43-11e4-b32d-eff91066cccf\",\n     \"name\": \"Money\",\n     \"description\": \"Money\",\n     \"status\": \"1\",\n     \"active\": \"1\",\n     \"created\": \"2014-08-06 10:24:06\",\n     \"modified\": \"2014-08-07 03:06:37\",\n     \"createdBy\": \"a8838d12-1dcc-11e4-b32d-eff91066cccf\",\n     \"modifiedBy\": \"a8838d12-1dcc-11e4-b32d-eff91066cccf\"\n   }\n"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "field": "VerticalNotFound",
            "optional": false,
            "description": "<p>The id of the Vertical was not found.</p>"
          },
          {
            "group": "Error 4xx",
            "field": "InvalidAccessToken",
            "optional": false,
            "description": "<p>The access token is invalid.</p>"
          },
          {
            "group": "Error 4xx",
            "field": "MissingAuthenticationCredentials",
            "optional": false,
            "description": "<p>The authentication credentials are missing.</p>"
          },
          {
            "group": "Error 4xx",
            "field": "RouteNotFound",
            "optional": false,
            "description": "<p>That route was not found on the server.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "   HTTP/1.1 404 Not Found\n   {\n     \"error\": \"VerticalNotFound\"\n   }\n"
        },
        {
          "title": "Error-Response:",
          "content": "   HTTP/1.1 401 Unauthorized\n   {\n     \"error\": \"InvalidAccessToken\"\n   }\n"
        },
        {
          "title": "Error-Response:",
          "content": "   HTTP/1.1 401 Unauthorized\n   {\n     \"error\": \"MissingAuthenticationCredentials\"\n   }\n"
        },
        {
          "title": "Error-Response:",
          "content": "   HTTP/1.1 404 \n   {\n     \"error\": \"RouteNotFound\"\n   }\n"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "comparison-api/App/Modules/Backend/Controllers/VerticalsController.php"
  },
  {
    "type": "post",
    "url": "/verticals",
    "title": "POST /verticals",
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i -X POST \"http://apibeta.compargo.com/v1/verticals/?countryCode=ph&language=en\"\n    -H \"X-COMPARE-REST-API-KEY: 1234567890\"\n    -d \"name=Telco&description=Telco&status=1\"\n"
      }
    ],
    "description": "<p>Create a new Vertical</p>",
    "name": "Post",
    "group": "Verticals",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "field": "X-COMPARE-REST-API-KEY",
            "optional": false,
            "description": "<p>Vertical unique access-key.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "field": "language",
            "optional": false,
            "description": "<p>Mandatory Language.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "countryCode",
            "optional": false,
            "description": "<p>Mandatory Country code.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "name",
            "optional": false,
            "description": "<p>Mandatory Name of the Vertical.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "description",
            "optional": true,
            "description": "<p>Optional Description of the Vertical.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "alias",
            "optional": true,
            "description": "<p>Optional Alias of the Vertical.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "status",
            "defaultValue": "0",
            "optional": true,
            "description": "<p>Optional Status of the Vertical.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "createdBy",
            "optional": true,
            "description": "<p>Optional ID of the User who created the Vertical.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "modifiedBy",
            "optional": true,
            "description": "<p>Optional ID of the User who modified the Vertical.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "field": "id",
            "optional": false,
            "description": "<p>The new Vertical-ID.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "   HTTP/1.1 200 OK\n   {\n     \"id\": \"d49188a6-1d4e-11e4-b32d-eff91066cccf\"\n   }\n"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "field": "BadInputParameter",
            "optional": false,
            "description": "<p>The request cannot be fulfilled due to bad syntax.</p>"
          },
          {
            "group": "Error 4xx",
            "field": "InvalidAccessToken",
            "optional": false,
            "description": "<p>The access token is invalid.</p>"
          },
          {
            "group": "Error 4xx",
            "field": "MissingAuthenticationCredentials",
            "optional": false,
            "description": "<p>The authentication credentials are missing.</p>"
          },
          {
            "group": "Error 4xx",
            "field": "RouteNotFound",
            "optional": false,
            "description": "<p>That route was not found on the server.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "   HTTP/1.1 400\n   {\n     \"error\": \"BadInputParameter\"\n   }\n"
        },
        {
          "title": "Error-Response:",
          "content": "   HTTP/1.1 401 Unauthorized\n   {\n     \"error\": \"InvalidAccessToken\"\n   }\n"
        },
        {
          "title": "Error-Response:",
          "content": "   HTTP/1.1 401 Unauthorized\n   {\n     \"error\": \"MissingAuthenticationCredentials\"\n   }\n"
        },
        {
          "title": "Error-Response:",
          "content": "   HTTP/1.1 404 \n   {\n     \"error\": \"RouteNotFound\"\n   }\n"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "comparison-api/App/Modules/Backend/Controllers/VerticalsController.php"
  },
  {
    "type": "put",
    "url": "/verticals/:id",
    "title": "PUT /verticals/:id",
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i -X PUT \"http://apibeta.compargo.com/v1/verticals/07f44e24-1d43-11e4-b32d-eff91066cccf/?countryCode=ph&language=en\"\n    -H \"X-COMPARE-REST-API-KEY: 1234567890\"\n    -d \"name=Insurance&description=Insurance&status=1\"\n"
      }
    ],
    "description": "<p>Update a Vertical</p>",
    "name": "Put",
    "group": "Verticals",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "field": "X-COMPARE-REST-API-KEY",
            "optional": false,
            "description": "<p>Vertical unique access-key.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "field": "language",
            "optional": false,
            "description": "<p>Mandatory Language.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "countryCode",
            "optional": false,
            "description": "<p>Mandatory Country Code.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "id",
            "optional": false,
            "description": "<p>Mandatory Vertical Unique ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "name",
            "optional": false,
            "description": "<p>Mandatory Name of the Vertical.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "description",
            "optional": true,
            "description": "<p>Optional Description of the Vertical.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "status",
            "optional": true,
            "description": "<p>Optional Status of the Vertical.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "createdBy",
            "optional": true,
            "description": "<p>Optional ID of the User who created the Vertical.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "modifiedBy",
            "optional": true,
            "description": "<p>Optional ID of the User who modified the Vertical.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "   HTTP/1.1 200 OK\n   {\n     \"id\": \"07f44e24-1d43-11e4-b32d-eff91066cccf\"\n   }\n"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "field": "BadInputParameter",
            "optional": false,
            "description": "<p>The request cannot be fulfilled due to bad syntax.</p>"
          },
          {
            "group": "Error 4xx",
            "field": "InvalidAccessToken",
            "optional": false,
            "description": "<p>The access token is invalid.</p>"
          },
          {
            "group": "Error 4xx",
            "field": "MissingAuthenticationCredentials",
            "optional": false,
            "description": "<p>The authentication credentials are missing.</p>"
          },
          {
            "group": "Error 4xx",
            "field": "VerticalNotFound",
            "optional": false,
            "description": "<p>The id of the Vertical was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "   HTTP/1.1 400\n   {\n     \"error\": \"BadInputParameter\"\n   }\n"
        },
        {
          "title": "Error-Response:",
          "content": "   HTTP/1.1 401 Unauthorized\n   {\n     \"error\": \"InvalidAccessToken\"\n   }\n"
        },
        {
          "title": "Error-Response:",
          "content": "   HTTP/1.1 401 Unauthorized\n   {\n     \"error\": \"MissingAuthenticationCredentials\"\n   }\n"
        },
        {
          "title": "Error-Response:",
          "content": "   HTTP/1.1 404 Not Found\n   {\n     \"error\": \"VerticalNotFound\"\n   }\n"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "comparison-api/App/Modules/Backend/Controllers/VerticalsController.php"
  },
  {
    "type": "post",
    "url": "/verticals/search",
    "title": "POST /verticals/search",
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -H \"X-COMPARE-REST-API-KEY: 1234567890\" \n    -i \"http://apibeta.compargo.com/v1/verticals/search/?countryCode=ph&language=en\"\n    -d \"query={\"name\":\"Money\",\"status\":\"1\"}&fields=id,name,description,status,active,created,modified,createdBy,modifiedBy&\n        sort=-id,name&\n        limit=10\"\n"
      }
    ],
    "description": "<p>Read data of all Verticals</p>",
    "name": "Searches",
    "group": "Verticals",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "field": "X-COMPARE-REST-API-KEY",
            "optional": false,
            "description": "<p>Vertical unique access-key.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "field": "language",
            "optional": false,
            "description": "<p>Mandatory Language.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "countryCode",
            "optional": false,
            "description": "<p>Mandatory Country Code.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "query",
            "optional": true,
            "description": "<p>Optional query conditions that rows must satisfy to be selected.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "fields",
            "optional": true,
            "description": "<p>Optional fields indicates a column that you want to retrieve.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "sort",
            "optional": true,
            "description": "<p>Optional sort orders columns selected for output.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "limit",
            "defaultValue": "0",
            "optional": true,
            "description": "<p>Optional limit used to constrain the number of rows returned.                                                 When offset parameter is present, the limit specifies the offset                                              of the first row to return.                                              When count parameter exists, the limit identifies all the rows returned and with default 0.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "offset",
            "optional": true,
            "description": "<p>Optional offset specifies the maximum number of rows to return.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "count",
            "defaultValue": "1",
            "optional": true,
            "description": "<p>Optional count with default 1. Returns the count of areas.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "field": "id",
            "optional": false,
            "description": "<p>ID of the Vertical.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "name",
            "optional": false,
            "description": "<p>Name of the Vertical.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "description",
            "optional": false,
            "description": "<p>Description of the Vertical.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "field": "status",
            "optional": false,
            "description": "<p>Status of the Vertical.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "field": "active",
            "optional": false,
            "description": "<p>Active Flag of the Vertical.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "field": "created",
            "optional": false,
            "description": "<p>Creation date of the Vertical.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "field": "modified",
            "optional": false,
            "description": "<p>Modification date of the Vertical.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "createdBy",
            "optional": false,
            "description": "<p>ID of the User who created the Vertical.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "modifiedBy",
            "optional": false,
            "description": "<p>ID of the User who modified the Vertical.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "   HTTP/1.1 200 OK\n   {\n     \"id\": \"07f44e24-1d43-11e4-b32d-eff91066cccf\",\n     \"name\": \"Money\",\n     \"description\": \"Money\",\n     \"status\": \"1\",\n     \"active\": \"1\",\n     \"created\": \"2014-08-06 10:24:06\",\n     \"modified\": \"2014-08-07 03:06:37\",\n     \"createdBy\": \"a8838d12-1dcc-11e4-b32d-eff91066cccf\",\n     \"modifiedBy\": \"a8838d12-1dcc-11e4-b32d-eff91066cccf\"\n   },\n   {\n     \"id\": \"3140c21c-1d43-11e4-b32d-eff91066cccf\",\n     \"name\": \"Insurance\",\n     \"description\": \"Insurance\",\n     \"status\": \"1\",\n     \"active\": \"1\",\n     \"created\": \"2014-08-06 10:25:15\",\n     \"modified\": \"2014-08-07 03:07:03\",\n     \"createdBy\": \"a8838d12-1dcc-11e4-b32d-eff91066cccf\",\n     \"modifiedBy\": \"a8838d12-1dcc-11e4-b32d-eff91066cccf\"\n   }\n"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "field": "InvalidAccessToken",
            "optional": false,
            "description": "<p>The access token is invalid.</p>"
          },
          {
            "group": "Error 4xx",
            "field": "MissingAuthenticationCredentials",
            "optional": false,
            "description": "<p>The authentication credentials are missing.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "   HTTP/1.1 401 Unauthorized\n   {\n     \"error\": \"InvalidAccessToken\"\n   }\n"
        },
        {
          "title": "Error-Response:",
          "content": "   HTTP/1.1 401 Unauthorized\n   {\n     \"error\": \"MissingAuthenticationCredentials\"\n   }\n"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "comparison-api/App/Modules/Backend/Controllers/VerticalsController.php"
  },
  {
    "type": "post",
    "url": "/verticals/search/:id",
    "title": "POST /verticals/search/:id",
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -H \"X-COMPARE-REST-API-KEY: 1234567890\" \n    -i -X POST\"http://apibeta.compargo.com/v1/verticals/56c4b6c2-1d54-11e4-b32d-eff91066cccf/?countryCode=ph&language=en\"\n"
      }
    ],
    "description": "<p>Read data of a Vertical</p>",
    "name": "searchOne",
    "group": "Verticals",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "field": "X-COMPARE-REST-API-KEY",
            "optional": false,
            "description": "<p>Verticals unique access-key.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "field": "language",
            "optional": false,
            "description": "<p>Mandatory Language.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "countryCode",
            "optional": false,
            "description": "<p>Mandatory Country Code.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "id",
            "optional": false,
            "description": "<p>Mandatory Vertical unique ID.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "field": "id",
            "optional": false,
            "description": "<p>ID of the Vertical.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "name",
            "optional": false,
            "description": "<p>Name of the Vertical.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "description",
            "optional": false,
            "description": "<p>Lastname of the Vertical.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "field": "status",
            "optional": false,
            "description": "<p>Status of the Vertical.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "field": "active",
            "optional": false,
            "description": "<p>Flag of the Vertical.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "field": "created",
            "optional": false,
            "description": "<p>Creation date of the Vertical.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "field": "modified",
            "optional": false,
            "description": "<p>Modification date of the Vertical.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "createdBy",
            "optional": false,
            "description": "<p>ID of the User who created the Vertical.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "modifiedBy",
            "optional": false,
            "description": "<p>ID of the User who modified the Vertical.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "   HTTP/1.1 200 OK\n   {\n     \"id\": \"07f44e24-1d43-11e4-b32d-eff91066cccf\",\n     \"name\": \"Money\",\n     \"description\": \"Money\",\n     \"status\": \"1\",\n     \"active\": \"1\",\n     \"created\": \"2014-08-06 10:24:06\",\n     \"modified\": \"2014-08-07 03:06:37\",\n     \"createdBy\": \"a8838d12-1dcc-11e4-b32d-eff91066cccf\",\n     \"modifiedBy\": \"a8838d12-1dcc-11e4-b32d-eff91066cccf\"\n   }\n"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "field": "VerticalNotFound",
            "optional": false,
            "description": "<p>The id of the Vertical was not found.</p>"
          },
          {
            "group": "Error 4xx",
            "field": "InvalidAccessToken",
            "optional": false,
            "description": "<p>The access token is invalid.</p>"
          },
          {
            "group": "Error 4xx",
            "field": "MissingAuthenticationCredentials",
            "optional": false,
            "description": "<p>The authentication credentials are missing.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "   HTTP/1.1 404 Not Found\n   {\n     \"error\": \"VerticalNotFound\"\n   }\n"
        },
        {
          "title": "Error-Response:",
          "content": "   HTTP/1.1 401 Unauthorized\n   {\n     \"error\": \"InvalidAccessToken\"\n   }\n"
        },
        {
          "title": "Error-Response:",
          "content": "   HTTP/1.1 401 Unauthorized\n   {\n     \"error\": \"MissingAuthenticationCredentials\"\n   }\n"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "comparison-api/App/Modules/Backend/Controllers/VerticalsController.php"
  }
] });