mobl.provides('ui');
mobl.provides('mobl.ui');
mobl.provides('mobl.ui.stylemixin');
mobl.provides('mobl');
mobl.provides('ui');
ui.loadingStyle = 'ui__loadingStyle';

ui.whenLoaded = function(value, style, loadingMessage, elements, callback) {
  var root6876 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node2966 = $("<span>");
  root6876.append(node2966);
  var condSubs666 = new mobl.CompSubscription();
  subs__.addSub(condSubs666);
  var oldValue666;
  var renderCond666 = function() {
    var value2316 = value.get();
    if(oldValue666 === value2316) return;
    oldValue666 = value2316;
    var subs__ = condSubs666;
    subs__.unsubscribe();
    node2966.empty();
    if(value2316) {
      var nodes4805 = $("<span>");
      node2966.append(nodes4805);
      subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
        renderControl1202();
      }));
      
      function renderControl1202() {
        subs__.addSub((elements)(function(elements, callback) {
          var root6877 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root6877); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes4805;
          nodes4805 = node.contents();
          oldNodes.replaceWith(nodes4805);
        }));
      }
      renderControl1202();
      
      
    } else {
      var nodes4806 = $("<span>");
      node2966.append(nodes4806);
      subs__.addSub((mobl.block)(style, mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root6878 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        var nodes4807 = $("<span>");
        root6878.append(nodes4807);
        subs__.addSub((mobl.label)(loadingMessage, mobl.ref(null), mobl.ref(null), function(_, callback) {
          var root6879 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root6879); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes4807;
          nodes4807 = node.contents();
          oldNodes.replaceWith(nodes4807);
        }));
        var nodes4808 = $("<span>");
        root6878.append(nodes4808);
        subs__.addSub((ui.image)(mobl.ref("data:image/gif;base64,R0lGODlhIAAgAOf2AAAAAAEBAQICAgMDAwQEBAUFBQYGBgcHBwgICAkJCQoKCgsLCwwMDA0NDQ4ODg8PDxAQEBERERISEhMTExQUFBUVFRYWFhcXFxgYGBkZGRoaGhsbGxwcHB0dHR4eHh8fHyAgICEhISIiIiMjIyQkJCUlJSYmJicnJygoKCkpKSoqKisrKywsLC0tLS4uLi8vLzAwMDExMTIyMjMzMzQ0NDU1NTY2Njc3Nzg4ODk5OTo6Ojs7Ozw8PD09PT4+Pj8/P0BAQEFBQUJCQkNDQ0REREVFRUZGRkdHR0hISElJSUpKSktLS0xMTE1NTU5OTk9PT1BQUFFRUVJSUlNTU1RUVFVVVVZWVldXV1hYWFlZWVpaWltbW1xcXF1dXV5eXl9fX2BgYGFhYWJiYmNjY2RkZGVlZWZmZmdnZ2hoaGlpaWpqamtra2xsbG1tbW5ubm9vb3BwcHFxcXJycnNzc3R0dHV1dXZ2dnd3d3h4eHl5eXp6ent7e3x8fH19fX5+fn9/f4CAgIGBgYKCgoODg4SEhIWFhYaGhoeHh4iIiImJiYqKiouLi4yMjI2NjY6Ojo+Pj5CQkJGRkZKSkpOTk5SUlJWVlZaWlpeXl5iYmJmZmZqampubm5ycnJ2dnZ6enp+fn6CgoKGhoaKioqOjo6SkpKWlpaampqenp6ioqKmpqaqqqqurq6ysrK2tra6urq+vr7CwsLGxsbKysrOzs7S0tLW1tba2tre3t7i4uLm5ubq6uru7u7y8vL29vb6+vr+/v8DAwMHBwcLCwsPDw8TExMXFxcbGxsfHx8jIyMnJycrKysvLy8zMzM3Nzc7Ozs/Pz9DQ0NHR0dLS0tPT09TU1NXV1dbW1tfX19jY2NnZ2dra2tvb29zc3N3d3d7e3t/f3+Dg4OHh4eLi4uPj4+Tk5OXl5ebm5ufn5+jo6Onp6erq6uvr6+zs7O3t7e7u7u/v7/Dw8PHx8fLy8vPz8/T09PX19f///////////////////////////////////////yH/C05FVFNDQVBFMi4wAwEAAAAh+QQFBQD/ACwAAAAAIAAgAAAI/gABCBxIsKDBgwgTKlzIsKHDhxAjSiSoYc+bCBMFbqCSY4DAApTgyQOUcUGkZcXAeHxQLB49SgI+xnSYAdYxZsjCDHgQLN48NAEEaFAh4oDDA3+EIXO2rAiAN96owQBQ4YVVCg87XBKWLNofAAROlAgAwIPVFxAgmrAkzJgWgxZcvADhESKGKk2MFhTgIAKBhwweNCjAMICBvwoPHMkDCNCYBwoLhFhxIm3CFYEIGUKkiIfCC2dLzDyI4k6e03hqKLQQerTBAkHCgOFCREHkDydGQFYoYAGDBK4RBiX78ACFBsQJBoAAIThDAyVguMBaEIPcEIgbBjBrtQOAAAoSTAgEcXZ3QwEnrLqQAMD6CgdUz1J3yOFFCwwBBqR/ESJoBhUk6OXQABAwQBYBKVhFAnEF1JURAB9YhcGDByHgwQUOUqjhhhx26KGGAQEAIfkEBQUA/wAsBQADABQAGAAACMwA/wkcSDDABg8BCCpc+I+KMmhKGEpcAAsdu1MFJGZwUmOgg14WgS1gqIDQLltZBoJsB0wBwwugbPXSpeXfAlro3LXKONCAQANzYt361QvIPzXZvHlROGGghkSxcgm7IzBGjQESBYpAFMsWlawMLTQx4hOsQAUNFhAwOzBAjTJs2lRhwPYfhDBs3MCRI6NuAilfAn9RUReACCFIisxAUBgAAQQGEtZVaKDp5IEkXjQGAIDDZYIlPg+84EL0PwEOTC/0ILDCZwMZKAhYGBAAIfkEBQUA/wAsBQADABIAFgAACMsA/wkcSBBDnDMQCCokGOBPt295FkpsEKubOFsKFlowAkOAwAi4uo3zxUBhgjupTEXx6GCWyFwCCTgQSOERqVWqpghQsKobuVP/GADSIrCAmU6lWrXa8e8MtWtb/r3pVGPghTyeTsFq8+9ADh3/Aqj5odADHk+lmiwMIXECEbISCRJQkCBAXIIAMBSxYgVIxrv/BuyQQsVKFhOAA9MgwpjIh8T/IKx40SJEAcj/BBQggLlz3Mue/2UIHWBE6H8UWEAGwJq1gr8ERRAMCAAh+QQFBQD/ACwFAAMAFAAWAAAIzgD/CRxI8IKaMA8IKlz47w60aXMYSmRgCpq1VhL/GUhBYiAEVtCu1VrAcEAVSJKSCGyAKiSsBAI3OBho4M2jS5iWCPwEDdsngYSswfogMMAURJA0bbLxLwwyZlf+tXFHLx2QgRTOIJLUSYxGGzcEbqL3jY4EghnMIIpEZOEcaGUYQtBxo8BCBCIUCjBwICPDBC14/IDR169AACBs4NDRI4Phwx1gSIYx4bFABCBUpPBAwHJRz6BDh8bAsLBCAKgBeGCowjCEFSxE/zuAwHJAACH5BAUFAP8ALAYAAwATABgAAAjSAP8JHDiwwhcpDggqXNgGWDE2CyP+W5AJGDJRCRQC2KiAwUYADjwFQ6Zq4UYOZuT4EMhAU7BkpgZqmPBvoxA8gQYF+ZdAUrBllggs+OOsVomNM+DkIYToxb8suX5J+ZemHLt3ZwQ2oBJnDyIrAmXMEGiJHbx3UwZSmNJ1x8I36uKRgkCwwQsXBBYqQHLFgsAABAh8HEwYgMACHlKo+JBXIkEKLyK/iOD4seQXEioPLPBBYIcBmkOLHk1a4oXSnlH/Y4BihWYRCgsY0BxAdejTEQMCACH5BAUFAP8ALAYAAwAVABYAAAjMAP8JHDhwgpUlCwgqXChwzCtaWhhK/KdA0atblhAwBMARQICBDRy9wtVJgUAFLTgQJDBjyYuPCxa9yqVJYwZI1X7JGOihC5o2NwIgGPRqFyOBj76NMxdnYAcrYNjIQfEPSipYTP6d2bb0HJSBCX5cEQMnyb8CLl4IOABKnLl0nyAQfNDjypgYC+eUSwcKw8IEI0YMWAjhypcKAzlO/PvAwD8BGFCg6LD4nwEbNlA4kFtZ4oPOEgWoBD1QRAPSqFOrXs1wA2uKJ14TSB0QACH5BAUFAP8ALAYAAwAWABYAAAjdAP8JHDiwAAsWAggqBMCwYcMlljYVUUiRYoI8m0oFKlDxn0OHC/pwMvUogcAERqI8ENjwwgsOJ/NwOsXowL8LiJxZo0NwgQ8nVFj8OzCHE6o/Ag1Ju7bNFIKBDXIUiaIFxD8jlj5NDOOMabczBAmY2HHEig6BKVb8M2DJ2rZvmFYSTIBiRxITFNlo+5bpQkUDFzIkVPhgyhYKHRMTVPDB778AihV6SMXtGJJ/DFxEHuiGnDZqmxIs0Lz534klQnioeJwhRYrSAxd4BECAAOzbuHPr3r1ZhWPdBRjCDggAIfkEBQUA/wAsBgADABYAFQAACNQAAQgcSFDBAYIIAfxbyJDhCDZoRDScSHEhAS6GIHFJOLDivwNnDEXSc2AhgiBLHEw0YCGCSTOGJAVC8K+CH2DI2jQcQGJGjg//DIQxRIlOAQV8iCVz1qmkyRYwbPzA8C+Hn0U2/mn5hcwZtDANBYh4EUOHin8COoRYuKirNEgqJ5ogq4FimWbTIlXwWEFCAIoOnliZ4LFwwwQeLDBUbJhhh1HVghn5l6BFY4Z13sGDx2tB5csL6dAbfUsBaIYcENGapeP0xAM0XcueTbu27X8hDDAMCAAh+QQFBQD/ACwGAAMAFgAVAAAIywABCBxIsKBBAP8SKlS4AEcOBgsjSkwo4IebPEUmakxoQIobPWgMKORRpEHEAQ0WCDwwxQ2fNwf+TZgDCxeZhQE8uGBRAeETN37IEEgQZ1YuX5EWFlDx4kWLB/9aoLnj4l8UV7h8CdMisekLDv8CYABb4M8tX8MMmZzogoLELr2IHXI7kQJUiQ2SQJGwsa/CDhUSAgjsN+EGTsx6MfmHgEXhhHDMnTtXS0Hjx//gsNtsK6EFFI83eDImawlmpXdPq17NurXrfx8KKAwIACH5BAUFAP8ALAYABAAXABMAAAjSAP8JHDhQAIYMAQgq/AegoUOHJaJoUbGwokICO6iEiTJA4IEWPhgsDKAggcACPKiM2WLgXwQznExtGegQw78VAgngoFJmygAEZD6dakWoZUETCkNAAYMUySZTrWJNodnww0IJFwIQiFOq1aw9Ii3+k7BwCitafMiKtchgiJIIa+P+Q8CBRAWjcgeGmBQsGa9HEg7gzNtnGzdu3bQZMTBY7h1xkMVxOwKAwom8HDD98uVLDgKBHfP+c0A6tOgdUhyIXijk0SYKqxXGEPMi9sIKBAMCACH5BAUFAP8ALAYABAAYABUAAAjRAAEIHEhQAQKCCAf+W8iQoYUZPDA0nEix4YATOIzsELDQQIkQHCsmMLBwQAocSIwQ+OcAC6JENipaaKGiJEYlQAQYqKJIUqYwBCsutGDjiId/PQxFyuQpidCGAhlEWBgGUiZQbhY8fZoEUyg4U7cKVcBjyAOxaP9pEBECQtqJJRzR4tXL04u3CwPwaebsGTRokgoQQPHWj7XDhyWtnPD2Q6RatWg5IoyXYYPLBSoniBKl8kQx7tqV8szwhq5675yQXnhkWD0zqxcaKdQhdkmKAQEAIfkEBQUA/wAsBgAEABgAFQAACNgA/wkcSLAAAYIIEyZ8kOIEA4UQCQoo8QJGiQACBSQwAKCjR48FCJ6o2ELAvwVBylB5mDBCCoQvYrD4V8DInD2CXiQMMCIhixcU/sl4o2cQIRMRBWoQqGABgAFQ8gxS5CVkUggJewhiJMZB0ogJaOho8LXsAQwfPjwYOKGsQBGCSrFyJWnFPwIo3P6b4+sXMGDBDh3U+88OMmTHDiMSiNVtB0SrVKUqhJQwQgaD9SJw4oSsZYEB8pwr96nt5wGk4rU7t+SzQDfw4rkT4/rkIGudagsksOFAwoAAIfkEBQUA/wAsBwAEABYAFQAACMIA/wkcODBAAIIIExJkICLEAYUQBQYI8eLFBgAYAQTIiDFixRICDaz4geIgQQcJK44IQIBGFjFhIiAEMRDlPxYsIPwjUSXMGjUTEHYYmEEgAgX/AuwAs2bOEwIRFcZQU2cKg6gKD6RgsQBrVAMVOGxo8E+n138e6lDa1InQibMC0bBq5eoVrD1w/7G5xZdvn7wb/Hjq1GnPiLz/CDBYjFiJEsQD63TTdkkC5E/oyHFDAnkNusxeIP/78wwVSNEaEiAMCAAh+QQFBQD/ACwIAAQAFgAXAAAIzQD/CRw4EIDBgwgPEhy4IMSHhRAj/gNRMGFCiQsHYCgB4SJGgQJC8DiSQwBBAB4+XtBhBMqSAws5SDRYoggULTkCLDxQAiOIJ1yEKPgYccCHEQmIfiwgAQMGBEoJajATCFEiNyKiCuSCKdMmTpzcDNAaplQpUmbhjI2KYc6jR47ePNQqcMGCoVohXJnigO5AOtWeObKgNUKAA6i6YZvGiEHUR0z+ufHWLRu0IVERrSrw7xG4yl2iltn8T8KhZ7ZWRKVSZmCBEhi0ZsCLMSAAIfkEBQUA/wAsCQAEABUAFwAACNgAAQgcSLCgwX8IEx7woKFAwocQIX5AmCGiRQIWEQp4QAHjwwYnUmT818EFjA8BRkas8AJGDRcCHmpQ6cGlDxEFDai0UAMIDIcqIQqokEFn0IwEHkxoYPToPwtV2Mh5s6WC039OBA0qZOiQEgBOqUAaO7YJ2KMVzPzx4yfMhKv/BiSYO8ApBStMGsBF+AZZsEEUggqYUeLfgn/QlBET5EClCGXXlPxLMw3aMmJeVLpIJs/UPwWHqEFjZunAyBrU5CWsEGmaMzSas8FjkxACkyV6R0KYoyb3yIAAIfkEBQUA/wAsCQAFABQAFgAACMsA/wkcaADDBQIDEypcyHDhgIYDGzQQkHCBCRQQ/7lwcQGARwAcMv57QXJEgIEZRJJ8UUGkQpIgHrocCCECwpkKByx4kMDjTAdArGyxIoOiwI9IP/JIs6aNmzMRZv7IQzXPmwkzIVxxA8eMjJM4ESw44DOjBCdFGOAUeAYXrDsSMiKwQeKfgk7BdNGy06BhgD3mnh35J6ZYsF20rDSEoAxeuk//EvwxFoyXIgMML0iDp46UwAmIiv0C03DAJsdoBj44YkRtQw90zogMCAAh+QQFBQD/ACwIAAUAFQAWAAAIswD/CRz4rwDBgwgPekjIsKHAAAoUAJg40eHADf9YRLAoUMWDgx8oAmB44ADHkyhTohSAQIEBlQha9BCyw8LIkyqeRJlCZcgAlDLACAVzhECJkw2QZMHSBAMAASsPGPh5MoKRHgpU/utiipMaCBxpiPiXABIsVKHSLHB4p1uxIf+20IKVKlQTh8TOfbsksE4tWKr4NLTA7Bw4TgIl9Jnl6opDS+e8jRnoAAeQtQ07vBHDwGFAACH5BAUFAP8ALAkABQAUABgAAAjRAP8JHCiwwgCCCP8BWMiQQ8KHEBEmMBAxYgsVDipGdKixY0cXHhNmDJkwgAEDAkgaCLGChQgEITnQqHEDxwcAHkcU2VmEBM6OCWwQGSIjAcl/BQqk7OiABw2jD2XoYMhwSqRDW0YKpCBwTiOBOmAMQCCI06RFWxQgvAKtyz851IYh+SdFFKdKjYIQdNFJD4IHvLZJSyQAgZpRnCydOSgQQYaDH55xm/bvwD8IcUBtagJRQzJu1DhZ/sdARg61Dx/Y4latz1Eqw2jhOBqAwwWNAQEAIfkEBQUA/wAsCQAFABMAGAAACMwA/wkc+O8CBYIIExK8oLChwgMOHbJAoSDivxQJNVgsYLGjx48fCQQAKTDFBwIeM7xY+QJCShgwXzzwaIBEixUfBnwMMGDAyIEjECRM8EIFRIIl1jxDk9BIHjhKFgy0cEecPEn/DtxoIeCAHEN96CwR+k/LuXnptPxjc6yWkH9IHBnyY8eGQBzIqtn550CWs2F+snZxdOgPEwAACnIQiMGXs2KQDPD9osiPDIUXejkzNklyVhUjBCikgMvZMUUoOw44tPkKSA1jrkhtGBAAIfkEBQUA/wAsCQAFABMAGAAACMMA/wkc+K/CBIIIEypcyHCgAQINFa4wgSCiQgsWE0LIyLGjRwAAPP7TIECkCwcZLbxY6aJBxgIfTpioEKCjAAEg/4UgU0ThARIfChD0sGueOTIJc4SxgqOiQDXy3qlrJHBGin8EtLwhs8UGxH+K3q0DZ+VfGVyldvzzceeNGS4cBNoI1kyOQFO/ZMkJYOBJWzMhBlrQINBCrF+0BAlUoAQNEgUXD9cyNHBAgwEgQxKUsOqXLT8DOPb5VetJRwxcoEBeGBAAIfkEBQUA/wAsCQAHABMAFgAACLcA/wkcSPAfAAAFBhRcWFCDChIHGEqcSLGixYsYM2q8EEDjPxYRNa4IibGEBAAeB4IQM4TkwAEYKCgc2KHWum5gFqoosoNEgYFz1JkDZ+ifARck/gUYUiXJjxEd/x0yF65alH9dTk2i8S/GlypLfCgQSCPXMDYHGGRq9YnMvwJAvFQhkmBghQwCKYxqFWrOTwQugoA4iJIgBVGtRtkpQFgA4cIDI3RqRQoORgFzEh/JaGEKkroSAwIAIfkEBQUA/wAsBwAHABUAFgAACMwA/wkcSLDgPwEGEyYUYUChw4EQHj58ILGixYsYMxYYWAEAxgsDVRhg0UOIE5AWRdoYdStRA4sjBjaosNFigIIfzERRYFDAhAkJR7gKZ02MQQ4wXoQoiGEUOG3T/vwrgOJDgAAwcsR4sQGA139ivmmrlswKgCmU/rD4R4KIVhQDBv7ZZs1ZnX8LFGVSVOXfgBdDcpRAKFAGrF9sXkqYpImRGAL/DIQIsaAghQ6Q/0mIpMlRGQJeQ4dO+KCRpkdgMv4Lc7qHaghFdiBwGBAAIfkEBQUA/wAsBgAOABYADwAACLwA/1lYkeKfwYMIE/6bIFCVLUqAVCic+A8FAQzO6NGLx4WiwhMD/lHx1WwSBI8JHyCkgLLlvw5gmrhUGKIUtWRbFGJ48WKihU3TmhWrY1CEhn8ARPB8kQFhADnSmhnT9eRfkj9pRvy7sLSEgIMKUDU79kuMAQV5CMkh8k9ABxcvOACY+2+AnmPB4ij4BwEQoTpPQgp4MIFASiNEGBh84IfQnSghZxpMYIcQHiUBJB9EEkiOCc0HDZj4kJliQAAh+QQFBQD/ACwGAAcAFgAWAAAIzAD/CRxIsOA/AgYHkkg4EAMKhhAjSpxIsaLFgRUsDLj4L0AVZtEyYagYQeCyeCivVDwx4AIyduzUaalYQsC/KLeKOeIokMEEngQ5aEGSwGAACBBsGvywyViuKQldMKwQiVgvWmoOYvj5LwRENcN62UJ15F+PM1E0/LMwUEQAgpx63XKVpQACM2uyyADwj8O/FhUICohzC5aZohHesNmyQ6kDBm8JOgDiY4FAB2vYdOmhtOIBLmy+wABAurTp06U/TBFSkiFq0wUEvC4dEAAh+QQFBQD/ACwGAA0AFgAQAAAIsAD//aNQQaDBgwgRSjG2rNKFhBBPQPhXgRi6dOmoQIRYQoCFX+LEgbuysWQTV7wOPSjJUgLLl/8yTAmCACbCDo5qoVrCkgDCCYVosQrl5d8ACQwAADhoAWEYWaxGVfLxL0aTGysPdlC6NIEjVqQ0Ofl3IEqUHiAMtmAx8aAZUpuw1HSQJQoQEwEELlDAdem/BjlqGBCoYIoUIXhtGgywQ8oQDYoPMlDhYUDJvpgzaw4IACH5BAUFAP8ALAUACQAWABMAAAjDAP8J/FekxsCDCBMK3CPJoMKHA0PkgjQDokUQYjRYRGhgwoV/BzYivPBIGLJilyyIFOjACzdu3bx9C7NSoBZrOK1V61JzBIZFuHLJIkRhpYgF/wpYwDCBQE2FF5boCPn0n4ZAoigFqRoBTyhMjKD8E8AgAUQAaK98wuQIEI1/I2iscIBQ40AEfzBBKjSEQIEdNmCECCCQBQqkB7VAMrQkJIIegUsIDHCgQMIFMlpYToojsIiqAkPQaAEB9NgHDNCqXh0QACH5BAUFAP8ALAQABwAYABUAAAjaAP8JHNigwMCDCBMOxIHrjMKHCRvRc4YEosV/f+LR+8Th4kMQu+J9m+Hx4YczTAyWHCjBAoWVCHdgutVrF6QLKxv8U/Dp2TNo0aS5WTkiQIJLyJImDbNSRIB/NS6tYlVKD86SCgYqqGAhAkyIFITMMPB14IU4jfzYKPvvQZpFguoE+Rcgq0AQLBUyUSToDhoV/zC4GFhhYIaEBMoIytPGxoABKF68MLziRIKBADID8FGHTQ+DBVRIJvEvM9mHBDxwGCBwwAnJHzTLnk07s4UVKBhArD3bgMqHAQEAIfkEBQUA/wAsBAAHABUAFQAACLYA/wkc+MBCgIEIEya08c8ZmwEDFEoUiIgdPHRIJk7Uk65dPEAaJX6glY7clJASPYxJgnJggQgVJBhoOfBGo1WxXh2yQDPBpF/AggkjZoYmgkW3buFKqoXmvxiJNnGq9KaC038JJlB4cFVhBBwqCnSdAMbOGRVXE1yhk2YLjJAREMKQk8aLkw0hLwDYC+BFGjBUVgj4d4ImAyJMUhBoyXcvgQMHBZoQqKHrPwgmSiSw/G/AYIUBAQAh+QQFBQD/ACwEAAcAFwAVAAAIswD/CRwoocLAgwgTDsx1LI3ChwcFiTsHzghEiHS8jUPH5+LDDqu8bYPi8aMXiyUPQpgQISVCGYE6jRLFR4LLBQgKuXIFK5YsKi5FHOhTqmjRKC4FrtCjSBEhMTaT/kMAIYKDAVITOmgRQkDWfxCadGGyIeuAIVueAAFx8UHCC1WeDKER9SGFhBSYFMHBIcBDFSQOJBQQYsUFrA8LIP4HoLHjAI4FjPh6kMEIDwYo/wvg92FAACH5BAUFAP8ALAQABQAVABcAAAjRAP8JHEjw34YpFAQUXJihQwCBAR7dirGwIJBdxMgM+PcgWS0ZFQcGMGRNWzUz/yAgWxWSoJxo1rhdQ/JPDqeWAzeQinbNm6F/BDrgHJhiVLRpYIYu3MBlygGlQB1EeFAAqsAWdBpJkhQnAtQDdjRt4uTp0xKoBtpAWrv2iNUSau7ciUMFgtV/Bxw8WKDwLsEFHyo8vKsgh5AZFO4KaPGDBgyhVhfkcOzCb4EVMFxgwPmhAIDPnxlkoPCQQIqKD0GrBh0ghF+CCDxALri6tm3QAQEAIfkEAQUA/wAsBAAFABUAFgAACMYA/wkcSPCfhjVZGBQsaIFKjgEDF8V7N2fhwAOBlhUDM3BYPHqKLAqUgOpYs2Rh/j0IFm9eGZH/BOQRhuzZsiL/3nh7BgPmvw6XhCWL9kfgCQ4BfP4zYUmYMS1KF2Ko0iTqQAYPHFgdWOHLHkCAxjywGiAKoUKHECkKQtZJnrdveWylwCRMGC5EGmyNuYBBgr0LD1DQC9hACRguAAfwAOPFC8ADTjiOCoGggBAvWkQlUNAABYVRAYgeTRrAB4EYAAvkcAFiwYAAOw=="), mobl.ref(null), mobl.ref(null), mobl.ref(null), mobl.ref(null), mobl.ref("middle"), mobl.ref(null), function(_, callback) {
          var root6880 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root6880); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes4808;
          nodes4808 = node.contents();
          oldNodes.replaceWith(nodes4808);
        }));
        callback(root6878); return subs__;
        
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes4806;
        nodes4806 = node.contents();
        oldNodes.replaceWith(nodes4806);
      }));
      
      
    }
  };
  renderCond666();
  subs__.addSub(value.addEventListener('change', function() {
    renderCond666();
  }));
  
  callback(root6876); return subs__;
  
  return subs__;
};
ui.headerStyle = 'ui__headerStyle';
ui.headerContainerStyle = 'ui__headerContainerStyle';
ui.headerTextStyle = 'ui__headerTextStyle';

