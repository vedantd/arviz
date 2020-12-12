(function() {
  var fn = function() {
    
    (function(root) {
      function now() {
        return new Date();
      }
    
      var force = false;
    
      if (typeof root._bokeh_onload_callbacks === "undefined" || force === true) {
        root._bokeh_onload_callbacks = [];
        root._bokeh_is_loading = undefined;
      }
    
      
      
    
      var element = document.getElementById("8e005d50-ffac-48f4-9b8e-d73a2ddb7a0a");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '8e005d50-ffac-48f4-9b8e-d73a2ddb7a0a' but no matching script tag was found.")
        }
      
    
      function run_callbacks() {
        try {
          root._bokeh_onload_callbacks.forEach(function(callback) {
            if (callback != null)
              callback();
          });
        } finally {
          delete root._bokeh_onload_callbacks
        }
        console.debug("Bokeh: all callbacks have finished");
      }
    
      function load_libs(css_urls, js_urls, callback) {
        if (css_urls == null) css_urls = [];
        if (js_urls == null) js_urls = [];
    
        root._bokeh_onload_callbacks.push(callback);
        if (root._bokeh_is_loading > 0) {
          console.debug("Bokeh: BokehJS is being loaded, scheduling callback at", now());
          return null;
        }
        if (js_urls == null || js_urls.length === 0) {
          run_callbacks();
          return null;
        }
        console.debug("Bokeh: BokehJS not loaded, scheduling load and callback at", now());
        root._bokeh_is_loading = css_urls.length + js_urls.length;
    
        function on_load() {
          root._bokeh_is_loading--;
          if (root._bokeh_is_loading === 0) {
            console.debug("Bokeh: all BokehJS libraries/stylesheets loaded");
            run_callbacks()
          }
        }
    
        function on_error() {
          console.error("failed to load " + url);
        }
    
        for (var i = 0; i < css_urls.length; i++) {
          var url = css_urls[i];
          const element = document.createElement("link");
          element.onload = on_load;
          element.onerror = on_error;
          element.rel = "stylesheet";
          element.type = "text/css";
          element.href = url;
          console.debug("Bokeh: injecting link tag for BokehJS stylesheet: ", url);
          document.body.appendChild(element);
        }
    
        const hashes = {"https://cdn.bokeh.org/bokeh/release/bokeh-2.2.3.min.js": "T2yuo9Oe71Cz/I4X9Ac5+gpEa5a8PpJCDlqKYO0CfAuEszu1JrXLl8YugMqYe3sM", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-2.2.3.min.js": "98GDGJ0kOMCUMUePhksaQ/GYgB3+NH9h996V88sh3aOiUNX3N+fLXAtry6xctSZ6", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-2.2.3.min.js": "89bArO+nlbP3sgakeHjCo1JYxYR5wufVgA3IbUvDY+K7w4zyxJqssu7wVnfeKCq8"};
    
        for (var i = 0; i < js_urls.length; i++) {
          var url = js_urls[i];
          var element = document.createElement('script');
          element.onload = on_load;
          element.onerror = on_error;
          element.async = false;
          element.src = url;
          if (url in hashes) {
            element.crossOrigin = "anonymous";
            element.integrity = "sha384-" + hashes[url];
          }
          console.debug("Bokeh: injecting script tag for BokehJS library: ", url);
          document.head.appendChild(element);
        }
      };
    
      function inject_raw_css(css) {
        const element = document.createElement("style");
        element.appendChild(document.createTextNode(css));
        document.body.appendChild(element);
      }
    
      
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-2.2.3.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-2.2.3.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-2.2.3.min.js"];
      var css_urls = [];
      
    
      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          (function() {
            var fn = function() {
              Bokeh.safely(function() {
                (function(root) {
                  function embed_document(root) {
                    
                  var docs_json = '{"3d61030a-4d8a-4807-8ed5-31f4712e4b73":{"roots":{"references":[{"attributes":{"axis":{"id":"68256"},"dimension":1,"ticker":null},"id":"68259","type":"Grid"},{"attributes":{},"id":"68246","type":"DataRange1d"},{"attributes":{},"id":"68296","type":"BasicTickFormatter"},{"attributes":{},"id":"68257","type":"BasicTicker"},{"attributes":{"children":[{"id":"68306"},{"id":"68304"}]},"id":"68307","type":"Column"},{"attributes":{"data":{"rug_x":{"__ndarray__":"u/QnuP7V5z9SIsxa1SLgPw==","dtype":"float64","order":"little","shape":[2]},"rug_y":{"__ndarray__":"nB0+wbWyacCcHT7BtbJpwA==","dtype":"float64","order":"little","shape":[2]}},"selected":{"id":"68299"},"selection_policy":{"id":"68300"}},"id":"68285","type":"ColumnDataSource"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"68280","type":"Circle"},{"attributes":{},"id":"68263","type":"WheelZoomTool"},{"attributes":{"axis_label":"Quantile","formatter":{"id":"68296"},"ticker":{"id":"68253"}},"id":"68252","type":"LinearAxis"},{"attributes":{"data":{"x":{"__ndarray__":"AAAAAAAAAACamZmZmZmpP5qZmZmZmbk/NDMzMzMzwz+amZmZmZnJPwAAAAAAANA/NDMzMzMz0z9nZmZmZmbWP5qZmZmZmdk/zczMzMzM3D8AAAAAAADgP5qZmZmZmeE/NDMzMzMz4z/NzMzMzMzkP2dmZmZmZuY/AAAAAAAA6D+amZmZmZnpPzQzMzMzM+s/zczMzMzM7D9nZmZmZmbuPw==","dtype":"float64","order":"little","shape":[20]},"y":{"__ndarray__":"PSWUrfrllUC6ZTfE07ObQIHSxpixD6BAXutlA2Fon0AWemawUmmdQBJdptJ4v59A48F0NdPPm0BhLg6FQP6cQNT8SMHKBJ1AN/hQuCybnECYCNGlG7+ZQOL2UqcslZtAhDgC8IHHmkDe0e+ORHOcQJp7JDyiB6BAxVCwvOY1n0BSmX0dHQ6gQFTe5JuCLJtAHVMIAw/Em0COFXr8JyGYQA==","dtype":"float64","order":"little","shape":[20]}},"selected":{"id":"68297"},"selection_policy":{"id":"68298"}},"id":"68279","type":"ColumnDataSource"},{"attributes":{},"id":"68253","type":"BasicTicker"},{"attributes":{"source":{"id":"68285"}},"id":"68287","type":"CDSView"},{"attributes":{"data_source":{"id":"68279"},"glyph":{"id":"68280"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"68281"},"selection_glyph":null,"view":{"id":"68283"}},"id":"68282","type":"GlyphRenderer"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","top_units":"screen"},"id":"68268","type":"BoxAnnotation"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"68260"},{"id":"68261"},{"id":"68262"},{"id":"68263"},{"id":"68264"},{"id":"68265"},{"id":"68266"},{"id":"68267"}]},"id":"68270","type":"Toolbar"},{"attributes":{"axis":{"id":"68252"},"ticker":null},"id":"68255","type":"Grid"},{"attributes":{"callback":null},"id":"68267","type":"HoverTool"},{"attributes":{"fill_alpha":0.5,"fill_color":"lightgrey","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"xs_units":"screen","ys_units":"screen"},"id":"68269","type":"PolyAnnotation"},{"attributes":{},"id":"68266","type":"SaveTool"},{"attributes":{"data_source":{"id":"68285"},"glyph":{"id":"68284"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"68287"}},"id":"68286","type":"GlyphRenderer"},{"attributes":{},"id":"68299","type":"Selection"},{"attributes":{"line_color":"red","line_dash":[6],"line_width":3,"location":400},"id":"68289","type":"Span"},{"attributes":{},"id":"68250","type":"LinearScale"},{"attributes":{},"id":"68294","type":"BasicTickFormatter"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"68281","type":"Circle"},{"attributes":{},"id":"68297","type":"Selection"},{"attributes":{},"id":"68261","type":"PanTool"},{"attributes":{"overlay":{"id":"68268"}},"id":"68262","type":"BoxZoomTool"},{"attributes":{"text":"mu"},"id":"68290","type":"Title"},{"attributes":{"source":{"id":"68279"}},"id":"68283","type":"CDSView"},{"attributes":{"toolbar":{"id":"68305"},"toolbar_location":"above"},"id":"68306","type":"ToolbarBox"},{"attributes":{"line_alpha":0.7,"line_width":1.5,"location":0},"id":"68288","type":"Span"},{"attributes":{"children":[[{"id":"68243"},0,0]]},"id":"68304","type":"GridBox"},{"attributes":{"overlay":{"id":"68269"}},"id":"68264","type":"LassoSelectTool"},{"attributes":{"angle":{"units":"rad","value":1.5707963267948966},"line_alpha":{"value":0.35},"size":{"units":"screen","value":8},"x":{"field":"rug_x"},"y":{"field":"rug_y"}},"id":"68284","type":"Dash"},{"attributes":{},"id":"68265","type":"UndoTool"},{"attributes":{"axis_label":"ESS for small intervals","formatter":{"id":"68294"},"ticker":{"id":"68257"}},"id":"68256","type":"LinearAxis"},{"attributes":{"toolbars":[{"id":"68270"}],"tools":[{"id":"68260"},{"id":"68261"},{"id":"68262"},{"id":"68263"},{"id":"68264"},{"id":"68265"},{"id":"68266"},{"id":"68267"}]},"id":"68305","type":"ProxyToolbar"},{"attributes":{"below":[{"id":"68252"}],"center":[{"id":"68255"},{"id":"68259"}],"left":[{"id":"68256"}],"output_backend":"webgl","plot_height":500,"plot_width":500,"renderers":[{"id":"68282"},{"id":"68286"},{"id":"68288"},{"id":"68289"}],"title":{"id":"68290"},"toolbar":{"id":"68270"},"toolbar_location":null,"x_range":{"id":"68244"},"x_scale":{"id":"68248"},"y_range":{"id":"68246"},"y_scale":{"id":"68250"}},"id":"68243","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"68260","type":"ResetTool"},{"attributes":{},"id":"68300","type":"UnionRenderers"},{"attributes":{},"id":"68244","type":"DataRange1d"},{"attributes":{},"id":"68248","type":"LinearScale"},{"attributes":{},"id":"68298","type":"UnionRenderers"}],"root_ids":["68307"]},"title":"Bokeh Application","version":"2.2.3"}}';
                  var render_items = [{"docid":"3d61030a-4d8a-4807-8ed5-31f4712e4b73","root_ids":["68307"],"roots":{"68307":"8e005d50-ffac-48f4-9b8e-d73a2ddb7a0a"}}];
                  root.Bokeh.embed.embed_items(docs_json, render_items);
                
                  }
                  if (root.Bokeh !== undefined) {
                    embed_document(root);
                  } else {
                    var attempts = 0;
                    var timer = setInterval(function(root) {
                      if (root.Bokeh !== undefined) {
                        clearInterval(timer);
                        embed_document(root);
                      } else {
                        attempts++;
                        if (attempts > 100) {
                          clearInterval(timer);
                          console.log("Bokeh: ERROR: Unable to run BokehJS code because BokehJS library is missing");
                        }
                      }
                    }, 10, root)
                  }
                })(window);
              });
            };
            if (document.readyState != "loading") fn();
            else document.addEventListener("DOMContentLoaded", fn);
          })();
        },
        function(Bokeh) {
        
        
        }
      ];
    
      function run_inline_js() {
        
        for (var i = 0; i < inline_js.length; i++) {
          inline_js[i].call(root, root.Bokeh);
        }
        
      }
    
      if (root._bokeh_is_loading === 0) {
        console.debug("Bokeh: BokehJS loaded, going straight to plotting");
        run_inline_js();
      } else {
        load_libs(css_urls, js_urls, function() {
          console.debug("Bokeh: BokehJS plotting callback run at", now());
          run_inline_js();
        });
      }
    }(window));
  };
  if (document.readyState != "loading") fn();
  else document.addEventListener("DOMContentLoaded", fn);
})();