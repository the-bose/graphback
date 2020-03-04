# Snapshot report for `tests/RelationshipMetadataBuilderTest.ts`

The actual snapshot is saved in `RelationshipMetadataBuilderTest.ts.snap`.

Generated by [AVA](https://ava.li).

## should build one-to-many and many-to-one relationships from fields

> Snapshot 1

    `[␊
     {␊
      "kind": "oneToMany",␊
      "owner": "User",␊
      "ownerField": {␊
       "name": "sentMessages",␊
       "description": "some extra description\\n@oneToMany field: 'sender', key: 'senderId'",␊
       "type": "[Message!]!",␊
       "args": [],␊
       "isDeprecated": false,␊
       "astNode": {␊
        "kind": "FieldDefinition",␊
        "description": {␊
         "kind": "StringValue",␊
         "value": "some extra description\\n@oneToMany field: 'sender'",␊
         "block": true,␊
         "loc": {␊
          "start": 89,␊
          "end": 170␊
         }␊
        },␊
        "name": {␊
         "kind": "Name",␊
         "value": "sentMessages",␊
         "loc": {␊
          "start": 179,␊
          "end": 191␊
         }␊
        },␊
        "arguments": [],␊
        "type": {␊
         "kind": "NonNullType",␊
         "type": {␊
          "kind": "ListType",␊
          "type": {␊
           "kind": "NonNullType",␊
           "type": {␊
            "kind": "NamedType",␊
            "name": {␊
             "kind": "Name",␊
             "value": "Message",␊
             "loc": {␊
              "start": 194,␊
              "end": 201␊
             }␊
            },␊
            "loc": {␊
             "start": 194,␊
             "end": 201␊
            }␊
           },␊
           "loc": {␊
            "start": 194,␊
            "end": 202␊
           }␊
          },␊
          "loc": {␊
           "start": 193,␊
           "end": 203␊
          }␊
         },␊
         "loc": {␊
          "start": 193,␊
          "end": 204␊
         }␊
        },␊
        "directives": [],␊
        "loc": {␊
         "start": 89,␊
         "end": 204␊
        }␊
       }␊
      },␊
      "relationType": "Message",␊
      "relationFieldName": "sender",␊
      "relationForeignKey": "senderId"␊
     },␊
     {␊
      "kind": "manyToOne",␊
      "owner": "Message",␊
      "ownerField": {␊
       "name": "sender",␊
       "description": "@manyToOne field: 'sentMessages', key: 'senderId'",␊
       "type": "User",␊
       "args": [],␊
       "isDeprecated": false,␊
       "astNode": {␊
        "kind": "FieldDefinition",␊
        "description": {␊
         "kind": "StringValue",␊
         "value": "@manyToOne field: 'sentMessages'",␊
         "block": true,␊
         "loc": {␊
          "start": 304,␊
          "end": 360␊
         }␊
        },␊
        "name": {␊
         "kind": "Name",␊
         "value": "sender",␊
         "loc": {␊
          "start": 369,␊
          "end": 375␊
         }␊
        },␊
        "arguments": [],␊
        "type": {␊
         "kind": "NamedType",␊
         "name": {␊
          "kind": "Name",␊
          "value": "User",␊
          "loc": {␊
           "start": 377,␊
           "end": 381␊
          }␊
         },␊
         "loc": {␊
          "start": 377,␊
          "end": 381␊
         }␊
        },␊
        "directives": [],␊
        "loc": {␊
         "start": 304,␊
         "end": 381␊
        }␊
       }␊
      },␊
      "relationType": "User",␊
      "relationFieldName": "sentMessages",␊
      "relationForeignKey": "senderId"␊
     }␊
    ]`

## should build one-to-one relationship metadata from one-to-one field

> Snapshot 1

    `[␊
     {␊
      "kind": "oneToOne",␊
      "owner": "Address",␊
      "ownerField": {␊
       "name": "resident",␊
       "description": "@oneToOne key: 'residentId'",␊
       "type": "User!",␊
       "args": [],␊
       "isDeprecated": false,␊
       "astNode": {␊
        "kind": "FieldDefinition",␊
        "description": {␊
         "kind": "StringValue",␊
         "value": "@oneToOne",␊
         "block": true,␊
         "loc": {␊
          "start": 180,␊
          "end": 213␊
         }␊
        },␊
        "name": {␊
         "kind": "Name",␊
         "value": "resident",␊
         "loc": {␊
          "start": 222,␊
          "end": 230␊
         }␊
        },␊
        "arguments": [],␊
        "type": {␊
         "kind": "NonNullType",␊
         "type": {␊
          "kind": "NamedType",␊
          "name": {␊
           "kind": "Name",␊
           "value": "User",␊
           "loc": {␊
            "start": 232,␊
            "end": 236␊
           }␊
          },␊
          "loc": {␊
           "start": 232,␊
           "end": 236␊
          }␊
         },␊
         "loc": {␊
          "start": 232,␊
          "end": 237␊
         }␊
        },␊
        "directives": [],␊
        "loc": {␊
         "start": 180,␊
         "end": 237␊
        }␊
       }␊
      },␊
      "relationType": "User",␊
      "relationForeignKey": "residentId"␊
     }␊
    ]`

## should build one-to-many and many-to-one relationships from both fields

> Snapshot 1

    `[␊
     {␊
      "kind": "oneToMany",␊
      "owner": "User",␊
      "ownerField": {␊
       "name": "sentMessages",␊
       "description": "some extra description\\n@oneToMany field: 'sender', key: 'senderId'",␊
       "type": "[Message!]!",␊
       "args": [],␊
       "isDeprecated": false,␊
       "astNode": {␊
        "kind": "FieldDefinition",␊
        "description": {␊
         "kind": "StringValue",␊
         "value": "some extra description\\n@oneToMany field: 'sender'",␊
         "block": true,␊
         "loc": {␊
          "start": 89,␊
          "end": 170␊
         }␊
        },␊
        "name": {␊
         "kind": "Name",␊
         "value": "sentMessages",␊
         "loc": {␊
          "start": 179,␊
          "end": 191␊
         }␊
        },␊
        "arguments": [],␊
        "type": {␊
         "kind": "NonNullType",␊
         "type": {␊
          "kind": "ListType",␊
          "type": {␊
           "kind": "NonNullType",␊
           "type": {␊
            "kind": "NamedType",␊
            "name": {␊
             "kind": "Name",␊
             "value": "Message",␊
             "loc": {␊
              "start": 194,␊
              "end": 201␊
             }␊
            },␊
            "loc": {␊
             "start": 194,␊
             "end": 201␊
            }␊
           },␊
           "loc": {␊
            "start": 194,␊
            "end": 202␊
           }␊
          },␊
          "loc": {␊
           "start": 193,␊
           "end": 203␊
          }␊
         },␊
         "loc": {␊
          "start": 193,␊
          "end": 204␊
         }␊
        },␊
        "directives": [],␊
        "loc": {␊
         "start": 89,␊
         "end": 204␊
        }␊
       }␊
      },␊
      "relationType": "Message",␊
      "relationFieldName": "sender",␊
      "relationForeignKey": "senderId"␊
     },␊
     {␊
      "kind": "manyToOne",␊
      "owner": "Message",␊
      "ownerField": {␊
       "name": "sender",␊
       "description": "@manyToOne field: 'sentMessages', key: 'senderId'",␊
       "type": "User",␊
       "args": [],␊
       "isDeprecated": false,␊
       "astNode": {␊
        "kind": "FieldDefinition",␊
        "description": {␊
         "kind": "StringValue",␊
         "value": "@manyToOne field: 'sentMessages'",␊
         "block": true,␊
         "loc": {␊
          "start": 304,␊
          "end": 360␊
         }␊
        },␊
        "name": {␊
         "kind": "Name",␊
         "value": "sender",␊
         "loc": {␊
          "start": 369,␊
          "end": 375␊
         }␊
        },␊
        "arguments": [],␊
        "type": {␊
         "kind": "NamedType",␊
         "name": {␊
          "kind": "Name",␊
          "value": "User",␊
          "loc": {␊
           "start": 377,␊
           "end": 381␊
          }␊
         },␊
         "loc": {␊
          "start": 377,␊
          "end": 381␊
         }␊
        },␊
        "directives": [],␊
        "loc": {␊
         "start": 304,␊
         "end": 381␊
        }␊
       }␊
      },␊
      "relationType": "User",␊
      "relationFieldName": "sentMessages",␊
      "relationForeignKey": "senderId"␊
     }␊
    ]`