ui.header = function(text, fixedPosition, onclick, elements, callback) {
  var root6881 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node2967 = $("<div>");
  
  var ref3400 = mobl.ref(ui.headerStyle);
  if(ref3400.get() !== null) {
    node2967.attr('class', ref3400.get());
    subs__.addSub(ref3400.addEventListener('change', function(_, ref, val) {
      node2967.attr('class', val);
    }));
    
  }
  subs__.addSub(ref3400.rebind());
  
  var val1835 = onclick.get();
  if(val1835 !== null) {
    subs__.addSub(mobl.domBind(node2967, 'tap', val1835));
  }
  
  var ref3401 = mobl.ref(fixedPosition.get() ? "position:fixed;" : null);
  if(ref3401.get() !== null) {
    node2967.attr('style', ref3401.get());
    subs__.addSub(ref3401.addEventListener('change', function(_, ref, val) {
      node2967.attr('style', val);
    }));
    subs__.addSub(fixedPosition.addEventListener('change', function() {
      node2967.attr('style', fixedPosition.get() ? "position:fixed;" : null);
    }));
    
  }
  subs__.addSub(ref3401.rebind());
  
  
  var node2970 = $("<div>");
  
  var ref3399 = mobl.ref(ui.headerContainerStyle);
  if(ref3399.get() !== null) {
    node2970.attr('class', ref3399.get());
    subs__.addSub(ref3399.addEventListener('change', function(_, ref, val) {
      node2970.attr('class', val);
    }));
    
  }
  subs__.addSub(ref3399.rebind());
  
  
  var node2971 = $("<div>");
  
  var ref3397 = text;
  node2971.text(""+ref3397.get());
  var ignore688 = false;
  subs__.addSub(ref3397.addEventListener('change', function(_, ref, val) {
    if(ignore688) return;
    node2971.text(""+val);
  }));
  subs__.addSub(ref3397.rebind());
  
  
  var ref3398 = mobl.ref(ui.headerTextStyle);
  if(ref3398.get() !== null) {
    node2971.attr('class', ref3398.get());
    subs__.addSub(ref3398.addEventListener('change', function(_, ref, val) {
      node2971.attr('class', val);
    }));
    
  }
  subs__.addSub(ref3398.rebind());
  
  node2970.append(node2971);
  node2967.append(node2970);
  var nodes4809 = $("<span>");
  node2967.append(nodes4809);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl1203();
  }));
  
  function renderControl1203() {
    subs__.addSub((elements)(function(elements, callback) {
      var root6882 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root6882); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes4809;
      nodes4809 = node.contents();
      oldNodes.replaceWith(nodes4809);
    }));
  }
  renderControl1203();
  root6881.append(node2967);
  
  var node2968 = $("<span>");
  root6881.append(node2968);
  var condSubs667 = new mobl.CompSubscription();
  subs__.addSub(condSubs667);
  var oldValue667;
  var renderCond667 = function() {
    var value2317 = fixedPosition.get();
    if(oldValue667 === value2317) return;
    oldValue667 = value2317;
    var subs__ = condSubs667;
    subs__.unsubscribe();
    node2968.empty();
    if(value2317) {
      
      var node2969 = $("<div>");
      node2969.attr('id', "hello");
      node2969.attr('style', "height: 2.9em;");
      
      node2968.append(node2969);
      
      
    } else {
      
    }
  };
  renderCond667();
  subs__.addSub(fixedPosition.addEventListener('change', function() {
    renderCond667();
  }));
  
  callback(root6881); return subs__;
  
  
  
  
  
  return subs__;
};
ui.buttonStyle = 'ui__buttonStyle';
ui.buttonPushedStyle = 'ui__buttonPushedStyle';
ui.buttonStyle = 'ui__buttonStyle';
ui.buttonPushedStyle = 'ui__buttonPushedStyle';

ui.button = function(text, style, pushedStyle, onclick, elements, callback) {
  var root6883 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var pushed = mobl.ref(false);
  
  var sp = $("<span>");
  
  var ref3402 = mobl.ref(pushed.get() ? pushedStyle.get() : style.get());
  if(ref3402.get() !== null) {
    sp.attr('class', ref3402.get());
    subs__.addSub(ref3402.addEventListener('change', function(_, ref, val) {
      sp.attr('class', val);
    }));
    subs__.addSub(pushed.addEventListener('change', function() {
      sp.attr('class', pushed.get() ? pushedStyle.get() : style.get());
    }));
    subs__.addSub(pushedStyle.addEventListener('change', function() {
      sp.attr('class', pushed.get() ? pushedStyle.get() : style.get());
    }));
    subs__.addSub(style.addEventListener('change', function() {
      sp.attr('class', pushed.get() ? pushedStyle.get() : style.get());
    }));
    
  }
  subs__.addSub(ref3402.rebind());
  
  var val1836 = function(event, callback) {
                if(event && event.stopPropagation) event.stopPropagation();
                var result__ = event.preventDefault();
                var result__ = true;
                pushed.set(result__);
                if(callback && callback.apply) callback(); return;
              };
  if(val1836 !== null) {
    subs__.addSub(mobl.domBind(sp, 'touchdown', val1836));
  }
  
  var val1837 = function(event, callback) {
                if(event && event.stopPropagation) event.stopPropagation();
                var result__ = event.y < 0 || event.y > sp.outerHeight() || event.x < 0 || event.x > sp.outerWidth();
                if(result__) {
                  var result__ = false;
                  pushed.set(result__);
                  if(callback && callback.apply) callback(); return;
                } else {
                  {
                    if(callback && callback.apply) callback(); return;
                  }
                }
              };
  if(val1837 !== null) {
    subs__.addSub(mobl.domBind(sp, 'touchdrag', val1837));
  }
  
  var val1838 = function(event, callback) {
                if(event && event.stopPropagation) event.stopPropagation();
                var result__ = pushed.get();
                if(result__) {
                  var result__ = false;
                  pushed.set(result__);
                  function after546(result__) {
                    var tmp4139 = result__;
                    if(callback && callback.apply) callback(); return;
                  }
                  var result__ = onclick.get()(event, after546);if(result__ !== undefined) after546(result__);
                } else {
                  {
                    if(callback && callback.apply) callback(); return;
                  }
                }
              };
  if(val1838 !== null) {
    subs__.addSub(mobl.domBind(sp, 'touchup', val1838));
  }
  
  var val1839 = function(event, callback) {
                if(event && event.stopPropagation) event.stopPropagation();
                var result__ = pushed.get();
                if(result__) {
                  var result__ = false;
                  pushed.set(result__);
                  if(callback && callback.apply) callback(); return;
                } else {
                  {
                    if(callback && callback.apply) callback(); return;
                  }
                }
              };
  if(val1839 !== null) {
    subs__.addSub(mobl.domBind(sp, 'mouseout', val1839));
  }
  
  var ref3403 = text;
  sp.text(""+ref3403.get());
  var ignore689 = false;
  subs__.addSub(ref3403.addEventListener('change', function(_, ref, val) {
    if(ignore689) return;
    sp.text(""+val);
  }));
  subs__.addSub(ref3403.rebind());
  
  
  root6883.append(sp);
  callback(root6883); return subs__;
  
  return subs__;
};
ui.sideButtonStyle = 'ui__sideButtonStyle';
ui.sideButtonPushedStyle = 'ui__sideButtonPushedStyle';

ui.sideButton = function(text, style, pushedStyle, onclick, elements, callback) {
  var root6884 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes4810 = $("<span>");
  root6884.append(nodes4810);
  subs__.addSub((ui.button)(text, style, pushedStyle, onclick, function(_, callback) {
    var root6885 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root6885); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes4810;
    nodes4810 = node.contents();
    oldNodes.replaceWith(nodes4810);
  }));
  callback(root6884); return subs__;
  
  return subs__;
};
ui.backButtonStyle = 'ui__backButtonStyle';
ui.backButtonPushedStyle = 'ui__backButtonPushedStyle';
ui.backButtonStyle = 'ui__backButtonStyle';
ui.backButtonPushedStyle = 'ui__backButtonPushedStyle';

ui.backButton = function(text, style, pushedStyle, onclick, elements, callback) {
  var root6886 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes4811 = $("<span>");
  root6886.append(nodes4811);
  subs__.addSub((ui.button)(text, style, pushedStyle, onclick, function(_, callback) {
    var root6887 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root6887); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes4811;
    nodes4811 = node.contents();
    oldNodes.replaceWith(nodes4811);
  }));
  callback(root6886); return subs__;
  
  return subs__;
};
ui.groupStyle = 'ui__groupStyle';

