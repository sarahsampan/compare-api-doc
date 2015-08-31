define({ api: [
  {
    "type": "delete",
    "url": "/admin/groups/:id",
    "title": "DELETE /groups/:id",
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i -X DELETE \"http://apibeta.compargo.com/v1/admin/groups/56c4b6c2-1d54-11e4-b32d-eff91066cccf/?countryCode=ph&language=en\"\n    -H \"X-COMPARE-REST-API-KEY: 1234567890\"\n"
      }
    ],
    "description": "<p>Delete a Group</p>",
    "name": "DeleteGroup",
    "group": "Groups",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "field": "X-COMPARE-REST-API-KEY",
            "optional": false,
            "description": "<p>Groups unique access-key.</p>"
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
            "type": "Number",
            "field": "id",
            "optional": false,
            "description": "<p>Mandatory Groups Unique ID.</p>"
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
            "description": "<p>The ID of Group.</p>"
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
            "field": "GroupNotFound",
            "optional": false,
            "description": "<p>The id of the Group was not found.</p>"
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
          "content": "   HTTP/1.1 404 Not Found\n   {\n     \"error\": \"GroupNotFound\"\n   }\n"
        },
        {
          "title": "Error-Response:",
          "content": "   HTTP/1.1 404 \n   {\n     \"error\": \"RouteNotFound\"\n   }\n"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "comparison-api/App/Modules/Admin/Controllers/GroupsController.php"
  },
  {
    "type": "get",
    "url": "/admin/groups/:id",
    "title": "GET /groups/:id",
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -H \"X-COMPARE-REST-API-KEY: 1234567890\" \n    -i \"http://apibeta.compargo.com/v1/admin/groups/56c4b6c2-1d54-11e4-b32d-eff91066cccf/?countryCode=ph&language=en\"\n"
      }
    ],
    "description": "<p>Read data of a Group</p>",
    "name": "GetGroup",
    "group": "Groups",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "field": "X-COMPARE-REST-API-KEY",
            "optional": false,
            "description": "<p>Groups unique access-key.</p>"
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
            "type": "Number",
            "field": "id",
            "optional": false,
            "description": "<p>Mandatory Groups unique ID.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "field": "id",
            "optional": false,
            "description": "<p>ID of the Group.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "name",
            "optional": false,
            "description": "<p>Name of the Group.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "alias",
            "optional": false,
            "description": "<p>Alias of the Group.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "description",
            "optional": false,
            "description": "<p>Description of the Group.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "status",
            "optional": false,
            "description": "<p>Status of the Group.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "active",
            "optional": false,
            "description": "<p>Flag of the Group.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "created",
            "optional": false,
            "description": "<p>Creation date of the Group.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "modified",
            "optional": false,
            "description": "<p>Modification date of the Group.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "createdBy",
            "optional": false,
            "description": "<p>ID of the User who created the Group.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "modifiedBy",
            "optional": false,
            "description": "<p>ID of the User who modified the Group.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "   HTTP/1.1 200 OK\n   {\n     \"id\": \"56c4b6c2-1d54-11e4-b32d-eff91066cccf\",\n     \"name\": \"Super Admin\",\n     \"description\": \"Super Administrator\",\n     \"alias\": \"super-admin\",\n     \"status\": 1,\n     \"active\": 1,\n     \"created\": \"2014-07-11 09:13:27\",\n     \"modified\": \"2014-07-11 09:52:08\",\n     \"createdBy\": \"a8838d12-1dcc-11e4-b32d-eff91066cccf\",\n     \"modifiedBy\": \"a8838d12-1dcc-11e4-b32d-eff91066cccf\"\n   }\n"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "field": "GroupNotFound",
            "optional": false,
            "description": "<p>The id of the Group was not found.</p>"
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
          "content": "   HTTP/1.1 404 Not Found\n   {\n     \"error\": \"GroupNotFound\"\n   }\n"
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
    "filename": "comparison-api/App/Modules/Admin/Controllers/GroupsController.php"
  },
  {
    "type": "get",
    "url": "/admin/groups",
    "title": "GET /groups",
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -H \"X-COMPARE-REST-API-KEY: 1234567890\" \n    -i \"http://apibeta.compargo.com/v1/admin/groups/?countryCode=ph&language=en&query={\"status\":\"1\"}&fields=descriptions&sort=-id,name&limit=10\"\n"
      }
    ],
    "description": "<p>Read data of all Groups</p>",
    "name": "GetGroups",
    "group": "Groups",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "field": "X-COMPARE-REST-API-KEY",
            "optional": false,
            "description": "<p>Groups unique access-key.</p>"
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
            "description": "<p>Optional count with default 1. Returns the count of groups.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "field": "id",
            "optional": false,
            "description": "<p>ID of the Group.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "name",
            "optional": false,
            "description": "<p>Name of the Group.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "description",
            "optional": false,
            "description": "<p>Description of the Group.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "alias",
            "optional": false,
            "description": "<p>Alias of the Group.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "status",
            "optional": false,
            "description": "<p>Status of the Group.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "active",
            "optional": false,
            "description": "<p>Flag of the Group.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "created",
            "optional": false,
            "description": "<p>Creation date of the Group.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "modified",
            "optional": false,
            "description": "<p>Modification date of the Group.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "createdBy",
            "optional": false,
            "description": "<p>ID of the User who created the Group.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "modifiedBy",
            "optional": false,
            "description": "<p>ID of the User who modified the Group.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "   HTTP/1.1 200 OK\n   {\n     \"id\": \"56c4b6c2-1d54-11e4-b32d-eff91066cccf\",\n     \"name\": \"Super Admin\",\n     \"description\": \"Super Administrator\",\n     \"alias\": \"super-admin\",\n     \"status\": 1,\n     \"active\": 1,\n     \"created\": \"2014-07-11 09:13:27\",\n     \"modified\": \"2014-07-11 09:52:08\",\n     \"createdBy\": \"a8838d12-1dcc-11e4-b32d-eff91066cccf\",\n     \"modifiedBy\": \"a8838d12-1dcc-11e4-b32d-eff91066cccf\"\n   },\n   {\n     \"id\": \"574a5eb2-1d59-11e4-b32d-eff91066cccf\",\n     \"name\": \"Admin\",\n     \"description\": \"Administrator\",\n     \"alias\": \"admin\",\n     \"status\": 1,\n     \"active\": 1,\n     \"created\": \"2014-07-11 09:13:27\",\n     \"modified\": \"2014-07-11 09:52:08\",\n     \"createdBy\": \"a8838d12-1dcc-11e4-b32d-eff91066cccf\",\n     \"modifiedBy\": \"a8838d12-1dcc-11e4-b32d-eff91066cccf\"\n   }\n"
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
    "filename": "comparison-api/App/Modules/Admin/Controllers/GroupsController.php"
  },
  {
    "type": "post",
    "url": "/admin/groups",
    "title": "POST /groups",
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i -X POST \"http://apibeta.compargo.com/v1/admin/groups/?countryCode=ph&language=en\"\n    -H \"X-COMPARE-REST-API-KEY: 1234567890\"\n    -d \"name=User&description=User&status=1\"\n"
      }
    ],
    "description": "<p>Create a new Group</p>",
    "name": "PostGroup",
    "group": "Groups",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "field": "X-COMPARE-REST-API-KEY",
            "optional": false,
            "description": "<p>Groups unique access-key.</p>"
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
            "description": "<p>Mandatory Name of the Group.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "description",
            "optional": true,
            "description": "<p>Optional Description of the Group.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "alias",
            "optional": true,
            "description": "<p>Optional Alias of the Group.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "status",
            "defaultValue": "0",
            "optional": true,
            "description": "<p>Optional Status of the Group.</p>"
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
            "description": "<p>The new Group-ID.</p>"
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
    "filename": "comparison-api/App/Modules/Admin/Controllers/GroupsController.php"
  },
  {
    "type": "post",
    "url": "/admin/groups/search/:id",
    "title": "POST /groups/search/:id",
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -H \"X-COMPARE-REST-API-KEY: 1234567890\" \n    -i -X POST\"http://apibeta.compargo.com/v1/admin/groups/56c4b6c2-1d54-11e4-b32d-eff91066cccf/?countryCode=ph&language=en\"\n"
      }
    ],
    "description": "<p>Read data of a Group</p>",
    "name": "SearchGroup",
    "group": "Groups",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "field": "X-COMPARE-REST-API-KEY",
            "optional": false,
            "description": "<p>Groups unique access-key.</p>"
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
            "type": "Number",
            "field": "id",
            "optional": false,
            "description": "<p>Mandatory Groups unique ID.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "field": "id",
            "optional": false,
            "description": "<p>ID of the Group.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "name",
            "optional": false,
            "description": "<p>Name of the Group.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "description",
            "optional": false,
            "description": "<p>Description of the Group.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "alias",
            "optional": false,
            "description": "<p>Alias of the Group.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "status",
            "optional": false,
            "description": "<p>Status of the Group.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "active",
            "optional": false,
            "description": "<p>Flag of the Group.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "created",
            "optional": false,
            "description": "<p>Creation date of the Group.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "modified",
            "optional": false,
            "description": "<p>Modification date of the Group.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "createdBy",
            "optional": false,
            "description": "<p>ID of the User who created the Group.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "modifiedBy",
            "optional": false,
            "description": "<p>ID of the User who modified the Group.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "   HTTP/1.1 200 OK\n   {\n     \"id\": \"56c4b6c2-1d54-11e4-b32d-eff91066cccf\",\n     \"name\": \"Super Admin\",\n     \"description\": \"Super Administrator\",\n     \"alias\": \"super-admin\",\n     \"status\": 1,\n     \"active\": 1,\n     \"created\": \"2014-07-11 09:13:27\",\n     \"modified\": \"2014-07-11 09:52:08\",\n     \"createdBy\": \"a8838d12-1dcc-11e4-b32d-eff91066cccf\",\n     \"modifiedBy\": \"a8838d12-1dcc-11e4-b32d-eff91066cccf\"\n   }\n"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "field": "GroupNotFound",
            "optional": false,
            "description": "<p>The id of the Group was not found.</p>"
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
          "content": "   HTTP/1.1 404 Not Found\n   {\n     \"error\": \"GroupNotFound\"\n   }\n"
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
    "filename": "comparison-api/App/Modules/Admin/Controllers/GroupsController.php"
  },
  {
    "type": "post",
    "url": "/admin/groups/search",
    "title": "POST /groups/search",
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -H \"X-COMPARE-REST-API-KEY: 1234567890\" \n    -i \"http://apibeta.compargo.com/v1/admin/groups/?countryCode=ph&language=en\"\n    -d \"query={\"name\":\"Admin\",\"status\":\"1\"}&fields=descriptions&sort=-id,name&limit=10\"\n"
      }
    ],
    "description": "<p>Read data of all Groups</p>",
    "name": "SearchGroups",
    "group": "Groups",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "field": "X-COMPARE-REST-API-KEY",
            "optional": false,
            "description": "<p>Groups unique access-key.</p>"
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
            "description": "<p>Optional count with default 1. Returns the count of groups.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "field": "id",
            "optional": false,
            "description": "<p>ID of the Group.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "name",
            "optional": false,
            "description": "<p>Name of the Group.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "description",
            "optional": false,
            "description": "<p>Description of the Group.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "alias",
            "optional": false,
            "description": "<p>Alias of the Group.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "status",
            "optional": false,
            "description": "<p>Status of the Group.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "active",
            "optional": false,
            "description": "<p>Flag of the Group.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "created",
            "optional": false,
            "description": "<p>Creation date of the Group.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "modified",
            "optional": false,
            "description": "<p>Modification date of the Group.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "createdBy",
            "optional": false,
            "description": "<p>ID of the User who created the Group.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "modifiedBy",
            "optional": false,
            "description": "<p>ID of the User who modified the Group.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "   HTTP/1.1 200 OK\n   {\n     \"id\": \"56c4b6c2-1d54-11e4-b32d-eff91066cccf\",\n     \"name\": \"Super Admin\",\n     \"description\": \"Super Administrator\",\n     \"alias\": \"super-admin\",\n     \"status\": 1,\n     \"active\": 1,\n     \"created\": \"2014-07-11 09:13:27\",\n     \"modified\": \"2014-07-11 09:52:08\",\n     \"createdBy\": \"a8838d12-1dcc-11e4-b32d-eff91066cccf\",\n     \"modifiedBy\": \"a8838d12-1dcc-11e4-b32d-eff91066cccf\",\n   },\n   {\n     \"id\": \"574a5eb2-1d59-11e4-b32d-eff91066cccf\",\n     \"name\": \"Admin\",\n     \"description\": \"Administrator\",\n     \"alias\": \"admin\",\n     \"status\": 1,\n     \"active\": 1,\n     \"created\": \"2014-07-11 09:13:27\",\n     \"modified\": \"2014-07-11 09:52:08\",\n     \"createdBy\": \"a8838d12-1dcc-11e4-b32d-eff91066cccf\",\n     \"modifiedBy\": \"a8838d12-1dcc-11e4-b32d-eff91066cccf\"\n   }\n"
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
    "filename": "comparison-api/App/Modules/Admin/Controllers/GroupsController.php"
  },
  {
    "type": "put",
    "url": "/admin/groups/:id",
    "title": "PUT /groups/:id",
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i -X PUT \"http://apibeta.compargo.com/v1/admin/groups/574a5eb2-1d59-11e4-b32d-eff91066cccf/?countryCode=ph&language=en\"\n    -H \"X-COMPARE-REST-API-KEY: 1234567890\"\n    -d \"name=User&description=User&status=1\"\n"
      }
    ],
    "description": "<p>Update a Group</p>",
    "name": "UpdateGroup",
    "group": "Groups",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "field": "X-COMPARE-REST-API-KEY",
            "optional": false,
            "description": "<p>Groups unique access-key.</p>"
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
            "type": "Number",
            "field": "id",
            "optional": false,
            "description": "<p>Mandatory Group Unique ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "name",
            "optional": false,
            "description": "<p>Mandatory Name of the Group.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "description",
            "optional": true,
            "description": "<p>Optional Description of the Group.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "alias",
            "optional": true,
            "description": "<p>Optional Alias of the Group.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "status",
            "optional": true,
            "description": "<p>Optional Status of the Group.</p>"
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
            "field": "GroupNotFound",
            "optional": false,
            "description": "<p>The id of the Group was not found.</p>"
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
          "content": "   HTTP/1.1 404 Not Found\n   {\n     \"error\": \"GroupNotFound\"\n   }\n"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "comparison-api/App/Modules/Admin/Controllers/GroupsController.php"
  },
  {
    "type": "delete",
    "url": "/admin/users/:id",
    "title": "DELETE /users/:id",
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i -X DELETE \"http://apibeta.compargo.com/v1/admin/users/a8838d12-1dcc-11e4-b32d-eff91066cccf/?countryCode=ph&language=en\"\n    -H \"X-COMPARE-REST-API-KEY: 1234567890\"\n"
      }
    ],
    "description": "<p>Delete a User</p>",
    "name": "DeleteUser",
    "group": "Users",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "field": "X-COMPARE-REST-API-KEY",
            "optional": false,
            "description": "<p>Users unique access-key.</p>"
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
            "description": "<p>Mandatory language.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "countryCode",
            "optional": false,
            "description": "<p>Mandatory country code.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "field": "id",
            "optional": false,
            "description": "<p>Mandatory Users unique ID.</p>"
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
            "description": "<p>The id of User.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "   HTTP/1.1 200 OK\n   {\n     \"id\": \"a8838d12-1dcc-11e4-b32d-eff91066cccf\"\n   }\n"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "field": "UserNotFound",
            "optional": false,
            "description": "<p>The id of the User was not found.</p>"
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
          "content": "   HTTP/1.1 404 Not Found\n   {\n     \"error\": \"UserNotFound\"\n   }\n"
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
    "filename": "comparison-api/App/Modules/Admin/Controllers/UsersController.php"
  },
  {
    "type": "get",
    "url": "/admin/users/:id",
    "title": "GET /users/:id",
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -H \"X-COMPARE-REST-API-KEY: 1234567890\" \n    -i \"http://apibeta.compargo.com/v1/admin/users/c6bcb740-1dcc-11e4-b32d-eff91066cccf/?countryCode=ph&language=en\"\n"
      }
    ],
    "description": "<p>Read data of a User</p>",
    "name": "GetUser",
    "group": "Users",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "field": "X-COMPARE-REST-API-KEY",
            "optional": false,
            "description": "<p>Users unique access-key.</p>"
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
            "type": "Number",
            "field": "id",
            "optional": false,
            "description": "<p>Mandatory Users Unique ID.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "field": "id",
            "optional": false,
            "description": "<p>ID of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "field": "groupId",
            "optional": false,
            "description": "<p>ID of the Group.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "emailAddress",
            "optional": false,
            "description": "<p>Email Address of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "firstName",
            "optional": false,
            "description": "<p>Firstname of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "lastName",
            "optional": false,
            "description": "<p>Lastname of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "password",
            "optional": false,
            "description": "<p>Password of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "status",
            "optional": false,
            "description": "<p>Status of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "active",
            "optional": false,
            "description": "<p>Flag of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "created",
            "optional": false,
            "description": "<p>Creation date of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "modified",
            "optional": false,
            "description": "<p>Modification date of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "createdBy",
            "optional": false,
            "description": "<p>ID of the User who created the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "modifiedBy",
            "optional": false,
            "description": "<p>ID of the User who modified the User.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "   HTTP/1.1 200 OK\n   {\n     \"id\": \"c6bcb740-1dcc-11e4-b32d-eff91066cccf\",\n     \"groupId\": \"56c4b6c2-1d54-11e4-b32d-eff91066cccf\",\n     \"emailAddress\": \"john.doe@moneymax.ph\",\n     \"firstName\": \"John\",\n     \"lastName\": \"Doe\",\n     \"status\": 0,\n     \"active\": 0,\n     \"created\": \"2014-07-11 09:13:27\",\n     \"modified\": \"2014-07-11 09:52:08\",\n     \"createdBy\": \"a8838d12-1dcc-11e4-b32d-eff91066cccf\",\n     \"modifiedBy\": \"c6bcb740-1dcc-11e4-b32d-eff91066cccf\"       \n   }\n"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "field": "UserNotFound",
            "optional": false,
            "description": "<p>The id of the User was not found.</p>"
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
          "content": "   HTTP/1.1 404 Not Found\n   {\n     \"error\": \"UserNotFound\"\n   }\n"
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
    "filename": "comparison-api/App/Modules/Admin/Controllers/UsersController.php"
  },
  {
    "type": "get",
    "url": "/admin/users",
    "title": "GET /users",
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -H \"X-COMPARE-REST-API-KEY: 1234567890\" \n    -i \"http://apibeta.compargo.com/v1/admin/users/?countryCode=dk&language=da&query={\"lastName\":\"Doe\",\"status\":\"1\"}&fields=firstName,lastName,emailAddress&sort=-id,firstName&limit=10\"\n"
      }
    ],
    "description": "<p>Read data of all Users</p>",
    "name": "GetUsers",
    "group": "Users",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "field": "X-COMPARE-REST-API-KEY",
            "optional": false,
            "description": "<p>Users unique access-key.</p>"
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
            "description": "<p>Optional limit used to constrain the number of rows returned.                                                     When offset parameter is present, the limit specifies the offset                                                   of the first row to return.                                                  When count parameter exists, the limit identifies all the rows returned and with default 0.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "offset",
            "optional": true,
            "description": "<p>Options offset specifies the maximum number of rows to return.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "count",
            "defaultValue": "1",
            "optional": true,
            "description": "<p>Optional count with default 1. Returns the count of users.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "field": "id",
            "optional": false,
            "description": "<p>ID of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "field": "groupId",
            "optional": false,
            "description": "<p>ID of the Group.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "emailAddre",
            "optional": false,
            "description": "<p>ss            Email Address of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "firstName",
            "optional": false,
            "description": "<p>Firstname of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "lastName",
            "optional": false,
            "description": "<p>Lastname of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "password",
            "optional": false,
            "description": "<p>Password of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "status",
            "optional": false,
            "description": "<p>Status of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "active",
            "optional": false,
            "description": "<p>Flag of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "created",
            "optional": false,
            "description": "<p>Creation date of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "modified",
            "optional": false,
            "description": "<p>Modification date of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "createdBy",
            "optional": false,
            "description": "<p>ID of the User who created the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "modifiedBy",
            "optional": false,
            "description": "<p>ID of the User who modified the User.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "   HTTP/1.1 200 OK\n   {\n     \"id\": \"a8838d12-1dcc-11e4-b32d-eff91066cccf\",\n     \"groupId\": \"56c4b6c2-1d54-11e4-b32d-eff91066cccf\",\n     \"emailAddress\": \"john.doe@moneymax.ph\",\n     \"firstName\": \"John\",\n     \"lastName\": \"Doe\",\n     \"status\": \"1\",      \n     \"active\": \"1\",\n     \"created\": \"2014-07-11 09:13:27\",\n     \"modified\": \"2014-07-11 09:52:08\",\n     \"createdBy\": \"a8838d12-1dcc-11e4-b32d-eff91066cccf\",\n     \"modifiedBy\": \"a8838d12-1dcc-11e4-b32d-eff91066cccf\"       \n   },\n   {\n     \"id\": \"c6bcb740-1dcc-11e4-b32d-eff91066cccf\",\n     \"groupId\": \"56c4b6c2-1d54-11e4-b32d-eff91066cccf\",\n     \"emailAddress\": \"mary@moneymax.ph\",\n     \"firstName\": \"Mary\",\n     \"lastName\": \"Doe\",\n     \"status\": \"1\",\n     \"active\": \"1\",      \n     \"created\": \"2014-07-11 09:13:27\",\n     \"modified\": \"2014-07-11 09:52:08\"\n     \"createdBy\": \"a8838d12-1dcc-11e4-b32d-eff91066cccf\",\n     \"modifiedBy\": \"c6bcb740-1dcc-11e4-b32d-eff91066cccf\"       \n   }\n"
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
          "content": "   HTTP/1.1 401 Unauthorized\n   {\n     \"error\": \"WrongFieldsReturned\"\n   }\n"
        },
        {
          "title": "Error-Response:",
          "content": "   HTTP/1.1 404 \n   {\n     \"error\": \"RouteNotFound\"\n   }\n"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "comparison-api/App/Modules/Admin/Controllers/UsersController.php"
  },
  {
    "type": "post",
    "url": "/admin/users/login",
    "title": "POST /users/login",
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i -X POST \"http://apibeta.compargo.com/v1/admin/users/login/?countryCode=ph&language=en\"\n    -H \"X-COMPARE-REST-API-KEY: 1234567890\"\n    -d \"emailAddress=steve@moneymax.ph&password=secret\"\n"
      }
    ],
    "description": "<p>Authenticates a User</p>",
    "name": "LoginUser",
    "group": "Users",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "field": "X-COMPARE-REST-API-KEY",
            "optional": false,
            "description": "<p>Users unique access-key.</p>"
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
            "field": "emailAddress",
            "optional": false,
            "description": "<p>Mandatory Email Address of the User.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "password",
            "optional": false,
            "description": "<p>Mandatory Password of the User.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "field": "id",
            "optional": false,
            "description": "<p>ID of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "field": "groupId",
            "optional": false,
            "description": "<p>ID of the Group.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "emailAddress",
            "optional": false,
            "description": "<p>Email Address of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "firstName",
            "optional": false,
            "description": "<p>Firstname of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "lastName",
            "optional": false,
            "description": "<p>Lastname of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "password",
            "optional": false,
            "description": "<p>Password of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "status",
            "optional": false,
            "description": "<p>Status of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "created",
            "optional": false,
            "description": "<p>Creation date of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "modified",
            "optional": false,
            "description": "<p>Modification date of the User.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "   HTTP/1.1 200 OK\n   {\n     \"id\": \"a8838d12-1dcc-11e4-b32d-eff91066cccf\",\n     \"groupId\": \"56c4b6c2-1d54-11e4-b32d-eff91066cccf\",\n     \"emailAddress\": \"john.doe@moneymax.ph\",\n     \"firstName\": \"John\",\n     \"lastName\": \"Doe\",\n     \"status\": 1,\n     \"active\": 1,\n     \"created\": \"2014-07-11 09:13:27\",\n     \"modified\": \"2014-07-11 09:52:08\",\n     \"createdBy\": \"a8838d12-1dcc-11e4-b32d-eff91066cccf\",\n     \"modifiedBy\": \"a8838d12-1dcc-11e4-b32d-eff91066cccf\"\n   }\n"
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
          },
          {
            "group": "Error 4xx",
            "field": "InvalidUsernamePassword",
            "optional": false,
            "description": "<p>The email address and/or password are invalid.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "   HTTP/1.1 400\n   {\n     \"error\": \"BadInputParameter\"\n   }\n   \t *\n"
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
        },
        {
          "title": "Error-Response:",
          "content": "   HTTP/1.1 422 Request unable to be followed due to semantic errors\n   {\n     \"error\": \"InvalidUsernamePassword\"\n   }\n"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "comparison-api/App/Modules/Admin/Controllers/UsersController.php"
  },
  {
    "type": "post",
    "url": "/admin/users",
    "title": "POST /users",
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i -X POST \"http://apibeta.compargo.com/v1/admin/users/?countryCode=ph&language=en\"\n    -H \"X-COMPARE-REST-API-KEY: 1234567890\"\n    -d \"groupId=56c4b6c2-1d54-11e4-b32d-eff91066cccf&emailAddress=steve@moneymax.ph&firstName=Steve&lastName=Jobs&password=secret&status=1\"\n"
      }
    ],
    "description": "<p>Create a new User</p>",
    "name": "PostUser",
    "group": "Users",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "field": "X-COMPARE-REST-API-KEY",
            "optional": false,
            "description": "<p>Users unique access-key.</p>"
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
            "type": "Number",
            "field": "groupId",
            "optional": false,
            "description": "<p>Mandatory ID of the Group.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "emailAddress",
            "optional": false,
            "description": "<p>Mandatory Email Address of the User.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "firstName",
            "optional": false,
            "description": "<p>Mandatory Firstname of the User.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "lastName",
            "optional": false,
            "description": "<p>Mandatory Lastname of the User.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "password",
            "optional": false,
            "description": "<p>Mandatory Password of the User.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "status",
            "optional": false,
            "description": "<p>Mandatory Status of the User.</p>"
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
            "description": "<p>The new Users-ID.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "   HTTP/1.1 200 OK\n   {\n     \"id\": \"1535ebcc-22b8-11e4-bd33-17609cecca2f\"       \n   }\n"
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
            "field": "UserNotFound",
            "optional": false,
            "description": "<p>The id of the User was not found.</p>"
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
          "content": "   HTTP/1.1 404 Not Found\n   {\n     \"error\": \"UserNotFound\"\n   }\n"
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
    "filename": "comparison-api/App/Modules/Admin/Controllers/UsersController.php"
  },
  {
    "type": "post",
    "url": "/admin/users/search/:id",
    "title": "POST /users/search/:id",
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -H \"X-COMPARE-REST-API-KEY: 1234567890\" \n    -i -X POST \"http://apibeta.compargo.com/v1/admin/users/c6bcb740-1dcc-11e4-b32d-eff91066cccf/?countryCode=ph&language=en\"\n"
      }
    ],
    "description": "<p>Read data of a User</p>",
    "name": "SearchUser",
    "group": "Users",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "field": "X-COMPARE-REST-API-KEY",
            "optional": false,
            "description": "<p>Users unique access-key.</p>"
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
            "type": "Number",
            "field": "id",
            "optional": false,
            "description": "<p>Mandatory Users unique ID.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "field": "id",
            "optional": false,
            "description": "<p>ID of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "field": "groupId",
            "optional": false,
            "description": "<p>ID of the Group.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "emailAddress",
            "optional": false,
            "description": "<p>Email Address of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "firstName",
            "optional": false,
            "description": "<p>Firstname of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "lastName",
            "optional": false,
            "description": "<p>Lastname of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "password",
            "optional": false,
            "description": "<p>Password of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "status",
            "optional": false,
            "description": "<p>Status of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "active",
            "optional": false,
            "description": "<p>Flag of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "created",
            "optional": false,
            "description": "<p>Creation date of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "modified",
            "optional": false,
            "description": "<p>Modification date of the User.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "   HTTP/1.1 200 OK\n   {\n     \"id\": \"a8838d12-1dcc-11e4-b32d-eff91066cccf\",\n     \"groupId\": \"56c4b6c2-1d54-11e4-b32d-eff91066cccf\",\n     \"emailAddress\": \"john.doe@moneymax.ph\",\n     \"firstName\": \"John\",\n     \"lastName\": \"Doe\",\n     \"status\": 1,\n     \"active\": 1,\n     \"created\": \"2014-07-11 09:13:27\",\n     \"modified\": \"2014-07-11 09:52:08\",\n     \"createdBy\": \"a8838d12-1dcc-11e4-b32d-eff91066cccf\",\n     \"modifiedBy\": \"a8838d12-1dcc-11e4-b32d-eff91066cccf\"\n   }\n"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "field": "UserNotFound",
            "optional": false,
            "description": "<p>The id of the User was not found.</p>"
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
          "content": "   HTTP/1.1 404 Not Found\n   {\n     \"error\": \"UserNotFound\"\n   }\n"
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
    "filename": "comparison-api/App/Modules/Admin/Controllers/UsersController.php"
  },
  {
    "type": "post",
    "url": "/admin/users/search",
    "title": "POST /users/search",
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -H \"X-COMPARE-REST-API-KEY: 1234567890\" \n    -i -X POST \"http://apibeta.compargo.com/v1/admin/users/?countryCode=dk&language=da\"\n    -d \"query={\"lastName\":\"Doe\",\"status\":\"1\"}&fields=firstName,lastName,emailAddress&sort=-id,firstName&limit=10\"\n"
      }
    ],
    "description": "<p>Read data of all Users</p>",
    "name": "SearchUsers",
    "group": "Users",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "field": "X-COMPARE-REST-API-KEY",
            "optional": false,
            "description": "<p>Users unique access-key.</p>"
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
            "description": "<p>Optional limit used to constrain the number of rows returned.                                                 When offset parameter is present, the limit specifies the offset                                               of the first row to return.                                              When count parameter exists, the limit identifies all the rows returned and with default 0.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "offset",
            "optional": true,
            "description": "<p>Options offset specifies the maximum number of rows to return.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "count",
            "defaultValue": "1",
            "optional": true,
            "description": "<p>Optional count with default 1. Returns the count of users.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "field": "id",
            "optional": false,
            "description": "<p>ID of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "field": "groupId",
            "optional": false,
            "description": "<p>ID of the Group.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "emailAddress",
            "optional": false,
            "description": "<p>Email Address of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "firstName",
            "optional": false,
            "description": "<p>Firstname of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "lastName",
            "optional": false,
            "description": "<p>Lastname of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "password",
            "optional": false,
            "description": "<p>Password of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "status",
            "optional": false,
            "description": "<p>Status of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "active",
            "optional": false,
            "description": "<p>Flag of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "created",
            "optional": false,
            "description": "<p>Creation date of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "modified",
            "optional": false,
            "description": "<p>Modification date of the User.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "   HTTP/1.1 200 OK\n   {\n     \"id\": \"a8838d12-1dcc-11e4-b32d-eff91066cccf\",\n     \"groupId\": \"56c4b6c2-1d54-11e4-b32d-eff91066cccf\",\n     \"emailAddress\": \"john.doe@moneymax.ph\",\n     \"firstName\": \"John\",\n     \"lastName\": \"Doe\",\n     \"status\": 1,     \n     \"active\": \"1\", \n     \"created\": \"2014-07-11 09:13:27\",\n     \"modified\": \"2014-07-11 09:52:08\",\n     \"createdBy\": \"a8838d12-1dcc-11e4-b32d-eff91066cccf\",\n     \"modifiedBy\": \"a8838d12-1dcc-11e4-b32d-eff91066cccf\"\n   },\n   {\n     \"id\": \"c6bcb740-1dcc-11e4-b32d-eff91066cccf\",\n     \"groupId\": \"56c4b6c2-1d54-11e4-b32d-eff91066cccf\",\n     \"emailAddress\": \"mary@moneymax.ph\",\n     \"firstName\": \"Mary\",\n     \"lastName\": \"Doe\",\n     \"status\": 1,      \n     \"active\": \"1\",\n     \"created\": \"2014-07-11 09:13:27\",\n     \"modified\": \"2014-07-11 09:52:08\",\n     \"createdBy\": \"a8838d12-1dcc-11e4-b32d-eff91066cccf\",\n     \"modifiedBy\": \"a8838d12-1dcc-11e4-b32d-eff91066cccf\"\n   }\n"
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
          "content": "   HTTP/1.1 404 \n   {\n     \"error\": \"RouteNotFound\"\n   }\n"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "comparison-api/App/Modules/Admin/Controllers/UsersController.php"
  },
  {
    "type": "put",
    "url": "/admin/users/:id",
    "title": "PUT /users/:id",
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i -X PUT \"http://apibeta.compargo.com/v1/admin/users/c6bcb740-1dcc-11e4-b32d-eff91066cccf/?countryCode=ph&language=en\"\n    -H \"X-COMPARE-REST-API-KEY: 1234567890\"\n    -d \"lastName=Maden\"\n"
      }
    ],
    "description": "<p>Update a User</p>",
    "name": "UpdateUser",
    "group": "Users",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "field": "X-COMPARE-REST-API-KEY",
            "optional": false,
            "description": "<p>Users unique access-key.</p>"
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
            "description": "<p>Mandatory language.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "countryCode",
            "optional": false,
            "description": "<p>Mandatory country code.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "field": "id",
            "optional": false,
            "description": "<p>Mandatory Users unique ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "field": "groupId",
            "optional": true,
            "description": "<p>Optional ID of the Group.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "emailAddress",
            "optional": true,
            "description": "<p>Optional Email Address of the User.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "firstName",
            "optional": true,
            "description": "<p>Optional Firstname of the User.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "lastName",
            "optional": true,
            "description": "<p>Optional Lastname of the User.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "password",
            "optional": true,
            "description": "<p>Optional Password of the User.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "status",
            "optional": true,
            "description": "<p>Optional Status of the User.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "   HTTP/1.1 200 OK\n   {\n     \"id\": \"1\"\n   }\n"
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
            "field": "UserNotFound",
            "optional": false,
            "description": "<p>The id of the User was not found.</p>"
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
          "content": "   HTTP/1.1 404 Not Found\n   {\n     \"error\": \"UserNotFound\"\n   }\n"
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
    "filename": "comparison-api/App/Modules/Admin/Controllers/UsersController.php"
  }
] });