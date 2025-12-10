
// Windows temporarily needs this file, https://github.com/module-federation/vite/issues/68

    const importMap = {
      
        "vue": async () => {
          let pkg = await import("__mf__virtual/shell__prebuild__vue__prebuild__.js")
          return pkg
        }
      ,
        "vuetify": async () => {
          let pkg = await import("__mf__virtual/shell__prebuild__vuetify__prebuild__.js")
          return pkg
        }
      
    }
      const usedShared = {
      
          "vue": {
            name: "vue",
            version: "3.5.22",
            scope: ["default"],
            loaded: false,
            from: "shell",
            async get () {
              usedShared["vue"].loaded = true
              const {"vue": pkgDynamicImport} = importMap 
              const res = await pkgDynamicImport()
              const exportModule = {...res}
              // All npm packages pre-built by vite will be converted to esm
              Object.defineProperty(exportModule, "__esModule", {
                value: true,
                enumerable: false
              })
              return function () {
                return exportModule
              }
            },
            shareConfig: {
              singleton: false,
              requiredVersion: "^3.5.22"
            }
          }
        ,
          "vuetify": {
            name: "vuetify",
            version: "3.11.3",
            scope: ["default"],
            loaded: false,
            from: "shell",
            async get () {
              usedShared["vuetify"].loaded = true
              const {"vuetify": pkgDynamicImport} = importMap 
              const res = await pkgDynamicImport()
              const exportModule = {...res}
              // All npm packages pre-built by vite will be converted to esm
              Object.defineProperty(exportModule, "__esModule", {
                value: true,
                enumerable: false
              })
              return function () {
                return exportModule
              }
            },
            shareConfig: {
              singleton: false,
              requiredVersion: "^3.11.3"
            }
          }
        
    }
      const usedRemotes = [
      ]
      export {
        usedShared,
        usedRemotes
      }
      