ui.group = function(elements, callback) {
  var root6888 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node2972 = $("<ul>");
  
  var ref3404 = mobl.ref(ui.groupStyle);
  if(ref3404.get() !== null) {
    node2972.attr('class', ref3404.get());
    subs__.addSub(ref3404.addEventListener('change', function(_, ref, val) {
      node2972.attr('class', val);
    }));
    
  }
  subs__.addSub(ref3404.rebind());
  
  var nodes4812 = $("<span>");
  node2972.append(nodes4812);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl1204();
  }));
  
  function renderControl1204() {
    subs__.addSub((elements)(function(elements, callback) {
      var root6889 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root6889); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes4812;
      nodes4812 = node.contents();
      oldNodes.replaceWith(nodes4812);
    }));
  }
  renderControl1204();
  root6888.append(node2972);
  callback(root6888); return subs__;
  
  
  return subs__;
};

ui.image = function(url, width, height, onclick, style, valign, align, elements, callback) {
  var root6890 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node2973 = $("<img>");
  
  var ref3405 = url;
  if(ref3405.get() !== null) {
    node2973.attr('src', ref3405.get());
    subs__.addSub(ref3405.addEventListener('change', function(_, ref, val) {
      node2973.attr('src', val);
    }));
    
  }
  subs__.addSub(ref3405.rebind());
  
  var ref3406 = width;
  if(ref3406.get() !== null) {
    node2973.attr('width', ref3406.get());
    subs__.addSub(ref3406.addEventListener('change', function(_, ref, val) {
      node2973.attr('width', val);
    }));
    
  }
  subs__.addSub(ref3406.rebind());
  
  var ref3407 = height;
  if(ref3407.get() !== null) {
    node2973.attr('height', ref3407.get());
    subs__.addSub(ref3407.addEventListener('change', function(_, ref, val) {
      node2973.attr('height', val);
    }));
    
  }
  subs__.addSub(ref3407.rebind());
  
  var ref3408 = style;
  if(ref3408.get() !== null) {
    node2973.attr('class', ref3408.get());
    subs__.addSub(ref3408.addEventListener('change', function(_, ref, val) {
      node2973.attr('class', val);
    }));
    
  }
  subs__.addSub(ref3408.rebind());
  
  var val1840 = onclick.get();
  if(val1840 !== null) {
    subs__.addSub(mobl.domBind(node2973, 'tap', val1840));
  }
  
  var ref3409 = valign;
  if(ref3409.get() !== null) {
    node2973.attr('valign', ref3409.get());
    subs__.addSub(ref3409.addEventListener('change', function(_, ref, val) {
      node2973.attr('valign', val);
    }));
    
  }
  subs__.addSub(ref3409.rebind());
  
  var ref3410 = align;
  if(ref3410.get() !== null) {
    node2973.attr('align', ref3410.get());
    subs__.addSub(ref3410.addEventListener('change', function(_, ref, val) {
      node2973.attr('align', val);
    }));
    
  }
  subs__.addSub(ref3410.rebind());
  
  root6890.append(node2973);
  callback(root6890); return subs__;
  
  return subs__;
};
ui.itemStyle = 'ui__itemStyle';
ui.itemPushedStyle = 'ui__itemPushedStyle';
ui.itemArrowStyle = 'ui__itemArrowStyle';
ui.itemDownArrowStyle = 'ui__itemDownArrowStyle';

ui.item = function(style, pushedStyle, onclick, onswipe, hideArrow, elements, callback) {
  var root6891 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var pushed = mobl.ref(false);
  
  var el = $("<li>");
  
  var ref3411 = mobl.ref(ui.itemStyle);
  if(ref3411.get() !== null) {
    el.attr('class', ref3411.get());
    subs__.addSub(ref3411.addEventListener('change', function(_, ref, val) {
      el.attr('class', val);
    }));
    
  }
  subs__.addSub(ref3411.rebind());
  
  var ref3412 = mobl.ref(onclick.get() && hideArrow.get() == false ? mobl.mergeStyles([pushed.get() ? pushedStyle.get() : style.get(), ui.itemArrowStyle]) : (pushed.get() ? pushedStyle.get() : style.get()));
  if(ref3412.get() !== null) {
    el.attr('class', ref3412.get());
    subs__.addSub(ref3412.addEventListener('change', function(_, ref, val) {
      el.attr('class', val);
    }));
    subs__.addSub(onclick.addEventListener('change', function() {
      el.attr('class', onclick.get() && hideArrow.get() == false ? mobl.mergeStyles([pushed.get() ? pushedStyle.get() : style.get(), ui.itemArrowStyle]) : (pushed.get() ? pushedStyle.get() : style.get()));
    }));
    subs__.addSub(hideArrow.addEventListener('change', function() {
      el.attr('class', onclick.get() && hideArrow.get() == false ? mobl.mergeStyles([pushed.get() ? pushedStyle.get() : style.get(), ui.itemArrowStyle]) : (pushed.get() ? pushedStyle.get() : style.get()));
    }));
    subs__.addSub(mobl.ref(ui.itemArrowStyle).addEventListener('change', function() {
      el.attr('class', onclick.get() && hideArrow.get() == false ? mobl.mergeStyles([pushed.get() ? pushedStyle.get() : style.get(), ui.itemArrowStyle]) : (pushed.get() ? pushedStyle.get() : style.get()));
    }));
    subs__.addSub(pushed.addEventListener('change', function() {
      el.attr('class', onclick.get() && hideArrow.get() == false ? mobl.mergeStyles([pushed.get() ? pushedStyle.get() : style.get(), ui.itemArrowStyle]) : (pushed.get() ? pushedStyle.get() : style.get()));
    }));
    subs__.addSub(pushedStyle.addEventListener('change', function() {
      el.attr('class', onclick.get() && hideArrow.get() == false ? mobl.mergeStyles([pushed.get() ? pushedStyle.get() : style.get(), ui.itemArrowStyle]) : (pushed.get() ? pushedStyle.get() : style.get()));
    }));
    subs__.addSub(style.addEventListener('change', function() {
      el.attr('class', onclick.get() && hideArrow.get() == false ? mobl.mergeStyles([pushed.get() ? pushedStyle.get() : style.get(), ui.itemArrowStyle]) : (pushed.get() ? pushedStyle.get() : style.get()));
    }));
    
  }
  subs__.addSub(ref3412.rebind());
  
  var val1841 = onswipe.get();
  if(val1841 !== null) {
    subs__.addSub(mobl.domBind(el, 'swipe', val1841));
  }
  
  var val1842 = onclick.get() ? function(event, callback) {
                                         if(event && event.stopPropagation) event.stopPropagation();
                                         var result__ = true;
                                         pushed.set(result__);
                                         mobl.sleep(100, function(result__) {
                                           var tmp4141 = result__;
                                           function after547(result__) {
                                             var tmp4142 = result__;
                                             
                                           }
                                           var result__ = onclick.get()(event, after547);if(result__ !== undefined) after547(result__);
                                           mobl.sleep(200, function(result__) {
                                             var tmp4143 = result__;
                                             var result__ = false;
                                             pushed.set(result__);
                                             if(callback && callback.apply) callback(); return;
                                           });
                                           
                                         });
                                       } : null;
  if(val1842 !== null) {
    subs__.addSub(mobl.domBind(el, 'tap', val1842));
  }
  
  var nodes4813 = $("<span>");
  el.append(nodes4813);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl1205();
  }));
  
  function renderControl1205() {
    subs__.addSub((elements)(function(elements, callback) {
      var root6892 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root6892); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes4813;
      nodes4813 = node.contents();
      oldNodes.replaceWith(nodes4813);
    }));
  }
  renderControl1205();
  root6891.append(el);
  callback(root6891); return subs__;
  
  
  return subs__;
};

ui.checkBox = function(b, label, onchange, elements, callback) {
  var root6893 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node2974 = $("<input>");
  node2974.attr('type', "checkbox");
  
  var ref3414 = b;
  node2974.attr('checked', !!ref3414.get());
  subs__.addSub(ref3414.addEventListener('change', function(_, ref, val) {
    if(ref === ref3414) node2974.attr('checked', !!val);
  }));
  subs__.addSub(mobl.domBind(node2974, 'change', function() {
    b.set(!!node2974.attr('checked'));
  }));
  
  var val1844 = function(event, callback) {
                if(event && event.stopPropagation) event.stopPropagation();
                if(callback && callback.apply) callback(); return;
              };
  if(val1844 !== null) {
    subs__.addSub(mobl.domBind(node2974, 'tap', val1844));
  }
  
  var val1845 = onchange.get();
  if(val1845 !== null) {
    subs__.addSub(mobl.domBind(node2974, 'change', val1845));
  }
  
  root6893.append(node2974);
  
  root6893.append(" ");
  
  var node2975 = $("<span>");
  
  var ref3413 = label;
  node2975.text(""+ref3413.get());
  var ignore690 = false;
  subs__.addSub(ref3413.addEventListener('change', function(_, ref, val) {
    if(ignore690) return;
    node2975.text(""+val);
  }));
  subs__.addSub(ref3413.rebind());
  
  
  var val1843 = function(event, callback) {
                if(event && event.stopPropagation) event.stopPropagation();
                var result__ = !b.get();
                b.set(result__);
                var result__ = onchange.get();
                if(result__) {
                  function after548(result__) {
                    var tmp4144 = result__;
                    if(callback && callback.apply) callback(); return;
                  }
                  var result__ = onchange.get()(null, after548);if(result__ !== undefined) after548(result__);
                } else {
                  {
                    if(callback && callback.apply) callback(); return;
                  }
                }
              };
  if(val1843 !== null) {
    subs__.addSub(mobl.domBind(node2975, 'tap', val1843));
  }
  
  root6893.append(node2975);
  callback(root6893); return subs__;
  
  
  return subs__;
};
ui.textFieldStyle = 'ui__textFieldStyle';
ui.textFieldInvalidStyle = 'ui__textFieldInvalidStyle';
ui.textFieldLabelStyle = 'ui__textFieldLabelStyle';
ui.validationMessageStyle = 'ui__validationMessageStyle';
ui.alwaysOkValidator = function(s) {
   var __this = this;
  return "";
};


ui.textField = function(s, placeholder, label, inputType, validator, style, invalidStyle, onchange, onkeyup, elements, callback) {
  var root6894 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node2976 = $("<span>");
  root6894.append(node2976);
  var condSubs668 = new mobl.CompSubscription();
  subs__.addSub(condSubs668);
  var oldValue668;
  var renderCond668 = function() {
    var value2318 = label.get();
    if(oldValue668 === value2318) return;
    oldValue668 = value2318;
    var subs__ = condSubs668;
    subs__.unsubscribe();
    node2976.empty();
    if(value2318) {
      var nodes4814 = $("<span>");
      node2976.append(nodes4814);
      subs__.addSub((mobl.label)(label, mobl.ref(ui.textFieldLabelStyle), mobl.ref(null), function(_, callback) {
        var root6895 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root6895); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes4814;
        nodes4814 = node.contents();
        oldNodes.replaceWith(nodes4814);
      }));
      
      
    } else {
      
    }
  };
  renderCond668();
  subs__.addSub(label.addEventListener('change', function() {
    renderCond668();
  }));
  
  
  var node2977 = $("<span>");
  root6894.append(node2977);
  var condSubs669 = new mobl.CompSubscription();
  subs__.addSub(condSubs669);
  var oldValue669;
  var renderCond669 = function() {
    var value2319 = validator.get();
    if(oldValue669 === value2319) return;
    oldValue669 = value2319;
    var subs__ = condSubs669;
    subs__.unsubscribe();
    node2977.empty();
    if(value2319) {
      
      var temp = mobl.ref(s.get());
      
      var identifier = mobl.ref(mobl.random(999));
      function after552(result__) {
        var tmp4145 = result__;
        var validationMessage = mobl.ref(result__);
        mobl.sleep(200, function(result__) {
          var tmp4146 = result__;
          var result__ = mobl.setValidationError(identifier.get(), !validationMessage.get());
          
        });
        
        var node2978 = $("<input>");
        
        var ref3415 = inputType;
        if(ref3415.get() !== null) {
          node2978.attr('type', ref3415.get());
          subs__.addSub(ref3415.addEventListener('change', function(_, ref, val) {
            node2978.attr('type', val);
          }));
          
        }
        subs__.addSub(ref3415.rebind());
        
        var ref3416 = mobl.ref(validationMessage.get() ? invalidStyle.get() : style.get());
        if(ref3416.get() !== null) {
          node2978.attr('class', ref3416.get());
          subs__.addSub(ref3416.addEventListener('change', function(_, ref, val) {
            node2978.attr('class', val);
          }));
          subs__.addSub(validationMessage.addEventListener('change', function() {
            node2978.attr('class', validationMessage.get() ? invalidStyle.get() : style.get());
          }));
          subs__.addSub(invalidStyle.addEventListener('change', function() {
            node2978.attr('class', validationMessage.get() ? invalidStyle.get() : style.get());
          }));
          subs__.addSub(style.addEventListener('change', function() {
            node2978.attr('class', validationMessage.get() ? invalidStyle.get() : style.get());
          }));
          
        }
        subs__.addSub(ref3416.rebind());
        
        var ref3417 = placeholder;
        if(ref3417.get() !== null) {
          node2978.attr('placeholder', ref3417.get());
          subs__.addSub(ref3417.addEventListener('change', function(_, ref, val) {
            node2978.attr('placeholder', val);
          }));
          
        }
        subs__.addSub(ref3417.rebind());
        
        var ref3418 = temp;
        node2978.val(""+ref3418.get());
        var ignore691 = false;
        subs__.addSub(ref3418.addEventListener('change', function(_, ref, val) {
          if(ignore691) return;
          node2978.val(""+val);
        }));
        subs__.addSub(ref3418.rebind());
        
        subs__.addSub(mobl.domBind(node2978, 'keyup change', function() {
          ignore691 = true;
          temp.set(mobl.stringTomobl__String(node2978.val()));
          ignore691 = false;
        }));
        
        
        var val1846 = onchange.get();
        if(val1846 !== null) {
          subs__.addSub(mobl.domBind(node2978, 'change', val1846));
        }
        
        var val1847 = function(event, callback) {
                      if(event && event.stopPropagation) event.stopPropagation();
                      var result__ = onkeyup.get();
                      if(result__) {
                        function after549(result__) {
                          var tmp4147 = result__;
                          function after550(result__) {
                            var tmp4148 = result__;
                            var result__ = tmp4148;
                            validationMessage.set(result__);
                            var result__ = !validationMessage.get();
                            if(result__) {
                              var result__ = temp.get();
                              s.set(result__);
                              var result__ = mobl.setValidationError(identifier.get(), !validationMessage.get());
                              if(callback && callback.apply) callback(); return;
                            } else {
                              {
                                var result__ = mobl.setValidationError(identifier.get(), !validationMessage.get());
                                if(callback && callback.apply) callback(); return;
                              }
                            }
                          }
                          var result__ = validator.get()(temp.get(), after550);if(result__ !== undefined) after550(result__);
                        }
                        var result__ = onkeyup.get()(event, after549);if(result__ !== undefined) after549(result__);
                      } else {
                        {
                          function after551(result__) {
                            var tmp4148 = result__;
                            var result__ = tmp4148;
                            validationMessage.set(result__);
                            var result__ = !validationMessage.get();
                            if(result__) {
                              var result__ = temp.get();
                              s.set(result__);
                              var result__ = mobl.setValidationError(identifier.get(), !validationMessage.get());
                              if(callback && callback.apply) callback(); return;
                            } else {
                              {
                                var result__ = mobl.setValidationError(identifier.get(), !validationMessage.get());
                                if(callback && callback.apply) callback(); return;
                              }
                            }
                          }
                          var result__ = validator.get()(temp.get(), after551);if(result__ !== undefined) after551(result__);
                        }
                      }
                    };
        if(val1847 !== null) {
          subs__.addSub(mobl.domBind(node2978, 'keyup', val1847));
        }
        
        var val1848 = function(event, callback) {
                      if(event && event.stopPropagation) event.stopPropagation();
                      var result__ = ui.scrollUp();
                      if(callback && callback.apply) callback(); return;
                    };
        if(val1848 !== null) {
          subs__.addSub(mobl.domBind(node2978, 'blur', val1848));
        }
        
        node2977.append(node2978);
        var nodes4815 = $("<span>");
        node2977.append(nodes4815);
        subs__.addSub((mobl.label)(validationMessage, mobl.ref(ui.validationMessageStyle), mobl.ref(null), function(_, callback) {
          var root6896 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root6896); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes4815;
          nodes4815 = node.contents();
          oldNodes.replaceWith(nodes4815);
        }));
        
        
        
        
      }
      var result__ = validator.get()(s.get(), after552);if(result__ !== undefined) after552(result__);
    } else {
      
      var node2979 = $("<input>");
      
      var ref3419 = inputType;
      if(ref3419.get() !== null) {
        node2979.attr('type', ref3419.get());
        subs__.addSub(ref3419.addEventListener('change', function(_, ref, val) {
          node2979.attr('type', val);
        }));
        
      }
      subs__.addSub(ref3419.rebind());
      
      var ref3420 = style;
      if(ref3420.get() !== null) {
        node2979.attr('class', ref3420.get());
        subs__.addSub(ref3420.addEventListener('change', function(_, ref, val) {
          node2979.attr('class', val);
        }));
        
      }
      subs__.addSub(ref3420.rebind());
      
      var ref3421 = placeholder;
      if(ref3421.get() !== null) {
        node2979.attr('placeholder', ref3421.get());
        subs__.addSub(ref3421.addEventListener('change', function(_, ref, val) {
          node2979.attr('placeholder', val);
        }));
        
      }
      subs__.addSub(ref3421.rebind());
      
      var ref3422 = s;
      node2979.val(""+ref3422.get());
      var ignore692 = false;
      subs__.addSub(ref3422.addEventListener('change', function(_, ref, val) {
        if(ignore692) return;
        node2979.val(""+val);
      }));
      subs__.addSub(ref3422.rebind());
      
      subs__.addSub(mobl.domBind(node2979, 'keyup change', function() {
        ignore692 = true;
        s.set(mobl.stringTomobl__String(node2979.val()));
        ignore692 = false;
      }));
      
      
      var val1849 = onchange.get();
      if(val1849 !== null) {
        subs__.addSub(mobl.domBind(node2979, 'change', val1849));
      }
      
      var val1850 = onkeyup.get();
      if(val1850 !== null) {
        subs__.addSub(mobl.domBind(node2979, 'keyup', val1850));
      }
      
      var val1851 = function(event, callback) {
                    if(event && event.stopPropagation) event.stopPropagation();
                    var result__ = ui.scrollUp();
                    if(callback && callback.apply) callback(); return;
                  };
      if(val1851 !== null) {
        subs__.addSub(mobl.domBind(node2979, 'blur', val1851));
      }
      
      node2977.append(node2979);
      
      
    }
  };
  renderCond669();
  subs__.addSub(validator.addEventListener('change', function() {
    renderCond669();
  }));
  
  callback(root6894); return subs__;
  
  
  return subs__;
};

ui.emailField = function(s, placeholder, label, validator, style, invalidStyle, onchange, onkeyup, elements, callback) {
  var root6897 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes4816 = $("<span>");
  root6897.append(nodes4816);
  subs__.addSub((ui.textField)(s, placeholder, label, mobl.ref("email"), validator, style, invalidStyle, onchange, onkeyup, function(_, callback) {
    var root6898 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root6898); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes4816;
    nodes4816 = node.contents();
    oldNodes.replaceWith(nodes4816);
  }));
  callback(root6897); return subs__;
  
  return subs__;
};

ui.telField = function(phoneNumber, placeholder, label, validator, style, invalidStyle, onchange, onkeyup, elements, callback) {
  var root6899 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes4817 = $("<span>");
  root6899.append(nodes4817);
  subs__.addSub((ui.textField)(phoneNumber, placeholder, label, mobl.ref("tel"), validator, style, invalidStyle, onchange, onkeyup, function(_, callback) {
    var root6900 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root6900); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes4817;
    nodes4817 = node.contents();
    oldNodes.replaceWith(nodes4817);
  }));
  callback(root6899); return subs__;
  
  return subs__;
};

ui.rangeField = function(n, min, max, step, placeholder, label, onchange, onkeyup, elements, callback) {
  var root6901 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node2980 = $("<span>");
  root6901.append(node2980);
  var condSubs670 = new mobl.CompSubscription();
  subs__.addSub(condSubs670);
  var oldValue670;
  var renderCond670 = function() {
    var value2320 = label.get();
    if(oldValue670 === value2320) return;
    oldValue670 = value2320;
    var subs__ = condSubs670;
    subs__.unsubscribe();
    node2980.empty();
    if(value2320) {
      var nodes4818 = $("<span>");
      node2980.append(nodes4818);
      subs__.addSub((mobl.label)(label, mobl.ref(ui.textFieldLabelStyle), mobl.ref(null), function(_, callback) {
        var root6902 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root6902); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes4818;
        nodes4818 = node.contents();
        oldNodes.replaceWith(nodes4818);
      }));
      
      
    } else {
      
    }
  };
  renderCond670();
  subs__.addSub(label.addEventListener('change', function() {
    renderCond670();
  }));
  
  
  var node2981 = $("<input>");
  node2981.attr('type', "range");
  
  var ref3423 = n;
  node2981.val(""+ref3423.get());
  var ignore693 = false;
  subs__.addSub(ref3423.addEventListener('change', function(_, ref, val) {
    if(ignore693) return;
    node2981.val(""+val);
  }));
  subs__.addSub(ref3423.rebind());
  
  subs__.addSub(mobl.domBind(node2981, 'keyup change', function() {
    ignore693 = true;
    n.set(mobl.stringTomobl__Num(node2981.val()));
    ignore693 = false;
  }));
  
  
  var ref3424 = min;
  if(ref3424.get() !== null) {
    node2981.attr('min', ref3424.get());
    subs__.addSub(ref3424.addEventListener('change', function(_, ref, val) {
      node2981.attr('min', val);
    }));
    
  }
  subs__.addSub(ref3424.rebind());
  
  var ref3425 = max;
  if(ref3425.get() !== null) {
    node2981.attr('max', ref3425.get());
    subs__.addSub(ref3425.addEventListener('change', function(_, ref, val) {
      node2981.attr('max', val);
    }));
    
  }
  subs__.addSub(ref3425.rebind());
  
  var ref3426 = step;
  if(ref3426.get() !== null) {
    node2981.attr('step', ref3426.get());
    subs__.addSub(ref3426.addEventListener('change', function(_, ref, val) {
      node2981.attr('step', val);
    }));
    
  }
  subs__.addSub(ref3426.rebind());
  node2981.attr('style', "width: 99%;");
  
  var val1852 = onchange.get();
  if(val1852 !== null) {
    subs__.addSub(mobl.domBind(node2981, 'change', val1852));
  }
  
  var val1853 = onkeyup.get();
  if(val1853 !== null) {
    subs__.addSub(mobl.domBind(node2981, 'keyup', val1853));
  }
  
  var ref3427 = placeholder;
  if(ref3427.get() !== null) {
    node2981.attr('placeholder', ref3427.get());
    subs__.addSub(ref3427.addEventListener('change', function(_, ref, val) {
      node2981.attr('placeholder', val);
    }));
    
  }
  subs__.addSub(ref3427.rebind());
  
  root6901.append(node2981);
  callback(root6901); return subs__;
  
  
  return subs__;
};
ui.validateNum = function(n) {
   var __this = this;
  return mobl.Math.isNaN(n) ? mobl._("Not a valid numeric value", []) : "";
};


ui.numField = function(n, label, placeholder, validator, style, invalidStyle, onchange, onkeyup, elements, callback) {
  var root6903 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var validator2 = function(s, callback) {
    var __this = this;
    var result__ = mobl.parseNum(s);
    var n2 = result__;
    function after553(result__) {
      var tmp4149 = result__;
      var result__ = tmp4149;
      var m = result__;
      var result__ = !m;
      if(result__) {
        var result__ = n2;
        n.set(result__);
        var result__ = m;
        if(callback && callback.apply) callback(result__);
        return;
        if(callback && callback.apply) callback(); return;
      } else {
        {
          var result__ = m;
          if(callback && callback.apply) callback(result__);
          return;
          if(callback && callback.apply) callback(); return;
        }
      }
    }
    var result__ = validator.get()(n2, after553);if(result__ !== undefined) after553(result__);
  };
  
  
  
  var s = mobl.ref("" + n.get());
  var nodes4819 = $("<span>");
  root6903.append(nodes4819);
  subs__.addSub((ui.textField)(s, placeholder, label, mobl.ref("number"), mobl.ref(validator2), style, invalidStyle, onchange, onkeyup, function(_, callback) {
    var root6904 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root6904); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes4819;
    nodes4819 = node.contents();
    oldNodes.replaceWith(nodes4819);
  }));
  callback(root6903); return subs__;
  
  return subs__;
};

ui.passwordField = function(s, placeholder, label, style, onchange, onkeyup, elements, callback) {
  var root6905 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node2982 = $("<span>");
  root6905.append(node2982);
  var condSubs671 = new mobl.CompSubscription();
  subs__.addSub(condSubs671);
  var oldValue671;
  var renderCond671 = function() {
    var value2321 = label.get();
    if(oldValue671 === value2321) return;
    oldValue671 = value2321;
    var subs__ = condSubs671;
    subs__.unsubscribe();
    node2982.empty();
    if(value2321) {
      
      var node2983 = $("<span>");
      node2983.attr('style', "float: left; margin-top: 0.2em; width: 5em; color: #666;");
      
      var ref3431 = label;
      node2983.text(""+ref3431.get());
      var ignore695 = false;
      subs__.addSub(ref3431.addEventListener('change', function(_, ref, val) {
        if(ignore695) return;
        node2983.text(""+val);
      }));
      subs__.addSub(ref3431.rebind());
      
      
      node2982.append(node2983);
      
      var node2984 = $("<span>");
      node2984.attr('style', "float: left");
      
      
      var node2985 = $("<input>");
      node2985.attr('type', "password");
      
      var ref3428 = style;
      if(ref3428.get() !== null) {
        node2985.attr('class', ref3428.get());
        subs__.addSub(ref3428.addEventListener('change', function(_, ref, val) {
          node2985.attr('class', val);
        }));
        
      }
      subs__.addSub(ref3428.rebind());
      
      var ref3429 = placeholder;
      if(ref3429.get() !== null) {
        node2985.attr('placeholder', ref3429.get());
        subs__.addSub(ref3429.addEventListener('change', function(_, ref, val) {
          node2985.attr('placeholder', val);
        }));
        
      }
      subs__.addSub(ref3429.rebind());
      
      var ref3430 = s;
      node2985.val(""+ref3430.get());
      var ignore694 = false;
      subs__.addSub(ref3430.addEventListener('change', function(_, ref, val) {
        if(ignore694) return;
        node2985.val(""+val);
      }));
      subs__.addSub(ref3430.rebind());
      
      subs__.addSub(mobl.domBind(node2985, 'keyup change', function() {
        ignore694 = true;
        s.set(mobl.stringTomobl__String(node2985.val()));
        ignore694 = false;
      }));
      
      
      var val1854 = onchange.get();
      if(val1854 !== null) {
        subs__.addSub(mobl.domBind(node2985, 'change', val1854));
      }
      
      var val1855 = onkeyup.get();
      if(val1855 !== null) {
        subs__.addSub(mobl.domBind(node2985, 'keyup', val1855));
      }
      
      var val1856 = function(event, callback) {
                    if(event && event.stopPropagation) event.stopPropagation();
                    var result__ = ui.scrollUp();
                    if(callback && callback.apply) callback(); return;
                  };
      if(val1856 !== null) {
        subs__.addSub(mobl.domBind(node2985, 'blur', val1856));
      }
      
      node2984.append(node2985);
      node2982.append(node2984);
      
      
      
      
    } else {
      
      var node2986 = $("<input>");
      node2986.attr('type', "password");
      
      var ref3432 = style;
      if(ref3432.get() !== null) {
        node2986.attr('class', ref3432.get());
        subs__.addSub(ref3432.addEventListener('change', function(_, ref, val) {
          node2986.attr('class', val);
        }));
        
      }
      subs__.addSub(ref3432.rebind());
      
      var ref3433 = placeholder;
      if(ref3433.get() !== null) {
        node2986.attr('placeholder', ref3433.get());
        subs__.addSub(ref3433.addEventListener('change', function(_, ref, val) {
          node2986.attr('placeholder', val);
        }));
        
      }
      subs__.addSub(ref3433.rebind());
      
      var ref3434 = s;
      node2986.val(""+ref3434.get());
      var ignore696 = false;
      subs__.addSub(ref3434.addEventListener('change', function(_, ref, val) {
        if(ignore696) return;
        node2986.val(""+val);
      }));
      subs__.addSub(ref3434.rebind());
      
      subs__.addSub(mobl.domBind(node2986, 'keyup change', function() {
        ignore696 = true;
        s.set(mobl.stringTomobl__String(node2986.val()));
        ignore696 = false;
      }));
      
      
      var val1857 = onchange.get();
      if(val1857 !== null) {
        subs__.addSub(mobl.domBind(node2986, 'change', val1857));
      }
      
      var val1858 = onkeyup.get();
      if(val1858 !== null) {
        subs__.addSub(mobl.domBind(node2986, 'keyup', val1858));
      }
      
      var val1859 = function(event, callback) {
                    if(event && event.stopPropagation) event.stopPropagation();
                    var result__ = ui.scrollUp();
                    if(callback && callback.apply) callback(); return;
                  };
      if(val1859 !== null) {
        subs__.addSub(mobl.domBind(node2986, 'blur', val1859));
      }
      
      node2982.append(node2986);
      
      
    }
  };
  renderCond671();
  subs__.addSub(label.addEventListener('change', function() {
    renderCond671();
  }));
  
  callback(root6905); return subs__;
  
  return subs__;
};
ui.selectFieldStyle = 'ui__selectFieldStyle';

ui.selectField = function(value, options, onchange, style, optionStyle, elements, callback) {
  var root6906 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var sel = $("<select>");
  
  var ref3439 = style;
  if(ref3439.get() !== null) {
    sel.attr('class', ref3439.get());
    subs__.addSub(ref3439.addEventListener('change', function(_, ref, val) {
      sel.attr('class', val);
    }));
    
  }
  subs__.addSub(ref3439.rebind());
  
  var val1860 = function(event, callback) {
                if(event && event.stopPropagation) event.stopPropagation();
                var result__ = sel.val();
                value.set(result__);
                var result__ = onchange.get();
                if(result__) {
                  function after554(result__) {
                    var tmp4152 = result__;
                    if(callback && callback.apply) callback(); return;
                  }
                  var result__ = onchange.get()(event, after554);if(result__ !== undefined) after554(result__);
                } else {
                  {
                    if(callback && callback.apply) callback(); return;
                  }
                }
              };
  if(val1860 !== null) {
    subs__.addSub(mobl.domBind(sel, 'change', val1860));
  }
  
  
  var node2987 = mobl.loadingSpan();
  sel.append(node2987);
  var list466;
  var listSubs__ = new mobl.CompSubscription();
  subs__.addSub(listSubs__);
  var renderList466 = function() {
    var subs__ = listSubs__;
    list466 = options.get();
    list466.list(function(results466) {
      node2987.empty();
      for(var i583 = 0; i583 < results466.length; i583++) {
        (function() {
          var iternode466 = $("<span>");
          node2987.append(iternode466);
          var optionValue;var optionDescription;
          optionValue = mobl.ref(mobl.ref(mobl.ref(results466), i583), "_1");optionDescription = mobl.ref(mobl.ref(mobl.ref(results466), i583), "_2");
          
          var node2988 = $("<option>");
          
          var ref3435 = optionDescription;
          node2988.text(""+ref3435.get());
          var ignore697 = false;
          subs__.addSub(ref3435.addEventListener('change', function(_, ref, val) {
            if(ignore697) return;
            node2988.text(""+val);
          }));
          subs__.addSub(ref3435.rebind());
          
          
          var ref3436 = optionStyle;
          if(ref3436.get() !== null) {
            node2988.attr('class', ref3436.get());
            subs__.addSub(ref3436.addEventListener('change', function(_, ref, val) {
              node2988.attr('class', val);
            }));
            
          }
          subs__.addSub(ref3436.rebind());
          
          var ref3437 = optionValue;
          if(ref3437.get() !== null) {
            node2988.attr('value', ref3437.get());
            subs__.addSub(ref3437.addEventListener('change', function(_, ref, val) {
              node2988.attr('value', val);
            }));
            
          }
          subs__.addSub(ref3437.rebind());
          
          var ref3438 = mobl.ref(value.get() == optionValue.get() ? "selected" : "");
          if(ref3438.get() !== null) {
            node2988.attr('selected', ref3438.get());
            subs__.addSub(ref3438.addEventListener('change', function(_, ref, val) {
              node2988.attr('selected', val);
            }));
            subs__.addSub(value.addEventListener('change', function() {
              node2988.attr('selected', value.get() == optionValue.get() ? "selected" : "");
            }));
            subs__.addSub(optionValue.addEventListener('change', function() {
              node2988.attr('selected', value.get() == optionValue.get() ? "selected" : "");
            }));
            
          }
          subs__.addSub(ref3438.rebind());
          
          iternode466.append(node2988);
          
          var oldNodes = iternode466;
          iternode466 = iternode466.contents();
          oldNodes.replaceWith(iternode466);
          
          
        }());
      }
      mobl.delayedUpdateScrollers();
      subs__.addSub(list466.addEventListener('change', function() { listSubs__.unsubscribe(); renderList466(true); }));
      subs__.addSub(options.addEventListener('change', function() { listSubs__.unsubscribe(); renderList466(true); }));
    });
  };
  renderList466();
  
  root6906.append(sel);
  var result__ = sel.append(sel.children().eq(0).children());
  callback(root6906); return subs__;
  
  
  return subs__;
};
ui.tabbarStyle = 'ui__tabbarStyle';
ui.inActiveTabButtonStyle = 'ui__inActiveTabButtonStyle';
ui.activeTabButtonStyle = 'ui__activeTabButtonStyle';
ui.inActiveTabStyle = 'ui__inActiveTabStyle';
ui.activeTabStyle = 'ui__activeTabStyle';

ui.tabSet = function(tabs, activeTab, elements, callback) {
  var root6907 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var result__ = activeTab.get() == null;
  if(result__) {
    var result__ = tabs.get().get(0)._1;
    activeTab.set(result__);
    
    var s = mobl.ref("");
    var nodes4820 = $("<span>");
    root6907.append(nodes4820);
    subs__.addSub((mobl.block)(mobl.ref(ui.tabbarStyle), mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
      var root6908 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      
      var node2989 = mobl.loadingSpan();
      root6908.append(node2989);
      var list467;
      var listSubs__ = new mobl.CompSubscription();
      subs__.addSub(listSubs__);
      var renderList467 = function() {
        var subs__ = listSubs__;
        list467 = tabs.get();
        list467.list(function(results467) {
          node2989.empty();
          for(var i584 = 0; i584 < results467.length; i584++) {
            (function() {
              var iternode467 = $("<span>");
              node2989.append(iternode467);
              var tabName;var tabIcon;var tabControl;
              tabName = mobl.ref(mobl.ref(mobl.ref(results467), i584), "_1");tabIcon = mobl.ref(mobl.ref(mobl.ref(results467), i584), "_2");tabControl = mobl.ref(mobl.ref(mobl.ref(results467), i584), "_3");
              var result__ = activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle;
              var tmp4111 = mobl.ref(result__);
              subs__.addSub(activeTab.addEventListener('change', function() {
                tmp4111.set(activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
              }));
              subs__.addSub(tabName.addEventListener('change', function() {
                tmp4111.set(activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
              }));
              subs__.addSub(mobl.ref(ui.activeTabButtonStyle).addEventListener('change', function() {
                tmp4111.set(activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
              }));
              subs__.addSub(mobl.ref(ui.inActiveTabButtonStyle).addEventListener('change', function() {
                tmp4111.set(activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
              }));
              
              var result__ = function(event, callback) {
                               if(event && event.stopPropagation) event.stopPropagation();
                               var result__ = tabName.get();
                               activeTab.set(result__);
                               if(callback && callback.apply) callback(); return;
                             };
              var tmp4109 = mobl.ref(result__);
              
              var nodes4821 = $("<span>");
              iternode467.append(nodes4821);
              subs__.addSub((mobl.span)(tmp4111, mobl.ref(null), tmp4109, mobl.ref(null), function(_, callback) {
                var root6909 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                var nodes4822 = $("<span>");
                root6909.append(nodes4822);
                subs__.addSub((mobl.label)(tabName, mobl.ref(null), mobl.ref(null), function(_, callback) {
                  var root6910 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  callback(root6910); return subs__;
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes4822;
                  nodes4822 = node.contents();
                  oldNodes.replaceWith(nodes4822);
                }));
                callback(root6909); return subs__;
                
                return subs__;
              }, function(node) {
                var oldNodes = nodes4821;
                nodes4821 = node.contents();
                oldNodes.replaceWith(nodes4821);
              }));
              
              var oldNodes = iternode467;
              iternode467 = iternode467.contents();
              oldNodes.replaceWith(iternode467);
              
              
            }());
          }
          mobl.delayedUpdateScrollers();
          subs__.addSub(list467.addEventListener('change', function() { listSubs__.unsubscribe(); renderList467(true); }));
          subs__.addSub(tabs.addEventListener('change', function() { listSubs__.unsubscribe(); renderList467(true); }));
        });
      };
      renderList467();
      
      callback(root6908); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes4820;
      nodes4820 = node.contents();
      oldNodes.replaceWith(nodes4820);
    }));
    
    var node2990 = mobl.loadingSpan();
    root6907.append(node2990);
    var list468;
    var listSubs__ = new mobl.CompSubscription();
    subs__.addSub(listSubs__);
    var renderList468 = function() {
      var subs__ = listSubs__;
      list468 = tabs.get();
      list468.list(function(results468) {
        node2990.empty();
        for(var i585 = 0; i585 < results468.length; i585++) {
          (function() {
            var iternode468 = $("<span>");
            node2990.append(iternode468);
            var tabName;var tabIcon;var tabControl;
            tabName = mobl.ref(mobl.ref(mobl.ref(results468), i585), "_1");tabIcon = mobl.ref(mobl.ref(mobl.ref(results468), i585), "_2");tabControl = mobl.ref(mobl.ref(mobl.ref(results468), i585), "_3");
            var result__ = activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle;
            var tmp4112 = mobl.ref(result__);
            subs__.addSub(activeTab.addEventListener('change', function() {
              tmp4112.set(activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
            }));
            subs__.addSub(tabName.addEventListener('change', function() {
              tmp4112.set(activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
            }));
            subs__.addSub(mobl.ref(ui.activeTabStyle).addEventListener('change', function() {
              tmp4112.set(activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
            }));
            subs__.addSub(mobl.ref(ui.inActiveTabStyle).addEventListener('change', function() {
              tmp4112.set(activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
            }));
            
            var nodes4823 = $("<span>");
            iternode468.append(nodes4823);
            subs__.addSub((mobl.block)(tmp4112, mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
              var root6911 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              var nodes4824 = $("<span>");
              root6911.append(nodes4824);
              subs__.addSub((mobl.screenContext)(function(_, callback) {
                var root6912 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                var nodes4825 = $("<span>");
                root6912.append(nodes4825);
                subs__.addSub(tabControl.addEventListener('change', function() {
                  renderControl1206();
                }));
                
                function renderControl1206() {
                  subs__.addSub((tabControl.get())(function(elements, callback) {
                    var root6913 = $("<span>");
                    var subs__ = new mobl.CompSubscription();
                    callback(root6913); return subs__;
                    return subs__;
                  }, function(node) {
                    var oldNodes = nodes4825;
                    nodes4825 = node.contents();
                    oldNodes.replaceWith(nodes4825);
                  }));
                }
                renderControl1206();
                callback(root6912); return subs__;
                
                return subs__;
              }, function(node) {
                var oldNodes = nodes4824;
                nodes4824 = node.contents();
                oldNodes.replaceWith(nodes4824);
              }));
              callback(root6911); return subs__;
              
              return subs__;
            }, function(node) {
              var oldNodes = nodes4823;
              nodes4823 = node.contents();
              oldNodes.replaceWith(nodes4823);
            }));
            
            var oldNodes = iternode468;
            iternode468 = iternode468.contents();
            oldNodes.replaceWith(iternode468);
            
            
          }());
        }
        mobl.delayedUpdateScrollers();
        subs__.addSub(list468.addEventListener('change', function() { listSubs__.unsubscribe(); renderList468(true); }));
        subs__.addSub(tabs.addEventListener('change', function() { listSubs__.unsubscribe(); renderList468(true); }));
      });
    };
    renderList468();
    
    callback(root6907); return subs__;
    
    
  } else {
    {
      
      var s = mobl.ref("");
      var nodes4820 = $("<span>");
      root6907.append(nodes4820);
      subs__.addSub((mobl.block)(mobl.ref(ui.tabbarStyle), mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root6908 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        
        var node2989 = mobl.loadingSpan();
        root6908.append(node2989);
        var list467;
        var listSubs__ = new mobl.CompSubscription();
        subs__.addSub(listSubs__);
        var renderList467 = function() {
          var subs__ = listSubs__;
          list467 = tabs.get();
          list467.list(function(results467) {
            node2989.empty();
            for(var i584 = 0; i584 < results467.length; i584++) {
              (function() {
                var iternode467 = $("<span>");
                node2989.append(iternode467);
                var tabName;var tabIcon;var tabControl;
                tabName = mobl.ref(mobl.ref(mobl.ref(results467), i584), "_1");tabIcon = mobl.ref(mobl.ref(mobl.ref(results467), i584), "_2");tabControl = mobl.ref(mobl.ref(mobl.ref(results467), i584), "_3");
                var result__ = activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle;
                var tmp4111 = mobl.ref(result__);
                subs__.addSub(activeTab.addEventListener('change', function() {
                  tmp4111.set(activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
                }));
                subs__.addSub(tabName.addEventListener('change', function() {
                  tmp4111.set(activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
                }));
                subs__.addSub(mobl.ref(ui.activeTabButtonStyle).addEventListener('change', function() {
                  tmp4111.set(activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
                }));
                subs__.addSub(mobl.ref(ui.inActiveTabButtonStyle).addEventListener('change', function() {
                  tmp4111.set(activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
                }));
                
                var result__ = function(event, callback) {
                                 if(event && event.stopPropagation) event.stopPropagation();
                                 var result__ = tabName.get();
                                 activeTab.set(result__);
                                 if(callback && callback.apply) callback(); return;
                               };
                var tmp4109 = mobl.ref(result__);
                
                var nodes4821 = $("<span>");
                iternode467.append(nodes4821);
                subs__.addSub((mobl.span)(tmp4111, mobl.ref(null), tmp4109, mobl.ref(null), function(_, callback) {
                  var root6909 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  var nodes4822 = $("<span>");
                  root6909.append(nodes4822);
                  subs__.addSub((mobl.label)(tabName, mobl.ref(null), mobl.ref(null), function(_, callback) {
                    var root6910 = $("<span>");
                    var subs__ = new mobl.CompSubscription();
                    callback(root6910); return subs__;
                    return subs__;
                  }, function(node) {
                    var oldNodes = nodes4822;
                    nodes4822 = node.contents();
                    oldNodes.replaceWith(nodes4822);
                  }));
                  callback(root6909); return subs__;
                  
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes4821;
                  nodes4821 = node.contents();
                  oldNodes.replaceWith(nodes4821);
                }));
                
                var oldNodes = iternode467;
                iternode467 = iternode467.contents();
                oldNodes.replaceWith(iternode467);
                
                
              }());
            }
            mobl.delayedUpdateScrollers();
            subs__.addSub(list467.addEventListener('change', function() { listSubs__.unsubscribe(); renderList467(true); }));
            subs__.addSub(tabs.addEventListener('change', function() { listSubs__.unsubscribe(); renderList467(true); }));
          });
        };
        renderList467();
        
        callback(root6908); return subs__;
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes4820;
        nodes4820 = node.contents();
        oldNodes.replaceWith(nodes4820);
      }));
      
      var node2990 = mobl.loadingSpan();
      root6907.append(node2990);
      var list468;
      var listSubs__ = new mobl.CompSubscription();
      subs__.addSub(listSubs__);
      var renderList468 = function() {
        var subs__ = listSubs__;
        list468 = tabs.get();
        list468.list(function(results468) {
          node2990.empty();
          for(var i585 = 0; i585 < results468.length; i585++) {
            (function() {
              var iternode468 = $("<span>");
              node2990.append(iternode468);
              var tabName;var tabIcon;var tabControl;
              tabName = mobl.ref(mobl.ref(mobl.ref(results468), i585), "_1");tabIcon = mobl.ref(mobl.ref(mobl.ref(results468), i585), "_2");tabControl = mobl.ref(mobl.ref(mobl.ref(results468), i585), "_3");
              var result__ = activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle;
              var tmp4112 = mobl.ref(result__);
              subs__.addSub(activeTab.addEventListener('change', function() {
                tmp4112.set(activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
              }));
              subs__.addSub(tabName.addEventListener('change', function() {
                tmp4112.set(activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
              }));
              subs__.addSub(mobl.ref(ui.activeTabStyle).addEventListener('change', function() {
                tmp4112.set(activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
              }));
              subs__.addSub(mobl.ref(ui.inActiveTabStyle).addEventListener('change', function() {
                tmp4112.set(activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
              }));
              
              var nodes4823 = $("<span>");
              iternode468.append(nodes4823);
              subs__.addSub((mobl.block)(tmp4112, mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
                var root6911 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                var nodes4824 = $("<span>");
                root6911.append(nodes4824);
                subs__.addSub((mobl.screenContext)(function(_, callback) {
                  var root6912 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  var nodes4825 = $("<span>");
                  root6912.append(nodes4825);
                  subs__.addSub(tabControl.addEventListener('change', function() {
                    renderControl1206();
                  }));
                  
                  function renderControl1206() {
                    subs__.addSub((tabControl.get())(function(elements, callback) {
                      var root6913 = $("<span>");
                      var subs__ = new mobl.CompSubscription();
                      callback(root6913); return subs__;
                      return subs__;
                    }, function(node) {
                      var oldNodes = nodes4825;
                      nodes4825 = node.contents();
                      oldNodes.replaceWith(nodes4825);
                    }));
                  }
                  renderControl1206();
                  callback(root6912); return subs__;
                  
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes4824;
                  nodes4824 = node.contents();
                  oldNodes.replaceWith(nodes4824);
                }));
                callback(root6911); return subs__;
                
                return subs__;
              }, function(node) {
                var oldNodes = nodes4823;
                nodes4823 = node.contents();
                oldNodes.replaceWith(nodes4823);
              }));
              
              var oldNodes = iternode468;
              iternode468 = iternode468.contents();
              oldNodes.replaceWith(iternode468);
              
              
            }());
          }
          mobl.delayedUpdateScrollers();
          subs__.addSub(list468.addEventListener('change', function() { listSubs__.unsubscribe(); renderList468(true); }));
          subs__.addSub(tabs.addEventListener('change', function() { listSubs__.unsubscribe(); renderList468(true); }));
        });
      };
      renderList468();
      
      callback(root6907); return subs__;
      
      
    }
  }
  return subs__;
};
ui.searchboxStyle = 'ui__searchboxStyle';
ui.searchBoxInputStyle = 'ui__searchBoxInputStyle';

ui.searchBox = function(s, placeholder, onsearch, onkeyup, elements, callback) {
  var root6914 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node2991 = $("<div>");
  
  var ref3443 = mobl.ref(ui.searchboxStyle);
  if(ref3443.get() !== null) {
    node2991.attr('class', ref3443.get());
    subs__.addSub(ref3443.addEventListener('change', function(_, ref, val) {
      node2991.attr('class', val);
    }));
    
  }
  subs__.addSub(ref3443.rebind());
  
  
  var node2992 = $("<input>");
  node2992.attr('type', "search");
  
  var ref3440 = mobl.ref(ui.searchBoxInputStyle);
  if(ref3440.get() !== null) {
    node2992.attr('class', ref3440.get());
    subs__.addSub(ref3440.addEventListener('change', function(_, ref, val) {
      node2992.attr('class', val);
    }));
    
  }
  subs__.addSub(ref3440.rebind());
  
  var ref3441 = placeholder;
  if(ref3441.get() !== null) {
    node2992.attr('placeholder', ref3441.get());
    subs__.addSub(ref3441.addEventListener('change', function(_, ref, val) {
      node2992.attr('placeholder', val);
    }));
    
  }
  subs__.addSub(ref3441.rebind());
  
  var ref3442 = s;
  node2992.val(""+ref3442.get());
  var ignore698 = false;
  subs__.addSub(ref3442.addEventListener('change', function(_, ref, val) {
    if(ignore698) return;
    node2992.val(""+val);
  }));
  subs__.addSub(ref3442.rebind());
  
  subs__.addSub(mobl.domBind(node2992, 'keyup change', function() {
    ignore698 = true;
    s.set(mobl.stringTomobl__String(node2992.val()));
    ignore698 = false;
  }));
  
  
  var val1861 = onsearch.get();
  if(val1861 !== null) {
    subs__.addSub(mobl.domBind(node2992, 'change', val1861));
  }
  
  var val1862 = onkeyup.get();
  if(val1862 !== null) {
    subs__.addSub(mobl.domBind(node2992, 'keyup', val1862));
  }
  node2992.attr('autocorrect', false);
  node2992.attr('autocapitalize', false);
  node2992.attr('autocomplete', false);
  
  node2991.append(node2992);
  root6914.append(node2991);
  callback(root6914); return subs__;
  
  
  return subs__;
};
ui.contextMenuStyle = 'ui__contextMenuStyle';
ui.buttonStyle = 'ui__buttonStyle';
ui.buttonPushedStyle = 'ui__buttonPushedStyle';

ui.contextMenu = function(elements, callback) {
  var root6915 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var menu = $("<div>");
  
  var ref3444 = mobl.ref(ui.contextMenuStyle);
  if(ref3444.get() !== null) {
    menu.attr('class', ref3444.get());
    subs__.addSub(ref3444.addEventListener('change', function(_, ref, val) {
      menu.attr('class', val);
    }));
    
  }
  subs__.addSub(ref3444.rebind());
  
  var nodes4826 = $("<span>");
  menu.append(nodes4826);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl1207();
  }));
  
  function renderControl1207() {
    subs__.addSub((elements)(function(elements, callback) {
      var root6916 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root6916); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes4826;
      nodes4826 = node.contents();
      oldNodes.replaceWith(nodes4826);
    }));
  }
  renderControl1207();
  root6915.append(menu);
  var result__ = menu.hide();
  
  var img = $("<img>");
  img.attr('src', "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAA0AAAANABeWPPlAAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAEuSURBVDiNrdSrTkNBEMbx35aLIhUNEl4CsCSkmgfBoOoJz0B4BhSSBEcQSMA3GBJE34Br6CA6heWUA4huMuLszvc/c9stEaG5Sil97GADm7l9g1tcRsTFjCgiPg09nCDSxhimjav9E/S+aSvINkbpeIU+utV5N/eu0meE7W+gjGSEFwzQqf/WiLqTPi+p6dWgaTqDNsAPwME0zWmd+1U6rZG0RDZNs9/J7sBBRIxnutGy0vcgP3cWTVocuC6lLGD9H5z3iHjAdWo3ZMGGVchHvtrcZnuV/zAZM6CCUzz9AHjGYaNWn6Azk2GrZ2YJlw3YI44bkG5qzzomY1+wVRXyDbu4w2sCz7HfqNVWam/5pf1YxX2eLf/W/j8HEmtY+XMg53pF5nZp5/GMlHk9bB8Ws56C3JDK8wAAAABJRU5ErkJggg==");
  img.attr('style', "float: right;");
  
  var val1863 = function(event, callback) {
                if(event && event.stopPropagation) event.stopPropagation();
                var result__ = img.parent();
                var target = result__;
                var result__ = target.css("position", "relative");
                var result__ = img.hide();
                var result__ = menu.css("right", "5px");
                var result__ = menu.css("top", "5px");
                var result__ = menu.show();
                mobl.sleep(500, function(result__) {
                  var tmp4155 = result__;
                  var result__ = mobl.$("body").bind("tap", removeMenu);
                  if(callback && callback.apply) callback(); return;
                });
              };
  if(val1863 !== null) {
    subs__.addSub(mobl.domBind(img, 'tap', val1863));
  }
  
  root6915.append(img);
  
  var removeMenu = function(evt) {
     var __this = this;
    menu.hide();
    img.show();
    mobl.$("body").unbind("tap", removeMenu);
  };
  
  
  callback(root6915); return subs__;
  
  
  
  return subs__;
};

ui.masterDetail = function(items, masterItem, detail, elements, callback) {
  var root6917 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var result__ = mobl.window.get().innerWidth > 500;
  var tmp4138 = mobl.ref(result__);
  subs__.addSub(mobl.ref(mobl.window, 'innerWidth').addEventListener('change', function() {
    tmp4138.set(mobl.window.get().innerWidth > 500);
  }));
  
  
  var node2993 = $("<span>");
  root6917.append(node2993);
  var condSubs672 = new mobl.CompSubscription();
  subs__.addSub(condSubs672);
  var oldValue672;
  var renderCond672 = function() {
    var value2322 = tmp4138.get();
    if(oldValue672 === value2322) return;
    oldValue672 = value2322;
    var subs__ = condSubs672;
    subs__.unsubscribe();
    node2993.empty();
    if(value2322) {
      items.get().one(function(result__) {
        var tmp4156 = result__;
        var current = mobl.ref(result__);
        
        var node2994 = $("<div>");
        node2994.attr('width', "100%");
        
        
        var node2995 = $("<div>");
        node2995.attr('style', "float:left; width:33%; position:relative; border-right: solid 1px #cccccc;");
        
        var nodes4829 = $("<span>");
        node2995.append(nodes4829);
        subs__.addSub((ui.group)(function(_, callback) {
          var root6920 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          
          var node2998 = mobl.loadingSpan();
          root6920.append(node2998);
          var list469;
          var listSubs__ = new mobl.CompSubscription();
          subs__.addSub(listSubs__);
          var renderList469 = function() {
            var subs__ = listSubs__;
            list469 = items.get();
            list469.list(function(results469) {
              node2998.empty();
              for(var i586 = 0; i586 < results469.length; i586++) {
                (function() {
                  var iternode469 = $("<span>");
                  node2998.append(iternode469);
                  var it;
                  it = mobl.ref(mobl.ref(results469), i586);
                  var result__ = it.get() == current.get();
                  var tmp4118 = mobl.ref(result__);
                  subs__.addSub(it.addEventListener('change', function() {
                    tmp4118.set(it.get() == current.get());
                  }));
                  subs__.addSub(current.addEventListener('change', function() {
                    tmp4118.set(it.get() == current.get());
                  }));
                  
                  
                  var node2999 = $("<span>");
                  iternode469.append(node2999);
                  var condSubs674 = new mobl.CompSubscription();
                  subs__.addSub(condSubs674);
                  var oldValue674;
                  var renderCond674 = function() {
                    var value2324 = tmp4118.get();
                    if(oldValue674 === value2324) return;
                    oldValue674 = value2324;
                    var subs__ = condSubs674;
                    subs__.unsubscribe();
                    node2999.empty();
                    if(value2324) {
                      var nodes4830 = $("<span>");
                      node2999.append(nodes4830);
                      subs__.addSub((ui.item)(mobl.ref(ui.selectedItemStyle), mobl.ref(ui.itemPushedStyle), mobl.ref(null), mobl.ref(null), mobl.ref(false), function(_, callback) {
                        var root6921 = $("<span>");
                        var subs__ = new mobl.CompSubscription();
                        var nodes4831 = $("<span>");
                        root6921.append(nodes4831);
                        subs__.addSub(masterItem.addEventListener('change', function() {
                          renderControl1209();
                        }));
                        
                        function renderControl1209() {
                          subs__.addSub((masterItem.get())(it, function(elements, callback) {
                            var root6922 = $("<span>");
                            var subs__ = new mobl.CompSubscription();
                            callback(root6922); return subs__;
                            return subs__;
                          }, function(node) {
                            var oldNodes = nodes4831;
                            nodes4831 = node.contents();
                            oldNodes.replaceWith(nodes4831);
                          }));
                        }
                        renderControl1209();
                        callback(root6921); return subs__;
                        
                        return subs__;
                      }, function(node) {
                        var oldNodes = nodes4830;
                        nodes4830 = node.contents();
                        oldNodes.replaceWith(nodes4830);
                      }));
                      
                      
                    } else {
                      var result__ = function(event, callback) {
                                       if(event && event.stopPropagation) event.stopPropagation();
                                       var result__ = it.get();
                                       current.set(result__);
                                       var result__ = ui.scrollUp();
                                       if(callback && callback.apply) callback(); return;
                                     };
                      var tmp4117 = mobl.ref(result__);
                      
                      var nodes4832 = $("<span>");
                      node2999.append(nodes4832);
                      subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp4117, mobl.ref(null), mobl.ref(true), function(_, callback) {
                        var root6923 = $("<span>");
                        var subs__ = new mobl.CompSubscription();
                        var nodes4833 = $("<span>");
                        root6923.append(nodes4833);
                        subs__.addSub(masterItem.addEventListener('change', function() {
                          renderControl1210();
                        }));
                        
                        function renderControl1210() {
                          subs__.addSub((masterItem.get())(it, function(elements, callback) {
                            var root6924 = $("<span>");
                            var subs__ = new mobl.CompSubscription();
                            callback(root6924); return subs__;
                            return subs__;
                          }, function(node) {
                            var oldNodes = nodes4833;
                            nodes4833 = node.contents();
                            oldNodes.replaceWith(nodes4833);
                          }));
                        }
                        renderControl1210();
                        callback(root6923); return subs__;
                        
                        return subs__;
                      }, function(node) {
                        var oldNodes = nodes4832;
                        nodes4832 = node.contents();
                        oldNodes.replaceWith(nodes4832);
                      }));
                      
                      
                    }
                  };
                  renderCond674();
                  subs__.addSub(tmp4118.addEventListener('change', function() {
                    renderCond674();
                  }));
                  
                  
                  var oldNodes = iternode469;
                  iternode469 = iternode469.contents();
                  oldNodes.replaceWith(iternode469);
                  
                  
                }());
              }
              mobl.delayedUpdateScrollers();
              subs__.addSub(list469.addEventListener('change', function() { listSubs__.unsubscribe(); renderList469(true); }));
              subs__.addSub(items.addEventListener('change', function() { listSubs__.unsubscribe(); renderList469(true); }));
            });
          };
          renderList469();
          
          callback(root6920); return subs__;
          
          return subs__;
        }, function(node) {
          var oldNodes = nodes4829;
          nodes4829 = node.contents();
          oldNodes.replaceWith(nodes4829);
        }));
        node2994.append(node2995);
        
        var node2996 = $("<div>");
        node2996.attr('style', "float:left; width:66.5%; position:relative; margin-left: 0.5%;");
        
        
        var node2997 = $("<span>");
        node2996.append(node2997);
        var condSubs673 = new mobl.CompSubscription();
        subs__.addSub(condSubs673);
        var oldValue673;
        var renderCond673 = function() {
          var value2323 = current.get();
          if(oldValue673 === value2323) return;
          oldValue673 = value2323;
          var subs__ = condSubs673;
          subs__.unsubscribe();
          node2997.empty();
          if(value2323) {
            var nodes4827 = $("<span>");
            node2997.append(nodes4827);
            subs__.addSub(detail.addEventListener('change', function() {
              renderControl1208();
            }));
            
            function renderControl1208() {
              subs__.addSub((detail.get())(current, function(elements, callback) {
                var root6918 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                callback(root6918); return subs__;
                return subs__;
              }, function(node) {
                var oldNodes = nodes4827;
                nodes4827 = node.contents();
                oldNodes.replaceWith(nodes4827);
              }));
            }
            renderControl1208();
            
            
          } else {
            var result__ = mobl._("Select an item on the left", []);
            var tmp4119 = mobl.ref(result__);
            
            var nodes4828 = $("<span>");
            node2997.append(nodes4828);
            subs__.addSub((mobl.label)(tmp4119, mobl.ref(null), mobl.ref(null), function(_, callback) {
              var root6919 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              callback(root6919); return subs__;
              return subs__;
            }, function(node) {
              var oldNodes = nodes4828;
              nodes4828 = node.contents();
              oldNodes.replaceWith(nodes4828);
            }));
            
            
          }
        };
        renderCond673();
        subs__.addSub(current.addEventListener('change', function() {
          renderCond673();
        }));
        
        node2994.append(node2996);
        node2993.append(node2994);
        
        
        
        
        
        
      });
    } else {
      var nodes4834 = $("<span>");
      node2993.append(nodes4834);
      subs__.addSub((ui.group)(function(_, callback) {
        var root6925 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        
        var node3000 = mobl.loadingSpan();
        root6925.append(node3000);
        var list470;
        var listSubs__ = new mobl.CompSubscription();
        subs__.addSub(listSubs__);
        var renderList470 = function() {
          var subs__ = listSubs__;
          list470 = items.get();
          list470.list(function(results470) {
            node3000.empty();
            for(var i587 = 0; i587 < results470.length; i587++) {
              (function() {
                var iternode470 = $("<span>");
                node3000.append(iternode470);
                var it;
                it = mobl.ref(mobl.ref(results470), i587);
                var result__ = function(event, callback) {
                                 if(event && event.stopPropagation) event.stopPropagation();
                                 mobl.call('ui.detailScreen', [it, detail, mobl.ref(false), mobl.ref("slide")], function(result__) {
                                 var tmp4157 = result__;
                                 if(callback && callback.apply) callback(); return;
                                 });
                               };
                var tmp4113 = mobl.ref(result__);
                
                var nodes4835 = $("<span>");
                iternode470.append(nodes4835);
                subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp4113, mobl.ref(null), mobl.ref(false), function(_, callback) {
                  var root6926 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  var nodes4836 = $("<span>");
                  root6926.append(nodes4836);
                  subs__.addSub(masterItem.addEventListener('change', function() {
                    renderControl1211();
                  }));
                  
                  function renderControl1211() {
                    subs__.addSub((masterItem.get())(it, function(elements, callback) {
                      var root6927 = $("<span>");
                      var subs__ = new mobl.CompSubscription();
                      callback(root6927); return subs__;
                      return subs__;
                    }, function(node) {
                      var oldNodes = nodes4836;
                      nodes4836 = node.contents();
                      oldNodes.replaceWith(nodes4836);
                    }));
                  }
                  renderControl1211();
                  callback(root6926); return subs__;
                  
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes4835;
                  nodes4835 = node.contents();
                  oldNodes.replaceWith(nodes4835);
                }));
                
                var oldNodes = iternode470;
                iternode470 = iternode470.contents();
                oldNodes.replaceWith(iternode470);
                
                
              }());
            }
            mobl.delayedUpdateScrollers();
            subs__.addSub(list470.addEventListener('change', function() { listSubs__.unsubscribe(); renderList470(true); }));
            subs__.addSub(items.addEventListener('change', function() { listSubs__.unsubscribe(); renderList470(true); }));
          });
        };
        renderList470();
        
        callback(root6925); return subs__;
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes4834;
        nodes4834 = node.contents();
        oldNodes.replaceWith(nodes4834);
      }));
      
      
    }
  };
  renderCond672();
  subs__.addSub(tmp4138.addEventListener('change', function() {
    renderCond672();
  }));
  
  callback(root6917); return subs__;
  
  return subs__;
};

ui.detailScreen = function(it, detail, callback, screenCallback) {
  var root6928 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  var result__ = mobl._("Detail", []);
  var tmp4116 = mobl.ref(result__);
  
  var nodes4837 = $("<span>");
  root6928.append(nodes4837);
  subs__.addSub((ui.header)(tmp4116, mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root6929 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp4115 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp4114 = mobl.ref(result__);
    
    var nodes4838 = $("<span>");
    root6929.append(nodes4838);
    subs__.addSub((ui.backButton)(tmp4114, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp4115, function(_, callback) {
      var root6930 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root6930); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes4838;
      nodes4838 = node.contents();
      oldNodes.replaceWith(nodes4838);
    }));
    callback(root6929); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes4837;
    nodes4837 = node.contents();
    oldNodes.replaceWith(nodes4837);
  }));
  var nodes4839 = $("<span>");
  root6928.append(nodes4839);
  subs__.addSub(detail.addEventListener('change', function() {
    renderControl1212();
  }));
  
  function renderControl1212() {
    subs__.addSub((detail.get())(it, function(elements, callback) {
      var root6931 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root6931); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes4839;
      nodes4839 = node.contents();
      oldNodes.replaceWith(nodes4839);
    }));
  }
  renderControl1212();
  callback(root6928); return subs__;
  
  
  return subs__;
};
ui.selectedItemStyle = 'ui__selectedItemStyle';

ui.zoomList = function(coll, listCtrl, zoomCtrl, elements, callback) {
  var root6932 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var selected = mobl.ref(null);
  var nodes4840 = $("<span>");
  root6932.append(nodes4840);
  subs__.addSub((ui.group)(function(_, callback) {
    var root6933 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var node3001 = mobl.loadingSpan();
    root6933.append(node3001);
    var list471;
    var listSubs__ = new mobl.CompSubscription();
    subs__.addSub(listSubs__);
    var renderList471 = function() {
      var subs__ = listSubs__;
      list471 = coll.get();
      list471.list(function(results471) {
        node3001.empty();
        for(var i588 = 0; i588 < results471.length; i588++) {
          (function() {
            var iternode471 = $("<span>");
            node3001.append(iternode471);
            var it;
            it = mobl.ref(mobl.ref(results471), i588);
            var result__ = it.get() == selected.get();
            var tmp4122 = mobl.ref(result__);
            subs__.addSub(it.addEventListener('change', function() {
              tmp4122.set(it.get() == selected.get());
            }));
            subs__.addSub(selected.addEventListener('change', function() {
              tmp4122.set(it.get() == selected.get());
            }));
            
            
            var node3002 = $("<span>");
            iternode471.append(node3002);
            var condSubs675 = new mobl.CompSubscription();
            subs__.addSub(condSubs675);
            var oldValue675;
            var renderCond675 = function() {
              var value2325 = tmp4122.get();
              if(oldValue675 === value2325) return;
              oldValue675 = value2325;
              var subs__ = condSubs675;
              subs__.unsubscribe();
              node3002.empty();
              if(value2325) {
                var nodes4841 = $("<span>");
                node3002.append(nodes4841);
                subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), mobl.ref(null), mobl.ref(null), mobl.ref(false), function(_, callback) {
                  var root6934 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  var nodes4842 = $("<span>");
                  root6934.append(nodes4842);
                  subs__.addSub(zoomCtrl.addEventListener('change', function() {
                    renderControl1213();
                  }));
                  
                  function renderControl1213() {
                    subs__.addSub((zoomCtrl.get())(it, function(elements, callback) {
                      var root6935 = $("<span>");
                      var subs__ = new mobl.CompSubscription();
                      callback(root6935); return subs__;
                      return subs__;
                    }, function(node) {
                      var oldNodes = nodes4842;
                      nodes4842 = node.contents();
                      oldNodes.replaceWith(nodes4842);
                    }));
                  }
                  renderControl1213();
                  callback(root6934); return subs__;
                  
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes4841;
                  nodes4841 = node.contents();
                  oldNodes.replaceWith(nodes4841);
                }));
                
                
              } else {
                var result__ = function(event, callback) {
                                 if(event && event.stopPropagation) event.stopPropagation();
                                 var result__ = it.get();
                                 selected.set(result__);
                                 if(callback && callback.apply) callback(); return;
                               };
                var tmp4121 = mobl.ref(result__);
                
                var nodes4843 = $("<span>");
                node3002.append(nodes4843);
                subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp4121, mobl.ref(null), mobl.ref(true), function(_, callback) {
                  var root6936 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  var nodes4844 = $("<span>");
                  root6936.append(nodes4844);
                  subs__.addSub(listCtrl.addEventListener('change', function() {
                    renderControl1214();
                  }));
                  
                  function renderControl1214() {
                    subs__.addSub((listCtrl.get())(it, function(elements, callback) {
                      var root6937 = $("<span>");
                      var subs__ = new mobl.CompSubscription();
                      callback(root6937); return subs__;
                      return subs__;
                    }, function(node) {
                      var oldNodes = nodes4844;
                      nodes4844 = node.contents();
                      oldNodes.replaceWith(nodes4844);
                    }));
                  }
                  renderControl1214();
                  callback(root6936); return subs__;
                  
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes4843;
                  nodes4843 = node.contents();
                  oldNodes.replaceWith(nodes4843);
                }));
                
                
              }
            };
            renderCond675();
            subs__.addSub(tmp4122.addEventListener('change', function() {
              renderCond675();
            }));
            
            
            var oldNodes = iternode471;
            iternode471 = iternode471.contents();
            oldNodes.replaceWith(iternode471);
            
            
          }());
        }
        mobl.delayedUpdateScrollers();
        subs__.addSub(list471.addEventListener('change', function() { listSubs__.unsubscribe(); renderList471(true); }));
        subs__.addSub(coll.addEventListener('change', function() { listSubs__.unsubscribe(); renderList471(true); }));
      });
    };
    renderList471();
    
    callback(root6933); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes4840;
    nodes4840 = node.contents();
    oldNodes.replaceWith(nodes4840);
  }));
  callback(root6932); return subs__;
  
  return subs__;
};
ui.loadMoreStyle = 'ui__loadMoreStyle';

ui.stagedList = function(coll, listCtrl, initialItems, step, moreLabel, moreStyle, elements, callback) {
  var root6938 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var n = mobl.ref(initialItems.get());
  coll.get().count(function(result__) {
    var tmp4158 = result__;
    var total = mobl.ref(result__);
    var result__ = coll.get().limit(n.get());
    var tmp4123 = mobl.ref(result__);
    subs__.addSub(mobl.ref(coll.get().limit(n.get())).addEventListener('change', function() {
      tmp4123.set(coll.get().limit(n.get()));
    }));
    subs__.addSub(coll.addEventListener('change', function() {
      tmp4123.set(coll.get().limit(n.get()));
    }));
    subs__.addSub(n.addEventListener('change', function() {
      tmp4123.set(coll.get().limit(n.get()));
    }));
    
    
    var node3003 = mobl.loadingSpan();
    root6938.append(node3003);
    var list472;
    var listSubs__ = new mobl.CompSubscription();
    subs__.addSub(listSubs__);
    var renderList472 = function() {
      var subs__ = listSubs__;
      list472 = tmp4123.get();
      list472.list(function(results472) {
        node3003.empty();
        for(var i589 = 0; i589 < results472.length; i589++) {
          (function() {
            var iternode472 = $("<span>");
            node3003.append(iternode472);
            var it;
            it = mobl.ref(mobl.ref(results472), i589);
            var nodes4845 = $("<span>");
            iternode472.append(nodes4845);
            subs__.addSub(listCtrl.addEventListener('change', function() {
              renderControl1215();
            }));
            
            function renderControl1215() {
              subs__.addSub((listCtrl.get())(it, function(elements, callback) {
                var root6939 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                callback(root6939); return subs__;
                return subs__;
              }, function(node) {
                var oldNodes = nodes4845;
                nodes4845 = node.contents();
                oldNodes.replaceWith(nodes4845);
              }));
            }
            renderControl1215();
            
            var oldNodes = iternode472;
            iternode472 = iternode472.contents();
            oldNodes.replaceWith(iternode472);
            
            
          }());
        }
        mobl.delayedUpdateScrollers();
        subs__.addSub(list472.addEventListener('change', function() { listSubs__.unsubscribe(); renderList472(true); }));
        subs__.addSub(tmp4123.addEventListener('change', function() { listSubs__.unsubscribe(); renderList472(true); }));
      });
    };
    renderList472();
    
    var result__ = n.get() < total.get();
    var tmp4125 = mobl.ref(result__);
    subs__.addSub(n.addEventListener('change', function() {
      tmp4125.set(n.get() < total.get());
    }));
    subs__.addSub(total.addEventListener('change', function() {
      tmp4125.set(n.get() < total.get());
    }));
    
    
    var node3004 = $("<span>");
    root6938.append(node3004);
    var condSubs676 = new mobl.CompSubscription();
    subs__.addSub(condSubs676);
    var oldValue676;
    var renderCond676 = function() {
      var value2326 = tmp4125.get();
      if(oldValue676 === value2326) return;
      oldValue676 = value2326;
      var subs__ = condSubs676;
      subs__.unsubscribe();
      node3004.empty();
      if(value2326) {
        var result__ = function(event, callback) {
                         if(event && event.stopPropagation) event.stopPropagation();
                         var result__ = n.get() + step.get();
                         n.set(result__);
                         if(callback && callback.apply) callback(); return;
                       };
        var tmp4124 = mobl.ref(result__);
        
        var nodes4846 = $("<span>");
        node3004.append(nodes4846);
        subs__.addSub((mobl.block)(moreStyle, mobl.ref(null), tmp4124, mobl.ref(null), function(_, callback) {
          var root6940 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          var nodes4847 = $("<span>");
          root6940.append(nodes4847);
          subs__.addSub((mobl.label)(moreLabel, mobl.ref(null), mobl.ref(null), function(_, callback) {
            var root6941 = $("<span>");
            var subs__ = new mobl.CompSubscription();
            callback(root6941); return subs__;
            return subs__;
          }, function(node) {
            var oldNodes = nodes4847;
            nodes4847 = node.contents();
            oldNodes.replaceWith(nodes4847);
          }));
          callback(root6940); return subs__;
          
          return subs__;
        }, function(node) {
          var oldNodes = nodes4846;
          nodes4846 = node.contents();
          oldNodes.replaceWith(nodes4846);
        }));
        
        
      } else {
        
      }
    };
    renderCond676();
    subs__.addSub(tmp4125.addEventListener('change', function() {
      renderCond676();
    }));
    
    callback(root6938); return subs__;
    
    
  });
  return subs__;
};

ui.markableList = function(items, elements, callback) {
  var root6942 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes4848 = $("<span>");
  root6942.append(nodes4848);
  subs__.addSub((ui.group)(function(_, callback) {
    var root6943 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var node3005 = mobl.loadingSpan();
    root6943.append(node3005);
    var list473;
    var listSubs__ = new mobl.CompSubscription();
    subs__.addSub(listSubs__);
    var renderList473 = function() {
      var subs__ = listSubs__;
      list473 = items.get();
      list473.list(function(results473) {
        node3005.empty();
        for(var i590 = 0; i590 < results473.length; i590++) {
          (function() {
            var iternode473 = $("<span>");
            node3005.append(iternode473);
            var checked;var it;
            checked = mobl.ref(mobl.ref(mobl.ref(results473), i590), "_1");it = mobl.ref(mobl.ref(mobl.ref(results473), i590), "_2");
            var nodes4849 = $("<span>");
            iternode473.append(nodes4849);
            subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), mobl.ref(null), mobl.ref(null), mobl.ref(false), function(_, callback) {
              var root6944 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              var nodes4850 = $("<span>");
              root6944.append(nodes4850);
              subs__.addSub((ui.checkBox)(checked, it, mobl.ref(null), function(_, callback) {
                var root6945 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                callback(root6945); return subs__;
                return subs__;
              }, function(node) {
                var oldNodes = nodes4850;
                nodes4850 = node.contents();
                oldNodes.replaceWith(nodes4850);
              }));
              callback(root6944); return subs__;
              
              return subs__;
            }, function(node) {
              var oldNodes = nodes4849;
              nodes4849 = node.contents();
              oldNodes.replaceWith(nodes4849);
            }));
            
            var oldNodes = iternode473;
            iternode473 = iternode473.contents();
            oldNodes.replaceWith(iternode473);
            
            
          }());
        }
        mobl.delayedUpdateScrollers();
        subs__.addSub(list473.addEventListener('change', function() { listSubs__.unsubscribe(); renderList473(true); }));
        subs__.addSub(items.addEventListener('change', function() { listSubs__.unsubscribe(); renderList473(true); }));
      });
    };
    renderList473();
    
    callback(root6943); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes4848;
    nodes4848 = node.contents();
    oldNodes.replaceWith(nodes4848);
  }));
  callback(root6942); return subs__;
  
  return subs__;
};

ui.selectList = function(title, coll, doneButtonLabel, callback, screenCallback) {
  var root6946 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  
  var items = mobl.ref([]);
  var result__ = coll.get();
  coll.get().list(function(coll2615) {
    coll2615 = coll2615.reverse();
    function processOne131() {
      var it;
      it = coll2615.pop();
      var result__ = items.get().push(new mobl.Tuple(false, it));
      
      if(coll2615.length > 0) processOne131(); else rest131();
      
    }
    function rest131() {
      var nodes4851 = $("<span>");
      root6946.append(nodes4851);
      subs__.addSub((ui.header)(title, mobl.ref(false), mobl.ref(null), function(_, callback) {
        var root6947 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        var result__ = function(event, callback) {
                         if(event && event.stopPropagation) event.stopPropagation();
                         var result__ = null;
                         if(callback && callback.apply) callback(result__);
                         return;
                         if(callback && callback.apply) callback(); return;
                       };
        var tmp4126 = mobl.ref(result__);
        
        var result__ = mobl._("Back", []);
        var tmp4127 = mobl.ref(result__);
        
        var nodes4852 = $("<span>");
        root6947.append(nodes4852);
        subs__.addSub((ui.backButton)(tmp4127, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp4126, function(_, callback) {
          var root6948 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root6948); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes4852;
          nodes4852 = node.contents();
          oldNodes.replaceWith(nodes4852);
        }));
        var result__ = function(event, callback) {
                         if(event && event.stopPropagation) event.stopPropagation();
                         var result__ = [];
                         var selected = result__;
                         var result__ = items.get();
                         items.get().list(function(coll2614) {
                           coll2614 = coll2614.reverse();
                           function processOne130() {
                             var checked;var it;
                             var tmp4161 = coll2614.pop();
                             checked = tmp4161._1;it = tmp4161._2;
                             var result__ = checked;
                             if(result__) {
                               var result__ = selected.push(it);
                               
                               if(coll2614.length > 0) processOne130(); else rest130();
                               
                             } else {
                               {
                                 
                                 if(coll2614.length > 0) processOne130(); else rest130();
                                 
                               }
                             }
                           }
                           function rest130() {
                             var result__ = selected;
                             if(screenCallback) screenCallback(result__);
                             return;
                             if(callback && callback.apply) callback(); return;
                           }
                           if(coll2614.length > 0) processOne130(); else rest130();
                         });
                         
                       };
        var tmp4128 = mobl.ref(result__);
        
        var nodes4853 = $("<span>");
        root6947.append(nodes4853);
        subs__.addSub((ui.button)(doneButtonLabel, mobl.ref(ui.buttonStyle), mobl.ref(ui.buttonPushedStyle), tmp4128, function(_, callback) {
          var root6949 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root6949); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes4853;
          nodes4853 = node.contents();
          oldNodes.replaceWith(nodes4853);
        }));
        callback(root6947); return subs__;
        
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes4851;
        nodes4851 = node.contents();
        oldNodes.replaceWith(nodes4851);
      }));
      var nodes4854 = $("<span>");
      root6946.append(nodes4854);
      subs__.addSub((ui.markableList)(items, function(_, callback) {
        var root6950 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root6950); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes4854;
        nodes4854 = node.contents();
        oldNodes.replaceWith(nodes4854);
      }));
      callback(root6946); return subs__;
      
      
    }
    if(coll2615.length > 0) processOne131(); else rest131();
  });
  
  return subs__;
};

ui.searchList = function(Ent, masterItem, detailItem, resultLimit, searchTermPlaceholder, elements, callback) {
  var root6951 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var phrase = mobl.ref("");
  var nodes4855 = $("<span>");
  root6951.append(nodes4855);
  subs__.addSub((ui.searchBox)(phrase, searchTermPlaceholder, mobl.ref(null), mobl.ref(null), function(_, callback) {
    var root6952 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root6952); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes4855;
    nodes4855 = node.contents();
    oldNodes.replaceWith(nodes4855);
  }));
  var result__ = Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get());
  var tmp4129 = mobl.ref(result__);
  subs__.addSub(mobl.ref(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get())).addEventListener('change', function() {
    tmp4129.set(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
  }));
  subs__.addSub(mobl.ref(Ent.get().searchPrefix(phrase.get())).addEventListener('change', function() {
    tmp4129.set(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
  }));
  subs__.addSub(Ent.addEventListener('change', function() {
    tmp4129.set(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
  }));
  subs__.addSub(phrase.addEventListener('change', function() {
    tmp4129.set(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
  }));
  subs__.addSub(resultLimit.addEventListener('change', function() {
    tmp4129.set(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
  }));
  
  var nodes4856 = $("<span>");
  root6951.append(nodes4856);
  subs__.addSub((ui.masterDetail)(tmp4129, masterItem, detailItem, function(_, callback) {
    var root6953 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root6953); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes4856;
    nodes4856 = node.contents();
    oldNodes.replaceWith(nodes4856);
  }));
  callback(root6951); return subs__;
  
  
  return subs__;
};
ui.progressStyle = 'ui__progressStyle';
ui.startLoading = function(loadingMessage, style) {
   var __this = this;
  var loading = mobl.$("<div id='progress' class='" + style + "'>" + loadingMessage + "</div>");
  
  mobl.$("body").prepend(loading);
};

ui.endLoading = function() {
   var __this = this;
  mobl.$("#progress").remove();
};

(function(__ns) {
__ns.floatBox = function(top, right, bottom, left, elements, callback) {
                  var root928 = $("<span>");
                  var node280 = $("<div style=\"position: absolute;\">");
                  var nodes681 = $("<span>");
                  node280.append(nodes681);
                  mobl.ref(elements).addEventListener('change', function() {
                                                                  renderControl102();
                                                                });
                  function renderControl102 ( ) {
                    (elements)(function(elements, callback) {
                                 var root929 = $("<span>");
                                 callback(root929);
                                 return;
                               }, function(node) {
                                    var oldNodes = nodes681;
                                    nodes681 = node.contents();
                                    oldNodes.replaceWith(nodes681);
                                  });
                  }
                  renderControl102();
                  root928.append(node280);
                  var box = node280;
                  if(top.get() !== null)
                  box.css("top", "" + top.get() + "px");
                  if(right.get() !== null)
                  box.css("right", "" + right.get() + "px");
                  if(bottom.get() !== null)
                  box.css("top", "" + ( window.pageYOffset + window.innerHeight - box.outerHeight() - bottom.get() ) + "px");
                  if(left.get() !== null)
                  box.css("left", "" + left.get() + "px");
                  function updateLocation ( ) {
                    if(top.get() !== null)
                    {
                      box.css("top", "" + ( window.pageYOffset + top.get() ) + "px");
                    }
                    if(bottom.get() !== null)
                    {
                      box.css("top", "" + ( window.pageYOffset + window.innerHeight - box.outerHeight() - bottom.get() ) + "px");
                    }
                  }
                  $(window).bind('scroll', updateLocation);
                  $(window).bind('resize', updateLocation);
                  callback(root928);
                  return;
                };
}(ui));ui.accordionStyle = 'ui__accordionStyle';
ui.activeSectionHeaderStyle = 'ui__activeSectionHeaderStyle';
ui.inActiveSectionHeaderStyle = 'ui__inActiveSectionHeaderStyle';
ui.activeSectionHeaderStyle = 'ui__activeSectionHeaderStyle';
ui.inActiveSectionHeaderStyle = 'ui__inActiveSectionHeaderStyle';
ui.inActiveSectionStyle = 'ui__inActiveSectionStyle';
ui.activeSectionStyle = 'ui__activeSectionStyle';

ui.accordion = function(sections, activeSection, elements, callback) {
  var root6954 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var activeSection = mobl.ref(activeSection.get() ? activeSection.get() : sections.get().get(0)._1);
  var nodes4857 = $("<span>");
  root6954.append(nodes4857);
  subs__.addSub((mobl.block)(mobl.ref(ui.accordionStyle), mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
    var root6955 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var node3006 = mobl.loadingSpan();
    root6955.append(node3006);
    var list474;
    var listSubs__ = new mobl.CompSubscription();
    subs__.addSub(listSubs__);
    var renderList474 = function() {
      var subs__ = listSubs__;
      list474 = sections.get();
      list474.list(function(results474) {
        node3006.empty();
        for(var i591 = 0; i591 < results474.length; i591++) {
          (function() {
            var iternode474 = $("<span>");
            node3006.append(iternode474);
            var sectionName;var sectionControl;
            sectionName = mobl.ref(mobl.ref(mobl.ref(results474), i591), "_1");sectionControl = mobl.ref(mobl.ref(mobl.ref(results474), i591), "_2");
            var result__ = activeSection.get() == sectionName.get() ? ui.activeSectionHeaderStyle : ui.inActiveSectionHeaderStyle;
            var tmp4132 = mobl.ref(result__);
            subs__.addSub(activeSection.addEventListener('change', function() {
              tmp4132.set(activeSection.get() == sectionName.get() ? ui.activeSectionHeaderStyle : ui.inActiveSectionHeaderStyle);
            }));
            subs__.addSub(sectionName.addEventListener('change', function() {
              tmp4132.set(activeSection.get() == sectionName.get() ? ui.activeSectionHeaderStyle : ui.inActiveSectionHeaderStyle);
            }));
            subs__.addSub(mobl.ref(ui.activeSectionHeaderStyle).addEventListener('change', function() {
              tmp4132.set(activeSection.get() == sectionName.get() ? ui.activeSectionHeaderStyle : ui.inActiveSectionHeaderStyle);
            }));
            subs__.addSub(mobl.ref(ui.inActiveSectionHeaderStyle).addEventListener('change', function() {
              tmp4132.set(activeSection.get() == sectionName.get() ? ui.activeSectionHeaderStyle : ui.inActiveSectionHeaderStyle);
            }));
            
            var result__ = function(event, callback) {
                             if(event && event.stopPropagation) event.stopPropagation();
                             var result__ = sectionName.get();
                             activeSection.set(result__);
                             if(callback && callback.apply) callback(); return;
                           };
            var tmp4131 = mobl.ref(result__);
            
            var nodes4858 = $("<span>");
            iternode474.append(nodes4858);
            subs__.addSub((mobl.span)(tmp4132, mobl.ref(null), tmp4131, mobl.ref(null), function(_, callback) {
              var root6956 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              var nodes4859 = $("<span>");
              root6956.append(nodes4859);
              subs__.addSub((mobl.label)(sectionName, mobl.ref(null), mobl.ref(null), function(_, callback) {
                var root6957 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                callback(root6957); return subs__;
                return subs__;
              }, function(node) {
                var oldNodes = nodes4859;
                nodes4859 = node.contents();
                oldNodes.replaceWith(nodes4859);
              }));
              callback(root6956); return subs__;
              
              return subs__;
            }, function(node) {
              var oldNodes = nodes4858;
              nodes4858 = node.contents();
              oldNodes.replaceWith(nodes4858);
            }));
            var result__ = activeSection.get() == sectionName.get() ? ui.activeSectionStyle : ui.inActiveSectionStyle;
            var tmp4133 = mobl.ref(result__);
            subs__.addSub(activeSection.addEventListener('change', function() {
              tmp4133.set(activeSection.get() == sectionName.get() ? ui.activeSectionStyle : ui.inActiveSectionStyle);
            }));
            subs__.addSub(sectionName.addEventListener('change', function() {
              tmp4133.set(activeSection.get() == sectionName.get() ? ui.activeSectionStyle : ui.inActiveSectionStyle);
            }));
            subs__.addSub(mobl.ref(ui.activeSectionStyle).addEventListener('change', function() {
              tmp4133.set(activeSection.get() == sectionName.get() ? ui.activeSectionStyle : ui.inActiveSectionStyle);
            }));
            subs__.addSub(mobl.ref(ui.inActiveSectionStyle).addEventListener('change', function() {
              tmp4133.set(activeSection.get() == sectionName.get() ? ui.activeSectionStyle : ui.inActiveSectionStyle);
            }));
            
            var nodes4860 = $("<span>");
            iternode474.append(nodes4860);
            subs__.addSub((mobl.block)(tmp4133, mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
              var root6958 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              var nodes4861 = $("<span>");
              root6958.append(nodes4861);
              subs__.addSub(sectionControl.addEventListener('change', function() {
                renderControl1216();
              }));
              
              function renderControl1216() {
                subs__.addSub((sectionControl.get())(function(elements, callback) {
                  var root6959 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  callback(root6959); return subs__;
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes4861;
                  nodes4861 = node.contents();
                  oldNodes.replaceWith(nodes4861);
                }));
              }
              renderControl1216();
              callback(root6958); return subs__;
              
              return subs__;
            }, function(node) {
              var oldNodes = nodes4860;
              nodes4860 = node.contents();
              oldNodes.replaceWith(nodes4860);
            }));
            
            var oldNodes = iternode474;
            iternode474 = iternode474.contents();
            oldNodes.replaceWith(iternode474);
            
            
            
          }());
        }
        mobl.delayedUpdateScrollers();
        subs__.addSub(list474.addEventListener('change', function() { listSubs__.unsubscribe(); renderList474(true); }));
        subs__.addSub(sections.addEventListener('change', function() { listSubs__.unsubscribe(); renderList474(true); }));
      });
    };
    renderList474();
    
    callback(root6955); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes4857;
    nodes4857 = node.contents();
    oldNodes.replaceWith(nodes4857);
  }));
  callback(root6954); return subs__;
  
  return subs__;
};
ui.tableStyle = 'ui__tableStyle';
ui.tdStyle = 'ui__tdStyle';
ui.trStyle = 'ui__trStyle';
ui.trStyle = 'ui__trStyle';
ui.trStyle = 'ui__trStyle';
ui.tdStyle = 'ui__tdStyle';
ui.tdStyle = 'ui__tdStyle';
ui.tdStyle = 'ui__tdStyle';
ui.tdStyle = 'ui__tdStyle';
ui.tdStyle = 'ui__tdStyle';
ui.tdStyle = 'ui__tdStyle';
ui.tdStyle = 'ui__tdStyle';
ui.tdStyle = 'ui__tdStyle';

ui.table = function(style, elements, callback) {
  var root6960 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node3007 = $("<table>");
  
  var ref3445 = style;
  if(ref3445.get() !== null) {
    node3007.attr('class', ref3445.get());
    subs__.addSub(ref3445.addEventListener('change', function(_, ref, val) {
      node3007.attr('class', val);
    }));
    
  }
  subs__.addSub(ref3445.rebind());
  
  var nodes4862 = $("<span>");
  node3007.append(nodes4862);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl1217();
  }));
  
  function renderControl1217() {
    subs__.addSub((elements)(function(elements, callback) {
      var root6961 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root6961); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes4862;
      nodes4862 = node.contents();
      oldNodes.replaceWith(nodes4862);
    }));
  }
  renderControl1217();
  root6960.append(node3007);
  callback(root6960); return subs__;
  
  
  return subs__;
};

ui.row = function(style, elements, callback) {
  var root6962 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node3008 = $("<tr>");
  
  var ref3446 = style;
  if(ref3446.get() !== null) {
    node3008.attr('class', ref3446.get());
    subs__.addSub(ref3446.addEventListener('change', function(_, ref, val) {
      node3008.attr('class', val);
    }));
    
  }
  subs__.addSub(ref3446.rebind());
  
  var nodes4863 = $("<span>");
  node3008.append(nodes4863);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl1218();
  }));
  
  function renderControl1218() {
    subs__.addSub((elements)(function(elements, callback) {
      var root6963 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root6963); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes4863;
      nodes4863 = node.contents();
      oldNodes.replaceWith(nodes4863);
    }));
  }
  renderControl1218();
  root6962.append(node3008);
  callback(root6962); return subs__;
  
  
  return subs__;
};

ui.cell = function(width, style, elements, callback) {
  var root6964 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node3009 = $("<td>");
  
  var ref3447 = width;
  if(ref3447.get() !== null) {
    node3009.attr('width', ref3447.get());
    subs__.addSub(ref3447.addEventListener('change', function(_, ref, val) {
      node3009.attr('width', val);
    }));
    
  }
  subs__.addSub(ref3447.rebind());
  
  var ref3448 = style;
  if(ref3448.get() !== null) {
    node3009.attr('class', ref3448.get());
    subs__.addSub(ref3448.addEventListener('change', function(_, ref, val) {
      node3009.attr('class', val);
    }));
    
  }
  subs__.addSub(ref3448.rebind());
  
  var nodes4864 = $("<span>");
  node3009.append(nodes4864);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl1219();
  }));
  
  function renderControl1219() {
    subs__.addSub((elements)(function(elements, callback) {
      var root6965 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root6965); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes4864;
      nodes4864 = node.contents();
      oldNodes.replaceWith(nodes4864);
    }));
  }
  renderControl1219();
  root6964.append(node3009);
  callback(root6964); return subs__;
  
  
  return subs__;
};

ui.col = function(width, style, elements, callback) {
  var root6966 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node3010 = $("<td>");
  
  var ref3449 = width;
  if(ref3449.get() !== null) {
    node3010.attr('width', ref3449.get());
    subs__.addSub(ref3449.addEventListener('change', function(_, ref, val) {
      node3010.attr('width', val);
    }));
    
  }
  subs__.addSub(ref3449.rebind());
  
  var ref3450 = style;
  if(ref3450.get() !== null) {
    node3010.attr('class', ref3450.get());
    subs__.addSub(ref3450.addEventListener('change', function(_, ref, val) {
      node3010.attr('class', val);
    }));
    
  }
  subs__.addSub(ref3450.rebind());
  
  var nodes4865 = $("<span>");
  node3010.append(nodes4865);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl1220();
  }));
  
  function renderControl1220() {
    subs__.addSub((elements)(function(elements, callback) {
      var root6967 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root6967); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes4865;
      nodes4865 = node.contents();
      oldNodes.replaceWith(nodes4865);
    }));
  }
  renderControl1220();
  root6966.append(node3010);
  callback(root6966); return subs__;
  
  
  return subs__;
};

ui.headerCol = function(width, style, elements, callback) {
  var root6968 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node3011 = $("<td>");
  
  var ref3451 = width;
  if(ref3451.get() !== null) {
    node3011.attr('width', ref3451.get());
    subs__.addSub(ref3451.addEventListener('change', function(_, ref, val) {
      node3011.attr('width', val);
    }));
    
  }
  subs__.addSub(ref3451.rebind());
  
  var ref3452 = style;
  if(ref3452.get() !== null) {
    node3011.attr('class', ref3452.get());
    subs__.addSub(ref3452.addEventListener('change', function(_, ref, val) {
      node3011.attr('class', val);
    }));
    
  }
  subs__.addSub(ref3452.rebind());
  
  
  var node3012 = $("<strong>");
  
  var nodes4866 = $("<span>");
  node3012.append(nodes4866);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl1221();
  }));
  
  function renderControl1221() {
    subs__.addSub((elements)(function(elements, callback) {
      var root6969 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root6969); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes4866;
      nodes4866 = node.contents();
      oldNodes.replaceWith(nodes4866);
    }));
  }
  renderControl1221();
  node3011.append(node3012);
  root6968.append(node3011);
  callback(root6968); return subs__;
  
  
  
  return subs__;
};
(function(__ns) {
setTimeout(function() {
             scrollTo(0, -1);
           }, 250);
__ns.scrollUp = function() {
                  scrollTo(0, 0);
                };
__ns.setupScrollers = function() {
                        setTimeout(function() {
                                     var allScrollers = $("div.scroller");
                                     for(var i = 0; i < allScrollers.length; i++)
                                     {
                                       var scroller = allScrollers.eq(i);
                                       if(!scroller.data("scroller"))
                                       {
                                         scroller.data("scroller", new TouchScroll(scroller[0],{
                                                                                                 elastic: true
                                                                                               }));
                                       }
                                     }
                                   }, 250);
                      };
}(ui));ui.indexOf = function(it, items, callback) {
  var __this = this;
  var result__ = 1;
  var counter = result__;
  var result__ = items;
  items.list(function(coll2616) {
    coll2616 = coll2616.reverse();
    function processOne132() {
      var item;
      item = coll2616.pop();
      var result__ = item == it;
      if(result__) {
        var result__ = counter;
        if(callback && callback.apply) callback(result__);
        return;
        var result__ = counter + 1;
        counter = result__;
        
        if(coll2616.length > 0) processOne132(); else rest132();
        
      } else {
        {
          var result__ = counter + 1;
          counter = result__;
          
          if(coll2616.length > 0) processOne132(); else rest132();
          
        }
      }
    }
    function rest132() {
      var result__ = -1;
      if(callback && callback.apply) callback(result__);
      return;
      if(callback && callback.apply) callback(); return;
    }
    if(coll2616.length > 0) processOne132(); else rest132();
  });
  
};


ui.mMasterDetail = function(items, masterItem, detail, elements, callback) {
  var root6970 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  items.get().one(function(result__) {
    var tmp4163 = result__;
    var current = mobl.ref(result__);
    
    var node3013 = $("<div>");
    node3013.attr('width', "100%");
    
    
    var node3014 = $("<div>");
    node3014.attr('style', "float:left; width:33%; position:relative; border-right: solid 1px #cccccc;");
    
    var nodes4868 = $("<span>");
    node3014.append(nodes4868);
    subs__.addSub((ui.group)(function(_, callback) {
      var root6972 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      
      var node3019 = mobl.loadingSpan();
      root6972.append(node3019);
      var list475;
      var listSubs__ = new mobl.CompSubscription();
      subs__.addSub(listSubs__);
      var renderList475 = function() {
        var subs__ = listSubs__;
        list475 = items.get();
        list475.list(function(results475) {
          node3019.empty();
          for(var i592 = 0; i592 < results475.length; i592++) {
            (function() {
              var iternode475 = $("<span>");
              node3019.append(iternode475);
              var it;
              it = mobl.ref(mobl.ref(results475), i592);
              var result__ = it.get() == current.get();
              var tmp4137 = mobl.ref(result__);
              subs__.addSub(it.addEventListener('change', function() {
                tmp4137.set(it.get() == current.get());
              }));
              subs__.addSub(current.addEventListener('change', function() {
                tmp4137.set(it.get() == current.get());
              }));
              
              
              var node3020 = $("<span>");
              iternode475.append(node3020);
              var condSubs678 = new mobl.CompSubscription();
              subs__.addSub(condSubs678);
              var oldValue678;
              var renderCond678 = function() {
                var value2328 = tmp4137.get();
                if(oldValue678 === value2328) return;
                oldValue678 = value2328;
                var subs__ = condSubs678;
                subs__.unsubscribe();
                node3020.empty();
                if(value2328) {
                  var nodes4869 = $("<span>");
                  node3020.append(nodes4869);
                  subs__.addSub((ui.item)(mobl.ref(ui.selectedItemStyle), mobl.ref(ui.itemPushedStyle), mobl.ref(null), mobl.ref(null), mobl.ref(false), function(_, callback) {
                    var root6973 = $("<span>");
                    var subs__ = new mobl.CompSubscription();
                    ui.indexOf(it.get(), items.get(), function(result__) {
                      var tmp4166 = result__;
                      var tmp4134 = mobl.ref(result__);
                      subs__.addSub(it.addEventListener('change', function() {
                        ui.indexOf(it.get(), items.get(), function(result__) {
                          var tmp4164 = result__;
                          var result__ = tmp4164;
                          tmp4134.set(result__);
                          
                        });
                      }));
                      subs__.addSub(items.addEventListener('change', function() {
                        ui.indexOf(it.get(), items.get(), function(result__) {
                          var tmp4165 = result__;
                          var result__ = tmp4165;
                          tmp4134.set(result__);
                          
                        });
                      }));
                      
                      var nodes4870 = $("<span>");
                      root6973.append(nodes4870);
                      subs__.addSub(masterItem.addEventListener('change', function() {
                        renderControl1223();
                      }));
                      
                      function renderControl1223() {
                        subs__.addSub((masterItem.get())(it, tmp4134, function(elements, callback) {
                          var root6974 = $("<span>");
                          var subs__ = new mobl.CompSubscription();
                          callback(root6974); return subs__;
                          return subs__;
                        }, function(node) {
                          var oldNodes = nodes4870;
                          nodes4870 = node.contents();
                          oldNodes.replaceWith(nodes4870);
                        }));
                      }
                      renderControl1223();
                      callback(root6973); return subs__;
                      
                    });
                    return subs__;
                  }, function(node) {
                    var oldNodes = nodes4869;
                    nodes4869 = node.contents();
                    oldNodes.replaceWith(nodes4869);
                  }));
                  
                  
                } else {
                  var result__ = function(event, callback) {
                                   if(event && event.stopPropagation) event.stopPropagation();
                                   var result__ = it.get();
                                   current.set(result__);
                                   var result__ = ui.scrollUp();
                                   if(callback && callback.apply) callback(); return;
                                 };
                  var tmp4136 = mobl.ref(result__);
                  
                  var nodes4871 = $("<span>");
                  node3020.append(nodes4871);
                  subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp4136, mobl.ref(null), mobl.ref(true), function(_, callback) {
                    var root6975 = $("<span>");
                    var subs__ = new mobl.CompSubscription();
                    ui.indexOf(it.get(), items.get(), function(result__) {
                      var tmp4169 = result__;
                      var tmp4135 = mobl.ref(result__);
                      subs__.addSub(it.addEventListener('change', function() {
                        ui.indexOf(it.get(), items.get(), function(result__) {
                          var tmp4167 = result__;
                          var result__ = tmp4167;
                          tmp4135.set(result__);
                          
                        });
                      }));
                      subs__.addSub(items.addEventListener('change', function() {
                        ui.indexOf(it.get(), items.get(), function(result__) {
                          var tmp4168 = result__;
                          var result__ = tmp4168;
                          tmp4135.set(result__);
                          
                        });
                      }));
                      
                      var nodes4872 = $("<span>");
                      root6975.append(nodes4872);
                      subs__.addSub(masterItem.addEventListener('change', function() {
                        renderControl1224();
                      }));
                      
                      function renderControl1224() {
                        subs__.addSub((masterItem.get())(it, tmp4135, function(elements, callback) {
                          var root6976 = $("<span>");
                          var subs__ = new mobl.CompSubscription();
                          callback(root6976); return subs__;
                          return subs__;
                        }, function(node) {
                          var oldNodes = nodes4872;
                          nodes4872 = node.contents();
                          oldNodes.replaceWith(nodes4872);
                        }));
                      }
                      renderControl1224();
                      callback(root6975); return subs__;
                      
                    });
                    return subs__;
                  }, function(node) {
                    var oldNodes = nodes4871;
                    nodes4871 = node.contents();
                    oldNodes.replaceWith(nodes4871);
                  }));
                  
                  
                }
              };
              renderCond678();
              subs__.addSub(tmp4137.addEventListener('change', function() {
                renderCond678();
              }));
              
              
              var oldNodes = iternode475;
              iternode475 = iternode475.contents();
              oldNodes.replaceWith(iternode475);
              
              
            }());
          }
          mobl.delayedUpdateScrollers();
          subs__.addSub(list475.addEventListener('change', function() { listSubs__.unsubscribe(); renderList475(true); }));
          subs__.addSub(items.addEventListener('change', function() { listSubs__.unsubscribe(); renderList475(true); }));
        });
      };
      renderList475();
      
      callback(root6972); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes4868;
      nodes4868 = node.contents();
      oldNodes.replaceWith(nodes4868);
    }));
    node3013.append(node3014);
    
    var node3015 = $("<div>");
    node3015.attr('style', "float:left; width:66.5%; position:relative; margin-left: 0.5%;");
    
    
    var node3016 = $("<span>");
    node3015.append(node3016);
    var condSubs677 = new mobl.CompSubscription();
    subs__.addSub(condSubs677);
    var oldValue677;
    var renderCond677 = function() {
      var value2327 = current.get();
      if(oldValue677 === value2327) return;
      oldValue677 = value2327;
      var subs__ = condSubs677;
      subs__.unsubscribe();
      node3016.empty();
      if(value2327) {
        var nodes4867 = $("<span>");
        node3016.append(nodes4867);
        subs__.addSub(detail.addEventListener('change', function() {
          renderControl1222();
        }));
        
        function renderControl1222() {
          subs__.addSub((detail.get())(current, function(elements, callback) {
            var root6971 = $("<span>");
            var subs__ = new mobl.CompSubscription();
            callback(root6971); return subs__;
            return subs__;
          }, function(node) {
            var oldNodes = nodes4867;
            nodes4867 = node.contents();
            oldNodes.replaceWith(nodes4867);
          }));
        }
        renderControl1222();
        
        
      } else {
        
        var node3017 = $("<div>");
        node3017.attr('style', "padding:20px");
        
        
        var node3018 = $("<h2>");
        
        
        node3018.append("Add more questions.");
        node3017.append(node3018);
        node3016.append(node3017);
        
        
        
      }
    };
    renderCond677();
    subs__.addSub(current.addEventListener('change', function() {
      renderCond677();
    }));
    
    node3013.append(node3015);
    root6970.append(node3013);
    callback(root6970); return subs__;
    
    
    
    
    
  });
  return subs__;
};
ui.activeTabButtonStyle = 'ui__activeTabButtonStyle';
ui.inActiveTabButtonStyle = 'ui__inActiveTabButtonStyle';
ui.section = 'ui__section';
ui.logoStyle = 'ui__logoStyle';
