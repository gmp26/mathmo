mobl.provides('ui');
mobl.provides('mobl.ui');
mobl.provides('mobl.ui.stylemixin');
mobl.provides('mathJAX');
mobl.provides('mobl');
mobl.provides('ui');
ui.loadingStyle = 'ui__loadingStyle';

ui.whenLoaded = function(value, style, loadingMessage, elements, callback) {
  var root8778 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node2648 = $("<span>");
  root8778.append(node2648);
  var condSubs676 = new mobl.CompSubscription();
  subs__.addSub(condSubs676);
  var oldValue676;
  var renderCond676 = function() {
    var value1520 = value.get();
    if(oldValue676 === value1520) return;
    oldValue676 = value1520;
    var subs__ = condSubs676;
    subs__.unsubscribe();
    node2648.empty();
    if(value1520) {
      var nodes7005 = $("<span>");
      node2648.append(nodes7005);
      subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
        renderControl1077();
      }));
      
      function renderControl1077() {
        subs__.addSub((elements)(function(elements, callback) {
          var root8779 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root8779); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes7005;
          nodes7005 = node.contents();
          oldNodes.replaceWith(nodes7005);
        }));
      }
      renderControl1077();
      
      
    } else {
      var nodes7006 = $("<span>");
      node2648.append(nodes7006);
      subs__.addSub((mobl.block)(style, mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root8780 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        var nodes7007 = $("<span>");
        root8780.append(nodes7007);
        subs__.addSub((mobl.label)(loadingMessage, mobl.ref(null), mobl.ref(null), function(_, callback) {
          var root8781 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root8781); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes7007;
          nodes7007 = node.contents();
          oldNodes.replaceWith(nodes7007);
        }));
        var nodes7008 = $("<span>");
        root8780.append(nodes7008);
        subs__.addSub((ui.image)(mobl.ref("data:image/gif;base64,R0lGODlhIAAgAOf2AAAAAAEBAQICAgMDAwQEBAUFBQYGBgcHBwgICAkJCQoKCgsLCwwMDA0NDQ4ODg8PDxAQEBERERISEhMTExQUFBUVFRYWFhcXFxgYGBkZGRoaGhsbGxwcHB0dHR4eHh8fHyAgICEhISIiIiMjIyQkJCUlJSYmJicnJygoKCkpKSoqKisrKywsLC0tLS4uLi8vLzAwMDExMTIyMjMzMzQ0NDU1NTY2Njc3Nzg4ODk5OTo6Ojs7Ozw8PD09PT4+Pj8/P0BAQEFBQUJCQkNDQ0REREVFRUZGRkdHR0hISElJSUpKSktLS0xMTE1NTU5OTk9PT1BQUFFRUVJSUlNTU1RUVFVVVVZWVldXV1hYWFlZWVpaWltbW1xcXF1dXV5eXl9fX2BgYGFhYWJiYmNjY2RkZGVlZWZmZmdnZ2hoaGlpaWpqamtra2xsbG1tbW5ubm9vb3BwcHFxcXJycnNzc3R0dHV1dXZ2dnd3d3h4eHl5eXp6ent7e3x8fH19fX5+fn9/f4CAgIGBgYKCgoODg4SEhIWFhYaGhoeHh4iIiImJiYqKiouLi4yMjI2NjY6Ojo+Pj5CQkJGRkZKSkpOTk5SUlJWVlZaWlpeXl5iYmJmZmZqampubm5ycnJ2dnZ6enp+fn6CgoKGhoaKioqOjo6SkpKWlpaampqenp6ioqKmpqaqqqqurq6ysrK2tra6urq+vr7CwsLGxsbKysrOzs7S0tLW1tba2tre3t7i4uLm5ubq6uru7u7y8vL29vb6+vr+/v8DAwMHBwcLCwsPDw8TExMXFxcbGxsfHx8jIyMnJycrKysvLy8zMzM3Nzc7Ozs/Pz9DQ0NHR0dLS0tPT09TU1NXV1dbW1tfX19jY2NnZ2dra2tvb29zc3N3d3d7e3t/f3+Dg4OHh4eLi4uPj4+Tk5OXl5ebm5ufn5+jo6Onp6erq6uvr6+zs7O3t7e7u7u/v7/Dw8PHx8fLy8vPz8/T09PX19f///////////////////////////////////////yH/C05FVFNDQVBFMi4wAwEAAAAh+QQFBQD/ACwAAAAAIAAgAAAI/gABCBxIsKDBgwgTKlzIsKHDhxAjSiSoYc+bCBMFbqCSY4DAApTgyQOUcUGkZcXAeHxQLB49SgI+xnSYAdYxZsjCDHgQLN48NAEEaFAh4oDDA3+EIXO2rAiAN96owQBQ4YVVCg87XBKWLNofAAROlAgAwIPVFxAgmrAkzJgWgxZcvADhESKGKk2MFhTgIAKBhwweNCjAMICBvwoPHMkDCNCYBwoLhFhxIm3CFYEIGUKkiIfCC2dLzDyI4k6e03hqKLQQerTBAkHCgOFCREHkDydGQFYoYAGDBK4RBiX78ACFBsQJBoAAIThDAyVguMBaEIPcEIgbBjBrtQOAAAoSTAgEcXZ3QwEnrLqQAMD6CgdUz1J3yOFFCwwBBqR/ESJoBhUk6OXQABAwQBYBKVhFAnEF1JURAB9YhcGDByHgwQUOUqjhhhx26KGGAQEAIfkEBQUA/wAsBQADABQAGAAACMwA/wkcSDDABg8BCCpc+I+KMmhKGEpcAAsdu1MFJGZwUmOgg14WgS1gqIDQLltZBoJsB0wBwwugbPXSpeXfAlro3LXKONCAQANzYt361QvIPzXZvHlROGGghkSxcgm7IzBGjQESBYpAFMsWlawMLTQx4hOsQAUNFhAwOzBAjTJs2lRhwPYfhDBs3MCRI6NuAilfAn9RUReACCFIisxAUBgAAQQGEtZVaKDp5IEkXjQGAIDDZYIlPg+84EL0PwEOTC/0ILDCZwMZKAhYGBAAIfkEBQUA/wAsBQADABIAFgAACMsA/wkcSBBDnDMQCCokGOBPt295FkpsEKubOFsKFlowAkOAwAi4uo3zxUBhgjupTEXx6GCWyFwCCTgQSOERqVWqpghQsKobuVP/GADSIrCAmU6lWrXa8e8MtWtb/r3pVGPghTyeTsFq8+9ADh3/Aqj5odADHk+lmiwMIXECEbISCRJQkCBAXIIAMBSxYgVIxrv/BuyQQsVKFhOAA9MgwpjIh8T/IKx40SJEAcj/BBQggLlz3Mue/2UIHWBE6H8UWEAGwJq1gr8ERRAMCAAh+QQFBQD/ACwFAAMAFAAWAAAIzgD/CRxI8IKaMA8IKlz47w60aXMYSmRgCpq1VhL/GUhBYiAEVtCu1VrAcEAVSJKSCGyAKiSsBAI3OBho4M2jS5iWCPwEDdsngYSswfogMMAURJA0bbLxLwwyZlf+tXFHLx2QgRTOIJLUSYxGGzcEbqL3jY4EghnMIIpEZOEcaGUYQtBxo8BCBCIUCjBwICPDBC14/IDR169AACBs4NDRI4Phwx1gSIYx4bFABCBUpPBAwHJRz6BDh8bAsLBCAKgBeGCowjCEFSxE/zuAwHJAACH5BAUFAP8ALAYAAwATABgAAAjSAP8JHDiwwhcpDggqXNgGWDE2CyP+W5AJGDJRCRQC2KiAwUYADjwFQ6Zq4UYOZuT4EMhAU7BkpgZqmPBvoxA8gQYF+ZdAUrBllggs+OOsVomNM+DkIYToxb8suX5J+ZemHLt3ZwQ2oBJnDyIrAmXMEGiJHbx3UwZSmNJ1x8I36uKRgkCwwQsXBBYqQHLFgsAABAh8HEwYgMACHlKo+JBXIkEKLyK/iOD4seQXEioPLPBBYIcBmkOLHk1a4oXSnlH/Y4BihWYRCgsY0BxAdejTEQMCACH5BAUFAP8ALAYAAwAVABYAAAjMAP8JHDhwgpUlCwgqXChwzCtaWhhK/KdA0atblhAwBMARQICBDRy9wtVJgUAFLTgQJDBjyYuPCxa9yqVJYwZI1X7JGOihC5o2NwIgGPRqFyOBj76NMxdnYAcrYNjIQfEPSipYTP6d2bb0HJSBCX5cEQMnyb8CLl4IOABKnLl0nyAQfNDjypgYC+eUSwcKw8IEI0YMWAjhypcKAzlO/PvAwD8BGFCg6LD4nwEbNlA4kFtZ4oPOEgWoBD1QRAPSqFOrXs1wA2uKJ14TSB0QACH5BAUFAP8ALAYAAwAWABYAAAjdAP8JHDiwAAsWAggqBMCwYcMlljYVUUiRYoI8m0oFKlDxn0OHC/pwMvUogcAERqI8ENjwwgsOJ/NwOsXowL8LiJxZo0NwgQ8nVFj8OzCHE6o/Ag1Ju7bNFIKBDXIUiaIFxD8jlj5NDOOMabczBAmY2HHEig6BKVb8M2DJ2rZvmFYSTIBiRxITFNlo+5bpQkUDFzIkVPhgyhYKHRMTVPDB778AihV6SMXtGJJ/DFxEHuiGnDZqmxIs0Lz534klQnioeJwhRYrSAxd4BECAAOzbuHPr3r1ZhWPdBRjCDggAIfkEBQUA/wAsBgADABYAFQAACNQAAQgcSFDBAYIIAfxbyJDhCDZoRDScSHEhAS6GIHFJOLDivwNnDEXSc2AhgiBLHEw0YCGCSTOGJAVC8K+CH2DI2jQcQGJGjg//DIQxRIlOAQV8iCVz1qmkyRYwbPzA8C+Hn0U2/mn5hcwZtDANBYh4EUOHin8COoRYuKirNEgqJ5ogq4FimWbTIlXwWEFCAIoOnliZ4LFwwwQeLDBUbJhhh1HVghn5l6BFY4Z13sGDx2tB5csL6dAbfUsBaIYcENGapeP0xAM0XcueTbu27X8hDDAMCAAh+QQFBQD/ACwGAAMAFgAVAAAIywABCBxIsKBBAP8SKlS4AEcOBgsjSkwo4IebPEUmakxoQIobPWgMKORRpEHEAQ0WCDwwxQ2fNwf+TZgDCxeZhQE8uGBRAeETN37IEEgQZ1YuX5EWFlDx4kWLB/9aoLnj4l8UV7h8CdMisekLDv8CYABb4M8tX8MMmZzogoLELr2IHXI7kQJUiQ2SQJGwsa/CDhUSAgjsN+EGTsx6MfmHgEXhhHDMnTtXS0Hjx//gsNtsK6EFFI83eDImawlmpXdPq17NurXrfx8KKAwIACH5BAUFAP8ALAYABAAXABMAAAjSAP8JHDhQAIYMAQgq/AegoUOHJaJoUbGwokICO6iEiTJA4IEWPhgsDKAggcACPKiM2WLgXwQznExtGegQw78VAgngoFJmygAEZD6dakWoZUETCkNAAYMUySZTrWJNodnww0IJFwIQiFOq1aw9Ii3+k7BwCitafMiKtchgiJIIa+P+Q8CBRAWjcgeGmBQsGa9HEg7gzNtnGzdu3bQZMTBY7h1xkMVxOwKAwom8HDD98uVLDgKBHfP+c0A6tOgdUhyIXijk0SYKqxXGEPMi9sIKBAMCACH5BAUFAP8ALAYABAAYABUAAAjRAAEIHEhQAQKCCAf+W8iQoYUZPDA0nEix4YATOIzsELDQQIkQHCsmMLBwQAocSIwQ+OcAC6JENipaaKGiJEYlQAQYqKJIUqYwBCsutGDjiId/PQxFyuQpidCGAhlEWBgGUiZQbhY8fZoEUyg4U7cKVcBjyAOxaP9pEBECQtqJJRzR4tXL04u3CwPwaebsGTRokgoQQPHWj7XDhyWtnPD2Q6RatWg5IoyXYYPLBSoniBKl8kQx7tqV8szwhq5675yQXnhkWD0zqxcaKdQhdkmKAQEAIfkEBQUA/wAsBgAEABgAFQAACNgA/wkcSLAAAYIIEyZ8kOIEA4UQCQoo8QJGiQACBSQwAKCjR48FCJ6o2ELAvwVBylB5mDBCCoQvYrD4V8DInD2CXiQMMCIhixcU/sl4o2cQIRMRBWoQqGABgAFQ8gxS5CVkUggJewhiJMZB0ogJaOho8LXsAQwfPjwYOKGsQBGCSrFyJWnFPwIo3P6b4+sXMGDBDh3U+88OMmTHDiMSiNVtB0SrVKUqhJQwQgaD9SJw4oSsZYEB8pwr96nt5wGk4rU7t+SzQDfw4rkT4/rkIGudagsksOFAwoAAIfkEBQUA/wAsBwAEABYAFQAACMIA/wkcODBAAIIIExJkICLEAYUQBQYI8eLFBgAYAQTIiDFixRICDaz4geIgQQcJK44IQIBGFjFhIiAEMRDlPxYsIPwjUSXMGjUTEHYYmEEgAgX/AuwAs2bOEwIRFcZQU2cKg6gKD6RgsQBrVAMVOGxo8E+n138e6lDa1InQibMC0bBq5eoVrD1w/7G5xZdvn7wb/Hjq1GnPiLz/CDBYjFiJEsQD63TTdkkC5E/oyHFDAnkNusxeIP/78wwVSNEaEiAMCAAh+QQFBQD/ACwIAAQAFgAXAAAIzQD/CRw4EIDBgwgPEhy4IMSHhRAj/gNRMGFCiQsHYCgB4SJGgQJC8DiSQwBBAB4+XtBhBMqSAws5SDRYoggULTkCLDxQAiOIJ1yEKPgYccCHEQmIfiwgAQMGBEoJajATCFEiNyKiCuSCKdMmTpzcDNAaplQpUmbhjI2KYc6jR47ePNQqcMGCoVohXJnigO5AOtWeObKgNUKAA6i6YZvGiEHUR0z+ufHWLRu0IVERrSrw7xG4yl2iltn8T8KhZ7ZWRKVSZmCBEhi0ZsCLMSAAIfkEBQUA/wAsCQAEABUAFwAACNgAAQgcSLCgwX8IEx7woKFAwocQIX5AmCGiRQIWEQp4QAHjwwYnUmT818EFjA8BRkas8AJGDRcCHmpQ6cGlDxEFDai0UAMIDIcqIQqokEFn0IwEHkxoYPToPwtV2Mh5s6WC039OBA0qZOiQEgBOqUAaO7YJ2KMVzPzx4yfMhKv/BiSYO8ApBStMGsBF+AZZsEEUggqYUeLfgn/QlBET5EClCGXXlPxLMw3aMmJeVLpIJs/UPwWHqEFjZunAyBrU5CWsEGmaMzSas8FjkxACkyV6R0KYoyb3yIAAIfkEBQUA/wAsCQAFABQAFgAACMsA/wkcaADDBQIDEypcyHDhgIYDGzQQkHCBCRQQ/7lwcQGARwAcMv57QXJEgIEZRJJ8UUGkQpIgHrocCCECwpkKByx4kMDjTAdArGyxIoOiwI9IP/JIs6aNmzMRZv7IQzXPmwkzIVxxA8eMjJM4ESw44DOjBCdFGOAUeAYXrDsSMiKwQeKfgk7BdNGy06BhgD3mnh35J6ZYsF20rDSEoAxeuk//EvwxFoyXIgMML0iDp46UwAmIiv0C03DAJsdoBj44YkRtQw90zogMCAAh+QQFBQD/ACwIAAUAFQAWAAAIswD/CRz4rwDBgwgPekjIsKHAAAoUAJg40eHADf9YRLAoUMWDgx8oAmB44ADHkyhTohSAQIEBlQha9BCyw8LIkyqeRJlCZcgAlDLACAVzhECJkw2QZMHSBAMAASsPGPh5MoKRHgpU/utiipMaCBxpiPiXABIsVKHSLHB4p1uxIf+20IKVKlQTh8TOfbsksE4tWKr4NLTA7Bw4TgIl9Jnl6opDS+e8jRnoAAeQtQ07vBHDwGFAACH5BAUFAP8ALAkABQAUABgAAAjRAP8JHCiwwgCCCP8BWMiQQ8KHEBEmMBAxYgsVDipGdKixY0cXHhNmDJkwgAEDAkgaCLGChQgEITnQqHEDxwcAHkcU2VmEBM6OCWwQGSIjAcl/BQqk7OiABw2jD2XoYMhwSqRDW0YKpCBwTiOBOmAMQCCI06RFWxQgvAKtyz851IYh+SdFFKdKjYIQdNFJD4IHvLZJSyQAgZpRnCydOSgQQYaDH55xm/bvwD8IcUBtagJRQzJu1DhZ/sdARg61Dx/Y4latz1Eqw2jhOBqAwwWNAQEAIfkEBQUA/wAsCQAFABMAGAAACMwA/wkc+O8CBYIIExK8oLChwgMOHbJAoSDivxQJNVgsYLGjx48fCQQAKTDFBwIeM7xY+QJCShgwXzzwaIBEixUfBnwMMGDAyIEjECRM8EIFRIIl1jxDk9BIHjhKFgy0cEecPEn/DtxoIeCAHEN96CwR+k/LuXnptPxjc6yWkH9IHBnyY8eGQBzIqtn550CWs2F+snZxdOgPEwAACnIQiMGXs2KQDPD9osiPDIUXejkzNklyVhUjBCikgMvZMUUoOw44tPkKSA1jrkhtGBAAIfkEBQUA/wAsCQAFABMAGAAACMMA/wkc+K/CBIIIEypcyHCgAQINFa4wgSCiQgsWE0LIyLGjRwAAPP7TIECkCwcZLbxY6aJBxgIfTpioEKCjAAEg/4UgU0ThARIfChD0sGueOTIJc4SxgqOiQDXy3qlrJHBGin8EtLwhs8UGxH+K3q0DZ+VfGVyldvzzceeNGS4cBNoI1kyOQFO/ZMkJYOBJWzMhBlrQINBCrF+0BAlUoAQNEgUXD9cyNHBAgwEgQxKUsOqXLT8DOPb5VetJRwxcoEBeGBAAIfkEBQUA/wAsCQAHABMAFgAACLcA/wkcSPAfAAAFBhRcWFCDChIHGEqcSLGixYsYM2q8EEDjPxYRNa4IibGEBAAeB4IQM4TkwAEYKCgc2KHWum5gFqoosoNEgYFz1JkDZ+ifARck/gUYUiXJjxEd/x0yF65alH9dTk2i8S/GlypLfCgQSCPXMDYHGGRq9YnMvwJAvFQhkmBghQwCKYxqFWrOTwQugoA4iJIgBVGtRtkpQFgA4cIDI3RqRQoORgFzEh/JaGEKkroSAwIAIfkEBQUA/wAsBwAHABUAFgAACMwA/wkcSLDgPwEGEyYUYUChw4EQHj58ILGixYsYMxYYWAEAxgsDVRhg0UOIE5AWRdoYdStRA4sjBjaosNFigIIfzERRYFDAhAkJR7gKZ02MQQ4wXoQoiGEUOG3T/vwrgOJDgAAwcsR4sQGA139ivmmrlswKgCmU/rD4R4KIVhQDBv7ZZs1ZnX8LFGVSVOXfgBdDcpRAKFAGrF9sXkqYpImRGAL/DIQIsaAghQ6Q/0mIpMlRGQJeQ4dO+KCRpkdgMv4Lc7qHaghFdiBwGBAAIfkEBQUA/wAsBgAOABYADwAACLwA/1lYkeKfwYMIE/6bIFCVLUqAVCic+A8FAQzO6NGLx4WiwhMD/lHx1WwSBI8JHyCkgLLlvw5gmrhUGKIUtWRbFGJ48WKihU3TmhWrY1CEhn8ARPB8kQFhADnSmhnT9eRfkj9pRvy7sLSEgIMKUDU79kuMAQV5CMkh8k9ABxcvOACY+2+AnmPB4ij4BwEQoTpPQgp4MIFASiNEGBh84IfQnSghZxpMYIcQHiUBJB9EEkiOCc0HDZj4kJliQAAh+QQFBQD/ACwGAAcAFgAWAAAIzAD/CRxIsOA/AgYHkkg4EAMKhhAjSpxIsaLFgRUsDLj4L0AVZtEyYagYQeCyeCivVDwx4AIyduzUaalYQsC/KLeKOeIokMEEngQ5aEGSwGAACBBsGvywyViuKQldMKwQiVgvWmoOYvj5LwRENcN62UJ15F+PM1E0/LMwUEQAgpx63XKVpQACM2uyyADwj8O/FhUICohzC5aZohHesNmyQ6kDBm8JOgDiY4FAB2vYdOmhtOIBLmy+wABAurTp06U/TBFSkiFq0wUEvC4dEAAh+QQFBQD/ACwGAA0AFgAQAAAIsAD//aNQQaDBgwgRSjG2rNKFhBBPQPhXgRi6dOmoQIRYQoCFX+LEgbuysWQTV7wOPSjJUgLLl/8yTAmCACbCDo5qoVrCkgDCCYVosQrl5d8ACQwAADhoAWEYWaxGVfLxL0aTGysPdlC6NIEjVqQ0Ofl3IEqUHiAMtmAx8aAZUpuw1HSQJQoQEwEELlDAdem/BjlqGBCoYIoUIXhtGgywQ8oQDYoPMlDhYUDJvpgzaw4IACH5BAUFAP8ALAUACQAWABMAAAjDAP8J/FekxsCDCBMK3CPJoMKHA0PkgjQDokUQYjRYRGhgwoV/BzYivPBIGLJilyyIFOjACzdu3bx9C7NSoBZrOK1V61JzBIZFuHLJIkRhpYgF/wpYwDCBQE2FF5boCPn0n4ZAoigFqRoBTyhMjKD8E8AgAUQAaK98wuQIEI1/I2iscIBQ40AEfzBBKjSEQIEdNmCECCCQBQqkB7VAMrQkJIIegUsIDHCgQMIFMlpYToojsIiqAkPQaAEB9NgHDNCqXh0QACH5BAUFAP8ALAQABwAYABUAAAjaAP8JHNigwMCDCBMOxIHrjMKHCRvRc4YEosV/f+LR+8Th4kMQu+J9m+Hx4YczTAyWHCjBAoWVCHdgutVrF6QLKxv8U/Dp2TNo0aS5WTkiQIJLyJImDbNSRIB/NS6tYlVKD86SCgYqqGAhAkyIFITMMPB14IU4jfzYKPvvQZpFguoE+Rcgq0AQLBUyUSToDhoV/zC4GFhhYIaEBMoIytPGxoABKF68MLziRIKBADID8FGHTQ+DBVRIJvEvM9mHBDxwGCBwwAnJHzTLnk07s4UVKBhArD3bgMqHAQEAIfkEBQUA/wAsBAAHABUAFQAACLYA/wkc+MBCgIEIEya08c8ZmwEDFEoUiIgdPHRIJk7Uk65dPEAaJX6glY7clJASPYxJgnJggQgVJBhoOfBGo1WxXh2yQDPBpF/AggkjZoYmgkW3buFKqoXmvxiJNnGq9KaC038JJlB4cFVhBBwqCnSdAMbOGRVXE1yhk2YLjJAREMKQk8aLkw0hLwDYC+BFGjBUVgj4d4ImAyJMUhBoyXcvgQMHBZoQqKHrPwgmSiSw/G/AYIUBAQAh+QQFBQD/ACwEAAcAFwAVAAAIswD/CRwoocLAgwgTDsx1LI3ChwcFiTsHzghEiHS8jUPH5+LDDqu8bYPi8aMXiyUPQpgQISVCGYE6jRLFR4LLBQgKuXIFK5YsKi5FHOhTqmjRKC4FrtCjSBEhMTaT/kMAIYKDAVITOmgRQkDWfxCadGGyIeuAIVueAAFx8UHCC1WeDKER9SGFhBSYFMHBIcBDFSQOJBQQYsUFrA8LIP4HoLHjAI4FjPh6kMEIDwYo/wvg92FAACH5BAUFAP8ALAQABQAVABcAAAjRAP8JHEjw34YpFAQUXJihQwCBAR7dirGwIJBdxMgM+PcgWS0ZFQcGMGRNWzUz/yAgWxWSoJxo1rhdQ/JPDqeWAzeQinbNm6F/BDrgHJhiVLRpYIYu3MBlygGlQB1EeFAAqsAWdBpJkhQnAtQDdjRt4uTp0xKoBtpAWrv2iNUSau7ciUMFgtV/Bxw8WKDwLsEFHyo8vKsgh5AZFO4KaPGDBgyhVhfkcOzCb4EVMFxgwPmhAIDPnxlkoPCQQIqKD0GrBh0ghF+CCDxALri6tm3QAQEAIfkEAQUA/wAsBAAFABUAFgAACMYA/wkcSPCfhjVZGBQsaIFKjgEDF8V7N2fhwAOBlhUDM3BYPHqKLAqUgOpYs2Rh/j0IFm9eGZH/BOQRhuzZsiL/3nh7BgPmvw6XhCWL9kfgCQ4BfP4zYUmYMS1KF2Ko0iTqQAYPHFgdWOHLHkCAxjywGiAKoUKHECkKQtZJnrdveWylwCRMGC5EGmyNuYBBgr0LD1DQC9hACRguAAfwAOPFC8ADTjiOCoGggBAvWkQlUNAABYVRAYgeTRrAB4EYAAvkcAFiwYAAOw=="), mobl.ref(null), mobl.ref(null), mobl.ref(null), mobl.ref(null), mobl.ref("middle"), mobl.ref(null), function(_, callback) {
          var root8782 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root8782); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes7008;
          nodes7008 = node.contents();
          oldNodes.replaceWith(nodes7008);
        }));
        callback(root8780); return subs__;
        
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes7006;
        nodes7006 = node.contents();
        oldNodes.replaceWith(nodes7006);
      }));
      
      
    }
  };
  renderCond676();
  subs__.addSub(value.addEventListener('change', function() {
    renderCond676();
  }));
  
  callback(root8778); return subs__;
  
  return subs__;
};
ui.headerStyle = 'ui__headerStyle';
ui.headerContainerStyle = 'ui__headerContainerStyle';
ui.headerTextStyle = 'ui__headerTextStyle';

ui.header = function(text, fixedPosition, onclick, elements, callback) {
  var root8783 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node2649 = $("<div>");
  
  var ref2456 = mobl.ref(ui.headerStyle);
  if(ref2456.get() !== null) {
    node2649.attr('class', ref2456.get());
    subs__.addSub(ref2456.addEventListener('change', function(_, ref, val) {
      node2649.attr('class', val);
    }));
    
  }
  subs__.addSub(ref2456.rebind());
  
  var val1245 = onclick.get();
  if(val1245 !== null) {
    subs__.addSub(mobl.domBind(node2649, 'tap', val1245));
  }
  
  var ref2457 = mobl.ref(fixedPosition.get() ? "position:fixed;" : null);
  if(ref2457.get() !== null) {
    node2649.attr('style', ref2457.get());
    subs__.addSub(ref2457.addEventListener('change', function(_, ref, val) {
      node2649.attr('style', val);
    }));
    subs__.addSub(fixedPosition.addEventListener('change', function() {
      node2649.attr('style', fixedPosition.get() ? "position:fixed;" : null);
    }));
    
  }
  subs__.addSub(ref2457.rebind());
  
  
  var node2652 = $("<div>");
  
  var ref2455 = mobl.ref(ui.headerContainerStyle);
  if(ref2455.get() !== null) {
    node2652.attr('class', ref2455.get());
    subs__.addSub(ref2455.addEventListener('change', function(_, ref, val) {
      node2652.attr('class', val);
    }));
    
  }
  subs__.addSub(ref2455.rebind());
  
  
  var node2653 = $("<div>");
  
  var ref2453 = text;
  node2653.text(""+ref2453.get());
  var ignore485 = false;
  subs__.addSub(ref2453.addEventListener('change', function(_, ref, val) {
    if(ignore485) return;
    node2653.text(""+val);
  }));
  subs__.addSub(ref2453.rebind());
  
  
  var ref2454 = mobl.ref(ui.headerTextStyle);
  if(ref2454.get() !== null) {
    node2653.attr('class', ref2454.get());
    subs__.addSub(ref2454.addEventListener('change', function(_, ref, val) {
      node2653.attr('class', val);
    }));
    
  }
  subs__.addSub(ref2454.rebind());
  
  node2652.append(node2653);
  node2649.append(node2652);
  var nodes7009 = $("<span>");
  node2649.append(nodes7009);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl1078();
  }));
  
  function renderControl1078() {
    subs__.addSub((elements)(function(elements, callback) {
      var root8784 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root8784); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes7009;
      nodes7009 = node.contents();
      oldNodes.replaceWith(nodes7009);
    }));
  }
  renderControl1078();
  root8783.append(node2649);
  
  var node2650 = $("<span>");
  root8783.append(node2650);
  var condSubs677 = new mobl.CompSubscription();
  subs__.addSub(condSubs677);
  var oldValue677;
  var renderCond677 = function() {
    var value1521 = fixedPosition.get();
    if(oldValue677 === value1521) return;
    oldValue677 = value1521;
    var subs__ = condSubs677;
    subs__.unsubscribe();
    node2650.empty();
    if(value1521) {
      
      var node2651 = $("<div>");
      node2651.attr('id', "hello");
      node2651.attr('style', "height: 2.9em;");
      
      node2650.append(node2651);
      
      
    } else {
      
    }
  };
  renderCond677();
  subs__.addSub(fixedPosition.addEventListener('change', function() {
    renderCond677();
  }));
  
  callback(root8783); return subs__;
  
  
  
  
  
  return subs__;
};
ui.buttonStyle = 'ui__buttonStyle';
ui.buttonPushedStyle = 'ui__buttonPushedStyle';
ui.buttonStyle = 'ui__buttonStyle';
ui.buttonPushedStyle = 'ui__buttonPushedStyle';

ui.button = function(text, style, pushedStyle, onclick, elements, callback) {
  var root8785 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var pushed = mobl.ref(false);
  
  var sp = $("<span>");
  
  var ref2458 = mobl.ref(pushed.get() ? pushedStyle.get() : style.get());
  if(ref2458.get() !== null) {
    sp.attr('class', ref2458.get());
    subs__.addSub(ref2458.addEventListener('change', function(_, ref, val) {
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
  subs__.addSub(ref2458.rebind());
  
  var val1246 = function(event, callback) {
                if(event && event.stopPropagation) event.stopPropagation();
                var result__ = event.preventDefault();
                var result__ = true;
                pushed.set(result__);
                if(callback && callback.apply) callback(); return;
              };
  if(val1246 !== null) {
    subs__.addSub(mobl.domBind(sp, 'touchdown', val1246));
  }
  
  var val1247 = function(event, callback) {
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
  if(val1247 !== null) {
    subs__.addSub(mobl.domBind(sp, 'touchdrag', val1247));
  }
  
  var val1248 = function(event, callback) {
                if(event && event.stopPropagation) event.stopPropagation();
                var result__ = pushed.get();
                if(result__) {
                  var result__ = false;
                  pushed.set(result__);
                  function after378(result__) {
                    var tmp6802 = result__;
                    if(callback && callback.apply) callback(); return;
                  }
                  var result__ = onclick.get()(event, after378);if(result__ !== undefined) after378(result__);
                } else {
                  {
                    if(callback && callback.apply) callback(); return;
                  }
                }
              };
  if(val1248 !== null) {
    subs__.addSub(mobl.domBind(sp, 'touchup', val1248));
  }
  
  var val1249 = function(event, callback) {
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
  if(val1249 !== null) {
    subs__.addSub(mobl.domBind(sp, 'mouseout', val1249));
  }
  
  var ref2459 = text;
  sp.text(""+ref2459.get());
  var ignore486 = false;
  subs__.addSub(ref2459.addEventListener('change', function(_, ref, val) {
    if(ignore486) return;
    sp.text(""+val);
  }));
  subs__.addSub(ref2459.rebind());
  
  
  root8785.append(sp);
  callback(root8785); return subs__;
  
  return subs__;
};
ui.sideButtonStyle = 'ui__sideButtonStyle';
ui.sideButtonPushedStyle = 'ui__sideButtonPushedStyle';

ui.sideButton = function(text, style, pushedStyle, onclick, elements, callback) {
  var root8786 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes7010 = $("<span>");
  root8786.append(nodes7010);
  subs__.addSub((ui.button)(text, style, pushedStyle, onclick, function(_, callback) {
    var root8787 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root8787); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes7010;
    nodes7010 = node.contents();
    oldNodes.replaceWith(nodes7010);
  }));
  callback(root8786); return subs__;
  
  return subs__;
};
ui.backButtonStyle = 'ui__backButtonStyle';
ui.backButtonPushedStyle = 'ui__backButtonPushedStyle';
ui.backButtonStyle = 'ui__backButtonStyle';
ui.backButtonPushedStyle = 'ui__backButtonPushedStyle';

ui.backButton = function(text, style, pushedStyle, onclick, elements, callback) {
  var root8788 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes7011 = $("<span>");
  root8788.append(nodes7011);
  subs__.addSub((ui.button)(text, style, pushedStyle, onclick, function(_, callback) {
    var root8789 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root8789); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes7011;
    nodes7011 = node.contents();
    oldNodes.replaceWith(nodes7011);
  }));
  callback(root8788); return subs__;
  
  return subs__;
};
ui.groupStyle = 'ui__groupStyle';

ui.group = function(elements, callback) {
  var root8790 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node2654 = $("<ul>");
  
  var ref2460 = mobl.ref(ui.groupStyle);
  if(ref2460.get() !== null) {
    node2654.attr('class', ref2460.get());
    subs__.addSub(ref2460.addEventListener('change', function(_, ref, val) {
      node2654.attr('class', val);
    }));
    
  }
  subs__.addSub(ref2460.rebind());
  
  var nodes7012 = $("<span>");
  node2654.append(nodes7012);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl1079();
  }));
  
  function renderControl1079() {
    subs__.addSub((elements)(function(elements, callback) {
      var root8791 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root8791); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes7012;
      nodes7012 = node.contents();
      oldNodes.replaceWith(nodes7012);
    }));
  }
  renderControl1079();
  root8790.append(node2654);
  callback(root8790); return subs__;
  
  
  return subs__;
};

ui.image = function(url, width, height, onclick, style, valign, align, elements, callback) {
  var root8792 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node2655 = $("<img>");
  
  var ref2461 = url;
  if(ref2461.get() !== null) {
    node2655.attr('src', ref2461.get());
    subs__.addSub(ref2461.addEventListener('change', function(_, ref, val) {
      node2655.attr('src', val);
    }));
    
  }
  subs__.addSub(ref2461.rebind());
  
  var ref2462 = width;
  if(ref2462.get() !== null) {
    node2655.attr('width', ref2462.get());
    subs__.addSub(ref2462.addEventListener('change', function(_, ref, val) {
      node2655.attr('width', val);
    }));
    
  }
  subs__.addSub(ref2462.rebind());
  
  var ref2463 = height;
  if(ref2463.get() !== null) {
    node2655.attr('height', ref2463.get());
    subs__.addSub(ref2463.addEventListener('change', function(_, ref, val) {
      node2655.attr('height', val);
    }));
    
  }
  subs__.addSub(ref2463.rebind());
  
  var ref2464 = style;
  if(ref2464.get() !== null) {
    node2655.attr('class', ref2464.get());
    subs__.addSub(ref2464.addEventListener('change', function(_, ref, val) {
      node2655.attr('class', val);
    }));
    
  }
  subs__.addSub(ref2464.rebind());
  
  var val1250 = onclick.get();
  if(val1250 !== null) {
    subs__.addSub(mobl.domBind(node2655, 'tap', val1250));
  }
  
  var ref2465 = valign;
  if(ref2465.get() !== null) {
    node2655.attr('valign', ref2465.get());
    subs__.addSub(ref2465.addEventListener('change', function(_, ref, val) {
      node2655.attr('valign', val);
    }));
    
  }
  subs__.addSub(ref2465.rebind());
  
  var ref2466 = align;
  if(ref2466.get() !== null) {
    node2655.attr('align', ref2466.get());
    subs__.addSub(ref2466.addEventListener('change', function(_, ref, val) {
      node2655.attr('align', val);
    }));
    
  }
  subs__.addSub(ref2466.rebind());
  
  root8792.append(node2655);
  callback(root8792); return subs__;
  
  return subs__;
};
ui.itemStyle = 'ui__itemStyle';
ui.itemPushedStyle = 'ui__itemPushedStyle';
ui.itemArrowStyle = 'ui__itemArrowStyle';
ui.itemDownArrowStyle = 'ui__itemDownArrowStyle';

ui.item = function(style, pushedStyle, onclick, onswipe, hideArrow, elements, callback) {
  var root8793 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var pushed = mobl.ref(false);
  
  var el = $("<li>");
  
  var ref2467 = mobl.ref(ui.itemStyle);
  if(ref2467.get() !== null) {
    el.attr('class', ref2467.get());
    subs__.addSub(ref2467.addEventListener('change', function(_, ref, val) {
      el.attr('class', val);
    }));
    
  }
  subs__.addSub(ref2467.rebind());
  
  var ref2468 = mobl.ref(onclick.get() && hideArrow.get() == false ? mobl.mergeStyles([pushed.get() ? pushedStyle.get() : style.get(), ui.itemArrowStyle]) : (pushed.get() ? pushedStyle.get() : style.get()));
  if(ref2468.get() !== null) {
    el.attr('class', ref2468.get());
    subs__.addSub(ref2468.addEventListener('change', function(_, ref, val) {
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
  subs__.addSub(ref2468.rebind());
  
  var val1251 = onswipe.get();
  if(val1251 !== null) {
    subs__.addSub(mobl.domBind(el, 'swipe', val1251));
  }
  
  var val1252 = onclick.get() ? function(event, callback) {
                                         if(event && event.stopPropagation) event.stopPropagation();
                                         var result__ = true;
                                         pushed.set(result__);
                                         mobl.sleep(100, function(result__) {
                                           var tmp6803 = result__;
                                           function after379(result__) {
                                             var tmp6804 = result__;
                                             
                                           }
                                           var result__ = onclick.get()(event, after379);if(result__ !== undefined) after379(result__);
                                           mobl.sleep(200, function(result__) {
                                             var tmp6805 = result__;
                                             var result__ = false;
                                             pushed.set(result__);
                                             if(callback && callback.apply) callback(); return;
                                           });
                                           
                                         });
                                       } : null;
  if(val1252 !== null) {
    subs__.addSub(mobl.domBind(el, 'tap', val1252));
  }
  
  var nodes7013 = $("<span>");
  el.append(nodes7013);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl1080();
  }));
  
  function renderControl1080() {
    subs__.addSub((elements)(function(elements, callback) {
      var root8794 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root8794); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes7013;
      nodes7013 = node.contents();
      oldNodes.replaceWith(nodes7013);
    }));
  }
  renderControl1080();
  root8793.append(el);
  callback(root8793); return subs__;
  
  
  return subs__;
};

ui.checkBox = function(b, label, onchange, elements, callback) {
  var root8795 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node2656 = $("<input>");
  node2656.attr('type', "checkbox");
  
  var ref2470 = b;
  node2656.attr('checked', !!ref2470.get());
  subs__.addSub(ref2470.addEventListener('change', function(_, ref, val) {
    if(ref === ref2470) node2656.attr('checked', !!val);
  }));
  subs__.addSub(mobl.domBind(node2656, 'change', function() {
    b.set(!!node2656.attr('checked'));
  }));
  
  var val1254 = function(event, callback) {
                if(event && event.stopPropagation) event.stopPropagation();
                if(callback && callback.apply) callback(); return;
              };
  if(val1254 !== null) {
    subs__.addSub(mobl.domBind(node2656, 'tap', val1254));
  }
  
  var val1255 = onchange.get();
  if(val1255 !== null) {
    subs__.addSub(mobl.domBind(node2656, 'change', val1255));
  }
  
  root8795.append(node2656);
  
  root8795.append(" ");
  
  var node2657 = $("<span>");
  
  var ref2469 = label;
  node2657.text(""+ref2469.get());
  var ignore487 = false;
  subs__.addSub(ref2469.addEventListener('change', function(_, ref, val) {
    if(ignore487) return;
    node2657.text(""+val);
  }));
  subs__.addSub(ref2469.rebind());
  
  
  var val1253 = function(event, callback) {
                if(event && event.stopPropagation) event.stopPropagation();
                var result__ = !b.get();
                b.set(result__);
                var result__ = onchange.get();
                if(result__) {
                  function after380(result__) {
                    var tmp6806 = result__;
                    if(callback && callback.apply) callback(); return;
                  }
                  var result__ = onchange.get()(null, after380);if(result__ !== undefined) after380(result__);
                } else {
                  {
                    if(callback && callback.apply) callback(); return;
                  }
                }
              };
  if(val1253 !== null) {
    subs__.addSub(mobl.domBind(node2657, 'tap', val1253));
  }
  
  root8795.append(node2657);
  callback(root8795); return subs__;
  
  
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
  var root8796 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node2658 = $("<span>");
  root8796.append(node2658);
  var condSubs678 = new mobl.CompSubscription();
  subs__.addSub(condSubs678);
  var oldValue678;
  var renderCond678 = function() {
    var value1522 = label.get();
    if(oldValue678 === value1522) return;
    oldValue678 = value1522;
    var subs__ = condSubs678;
    subs__.unsubscribe();
    node2658.empty();
    if(value1522) {
      var nodes7014 = $("<span>");
      node2658.append(nodes7014);
      subs__.addSub((mobl.label)(label, mobl.ref(ui.textFieldLabelStyle), mobl.ref(null), function(_, callback) {
        var root8797 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root8797); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes7014;
        nodes7014 = node.contents();
        oldNodes.replaceWith(nodes7014);
      }));
      
      
    } else {
      
    }
  };
  renderCond678();
  subs__.addSub(label.addEventListener('change', function() {
    renderCond678();
  }));
  
  
  var node2659 = $("<span>");
  root8796.append(node2659);
  var condSubs679 = new mobl.CompSubscription();
  subs__.addSub(condSubs679);
  var oldValue679;
  var renderCond679 = function() {
    var value1523 = validator.get();
    if(oldValue679 === value1523) return;
    oldValue679 = value1523;
    var subs__ = condSubs679;
    subs__.unsubscribe();
    node2659.empty();
    if(value1523) {
      
      var temp = mobl.ref(s.get());
      
      var identifier = mobl.ref(mobl.random(999));
      function after384(result__) {
        var tmp6807 = result__;
        var validationMessage = mobl.ref(result__);
        mobl.sleep(200, function(result__) {
          var tmp6808 = result__;
          var result__ = mobl.setValidationError(identifier.get(), !validationMessage.get());
          
        });
        
        var node2660 = $("<input>");
        
        var ref2471 = inputType;
        if(ref2471.get() !== null) {
          node2660.attr('type', ref2471.get());
          subs__.addSub(ref2471.addEventListener('change', function(_, ref, val) {
            node2660.attr('type', val);
          }));
          
        }
        subs__.addSub(ref2471.rebind());
        
        var ref2472 = mobl.ref(validationMessage.get() ? invalidStyle.get() : style.get());
        if(ref2472.get() !== null) {
          node2660.attr('class', ref2472.get());
          subs__.addSub(ref2472.addEventListener('change', function(_, ref, val) {
            node2660.attr('class', val);
          }));
          subs__.addSub(validationMessage.addEventListener('change', function() {
            node2660.attr('class', validationMessage.get() ? invalidStyle.get() : style.get());
          }));
          subs__.addSub(invalidStyle.addEventListener('change', function() {
            node2660.attr('class', validationMessage.get() ? invalidStyle.get() : style.get());
          }));
          subs__.addSub(style.addEventListener('change', function() {
            node2660.attr('class', validationMessage.get() ? invalidStyle.get() : style.get());
          }));
          
        }
        subs__.addSub(ref2472.rebind());
        
        var ref2473 = placeholder;
        if(ref2473.get() !== null) {
          node2660.attr('placeholder', ref2473.get());
          subs__.addSub(ref2473.addEventListener('change', function(_, ref, val) {
            node2660.attr('placeholder', val);
          }));
          
        }
        subs__.addSub(ref2473.rebind());
        
        var ref2474 = temp;
        node2660.val(""+ref2474.get());
        var ignore488 = false;
        subs__.addSub(ref2474.addEventListener('change', function(_, ref, val) {
          if(ignore488) return;
          node2660.val(""+val);
        }));
        subs__.addSub(ref2474.rebind());
        
        subs__.addSub(mobl.domBind(node2660, 'keyup change', function() {
          ignore488 = true;
          temp.set(mobl.stringTomobl__String(node2660.val()));
          ignore488 = false;
        }));
        
        
        var val1256 = onchange.get();
        if(val1256 !== null) {
          subs__.addSub(mobl.domBind(node2660, 'change', val1256));
        }
        
        var val1257 = function(event, callback) {
                      if(event && event.stopPropagation) event.stopPropagation();
                      var result__ = onkeyup.get();
                      if(result__) {
                        function after381(result__) {
                          var tmp6809 = result__;
                          function after382(result__) {
                            var tmp6810 = result__;
                            var result__ = tmp6810;
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
                          var result__ = validator.get()(temp.get(), after382);if(result__ !== undefined) after382(result__);
                        }
                        var result__ = onkeyup.get()(event, after381);if(result__ !== undefined) after381(result__);
                      } else {
                        {
                          function after383(result__) {
                            var tmp6810 = result__;
                            var result__ = tmp6810;
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
                          var result__ = validator.get()(temp.get(), after383);if(result__ !== undefined) after383(result__);
                        }
                      }
                    };
        if(val1257 !== null) {
          subs__.addSub(mobl.domBind(node2660, 'keyup', val1257));
        }
        
        var val1258 = function(event, callback) {
                      if(event && event.stopPropagation) event.stopPropagation();
                      var result__ = ui.scrollUp();
                      if(callback && callback.apply) callback(); return;
                    };
        if(val1258 !== null) {
          subs__.addSub(mobl.domBind(node2660, 'blur', val1258));
        }
        
        node2659.append(node2660);
        var nodes7015 = $("<span>");
        node2659.append(nodes7015);
        subs__.addSub((mobl.label)(validationMessage, mobl.ref(ui.validationMessageStyle), mobl.ref(null), function(_, callback) {
          var root8798 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root8798); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes7015;
          nodes7015 = node.contents();
          oldNodes.replaceWith(nodes7015);
        }));
        
        
        
        
      }
      var result__ = validator.get()(s.get(), after384);if(result__ !== undefined) after384(result__);
    } else {
      
      var node2661 = $("<input>");
      
      var ref2475 = inputType;
      if(ref2475.get() !== null) {
        node2661.attr('type', ref2475.get());
        subs__.addSub(ref2475.addEventListener('change', function(_, ref, val) {
          node2661.attr('type', val);
        }));
        
      }
      subs__.addSub(ref2475.rebind());
      
      var ref2476 = style;
      if(ref2476.get() !== null) {
        node2661.attr('class', ref2476.get());
        subs__.addSub(ref2476.addEventListener('change', function(_, ref, val) {
          node2661.attr('class', val);
        }));
        
      }
      subs__.addSub(ref2476.rebind());
      
      var ref2477 = placeholder;
      if(ref2477.get() !== null) {
        node2661.attr('placeholder', ref2477.get());
        subs__.addSub(ref2477.addEventListener('change', function(_, ref, val) {
          node2661.attr('placeholder', val);
        }));
        
      }
      subs__.addSub(ref2477.rebind());
      
      var ref2478 = s;
      node2661.val(""+ref2478.get());
      var ignore489 = false;
      subs__.addSub(ref2478.addEventListener('change', function(_, ref, val) {
        if(ignore489) return;
        node2661.val(""+val);
      }));
      subs__.addSub(ref2478.rebind());
      
      subs__.addSub(mobl.domBind(node2661, 'keyup change', function() {
        ignore489 = true;
        s.set(mobl.stringTomobl__String(node2661.val()));
        ignore489 = false;
      }));
      
      
      var val1259 = onchange.get();
      if(val1259 !== null) {
        subs__.addSub(mobl.domBind(node2661, 'change', val1259));
      }
      
      var val1260 = onkeyup.get();
      if(val1260 !== null) {
        subs__.addSub(mobl.domBind(node2661, 'keyup', val1260));
      }
      
      var val1261 = function(event, callback) {
                    if(event && event.stopPropagation) event.stopPropagation();
                    var result__ = ui.scrollUp();
                    if(callback && callback.apply) callback(); return;
                  };
      if(val1261 !== null) {
        subs__.addSub(mobl.domBind(node2661, 'blur', val1261));
      }
      
      node2659.append(node2661);
      
      
    }
  };
  renderCond679();
  subs__.addSub(validator.addEventListener('change', function() {
    renderCond679();
  }));
  
  callback(root8796); return subs__;
  
  
  return subs__;
};

ui.emailField = function(s, placeholder, label, validator, style, invalidStyle, onchange, onkeyup, elements, callback) {
  var root8799 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes7016 = $("<span>");
  root8799.append(nodes7016);
  subs__.addSub((ui.textField)(s, placeholder, label, mobl.ref("email"), validator, style, invalidStyle, onchange, onkeyup, function(_, callback) {
    var root8800 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root8800); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes7016;
    nodes7016 = node.contents();
    oldNodes.replaceWith(nodes7016);
  }));
  callback(root8799); return subs__;
  
  return subs__;
};

ui.telField = function(phoneNumber, placeholder, label, validator, style, invalidStyle, onchange, onkeyup, elements, callback) {
  var root8801 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes7017 = $("<span>");
  root8801.append(nodes7017);
  subs__.addSub((ui.textField)(phoneNumber, placeholder, label, mobl.ref("tel"), validator, style, invalidStyle, onchange, onkeyup, function(_, callback) {
    var root8802 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root8802); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes7017;
    nodes7017 = node.contents();
    oldNodes.replaceWith(nodes7017);
  }));
  callback(root8801); return subs__;
  
  return subs__;
};

ui.rangeField = function(n, min, max, step, placeholder, label, onchange, onkeyup, elements, callback) {
  var root8803 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node2662 = $("<span>");
  root8803.append(node2662);
  var condSubs680 = new mobl.CompSubscription();
  subs__.addSub(condSubs680);
  var oldValue680;
  var renderCond680 = function() {
    var value1524 = label.get();
    if(oldValue680 === value1524) return;
    oldValue680 = value1524;
    var subs__ = condSubs680;
    subs__.unsubscribe();
    node2662.empty();
    if(value1524) {
      var nodes7018 = $("<span>");
      node2662.append(nodes7018);
      subs__.addSub((mobl.label)(label, mobl.ref(ui.textFieldLabelStyle), mobl.ref(null), function(_, callback) {
        var root8804 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root8804); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes7018;
        nodes7018 = node.contents();
        oldNodes.replaceWith(nodes7018);
      }));
      
      
    } else {
      
    }
  };
  renderCond680();
  subs__.addSub(label.addEventListener('change', function() {
    renderCond680();
  }));
  
  
  var node2663 = $("<input>");
  node2663.attr('type', "range");
  
  var ref2479 = n;
  node2663.val(""+ref2479.get());
  var ignore490 = false;
  subs__.addSub(ref2479.addEventListener('change', function(_, ref, val) {
    if(ignore490) return;
    node2663.val(""+val);
  }));
  subs__.addSub(ref2479.rebind());
  
  subs__.addSub(mobl.domBind(node2663, 'keyup change', function() {
    ignore490 = true;
    n.set(mobl.stringTomobl__Num(node2663.val()));
    ignore490 = false;
  }));
  
  
  var ref2480 = min;
  if(ref2480.get() !== null) {
    node2663.attr('min', ref2480.get());
    subs__.addSub(ref2480.addEventListener('change', function(_, ref, val) {
      node2663.attr('min', val);
    }));
    
  }
  subs__.addSub(ref2480.rebind());
  
  var ref2481 = max;
  if(ref2481.get() !== null) {
    node2663.attr('max', ref2481.get());
    subs__.addSub(ref2481.addEventListener('change', function(_, ref, val) {
      node2663.attr('max', val);
    }));
    
  }
  subs__.addSub(ref2481.rebind());
  
  var ref2482 = step;
  if(ref2482.get() !== null) {
    node2663.attr('step', ref2482.get());
    subs__.addSub(ref2482.addEventListener('change', function(_, ref, val) {
      node2663.attr('step', val);
    }));
    
  }
  subs__.addSub(ref2482.rebind());
  node2663.attr('style', "width: 99%;");
  
  var val1262 = onchange.get();
  if(val1262 !== null) {
    subs__.addSub(mobl.domBind(node2663, 'change', val1262));
  }
  
  var val1263 = onkeyup.get();
  if(val1263 !== null) {
    subs__.addSub(mobl.domBind(node2663, 'keyup', val1263));
  }
  
  var ref2483 = placeholder;
  if(ref2483.get() !== null) {
    node2663.attr('placeholder', ref2483.get());
    subs__.addSub(ref2483.addEventListener('change', function(_, ref, val) {
      node2663.attr('placeholder', val);
    }));
    
  }
  subs__.addSub(ref2483.rebind());
  
  root8803.append(node2663);
  callback(root8803); return subs__;
  
  
  return subs__;
};
ui.validateNum = function(n) {
   var __this = this;
  return mobl.Math.isNaN(n) ? mobl._("Not a valid numeric value", []) : "";
};


ui.numField = function(n, label, placeholder, validator, style, invalidStyle, onchange, onkeyup, elements, callback) {
  var root8805 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var validator2 = function(s, callback) {
    var __this = this;
    var result__ = mobl.parseNum(s);
    var n2 = result__;
    function after385(result__) {
      var tmp6811 = result__;
      var result__ = tmp6811;
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
    var result__ = validator.get()(n2, after385);if(result__ !== undefined) after385(result__);
  };
  
  
  
  var s = mobl.ref("" + n.get());
  var nodes7019 = $("<span>");
  root8805.append(nodes7019);
  subs__.addSub((ui.textField)(s, placeholder, label, mobl.ref("number"), mobl.ref(validator2), style, invalidStyle, onchange, onkeyup, function(_, callback) {
    var root8806 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root8806); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes7019;
    nodes7019 = node.contents();
    oldNodes.replaceWith(nodes7019);
  }));
  callback(root8805); return subs__;
  
  return subs__;
};

ui.passwordField = function(s, placeholder, label, style, onchange, onkeyup, elements, callback) {
  var root8807 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node2664 = $("<span>");
  root8807.append(node2664);
  var condSubs681 = new mobl.CompSubscription();
  subs__.addSub(condSubs681);
  var oldValue681;
  var renderCond681 = function() {
    var value1525 = label.get();
    if(oldValue681 === value1525) return;
    oldValue681 = value1525;
    var subs__ = condSubs681;
    subs__.unsubscribe();
    node2664.empty();
    if(value1525) {
      
      var node2665 = $("<span>");
      node2665.attr('style', "float: left; margin-top: 0.2em; width: 5em; color: #666;");
      
      var ref2487 = label;
      node2665.text(""+ref2487.get());
      var ignore492 = false;
      subs__.addSub(ref2487.addEventListener('change', function(_, ref, val) {
        if(ignore492) return;
        node2665.text(""+val);
      }));
      subs__.addSub(ref2487.rebind());
      
      
      node2664.append(node2665);
      
      var node2666 = $("<span>");
      node2666.attr('style', "float: left");
      
      
      var node2667 = $("<input>");
      node2667.attr('type', "password");
      
      var ref2484 = style;
      if(ref2484.get() !== null) {
        node2667.attr('class', ref2484.get());
        subs__.addSub(ref2484.addEventListener('change', function(_, ref, val) {
          node2667.attr('class', val);
        }));
        
      }
      subs__.addSub(ref2484.rebind());
      
      var ref2485 = placeholder;
      if(ref2485.get() !== null) {
        node2667.attr('placeholder', ref2485.get());
        subs__.addSub(ref2485.addEventListener('change', function(_, ref, val) {
          node2667.attr('placeholder', val);
        }));
        
      }
      subs__.addSub(ref2485.rebind());
      
      var ref2486 = s;
      node2667.val(""+ref2486.get());
      var ignore491 = false;
      subs__.addSub(ref2486.addEventListener('change', function(_, ref, val) {
        if(ignore491) return;
        node2667.val(""+val);
      }));
      subs__.addSub(ref2486.rebind());
      
      subs__.addSub(mobl.domBind(node2667, 'keyup change', function() {
        ignore491 = true;
        s.set(mobl.stringTomobl__String(node2667.val()));
        ignore491 = false;
      }));
      
      
      var val1264 = onchange.get();
      if(val1264 !== null) {
        subs__.addSub(mobl.domBind(node2667, 'change', val1264));
      }
      
      var val1265 = onkeyup.get();
      if(val1265 !== null) {
        subs__.addSub(mobl.domBind(node2667, 'keyup', val1265));
      }
      
      var val1266 = function(event, callback) {
                    if(event && event.stopPropagation) event.stopPropagation();
                    var result__ = ui.scrollUp();
                    if(callback && callback.apply) callback(); return;
                  };
      if(val1266 !== null) {
        subs__.addSub(mobl.domBind(node2667, 'blur', val1266));
      }
      
      node2666.append(node2667);
      node2664.append(node2666);
      
      
      
      
    } else {
      
      var node2668 = $("<input>");
      node2668.attr('type', "password");
      
      var ref2488 = style;
      if(ref2488.get() !== null) {
        node2668.attr('class', ref2488.get());
        subs__.addSub(ref2488.addEventListener('change', function(_, ref, val) {
          node2668.attr('class', val);
        }));
        
      }
      subs__.addSub(ref2488.rebind());
      
      var ref2489 = placeholder;
      if(ref2489.get() !== null) {
        node2668.attr('placeholder', ref2489.get());
        subs__.addSub(ref2489.addEventListener('change', function(_, ref, val) {
          node2668.attr('placeholder', val);
        }));
        
      }
      subs__.addSub(ref2489.rebind());
      
      var ref2490 = s;
      node2668.val(""+ref2490.get());
      var ignore493 = false;
      subs__.addSub(ref2490.addEventListener('change', function(_, ref, val) {
        if(ignore493) return;
        node2668.val(""+val);
      }));
      subs__.addSub(ref2490.rebind());
      
      subs__.addSub(mobl.domBind(node2668, 'keyup change', function() {
        ignore493 = true;
        s.set(mobl.stringTomobl__String(node2668.val()));
        ignore493 = false;
      }));
      
      
      var val1267 = onchange.get();
      if(val1267 !== null) {
        subs__.addSub(mobl.domBind(node2668, 'change', val1267));
      }
      
      var val1268 = onkeyup.get();
      if(val1268 !== null) {
        subs__.addSub(mobl.domBind(node2668, 'keyup', val1268));
      }
      
      var val1269 = function(event, callback) {
                    if(event && event.stopPropagation) event.stopPropagation();
                    var result__ = ui.scrollUp();
                    if(callback && callback.apply) callback(); return;
                  };
      if(val1269 !== null) {
        subs__.addSub(mobl.domBind(node2668, 'blur', val1269));
      }
      
      node2664.append(node2668);
      
      
    }
  };
  renderCond681();
  subs__.addSub(label.addEventListener('change', function() {
    renderCond681();
  }));
  
  callback(root8807); return subs__;
  
  return subs__;
};
ui.selectFieldStyle = 'ui__selectFieldStyle';

ui.selectField = function(value, options, onchange, style, optionStyle, elements, callback) {
  var root8808 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var sel = $("<select>");
  
  var ref2495 = style;
  if(ref2495.get() !== null) {
    sel.attr('class', ref2495.get());
    subs__.addSub(ref2495.addEventListener('change', function(_, ref, val) {
      sel.attr('class', val);
    }));
    
  }
  subs__.addSub(ref2495.rebind());
  
  var val1270 = function(event, callback) {
                if(event && event.stopPropagation) event.stopPropagation();
                var result__ = sel.val();
                value.set(result__);
                var result__ = onchange.get();
                if(result__) {
                  function after386(result__) {
                    var tmp6813 = result__;
                    if(callback && callback.apply) callback(); return;
                  }
                  var result__ = onchange.get()(event, after386);if(result__ !== undefined) after386(result__);
                } else {
                  {
                    if(callback && callback.apply) callback(); return;
                  }
                }
              };
  if(val1270 !== null) {
    subs__.addSub(mobl.domBind(sel, 'change', val1270));
  }
  
  
  var node2669 = mobl.loadingSpan();
  sel.append(node2669);
  var list462;
  var listSubs__ = new mobl.CompSubscription();
  subs__.addSub(listSubs__);
  var renderList462 = function() {
    var subs__ = listSubs__;
    list462 = options.get();
    list462.list(function(results462) {
      node2669.empty();
      for(var i1200 = 0; i1200 < results462.length; i1200++) {
        (function() {
          var iternode462 = $("<span>");
          node2669.append(iternode462);
          var optionValue;var optionDescription;
          optionValue = mobl.ref(mobl.ref(mobl.ref(results462), i1200), "_1");optionDescription = mobl.ref(mobl.ref(mobl.ref(results462), i1200), "_2");
          
          var node2670 = $("<option>");
          
          var ref2491 = optionDescription;
          node2670.text(""+ref2491.get());
          var ignore494 = false;
          subs__.addSub(ref2491.addEventListener('change', function(_, ref, val) {
            if(ignore494) return;
            node2670.text(""+val);
          }));
          subs__.addSub(ref2491.rebind());
          
          
          var ref2492 = optionStyle;
          if(ref2492.get() !== null) {
            node2670.attr('class', ref2492.get());
            subs__.addSub(ref2492.addEventListener('change', function(_, ref, val) {
              node2670.attr('class', val);
            }));
            
          }
          subs__.addSub(ref2492.rebind());
          
          var ref2493 = optionValue;
          if(ref2493.get() !== null) {
            node2670.attr('value', ref2493.get());
            subs__.addSub(ref2493.addEventListener('change', function(_, ref, val) {
              node2670.attr('value', val);
            }));
            
          }
          subs__.addSub(ref2493.rebind());
          
          var ref2494 = mobl.ref(value.get() == optionValue.get() ? "selected" : "");
          if(ref2494.get() !== null) {
            node2670.attr('selected', ref2494.get());
            subs__.addSub(ref2494.addEventListener('change', function(_, ref, val) {
              node2670.attr('selected', val);
            }));
            subs__.addSub(value.addEventListener('change', function() {
              node2670.attr('selected', value.get() == optionValue.get() ? "selected" : "");
            }));
            subs__.addSub(optionValue.addEventListener('change', function() {
              node2670.attr('selected', value.get() == optionValue.get() ? "selected" : "");
            }));
            
          }
          subs__.addSub(ref2494.rebind());
          
          iternode462.append(node2670);
          
          var oldNodes = iternode462;
          iternode462 = iternode462.contents();
          oldNodes.replaceWith(iternode462);
          
          
        }());
      }
      mobl.delayedUpdateScrollers();
      subs__.addSub(list462.addEventListener('change', function() { listSubs__.unsubscribe(); renderList462(true); }));
      subs__.addSub(options.addEventListener('change', function() { listSubs__.unsubscribe(); renderList462(true); }));
    });
  };
  renderList462();
  
  root8808.append(sel);
  var result__ = sel.append(sel.children().eq(0).children());
  callback(root8808); return subs__;
  
  
  return subs__;
};
ui.tabbarStyle = 'ui__tabbarStyle';
ui.inActiveTabButtonStyle = 'ui__inActiveTabButtonStyle';
ui.activeTabButtonStyle = 'ui__activeTabButtonStyle';
ui.inActiveTabStyle = 'ui__inActiveTabStyle';
ui.activeTabStyle = 'ui__activeTabStyle';

ui.tabSet = function(tabs, activeTab, elements, callback) {
  var root8809 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var result__ = activeTab.get() == null;
  if(result__) {
    var result__ = tabs.get().get(0)._1;
    activeTab.set(result__);
    
    var s = mobl.ref("");
    var nodes7020 = $("<span>");
    root8809.append(nodes7020);
    subs__.addSub((mobl.block)(mobl.ref(ui.tabbarStyle), mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
      var root8810 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      
      var node2671 = mobl.loadingSpan();
      root8810.append(node2671);
      var list463;
      var listSubs__ = new mobl.CompSubscription();
      subs__.addSub(listSubs__);
      var renderList463 = function() {
        var subs__ = listSubs__;
        list463 = tabs.get();
        list463.list(function(results463) {
          node2671.empty();
          for(var i1201 = 0; i1201 < results463.length; i1201++) {
            (function() {
              var iternode463 = $("<span>");
              node2671.append(iternode463);
              var tabName;var tabIcon;var tabControl;
              tabName = mobl.ref(mobl.ref(mobl.ref(results463), i1201), "_1");tabIcon = mobl.ref(mobl.ref(mobl.ref(results463), i1201), "_2");tabControl = mobl.ref(mobl.ref(mobl.ref(results463), i1201), "_3");
              var result__ = activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle;
              var tmp6769 = mobl.ref(result__);
              subs__.addSub(activeTab.addEventListener('change', function() {
                tmp6769.set(activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
              }));
              subs__.addSub(tabName.addEventListener('change', function() {
                tmp6769.set(activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
              }));
              subs__.addSub(mobl.ref(ui.activeTabButtonStyle).addEventListener('change', function() {
                tmp6769.set(activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
              }));
              subs__.addSub(mobl.ref(ui.inActiveTabButtonStyle).addEventListener('change', function() {
                tmp6769.set(activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
              }));
              
              var result__ = function(event, callback) {
                               if(event && event.stopPropagation) event.stopPropagation();
                               var result__ = tabName.get();
                               activeTab.set(result__);
                               if(callback && callback.apply) callback(); return;
                             };
              var tmp6768 = mobl.ref(result__);
              
              var nodes7021 = $("<span>");
              iternode463.append(nodes7021);
              subs__.addSub((mobl.span)(tmp6769, mobl.ref(null), tmp6768, mobl.ref(null), function(_, callback) {
                var root8811 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                var nodes7022 = $("<span>");
                root8811.append(nodes7022);
                subs__.addSub((mobl.label)(tabName, mobl.ref(null), mobl.ref(null), function(_, callback) {
                  var root8812 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  callback(root8812); return subs__;
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes7022;
                  nodes7022 = node.contents();
                  oldNodes.replaceWith(nodes7022);
                }));
                callback(root8811); return subs__;
                
                return subs__;
              }, function(node) {
                var oldNodes = nodes7021;
                nodes7021 = node.contents();
                oldNodes.replaceWith(nodes7021);
              }));
              
              var oldNodes = iternode463;
              iternode463 = iternode463.contents();
              oldNodes.replaceWith(iternode463);
              
              
            }());
          }
          mobl.delayedUpdateScrollers();
          subs__.addSub(list463.addEventListener('change', function() { listSubs__.unsubscribe(); renderList463(true); }));
          subs__.addSub(tabs.addEventListener('change', function() { listSubs__.unsubscribe(); renderList463(true); }));
        });
      };
      renderList463();
      
      callback(root8810); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes7020;
      nodes7020 = node.contents();
      oldNodes.replaceWith(nodes7020);
    }));
    
    var node2672 = mobl.loadingSpan();
    root8809.append(node2672);
    var list464;
    var listSubs__ = new mobl.CompSubscription();
    subs__.addSub(listSubs__);
    var renderList464 = function() {
      var subs__ = listSubs__;
      list464 = tabs.get();
      list464.list(function(results464) {
        node2672.empty();
        for(var i1202 = 0; i1202 < results464.length; i1202++) {
          (function() {
            var iternode464 = $("<span>");
            node2672.append(iternode464);
            var tabName;var tabIcon;var tabControl;
            tabName = mobl.ref(mobl.ref(mobl.ref(results464), i1202), "_1");tabIcon = mobl.ref(mobl.ref(mobl.ref(results464), i1202), "_2");tabControl = mobl.ref(mobl.ref(mobl.ref(results464), i1202), "_3");
            var result__ = activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle;
            var tmp6770 = mobl.ref(result__);
            subs__.addSub(activeTab.addEventListener('change', function() {
              tmp6770.set(activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
            }));
            subs__.addSub(tabName.addEventListener('change', function() {
              tmp6770.set(activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
            }));
            subs__.addSub(mobl.ref(ui.activeTabStyle).addEventListener('change', function() {
              tmp6770.set(activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
            }));
            subs__.addSub(mobl.ref(ui.inActiveTabStyle).addEventListener('change', function() {
              tmp6770.set(activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
            }));
            
            var nodes7023 = $("<span>");
            iternode464.append(nodes7023);
            subs__.addSub((mobl.block)(tmp6770, mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
              var root8813 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              var nodes7024 = $("<span>");
              root8813.append(nodes7024);
              subs__.addSub((mobl.screenContext)(function(_, callback) {
                var root8814 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                var nodes7025 = $("<span>");
                root8814.append(nodes7025);
                subs__.addSub(tabControl.addEventListener('change', function() {
                  renderControl1081();
                }));
                
                function renderControl1081() {
                  subs__.addSub((tabControl.get())(function(elements, callback) {
                    var root8815 = $("<span>");
                    var subs__ = new mobl.CompSubscription();
                    callback(root8815); return subs__;
                    return subs__;
                  }, function(node) {
                    var oldNodes = nodes7025;
                    nodes7025 = node.contents();
                    oldNodes.replaceWith(nodes7025);
                  }));
                }
                renderControl1081();
                callback(root8814); return subs__;
                
                return subs__;
              }, function(node) {
                var oldNodes = nodes7024;
                nodes7024 = node.contents();
                oldNodes.replaceWith(nodes7024);
              }));
              callback(root8813); return subs__;
              
              return subs__;
            }, function(node) {
              var oldNodes = nodes7023;
              nodes7023 = node.contents();
              oldNodes.replaceWith(nodes7023);
            }));
            
            var oldNodes = iternode464;
            iternode464 = iternode464.contents();
            oldNodes.replaceWith(iternode464);
            
            
          }());
        }
        mobl.delayedUpdateScrollers();
        subs__.addSub(list464.addEventListener('change', function() { listSubs__.unsubscribe(); renderList464(true); }));
        subs__.addSub(tabs.addEventListener('change', function() { listSubs__.unsubscribe(); renderList464(true); }));
      });
    };
    renderList464();
    
    callback(root8809); return subs__;
    
    
  } else {
    {
      
      var s = mobl.ref("");
      var nodes7020 = $("<span>");
      root8809.append(nodes7020);
      subs__.addSub((mobl.block)(mobl.ref(ui.tabbarStyle), mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root8810 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        
        var node2671 = mobl.loadingSpan();
        root8810.append(node2671);
        var list463;
        var listSubs__ = new mobl.CompSubscription();
        subs__.addSub(listSubs__);
        var renderList463 = function() {
          var subs__ = listSubs__;
          list463 = tabs.get();
          list463.list(function(results463) {
            node2671.empty();
            for(var i1201 = 0; i1201 < results463.length; i1201++) {
              (function() {
                var iternode463 = $("<span>");
                node2671.append(iternode463);
                var tabName;var tabIcon;var tabControl;
                tabName = mobl.ref(mobl.ref(mobl.ref(results463), i1201), "_1");tabIcon = mobl.ref(mobl.ref(mobl.ref(results463), i1201), "_2");tabControl = mobl.ref(mobl.ref(mobl.ref(results463), i1201), "_3");
                var result__ = activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle;
                var tmp6769 = mobl.ref(result__);
                subs__.addSub(activeTab.addEventListener('change', function() {
                  tmp6769.set(activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
                }));
                subs__.addSub(tabName.addEventListener('change', function() {
                  tmp6769.set(activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
                }));
                subs__.addSub(mobl.ref(ui.activeTabButtonStyle).addEventListener('change', function() {
                  tmp6769.set(activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
                }));
                subs__.addSub(mobl.ref(ui.inActiveTabButtonStyle).addEventListener('change', function() {
                  tmp6769.set(activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
                }));
                
                var result__ = function(event, callback) {
                                 if(event && event.stopPropagation) event.stopPropagation();
                                 var result__ = tabName.get();
                                 activeTab.set(result__);
                                 if(callback && callback.apply) callback(); return;
                               };
                var tmp6768 = mobl.ref(result__);
                
                var nodes7021 = $("<span>");
                iternode463.append(nodes7021);
                subs__.addSub((mobl.span)(tmp6769, mobl.ref(null), tmp6768, mobl.ref(null), function(_, callback) {
                  var root8811 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  var nodes7022 = $("<span>");
                  root8811.append(nodes7022);
                  subs__.addSub((mobl.label)(tabName, mobl.ref(null), mobl.ref(null), function(_, callback) {
                    var root8812 = $("<span>");
                    var subs__ = new mobl.CompSubscription();
                    callback(root8812); return subs__;
                    return subs__;
                  }, function(node) {
                    var oldNodes = nodes7022;
                    nodes7022 = node.contents();
                    oldNodes.replaceWith(nodes7022);
                  }));
                  callback(root8811); return subs__;
                  
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes7021;
                  nodes7021 = node.contents();
                  oldNodes.replaceWith(nodes7021);
                }));
                
                var oldNodes = iternode463;
                iternode463 = iternode463.contents();
                oldNodes.replaceWith(iternode463);
                
                
              }());
            }
            mobl.delayedUpdateScrollers();
            subs__.addSub(list463.addEventListener('change', function() { listSubs__.unsubscribe(); renderList463(true); }));
            subs__.addSub(tabs.addEventListener('change', function() { listSubs__.unsubscribe(); renderList463(true); }));
          });
        };
        renderList463();
        
        callback(root8810); return subs__;
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes7020;
        nodes7020 = node.contents();
        oldNodes.replaceWith(nodes7020);
      }));
      
      var node2672 = mobl.loadingSpan();
      root8809.append(node2672);
      var list464;
      var listSubs__ = new mobl.CompSubscription();
      subs__.addSub(listSubs__);
      var renderList464 = function() {
        var subs__ = listSubs__;
        list464 = tabs.get();
        list464.list(function(results464) {
          node2672.empty();
          for(var i1202 = 0; i1202 < results464.length; i1202++) {
            (function() {
              var iternode464 = $("<span>");
              node2672.append(iternode464);
              var tabName;var tabIcon;var tabControl;
              tabName = mobl.ref(mobl.ref(mobl.ref(results464), i1202), "_1");tabIcon = mobl.ref(mobl.ref(mobl.ref(results464), i1202), "_2");tabControl = mobl.ref(mobl.ref(mobl.ref(results464), i1202), "_3");
              var result__ = activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle;
              var tmp6770 = mobl.ref(result__);
              subs__.addSub(activeTab.addEventListener('change', function() {
                tmp6770.set(activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
              }));
              subs__.addSub(tabName.addEventListener('change', function() {
                tmp6770.set(activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
              }));
              subs__.addSub(mobl.ref(ui.activeTabStyle).addEventListener('change', function() {
                tmp6770.set(activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
              }));
              subs__.addSub(mobl.ref(ui.inActiveTabStyle).addEventListener('change', function() {
                tmp6770.set(activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
              }));
              
              var nodes7023 = $("<span>");
              iternode464.append(nodes7023);
              subs__.addSub((mobl.block)(tmp6770, mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
                var root8813 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                var nodes7024 = $("<span>");
                root8813.append(nodes7024);
                subs__.addSub((mobl.screenContext)(function(_, callback) {
                  var root8814 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  var nodes7025 = $("<span>");
                  root8814.append(nodes7025);
                  subs__.addSub(tabControl.addEventListener('change', function() {
                    renderControl1081();
                  }));
                  
                  function renderControl1081() {
                    subs__.addSub((tabControl.get())(function(elements, callback) {
                      var root8815 = $("<span>");
                      var subs__ = new mobl.CompSubscription();
                      callback(root8815); return subs__;
                      return subs__;
                    }, function(node) {
                      var oldNodes = nodes7025;
                      nodes7025 = node.contents();
                      oldNodes.replaceWith(nodes7025);
                    }));
                  }
                  renderControl1081();
                  callback(root8814); return subs__;
                  
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes7024;
                  nodes7024 = node.contents();
                  oldNodes.replaceWith(nodes7024);
                }));
                callback(root8813); return subs__;
                
                return subs__;
              }, function(node) {
                var oldNodes = nodes7023;
                nodes7023 = node.contents();
                oldNodes.replaceWith(nodes7023);
              }));
              
              var oldNodes = iternode464;
              iternode464 = iternode464.contents();
              oldNodes.replaceWith(iternode464);
              
              
            }());
          }
          mobl.delayedUpdateScrollers();
          subs__.addSub(list464.addEventListener('change', function() { listSubs__.unsubscribe(); renderList464(true); }));
          subs__.addSub(tabs.addEventListener('change', function() { listSubs__.unsubscribe(); renderList464(true); }));
        });
      };
      renderList464();
      
      callback(root8809); return subs__;
      
      
    }
  }
  return subs__;
};
ui.searchboxStyle = 'ui__searchboxStyle';
ui.searchBoxInputStyle = 'ui__searchBoxInputStyle';

ui.searchBox = function(s, placeholder, onsearch, onkeyup, elements, callback) {
  var root8816 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node2673 = $("<div>");
  
  var ref2499 = mobl.ref(ui.searchboxStyle);
  if(ref2499.get() !== null) {
    node2673.attr('class', ref2499.get());
    subs__.addSub(ref2499.addEventListener('change', function(_, ref, val) {
      node2673.attr('class', val);
    }));
    
  }
  subs__.addSub(ref2499.rebind());
  
  
  var node2674 = $("<input>");
  node2674.attr('type', "search");
  
  var ref2496 = mobl.ref(ui.searchBoxInputStyle);
  if(ref2496.get() !== null) {
    node2674.attr('class', ref2496.get());
    subs__.addSub(ref2496.addEventListener('change', function(_, ref, val) {
      node2674.attr('class', val);
    }));
    
  }
  subs__.addSub(ref2496.rebind());
  
  var ref2497 = placeholder;
  if(ref2497.get() !== null) {
    node2674.attr('placeholder', ref2497.get());
    subs__.addSub(ref2497.addEventListener('change', function(_, ref, val) {
      node2674.attr('placeholder', val);
    }));
    
  }
  subs__.addSub(ref2497.rebind());
  
  var ref2498 = s;
  node2674.val(""+ref2498.get());
  var ignore495 = false;
  subs__.addSub(ref2498.addEventListener('change', function(_, ref, val) {
    if(ignore495) return;
    node2674.val(""+val);
  }));
  subs__.addSub(ref2498.rebind());
  
  subs__.addSub(mobl.domBind(node2674, 'keyup change', function() {
    ignore495 = true;
    s.set(mobl.stringTomobl__String(node2674.val()));
    ignore495 = false;
  }));
  
  
  var val1271 = onsearch.get();
  if(val1271 !== null) {
    subs__.addSub(mobl.domBind(node2674, 'change', val1271));
  }
  
  var val1272 = onkeyup.get();
  if(val1272 !== null) {
    subs__.addSub(mobl.domBind(node2674, 'keyup', val1272));
  }
  node2674.attr('autocorrect', false);
  node2674.attr('autocapitalize', false);
  node2674.attr('autocomplete', false);
  
  node2673.append(node2674);
  root8816.append(node2673);
  callback(root8816); return subs__;
  
  
  return subs__;
};
ui.contextMenuStyle = 'ui__contextMenuStyle';
ui.buttonStyle = 'ui__buttonStyle';
ui.buttonPushedStyle = 'ui__buttonPushedStyle';

ui.contextMenu = function(elements, callback) {
  var root8817 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var menu = $("<div>");
  
  var ref2500 = mobl.ref(ui.contextMenuStyle);
  if(ref2500.get() !== null) {
    menu.attr('class', ref2500.get());
    subs__.addSub(ref2500.addEventListener('change', function(_, ref, val) {
      menu.attr('class', val);
    }));
    
  }
  subs__.addSub(ref2500.rebind());
  
  var nodes7026 = $("<span>");
  menu.append(nodes7026);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl1082();
  }));
  
  function renderControl1082() {
    subs__.addSub((elements)(function(elements, callback) {
      var root8818 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root8818); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes7026;
      nodes7026 = node.contents();
      oldNodes.replaceWith(nodes7026);
    }));
  }
  renderControl1082();
  root8817.append(menu);
  var result__ = menu.hide();
  
  var img = $("<img>");
  img.attr('src', "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAA0AAAANABeWPPlAAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAEuSURBVDiNrdSrTkNBEMbx35aLIhUNEl4CsCSkmgfBoOoJz0B4BhSSBEcQSMA3GBJE34Br6CA6heWUA4huMuLszvc/c9stEaG5Sil97GADm7l9g1tcRsTFjCgiPg09nCDSxhimjav9E/S+aSvINkbpeIU+utV5N/eu0meE7W+gjGSEFwzQqf/WiLqTPi+p6dWgaTqDNsAPwME0zWmd+1U6rZG0RDZNs9/J7sBBRIxnutGy0vcgP3cWTVocuC6lLGD9H5z3iHjAdWo3ZMGGVchHvtrcZnuV/zAZM6CCUzz9AHjGYaNWn6Azk2GrZ2YJlw3YI44bkG5qzzomY1+wVRXyDbu4w2sCz7HfqNVWam/5pf1YxX2eLf/W/j8HEmtY+XMg53pF5nZp5/GMlHk9bB8Ws56C3JDK8wAAAABJRU5ErkJggg==");
  img.attr('style', "float: right;");
  
  var val1273 = function(event, callback) {
                if(event && event.stopPropagation) event.stopPropagation();
                var result__ = img.parent();
                var target = result__;
                var result__ = target.css("position", "relative");
                var result__ = img.hide();
                var result__ = menu.css("right", "5px");
                var result__ = menu.css("top", "5px");
                var result__ = menu.show();
                mobl.sleep(500, function(result__) {
                  var tmp6816 = result__;
                  var result__ = mobl.$("body").bind("tap", removeMenu);
                  if(callback && callback.apply) callback(); return;
                });
              };
  if(val1273 !== null) {
    subs__.addSub(mobl.domBind(img, 'tap', val1273));
  }
  
  root8817.append(img);
  
  var removeMenu = function(evt) {
     var __this = this;
    menu.hide();
    img.show();
    mobl.$("body").unbind("tap", removeMenu);
  };
  
  
  callback(root8817); return subs__;
  
  
  
  return subs__;
};

ui.masterDetail = function(items, masterItem, detail, elements, callback) {
  var root8819 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var result__ = mobl.window.get().innerWidth > 500;
  var tmp6800 = mobl.ref(result__);
  subs__.addSub(mobl.ref(mobl.window, 'innerWidth').addEventListener('change', function() {
    tmp6800.set(mobl.window.get().innerWidth > 500);
  }));
  
  
  var node2675 = $("<span>");
  root8819.append(node2675);
  var condSubs682 = new mobl.CompSubscription();
  subs__.addSub(condSubs682);
  var oldValue682;
  var renderCond682 = function() {
    var value1526 = tmp6800.get();
    if(oldValue682 === value1526) return;
    oldValue682 = value1526;
    var subs__ = condSubs682;
    subs__.unsubscribe();
    node2675.empty();
    if(value1526) {
      items.get().one(function(result__) {
        var tmp6817 = result__;
        var current = mobl.ref(result__);
        
        var node2676 = $("<div>");
        node2676.attr('width', "100%");
        
        
        var node2677 = $("<div>");
        node2677.attr('style', "float:left; width:33%; position:relative; border-right: solid 1px #cccccc;");
        
        var nodes7029 = $("<span>");
        node2677.append(nodes7029);
        subs__.addSub((ui.group)(function(_, callback) {
          var root8822 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          
          var node2680 = mobl.loadingSpan();
          root8822.append(node2680);
          var list465;
          var listSubs__ = new mobl.CompSubscription();
          subs__.addSub(listSubs__);
          var renderList465 = function() {
            var subs__ = listSubs__;
            list465 = items.get();
            list465.list(function(results465) {
              node2680.empty();
              for(var i1203 = 0; i1203 < results465.length; i1203++) {
                (function() {
                  var iternode465 = $("<span>");
                  node2680.append(iternode465);
                  var it;
                  it = mobl.ref(mobl.ref(results465), i1203);
                  var result__ = it.get() == current.get();
                  var tmp6776 = mobl.ref(result__);
                  subs__.addSub(it.addEventListener('change', function() {
                    tmp6776.set(it.get() == current.get());
                  }));
                  subs__.addSub(current.addEventListener('change', function() {
                    tmp6776.set(it.get() == current.get());
                  }));
                  
                  
                  var node2681 = $("<span>");
                  iternode465.append(node2681);
                  var condSubs684 = new mobl.CompSubscription();
                  subs__.addSub(condSubs684);
                  var oldValue684;
                  var renderCond684 = function() {
                    var value1528 = tmp6776.get();
                    if(oldValue684 === value1528) return;
                    oldValue684 = value1528;
                    var subs__ = condSubs684;
                    subs__.unsubscribe();
                    node2681.empty();
                    if(value1528) {
                      var nodes7030 = $("<span>");
                      node2681.append(nodes7030);
                      subs__.addSub((ui.item)(mobl.ref(ui.selectedItemStyle), mobl.ref(ui.itemPushedStyle), mobl.ref(null), mobl.ref(null), mobl.ref(false), function(_, callback) {
                        var root8823 = $("<span>");
                        var subs__ = new mobl.CompSubscription();
                        var nodes7031 = $("<span>");
                        root8823.append(nodes7031);
                        subs__.addSub(masterItem.addEventListener('change', function() {
                          renderControl1084();
                        }));
                        
                        function renderControl1084() {
                          subs__.addSub((masterItem.get())(it, function(elements, callback) {
                            var root8824 = $("<span>");
                            var subs__ = new mobl.CompSubscription();
                            callback(root8824); return subs__;
                            return subs__;
                          }, function(node) {
                            var oldNodes = nodes7031;
                            nodes7031 = node.contents();
                            oldNodes.replaceWith(nodes7031);
                          }));
                        }
                        renderControl1084();
                        callback(root8823); return subs__;
                        
                        return subs__;
                      }, function(node) {
                        var oldNodes = nodes7030;
                        nodes7030 = node.contents();
                        oldNodes.replaceWith(nodes7030);
                      }));
                      
                      
                    } else {
                      var result__ = function(event, callback) {
                                       if(event && event.stopPropagation) event.stopPropagation();
                                       var result__ = it.get();
                                       current.set(result__);
                                       var result__ = ui.scrollUp();
                                       if(callback && callback.apply) callback(); return;
                                     };
                      var tmp6775 = mobl.ref(result__);
                      
                      var nodes7032 = $("<span>");
                      node2681.append(nodes7032);
                      subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp6775, mobl.ref(null), mobl.ref(true), function(_, callback) {
                        var root8825 = $("<span>");
                        var subs__ = new mobl.CompSubscription();
                        var nodes7033 = $("<span>");
                        root8825.append(nodes7033);
                        subs__.addSub(masterItem.addEventListener('change', function() {
                          renderControl1085();
                        }));
                        
                        function renderControl1085() {
                          subs__.addSub((masterItem.get())(it, function(elements, callback) {
                            var root8826 = $("<span>");
                            var subs__ = new mobl.CompSubscription();
                            callback(root8826); return subs__;
                            return subs__;
                          }, function(node) {
                            var oldNodes = nodes7033;
                            nodes7033 = node.contents();
                            oldNodes.replaceWith(nodes7033);
                          }));
                        }
                        renderControl1085();
                        callback(root8825); return subs__;
                        
                        return subs__;
                      }, function(node) {
                        var oldNodes = nodes7032;
                        nodes7032 = node.contents();
                        oldNodes.replaceWith(nodes7032);
                      }));
                      
                      
                    }
                  };
                  renderCond684();
                  subs__.addSub(tmp6776.addEventListener('change', function() {
                    renderCond684();
                  }));
                  
                  
                  var oldNodes = iternode465;
                  iternode465 = iternode465.contents();
                  oldNodes.replaceWith(iternode465);
                  
                  
                }());
              }
              mobl.delayedUpdateScrollers();
              subs__.addSub(list465.addEventListener('change', function() { listSubs__.unsubscribe(); renderList465(true); }));
              subs__.addSub(items.addEventListener('change', function() { listSubs__.unsubscribe(); renderList465(true); }));
            });
          };
          renderList465();
          
          callback(root8822); return subs__;
          
          return subs__;
        }, function(node) {
          var oldNodes = nodes7029;
          nodes7029 = node.contents();
          oldNodes.replaceWith(nodes7029);
        }));
        node2676.append(node2677);
        
        var node2678 = $("<div>");
        node2678.attr('style', "float:left; width:66.5%; position:relative; margin-left: 0.5%;");
        
        
        var node2679 = $("<span>");
        node2678.append(node2679);
        var condSubs683 = new mobl.CompSubscription();
        subs__.addSub(condSubs683);
        var oldValue683;
        var renderCond683 = function() {
          var value1527 = current.get();
          if(oldValue683 === value1527) return;
          oldValue683 = value1527;
          var subs__ = condSubs683;
          subs__.unsubscribe();
          node2679.empty();
          if(value1527) {
            var nodes7027 = $("<span>");
            node2679.append(nodes7027);
            subs__.addSub(detail.addEventListener('change', function() {
              renderControl1083();
            }));
            
            function renderControl1083() {
              subs__.addSub((detail.get())(current, function(elements, callback) {
                var root8820 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                callback(root8820); return subs__;
                return subs__;
              }, function(node) {
                var oldNodes = nodes7027;
                nodes7027 = node.contents();
                oldNodes.replaceWith(nodes7027);
              }));
            }
            renderControl1083();
            
            
          } else {
            var result__ = mobl._("Select an item on the left", []);
            var tmp6777 = mobl.ref(result__);
            
            var nodes7028 = $("<span>");
            node2679.append(nodes7028);
            subs__.addSub((mobl.label)(tmp6777, mobl.ref(null), mobl.ref(null), function(_, callback) {
              var root8821 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              callback(root8821); return subs__;
              return subs__;
            }, function(node) {
              var oldNodes = nodes7028;
              nodes7028 = node.contents();
              oldNodes.replaceWith(nodes7028);
            }));
            
            
          }
        };
        renderCond683();
        subs__.addSub(current.addEventListener('change', function() {
          renderCond683();
        }));
        
        node2676.append(node2678);
        node2675.append(node2676);
        
        
        
        
        
        
      });
    } else {
      var nodes7034 = $("<span>");
      node2675.append(nodes7034);
      subs__.addSub((ui.group)(function(_, callback) {
        var root8827 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        
        var node2682 = mobl.loadingSpan();
        root8827.append(node2682);
        var list466;
        var listSubs__ = new mobl.CompSubscription();
        subs__.addSub(listSubs__);
        var renderList466 = function() {
          var subs__ = listSubs__;
          list466 = items.get();
          list466.list(function(results466) {
            node2682.empty();
            for(var i1204 = 0; i1204 < results466.length; i1204++) {
              (function() {
                var iternode466 = $("<span>");
                node2682.append(iternode466);
                var it;
                it = mobl.ref(mobl.ref(results466), i1204);
                var result__ = function(event, callback) {
                                 if(event && event.stopPropagation) event.stopPropagation();
                                 mobl.call('ui.detailScreen', [it, detail, mobl.ref(false), mobl.ref("slide")], function(result__) {
                                 var tmp6818 = result__;
                                 if(callback && callback.apply) callback(); return;
                                 });
                               };
                var tmp6771 = mobl.ref(result__);
                
                var nodes7035 = $("<span>");
                iternode466.append(nodes7035);
                subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp6771, mobl.ref(null), mobl.ref(false), function(_, callback) {
                  var root8828 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  var nodes7036 = $("<span>");
                  root8828.append(nodes7036);
                  subs__.addSub(masterItem.addEventListener('change', function() {
                    renderControl1086();
                  }));
                  
                  function renderControl1086() {
                    subs__.addSub((masterItem.get())(it, function(elements, callback) {
                      var root8829 = $("<span>");
                      var subs__ = new mobl.CompSubscription();
                      callback(root8829); return subs__;
                      return subs__;
                    }, function(node) {
                      var oldNodes = nodes7036;
                      nodes7036 = node.contents();
                      oldNodes.replaceWith(nodes7036);
                    }));
                  }
                  renderControl1086();
                  callback(root8828); return subs__;
                  
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes7035;
                  nodes7035 = node.contents();
                  oldNodes.replaceWith(nodes7035);
                }));
                
                var oldNodes = iternode466;
                iternode466 = iternode466.contents();
                oldNodes.replaceWith(iternode466);
                
                
              }());
            }
            mobl.delayedUpdateScrollers();
            subs__.addSub(list466.addEventListener('change', function() { listSubs__.unsubscribe(); renderList466(true); }));
            subs__.addSub(items.addEventListener('change', function() { listSubs__.unsubscribe(); renderList466(true); }));
          });
        };
        renderList466();
        
        callback(root8827); return subs__;
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes7034;
        nodes7034 = node.contents();
        oldNodes.replaceWith(nodes7034);
      }));
      
      
    }
  };
  renderCond682();
  subs__.addSub(tmp6800.addEventListener('change', function() {
    renderCond682();
  }));
  
  callback(root8819); return subs__;
  
  return subs__;
};

ui.detailScreen = function(it, detail, callback, screenCallback) {
  var root8830 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  var result__ = mobl._("Detail", []);
  var tmp6774 = mobl.ref(result__);
  
  var nodes7037 = $("<span>");
  root8830.append(nodes7037);
  subs__.addSub((ui.header)(tmp6774, mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root8831 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp6773 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp6772 = mobl.ref(result__);
    
    var nodes7038 = $("<span>");
    root8831.append(nodes7038);
    subs__.addSub((ui.backButton)(tmp6772, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp6773, function(_, callback) {
      var root8832 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root8832); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes7038;
      nodes7038 = node.contents();
      oldNodes.replaceWith(nodes7038);
    }));
    callback(root8831); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes7037;
    nodes7037 = node.contents();
    oldNodes.replaceWith(nodes7037);
  }));
  var nodes7039 = $("<span>");
  root8830.append(nodes7039);
  subs__.addSub(detail.addEventListener('change', function() {
    renderControl1087();
  }));
  
  function renderControl1087() {
    subs__.addSub((detail.get())(it, function(elements, callback) {
      var root8833 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root8833); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes7039;
      nodes7039 = node.contents();
      oldNodes.replaceWith(nodes7039);
    }));
  }
  renderControl1087();
  callback(root8830); return subs__;
  
  
  return subs__;
};
ui.selectedItemStyle = 'ui__selectedItemStyle';

ui.zoomList = function(coll, listCtrl, zoomCtrl, elements, callback) {
  var root8834 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var selected = mobl.ref(null);
  var nodes7040 = $("<span>");
  root8834.append(nodes7040);
  subs__.addSub((ui.group)(function(_, callback) {
    var root8835 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var node2683 = mobl.loadingSpan();
    root8835.append(node2683);
    var list467;
    var listSubs__ = new mobl.CompSubscription();
    subs__.addSub(listSubs__);
    var renderList467 = function() {
      var subs__ = listSubs__;
      list467 = coll.get();
      list467.list(function(results467) {
        node2683.empty();
        for(var i1205 = 0; i1205 < results467.length; i1205++) {
          (function() {
            var iternode467 = $("<span>");
            node2683.append(iternode467);
            var it;
            it = mobl.ref(mobl.ref(results467), i1205);
            var result__ = it.get() == selected.get();
            var tmp6779 = mobl.ref(result__);
            subs__.addSub(it.addEventListener('change', function() {
              tmp6779.set(it.get() == selected.get());
            }));
            subs__.addSub(selected.addEventListener('change', function() {
              tmp6779.set(it.get() == selected.get());
            }));
            
            
            var node2684 = $("<span>");
            iternode467.append(node2684);
            var condSubs685 = new mobl.CompSubscription();
            subs__.addSub(condSubs685);
            var oldValue685;
            var renderCond685 = function() {
              var value1529 = tmp6779.get();
              if(oldValue685 === value1529) return;
              oldValue685 = value1529;
              var subs__ = condSubs685;
              subs__.unsubscribe();
              node2684.empty();
              if(value1529) {
                var nodes7041 = $("<span>");
                node2684.append(nodes7041);
                subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), mobl.ref(null), mobl.ref(null), mobl.ref(false), function(_, callback) {
                  var root8836 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  var nodes7042 = $("<span>");
                  root8836.append(nodes7042);
                  subs__.addSub(zoomCtrl.addEventListener('change', function() {
                    renderControl1088();
                  }));
                  
                  function renderControl1088() {
                    subs__.addSub((zoomCtrl.get())(it, function(elements, callback) {
                      var root8837 = $("<span>");
                      var subs__ = new mobl.CompSubscription();
                      callback(root8837); return subs__;
                      return subs__;
                    }, function(node) {
                      var oldNodes = nodes7042;
                      nodes7042 = node.contents();
                      oldNodes.replaceWith(nodes7042);
                    }));
                  }
                  renderControl1088();
                  callback(root8836); return subs__;
                  
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes7041;
                  nodes7041 = node.contents();
                  oldNodes.replaceWith(nodes7041);
                }));
                
                
              } else {
                var result__ = function(event, callback) {
                                 if(event && event.stopPropagation) event.stopPropagation();
                                 var result__ = it.get();
                                 selected.set(result__);
                                 if(callback && callback.apply) callback(); return;
                               };
                var tmp6778 = mobl.ref(result__);
                
                var nodes7043 = $("<span>");
                node2684.append(nodes7043);
                subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp6778, mobl.ref(null), mobl.ref(true), function(_, callback) {
                  var root8838 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  var nodes7044 = $("<span>");
                  root8838.append(nodes7044);
                  subs__.addSub(listCtrl.addEventListener('change', function() {
                    renderControl1089();
                  }));
                  
                  function renderControl1089() {
                    subs__.addSub((listCtrl.get())(it, function(elements, callback) {
                      var root8839 = $("<span>");
                      var subs__ = new mobl.CompSubscription();
                      callback(root8839); return subs__;
                      return subs__;
                    }, function(node) {
                      var oldNodes = nodes7044;
                      nodes7044 = node.contents();
                      oldNodes.replaceWith(nodes7044);
                    }));
                  }
                  renderControl1089();
                  callback(root8838); return subs__;
                  
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes7043;
                  nodes7043 = node.contents();
                  oldNodes.replaceWith(nodes7043);
                }));
                
                
              }
            };
            renderCond685();
            subs__.addSub(tmp6779.addEventListener('change', function() {
              renderCond685();
            }));
            
            
            var oldNodes = iternode467;
            iternode467 = iternode467.contents();
            oldNodes.replaceWith(iternode467);
            
            
          }());
        }
        mobl.delayedUpdateScrollers();
        subs__.addSub(list467.addEventListener('change', function() { listSubs__.unsubscribe(); renderList467(true); }));
        subs__.addSub(coll.addEventListener('change', function() { listSubs__.unsubscribe(); renderList467(true); }));
      });
    };
    renderList467();
    
    callback(root8835); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes7040;
    nodes7040 = node.contents();
    oldNodes.replaceWith(nodes7040);
  }));
  callback(root8834); return subs__;
  
  return subs__;
};
ui.loadMoreStyle = 'ui__loadMoreStyle';

ui.stagedList = function(coll, listCtrl, initialItems, step, moreLabel, moreStyle, elements, callback) {
  var root8840 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var n = mobl.ref(initialItems.get());
  coll.get().count(function(result__) {
    var tmp6819 = result__;
    var total = mobl.ref(result__);
    var result__ = coll.get().limit(n.get());
    var tmp6780 = mobl.ref(result__);
    subs__.addSub(mobl.ref(coll.get().limit(n.get())).addEventListener('change', function() {
      tmp6780.set(coll.get().limit(n.get()));
    }));
    subs__.addSub(coll.addEventListener('change', function() {
      tmp6780.set(coll.get().limit(n.get()));
    }));
    subs__.addSub(n.addEventListener('change', function() {
      tmp6780.set(coll.get().limit(n.get()));
    }));
    
    
    var node2685 = mobl.loadingSpan();
    root8840.append(node2685);
    var list468;
    var listSubs__ = new mobl.CompSubscription();
    subs__.addSub(listSubs__);
    var renderList468 = function() {
      var subs__ = listSubs__;
      list468 = tmp6780.get();
      list468.list(function(results468) {
        node2685.empty();
        for(var i1206 = 0; i1206 < results468.length; i1206++) {
          (function() {
            var iternode468 = $("<span>");
            node2685.append(iternode468);
            var it;
            it = mobl.ref(mobl.ref(results468), i1206);
            var nodes7045 = $("<span>");
            iternode468.append(nodes7045);
            subs__.addSub(listCtrl.addEventListener('change', function() {
              renderControl1090();
            }));
            
            function renderControl1090() {
              subs__.addSub((listCtrl.get())(it, function(elements, callback) {
                var root8841 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                callback(root8841); return subs__;
                return subs__;
              }, function(node) {
                var oldNodes = nodes7045;
                nodes7045 = node.contents();
                oldNodes.replaceWith(nodes7045);
              }));
            }
            renderControl1090();
            
            var oldNodes = iternode468;
            iternode468 = iternode468.contents();
            oldNodes.replaceWith(iternode468);
            
            
          }());
        }
        mobl.delayedUpdateScrollers();
        subs__.addSub(list468.addEventListener('change', function() { listSubs__.unsubscribe(); renderList468(true); }));
        subs__.addSub(tmp6780.addEventListener('change', function() { listSubs__.unsubscribe(); renderList468(true); }));
      });
    };
    renderList468();
    
    var result__ = n.get() < total.get();
    var tmp6782 = mobl.ref(result__);
    subs__.addSub(n.addEventListener('change', function() {
      tmp6782.set(n.get() < total.get());
    }));
    subs__.addSub(total.addEventListener('change', function() {
      tmp6782.set(n.get() < total.get());
    }));
    
    
    var node2686 = $("<span>");
    root8840.append(node2686);
    var condSubs686 = new mobl.CompSubscription();
    subs__.addSub(condSubs686);
    var oldValue686;
    var renderCond686 = function() {
      var value1530 = tmp6782.get();
      if(oldValue686 === value1530) return;
      oldValue686 = value1530;
      var subs__ = condSubs686;
      subs__.unsubscribe();
      node2686.empty();
      if(value1530) {
        var result__ = function(event, callback) {
                         if(event && event.stopPropagation) event.stopPropagation();
                         var result__ = n.get() + step.get();
                         n.set(result__);
                         if(callback && callback.apply) callback(); return;
                       };
        var tmp6781 = mobl.ref(result__);
        
        var nodes7046 = $("<span>");
        node2686.append(nodes7046);
        subs__.addSub((mobl.block)(moreStyle, mobl.ref(null), tmp6781, mobl.ref(null), function(_, callback) {
          var root8842 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          var nodes7047 = $("<span>");
          root8842.append(nodes7047);
          subs__.addSub((mobl.label)(moreLabel, mobl.ref(null), mobl.ref(null), function(_, callback) {
            var root8843 = $("<span>");
            var subs__ = new mobl.CompSubscription();
            callback(root8843); return subs__;
            return subs__;
          }, function(node) {
            var oldNodes = nodes7047;
            nodes7047 = node.contents();
            oldNodes.replaceWith(nodes7047);
          }));
          callback(root8842); return subs__;
          
          return subs__;
        }, function(node) {
          var oldNodes = nodes7046;
          nodes7046 = node.contents();
          oldNodes.replaceWith(nodes7046);
        }));
        
        
      } else {
        
      }
    };
    renderCond686();
    subs__.addSub(tmp6782.addEventListener('change', function() {
      renderCond686();
    }));
    
    callback(root8840); return subs__;
    
    
  });
  return subs__;
};

ui.markableList = function(items, elements, callback) {
  var root8844 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes7048 = $("<span>");
  root8844.append(nodes7048);
  subs__.addSub((ui.group)(function(_, callback) {
    var root8845 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var node2687 = mobl.loadingSpan();
    root8845.append(node2687);
    var list469;
    var listSubs__ = new mobl.CompSubscription();
    subs__.addSub(listSubs__);
    var renderList469 = function() {
      var subs__ = listSubs__;
      list469 = items.get();
      list469.list(function(results469) {
        node2687.empty();
        for(var i1207 = 0; i1207 < results469.length; i1207++) {
          (function() {
            var iternode469 = $("<span>");
            node2687.append(iternode469);
            var checked;var it;
            checked = mobl.ref(mobl.ref(mobl.ref(results469), i1207), "_1");it = mobl.ref(mobl.ref(mobl.ref(results469), i1207), "_2");
            var nodes7049 = $("<span>");
            iternode469.append(nodes7049);
            subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), mobl.ref(null), mobl.ref(null), mobl.ref(false), function(_, callback) {
              var root8846 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              var nodes7050 = $("<span>");
              root8846.append(nodes7050);
              subs__.addSub((ui.checkBox)(checked, it, mobl.ref(null), function(_, callback) {
                var root8847 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                callback(root8847); return subs__;
                return subs__;
              }, function(node) {
                var oldNodes = nodes7050;
                nodes7050 = node.contents();
                oldNodes.replaceWith(nodes7050);
              }));
              callback(root8846); return subs__;
              
              return subs__;
            }, function(node) {
              var oldNodes = nodes7049;
              nodes7049 = node.contents();
              oldNodes.replaceWith(nodes7049);
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
    
    callback(root8845); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes7048;
    nodes7048 = node.contents();
    oldNodes.replaceWith(nodes7048);
  }));
  callback(root8844); return subs__;
  
  return subs__;
};

ui.selectList = function(title, coll, doneButtonLabel, callback, screenCallback) {
  var root8848 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  
  var items = mobl.ref([]);
  var result__ = coll.get();
  coll.get().list(function(coll1525) {
    coll1525 = coll1525.reverse();
    function processOne259() {
      var it;
      it = coll1525.pop();
      var result__ = items.get().push(new mobl.Tuple(false, it));
      
      if(coll1525.length > 0) processOne259(); else rest259();
      
    }
    function rest259() {
      var nodes7051 = $("<span>");
      root8848.append(nodes7051);
      subs__.addSub((ui.header)(title, mobl.ref(false), mobl.ref(null), function(_, callback) {
        var root8849 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        var result__ = function(event, callback) {
                         if(event && event.stopPropagation) event.stopPropagation();
                         var result__ = null;
                         if(callback && callback.apply) callback(result__);
                         return;
                         if(callback && callback.apply) callback(); return;
                       };
        var tmp6783 = mobl.ref(result__);
        
        var result__ = mobl._("Back", []);
        var tmp6784 = mobl.ref(result__);
        
        var nodes7052 = $("<span>");
        root8849.append(nodes7052);
        subs__.addSub((ui.backButton)(tmp6784, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp6783, function(_, callback) {
          var root8850 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root8850); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes7052;
          nodes7052 = node.contents();
          oldNodes.replaceWith(nodes7052);
        }));
        var result__ = function(event, callback) {
                         if(event && event.stopPropagation) event.stopPropagation();
                         var result__ = [];
                         var selected = result__;
                         var result__ = items.get();
                         items.get().list(function(coll1524) {
                           coll1524 = coll1524.reverse();
                           function processOne258() {
                             var checked;var it;
                             var tmp6821 = coll1524.pop();
                             checked = tmp6821._1;it = tmp6821._2;
                             var result__ = checked;
                             if(result__) {
                               var result__ = selected.push(it);
                               
                               if(coll1524.length > 0) processOne258(); else rest258();
                               
                             } else {
                               {
                                 
                                 if(coll1524.length > 0) processOne258(); else rest258();
                                 
                               }
                             }
                           }
                           function rest258() {
                             var result__ = selected;
                             if(screenCallback) screenCallback(result__);
                             return;
                             if(callback && callback.apply) callback(); return;
                           }
                           if(coll1524.length > 0) processOne258(); else rest258();
                         });
                         
                       };
        var tmp6785 = mobl.ref(result__);
        
        var nodes7053 = $("<span>");
        root8849.append(nodes7053);
        subs__.addSub((ui.button)(doneButtonLabel, mobl.ref(ui.buttonStyle), mobl.ref(ui.buttonPushedStyle), tmp6785, function(_, callback) {
          var root8851 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root8851); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes7053;
          nodes7053 = node.contents();
          oldNodes.replaceWith(nodes7053);
        }));
        callback(root8849); return subs__;
        
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes7051;
        nodes7051 = node.contents();
        oldNodes.replaceWith(nodes7051);
      }));
      var nodes7054 = $("<span>");
      root8848.append(nodes7054);
      subs__.addSub((ui.markableList)(items, function(_, callback) {
        var root8852 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root8852); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes7054;
        nodes7054 = node.contents();
        oldNodes.replaceWith(nodes7054);
      }));
      callback(root8848); return subs__;
      
      
    }
    if(coll1525.length > 0) processOne259(); else rest259();
  });
  
  return subs__;
};

ui.searchList = function(Ent, masterItem, detailItem, resultLimit, searchTermPlaceholder, elements, callback) {
  var root8853 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var phrase = mobl.ref("");
  var nodes7055 = $("<span>");
  root8853.append(nodes7055);
  subs__.addSub((ui.searchBox)(phrase, searchTermPlaceholder, mobl.ref(null), mobl.ref(null), function(_, callback) {
    var root8854 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root8854); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes7055;
    nodes7055 = node.contents();
    oldNodes.replaceWith(nodes7055);
  }));
  var result__ = Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get());
  var tmp6786 = mobl.ref(result__);
  subs__.addSub(mobl.ref(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get())).addEventListener('change', function() {
    tmp6786.set(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
  }));
  subs__.addSub(mobl.ref(Ent.get().searchPrefix(phrase.get())).addEventListener('change', function() {
    tmp6786.set(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
  }));
  subs__.addSub(Ent.addEventListener('change', function() {
    tmp6786.set(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
  }));
  subs__.addSub(phrase.addEventListener('change', function() {
    tmp6786.set(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
  }));
  subs__.addSub(resultLimit.addEventListener('change', function() {
    tmp6786.set(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
  }));
  
  var nodes7056 = $("<span>");
  root8853.append(nodes7056);
  subs__.addSub((ui.masterDetail)(tmp6786, masterItem, detailItem, function(_, callback) {
    var root8855 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root8855); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes7056;
    nodes7056 = node.contents();
    oldNodes.replaceWith(nodes7056);
  }));
  callback(root8853); return subs__;
  
  
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
  var root8856 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var activeSection = mobl.ref(activeSection.get() ? activeSection.get() : sections.get().get(0)._1);
  var nodes7057 = $("<span>");
  root8856.append(nodes7057);
  subs__.addSub((mobl.block)(mobl.ref(ui.accordionStyle), mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
    var root8857 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var node2688 = mobl.loadingSpan();
    root8857.append(node2688);
    var list470;
    var listSubs__ = new mobl.CompSubscription();
    subs__.addSub(listSubs__);
    var renderList470 = function() {
      var subs__ = listSubs__;
      list470 = sections.get();
      list470.list(function(results470) {
        node2688.empty();
        for(var i1208 = 0; i1208 < results470.length; i1208++) {
          (function() {
            var iternode470 = $("<span>");
            node2688.append(iternode470);
            var sectionName;var sectionControl;
            sectionName = mobl.ref(mobl.ref(mobl.ref(results470), i1208), "_1");sectionControl = mobl.ref(mobl.ref(mobl.ref(results470), i1208), "_2");
            var result__ = activeSection.get() == sectionName.get() ? ui.activeSectionHeaderStyle : ui.inActiveSectionHeaderStyle;
            var tmp6788 = mobl.ref(result__);
            subs__.addSub(activeSection.addEventListener('change', function() {
              tmp6788.set(activeSection.get() == sectionName.get() ? ui.activeSectionHeaderStyle : ui.inActiveSectionHeaderStyle);
            }));
            subs__.addSub(sectionName.addEventListener('change', function() {
              tmp6788.set(activeSection.get() == sectionName.get() ? ui.activeSectionHeaderStyle : ui.inActiveSectionHeaderStyle);
            }));
            subs__.addSub(mobl.ref(ui.activeSectionHeaderStyle).addEventListener('change', function() {
              tmp6788.set(activeSection.get() == sectionName.get() ? ui.activeSectionHeaderStyle : ui.inActiveSectionHeaderStyle);
            }));
            subs__.addSub(mobl.ref(ui.inActiveSectionHeaderStyle).addEventListener('change', function() {
              tmp6788.set(activeSection.get() == sectionName.get() ? ui.activeSectionHeaderStyle : ui.inActiveSectionHeaderStyle);
            }));
            
            var result__ = function(event, callback) {
                             if(event && event.stopPropagation) event.stopPropagation();
                             var result__ = sectionName.get();
                             activeSection.set(result__);
                             if(callback && callback.apply) callback(); return;
                           };
            var tmp6787 = mobl.ref(result__);
            
            var nodes7058 = $("<span>");
            iternode470.append(nodes7058);
            subs__.addSub((mobl.span)(tmp6788, mobl.ref(null), tmp6787, mobl.ref(null), function(_, callback) {
              var root8858 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              var nodes7059 = $("<span>");
              root8858.append(nodes7059);
              subs__.addSub((mobl.label)(sectionName, mobl.ref(null), mobl.ref(null), function(_, callback) {
                var root8859 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                callback(root8859); return subs__;
                return subs__;
              }, function(node) {
                var oldNodes = nodes7059;
                nodes7059 = node.contents();
                oldNodes.replaceWith(nodes7059);
              }));
              callback(root8858); return subs__;
              
              return subs__;
            }, function(node) {
              var oldNodes = nodes7058;
              nodes7058 = node.contents();
              oldNodes.replaceWith(nodes7058);
            }));
            var result__ = activeSection.get() == sectionName.get() ? ui.activeSectionStyle : ui.inActiveSectionStyle;
            var tmp6789 = mobl.ref(result__);
            subs__.addSub(activeSection.addEventListener('change', function() {
              tmp6789.set(activeSection.get() == sectionName.get() ? ui.activeSectionStyle : ui.inActiveSectionStyle);
            }));
            subs__.addSub(sectionName.addEventListener('change', function() {
              tmp6789.set(activeSection.get() == sectionName.get() ? ui.activeSectionStyle : ui.inActiveSectionStyle);
            }));
            subs__.addSub(mobl.ref(ui.activeSectionStyle).addEventListener('change', function() {
              tmp6789.set(activeSection.get() == sectionName.get() ? ui.activeSectionStyle : ui.inActiveSectionStyle);
            }));
            subs__.addSub(mobl.ref(ui.inActiveSectionStyle).addEventListener('change', function() {
              tmp6789.set(activeSection.get() == sectionName.get() ? ui.activeSectionStyle : ui.inActiveSectionStyle);
            }));
            
            var nodes7060 = $("<span>");
            iternode470.append(nodes7060);
            subs__.addSub((mobl.block)(tmp6789, mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
              var root8860 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              var nodes7061 = $("<span>");
              root8860.append(nodes7061);
              subs__.addSub(sectionControl.addEventListener('change', function() {
                renderControl1091();
              }));
              
              function renderControl1091() {
                subs__.addSub((sectionControl.get())(function(elements, callback) {
                  var root8861 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  callback(root8861); return subs__;
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes7061;
                  nodes7061 = node.contents();
                  oldNodes.replaceWith(nodes7061);
                }));
              }
              renderControl1091();
              callback(root8860); return subs__;
              
              return subs__;
            }, function(node) {
              var oldNodes = nodes7060;
              nodes7060 = node.contents();
              oldNodes.replaceWith(nodes7060);
            }));
            
            var oldNodes = iternode470;
            iternode470 = iternode470.contents();
            oldNodes.replaceWith(iternode470);
            
            
            
          }());
        }
        mobl.delayedUpdateScrollers();
        subs__.addSub(list470.addEventListener('change', function() { listSubs__.unsubscribe(); renderList470(true); }));
        subs__.addSub(sections.addEventListener('change', function() { listSubs__.unsubscribe(); renderList470(true); }));
      });
    };
    renderList470();
    
    callback(root8857); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes7057;
    nodes7057 = node.contents();
    oldNodes.replaceWith(nodes7057);
  }));
  callback(root8856); return subs__;
  
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
  var root8862 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node2689 = $("<table>");
  
  var ref2501 = style;
  if(ref2501.get() !== null) {
    node2689.attr('class', ref2501.get());
    subs__.addSub(ref2501.addEventListener('change', function(_, ref, val) {
      node2689.attr('class', val);
    }));
    
  }
  subs__.addSub(ref2501.rebind());
  
  var nodes7062 = $("<span>");
  node2689.append(nodes7062);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl1092();
  }));
  
  function renderControl1092() {
    subs__.addSub((elements)(function(elements, callback) {
      var root8863 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root8863); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes7062;
      nodes7062 = node.contents();
      oldNodes.replaceWith(nodes7062);
    }));
  }
  renderControl1092();
  root8862.append(node2689);
  callback(root8862); return subs__;
  
  
  return subs__;
};

ui.row = function(style, elements, callback) {
  var root8864 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node2690 = $("<tr>");
  
  var ref2502 = style;
  if(ref2502.get() !== null) {
    node2690.attr('class', ref2502.get());
    subs__.addSub(ref2502.addEventListener('change', function(_, ref, val) {
      node2690.attr('class', val);
    }));
    
  }
  subs__.addSub(ref2502.rebind());
  
  var nodes7063 = $("<span>");
  node2690.append(nodes7063);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl1093();
  }));
  
  function renderControl1093() {
    subs__.addSub((elements)(function(elements, callback) {
      var root8865 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root8865); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes7063;
      nodes7063 = node.contents();
      oldNodes.replaceWith(nodes7063);
    }));
  }
  renderControl1093();
  root8864.append(node2690);
  callback(root8864); return subs__;
  
  
  return subs__;
};

ui.cell = function(width, style, elements, callback) {
  var root8866 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node2691 = $("<td>");
  
  var ref2503 = width;
  if(ref2503.get() !== null) {
    node2691.attr('width', ref2503.get());
    subs__.addSub(ref2503.addEventListener('change', function(_, ref, val) {
      node2691.attr('width', val);
    }));
    
  }
  subs__.addSub(ref2503.rebind());
  
  var ref2504 = style;
  if(ref2504.get() !== null) {
    node2691.attr('class', ref2504.get());
    subs__.addSub(ref2504.addEventListener('change', function(_, ref, val) {
      node2691.attr('class', val);
    }));
    
  }
  subs__.addSub(ref2504.rebind());
  
  var nodes7064 = $("<span>");
  node2691.append(nodes7064);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl1094();
  }));
  
  function renderControl1094() {
    subs__.addSub((elements)(function(elements, callback) {
      var root8867 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root8867); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes7064;
      nodes7064 = node.contents();
      oldNodes.replaceWith(nodes7064);
    }));
  }
  renderControl1094();
  root8866.append(node2691);
  callback(root8866); return subs__;
  
  
  return subs__;
};

ui.col = function(width, style, elements, callback) {
  var root8868 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node2692 = $("<td>");
  
  var ref2505 = width;
  if(ref2505.get() !== null) {
    node2692.attr('width', ref2505.get());
    subs__.addSub(ref2505.addEventListener('change', function(_, ref, val) {
      node2692.attr('width', val);
    }));
    
  }
  subs__.addSub(ref2505.rebind());
  
  var ref2506 = style;
  if(ref2506.get() !== null) {
    node2692.attr('class', ref2506.get());
    subs__.addSub(ref2506.addEventListener('change', function(_, ref, val) {
      node2692.attr('class', val);
    }));
    
  }
  subs__.addSub(ref2506.rebind());
  
  var nodes7065 = $("<span>");
  node2692.append(nodes7065);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl1095();
  }));
  
  function renderControl1095() {
    subs__.addSub((elements)(function(elements, callback) {
      var root8869 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root8869); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes7065;
      nodes7065 = node.contents();
      oldNodes.replaceWith(nodes7065);
    }));
  }
  renderControl1095();
  root8868.append(node2692);
  callback(root8868); return subs__;
  
  
  return subs__;
};

ui.headerCol = function(width, style, elements, callback) {
  var root8870 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node2693 = $("<td>");
  
  var ref2507 = width;
  if(ref2507.get() !== null) {
    node2693.attr('width', ref2507.get());
    subs__.addSub(ref2507.addEventListener('change', function(_, ref, val) {
      node2693.attr('width', val);
    }));
    
  }
  subs__.addSub(ref2507.rebind());
  
  var ref2508 = style;
  if(ref2508.get() !== null) {
    node2693.attr('class', ref2508.get());
    subs__.addSub(ref2508.addEventListener('change', function(_, ref, val) {
      node2693.attr('class', val);
    }));
    
  }
  subs__.addSub(ref2508.rebind());
  
  
  var node2694 = $("<strong>");
  
  var nodes7066 = $("<span>");
  node2694.append(nodes7066);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl1096();
  }));
  
  function renderControl1096() {
    subs__.addSub((elements)(function(elements, callback) {
      var root8871 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root8871); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes7066;
      nodes7066 = node.contents();
      oldNodes.replaceWith(nodes7066);
    }));
  }
  renderControl1096();
  node2693.append(node2694);
  root8870.append(node2693);
  callback(root8870); return subs__;
  
  
  
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
  items.list(function(coll1526) {
    coll1526 = coll1526.reverse();
    function processOne260() {
      var item;
      item = coll1526.pop();
      var result__ = item == it;
      if(result__) {
        var result__ = counter;
        if(callback && callback.apply) callback(result__);
        return;
        var result__ = counter + 1;
        counter = result__;
        
        if(coll1526.length > 0) processOne260(); else rest260();
        
      } else {
        {
          var result__ = counter + 1;
          counter = result__;
          
          if(coll1526.length > 0) processOne260(); else rest260();
          
        }
      }
    }
    function rest260() {
      var result__ = -1;
      if(callback && callback.apply) callback(result__);
      return;
      if(callback && callback.apply) callback(); return;
    }
    if(coll1526.length > 0) processOne260(); else rest260();
  });
  
};

ui.visible = mobl.ref(true);
ui.hideCurrent = function() {
   var __this = this;
  ui.visible.set(false);
};


ui.mMasterDetail = function(items, masterItem, detail, elements, callback) {
  var root8872 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var result__ = mobl.window.get().innerWidth > 500;
  var tmp6801 = mobl.ref(result__);
  subs__.addSub(mobl.ref(mobl.window, 'innerWidth').addEventListener('change', function() {
    tmp6801.set(mobl.window.get().innerWidth > 500);
  }));
  
  
  var node2695 = $("<span>");
  root8872.append(node2695);
  var condSubs687 = new mobl.CompSubscription();
  subs__.addSub(condSubs687);
  var oldValue687;
  var renderCond687 = function() {
    var value1531 = tmp6801.get();
    if(oldValue687 === value1531) return;
    oldValue687 = value1531;
    var subs__ = condSubs687;
    subs__.unsubscribe();
    node2695.empty();
    if(value1531) {
      items.get().one(function(result__) {
        var tmp6823 = result__;
        var current = mobl.ref(result__);
        
        var node2696 = $("<div>");
        node2696.attr('width', "100%");
        
        
        var node2697 = $("<div>");
        node2697.attr('style', "float:left; width:45%; position:relative; border-right: solid 1px #cccccc;");
        
        var nodes7068 = $("<span>");
        node2697.append(nodes7068);
        subs__.addSub((ui.group)(function(_, callback) {
          var root8874 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          
          var node2700 = mobl.loadingSpan();
          root8874.append(node2700);
          var list471;
          var listSubs__ = new mobl.CompSubscription();
          subs__.addSub(listSubs__);
          var renderList471 = function() {
            var subs__ = listSubs__;
            list471 = items.get();
            list471.list(function(results471) {
              node2700.empty();
              for(var i1209 = 0; i1209 < results471.length; i1209++) {
                (function() {
                  var iternode471 = $("<span>");
                  node2700.append(iternode471);
                  var it;
                  it = mobl.ref(mobl.ref(results471), i1209);
                  var result__ = it.get() == current.get();
                  var tmp6798 = mobl.ref(result__);
                  subs__.addSub(it.addEventListener('change', function() {
                    tmp6798.set(it.get() == current.get());
                  }));
                  subs__.addSub(current.addEventListener('change', function() {
                    tmp6798.set(it.get() == current.get());
                  }));
                  
                  
                  var node2701 = $("<span>");
                  iternode471.append(node2701);
                  var condSubs689 = new mobl.CompSubscription();
                  subs__.addSub(condSubs689);
                  var oldValue689;
                  var renderCond689 = function() {
                    var value1533 = tmp6798.get();
                    if(oldValue689 === value1533) return;
                    oldValue689 = value1533;
                    var subs__ = condSubs689;
                    subs__.unsubscribe();
                    node2701.empty();
                    if(value1533) {
                      var nodes7069 = $("<span>");
                      node2701.append(nodes7069);
                      subs__.addSub((ui.item)(mobl.ref(ui.selectedItemStyle), mobl.ref(ui.itemPushedStyle), mobl.ref(null), mobl.ref(null), mobl.ref(false), function(_, callback) {
                        var root8875 = $("<span>");
                        var subs__ = new mobl.CompSubscription();
                        ui.indexOf(it.get(), items.get(), function(result__) {
                          var tmp6826 = result__;
                          var tmp6795 = mobl.ref(result__);
                          subs__.addSub(it.addEventListener('change', function() {
                            ui.indexOf(it.get(), items.get(), function(result__) {
                              var tmp6824 = result__;
                              var result__ = tmp6824;
                              tmp6795.set(result__);
                              
                            });
                          }));
                          subs__.addSub(items.addEventListener('change', function() {
                            ui.indexOf(it.get(), items.get(), function(result__) {
                              var tmp6825 = result__;
                              var result__ = tmp6825;
                              tmp6795.set(result__);
                              
                            });
                          }));
                          
                          var nodes7070 = $("<span>");
                          root8875.append(nodes7070);
                          subs__.addSub(masterItem.addEventListener('change', function() {
                            renderControl1098();
                          }));
                          
                          function renderControl1098() {
                            subs__.addSub((masterItem.get())(it, tmp6795, function(elements, callback) {
                              var root8876 = $("<span>");
                              var subs__ = new mobl.CompSubscription();
                              callback(root8876); return subs__;
                              return subs__;
                            }, function(node) {
                              var oldNodes = nodes7070;
                              nodes7070 = node.contents();
                              oldNodes.replaceWith(nodes7070);
                            }));
                          }
                          renderControl1098();
                          callback(root8875); return subs__;
                          
                        });
                        return subs__;
                      }, function(node) {
                        var oldNodes = nodes7069;
                        nodes7069 = node.contents();
                        oldNodes.replaceWith(nodes7069);
                      }));
                      
                      
                    } else {
                      var result__ = function(event, callback) {
                                       if(event && event.stopPropagation) event.stopPropagation();
                                       var result__ = it.get();
                                       current.set(result__);
                                       var result__ = true;
                                       ui.visible.set(result__);
                                       if(callback && callback.apply) callback(); return;
                                     };
                      var tmp6797 = mobl.ref(result__);
                      
                      var nodes7071 = $("<span>");
                      node2701.append(nodes7071);
                      subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp6797, mobl.ref(null), mobl.ref(true), function(_, callback) {
                        var root8877 = $("<span>");
                        var subs__ = new mobl.CompSubscription();
                        ui.indexOf(it.get(), items.get(), function(result__) {
                          var tmp6829 = result__;
                          var tmp6796 = mobl.ref(result__);
                          subs__.addSub(it.addEventListener('change', function() {
                            ui.indexOf(it.get(), items.get(), function(result__) {
                              var tmp6827 = result__;
                              var result__ = tmp6827;
                              tmp6796.set(result__);
                              
                            });
                          }));
                          subs__.addSub(items.addEventListener('change', function() {
                            ui.indexOf(it.get(), items.get(), function(result__) {
                              var tmp6828 = result__;
                              var result__ = tmp6828;
                              tmp6796.set(result__);
                              
                            });
                          }));
                          
                          var nodes7072 = $("<span>");
                          root8877.append(nodes7072);
                          subs__.addSub(masterItem.addEventListener('change', function() {
                            renderControl1099();
                          }));
                          
                          function renderControl1099() {
                            subs__.addSub((masterItem.get())(it, tmp6796, function(elements, callback) {
                              var root8878 = $("<span>");
                              var subs__ = new mobl.CompSubscription();
                              callback(root8878); return subs__;
                              return subs__;
                            }, function(node) {
                              var oldNodes = nodes7072;
                              nodes7072 = node.contents();
                              oldNodes.replaceWith(nodes7072);
                            }));
                          }
                          renderControl1099();
                          callback(root8877); return subs__;
                          
                        });
                        return subs__;
                      }, function(node) {
                        var oldNodes = nodes7071;
                        nodes7071 = node.contents();
                        oldNodes.replaceWith(nodes7071);
                      }));
                      
                      
                    }
                  };
                  renderCond689();
                  subs__.addSub(tmp6798.addEventListener('change', function() {
                    renderCond689();
                  }));
                  
                  
                  var oldNodes = iternode471;
                  iternode471 = iternode471.contents();
                  oldNodes.replaceWith(iternode471);
                  
                  
                }());
              }
              mobl.delayedUpdateScrollers();
              subs__.addSub(list471.addEventListener('change', function() { listSubs__.unsubscribe(); renderList471(true); }));
              subs__.addSub(items.addEventListener('change', function() { listSubs__.unsubscribe(); renderList471(true); }));
            });
          };
          renderList471();
          
          callback(root8874); return subs__;
          
          return subs__;
        }, function(node) {
          var oldNodes = nodes7068;
          nodes7068 = node.contents();
          oldNodes.replaceWith(nodes7068);
        }));
        node2696.append(node2697);
        
        var node2698 = $("<div>");
        node2698.attr('style', "float:left; width:54%; position:relative; margin-left: 1%;");
        
        var result__ = current.get() && ui.visible.get();
        var tmp6799 = mobl.ref(result__);
        subs__.addSub(current.addEventListener('change', function() {
          tmp6799.set(current.get() && ui.visible.get());
        }));
        subs__.addSub(ui.visible.addEventListener('change', function() {
          tmp6799.set(current.get() && ui.visible.get());
        }));
        
        
        var node2699 = $("<span>");
        node2698.append(node2699);
        var condSubs688 = new mobl.CompSubscription();
        subs__.addSub(condSubs688);
        var oldValue688;
        var renderCond688 = function() {
          var value1532 = tmp6799.get();
          if(oldValue688 === value1532) return;
          oldValue688 = value1532;
          var subs__ = condSubs688;
          subs__.unsubscribe();
          node2699.empty();
          if(value1532) {
            var nodes7067 = $("<span>");
            node2699.append(nodes7067);
            subs__.addSub(detail.addEventListener('change', function() {
              renderControl1097();
            }));
            
            function renderControl1097() {
              subs__.addSub((detail.get())(current, function(elements, callback) {
                var root8873 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                callback(root8873); return subs__;
                return subs__;
              }, function(node) {
                var oldNodes = nodes7067;
                nodes7067 = node.contents();
                oldNodes.replaceWith(nodes7067);
              }));
            }
            renderControl1097();
            
            
          } else {
            
          }
        };
        renderCond688();
        subs__.addSub(tmp6799.addEventListener('change', function() {
          renderCond688();
        }));
        
        node2696.append(node2698);
        node2695.append(node2696);
        
        
        
        
        
        
      });
    } else {
      var nodes7073 = $("<span>");
      node2695.append(nodes7073);
      subs__.addSub((ui.group)(function(_, callback) {
        var root8879 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        
        var node2702 = mobl.loadingSpan();
        root8879.append(node2702);
        var list472;
        var listSubs__ = new mobl.CompSubscription();
        subs__.addSub(listSubs__);
        var renderList472 = function() {
          var subs__ = listSubs__;
          list472 = items.get();
          list472.list(function(results472) {
            node2702.empty();
            for(var i1210 = 0; i1210 < results472.length; i1210++) {
              (function() {
                var iternode472 = $("<span>");
                node2702.append(iternode472);
                var it;
                it = mobl.ref(mobl.ref(results472), i1210);
                var result__ = function(event, callback) {
                                 if(event && event.stopPropagation) event.stopPropagation();
                                 mobl.call('ui.detailScreen', [it, detail, mobl.ref(false), mobl.ref("slide")], function(result__) {
                                 var tmp6833 = result__;
                                 if(callback && callback.apply) callback(); return;
                                 });
                               };
                var tmp6791 = mobl.ref(result__);
                
                var nodes7074 = $("<span>");
                iternode472.append(nodes7074);
                subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp6791, mobl.ref(null), mobl.ref(false), function(_, callback) {
                  var root8880 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  ui.indexOf(it.get(), items.get(), function(result__) {
                    var tmp6832 = result__;
                    var tmp6790 = mobl.ref(result__);
                    subs__.addSub(it.addEventListener('change', function() {
                      ui.indexOf(it.get(), items.get(), function(result__) {
                        var tmp6830 = result__;
                        var result__ = tmp6830;
                        tmp6790.set(result__);
                        
                      });
                    }));
                    subs__.addSub(items.addEventListener('change', function() {
                      ui.indexOf(it.get(), items.get(), function(result__) {
                        var tmp6831 = result__;
                        var result__ = tmp6831;
                        tmp6790.set(result__);
                        
                      });
                    }));
                    
                    var nodes7075 = $("<span>");
                    root8880.append(nodes7075);
                    subs__.addSub(masterItem.addEventListener('change', function() {
                      renderControl1100();
                    }));
                    
                    function renderControl1100() {
                      subs__.addSub((masterItem.get())(it, tmp6790, function(elements, callback) {
                        var root8881 = $("<span>");
                        var subs__ = new mobl.CompSubscription();
                        callback(root8881); return subs__;
                        return subs__;
                      }, function(node) {
                        var oldNodes = nodes7075;
                        nodes7075 = node.contents();
                        oldNodes.replaceWith(nodes7075);
                      }));
                    }
                    renderControl1100();
                    callback(root8880); return subs__;
                    
                  });
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes7074;
                  nodes7074 = node.contents();
                  oldNodes.replaceWith(nodes7074);
                }));
                
                var oldNodes = iternode472;
                iternode472 = iternode472.contents();
                oldNodes.replaceWith(iternode472);
                
                
              }());
            }
            mobl.delayedUpdateScrollers();
            subs__.addSub(list472.addEventListener('change', function() { listSubs__.unsubscribe(); renderList472(true); }));
            subs__.addSub(items.addEventListener('change', function() { listSubs__.unsubscribe(); renderList472(true); }));
          });
        };
        renderList472();
        
        callback(root8879); return subs__;
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes7073;
        nodes7073 = node.contents();
        oldNodes.replaceWith(nodes7073);
      }));
      
      
    }
  };
  renderCond687();
  subs__.addSub(tmp6801.addEventListener('change', function() {
    renderCond687();
  }));
  
  callback(root8872); return subs__;
  
  return subs__;
};

ui.detailScreen = function(it, detail, callback, screenCallback) {
  var root8882 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  var result__ = mobl._("Detail", []);
  var tmp6794 = mobl.ref(result__);
  
  var nodes7076 = $("<span>");
  root8882.append(nodes7076);
  subs__.addSub((ui.header)(tmp6794, mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root8883 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    mobl.sleep(500, function(result__) {
      var tmp6834 = result__;
      mathJAX.renderMaths(function(result__) {
        var tmp6835 = result__;
        var result__ = function(event, callback) {
                         if(event && event.stopPropagation) event.stopPropagation();
                         if(screenCallback) screenCallback();
                         return;
                         if(callback && callback.apply) callback(); return;
                       };
        var tmp6793 = mobl.ref(result__);
        
        var result__ = mobl._("Back", []);
        var tmp6792 = mobl.ref(result__);
        
        var nodes7077 = $("<span>");
        root8883.append(nodes7077);
        subs__.addSub((ui.backButton)(tmp6792, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp6793, function(_, callback) {
          var root8884 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root8884); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes7077;
          nodes7077 = node.contents();
          oldNodes.replaceWith(nodes7077);
        }));
        callback(root8883); return subs__;
        
      });
    });
    return subs__;
  }, function(node) {
    var oldNodes = nodes7076;
    nodes7076 = node.contents();
    oldNodes.replaceWith(nodes7076);
  }));
  var nodes7078 = $("<span>");
  root8882.append(nodes7078);
  subs__.addSub(detail.addEventListener('change', function() {
    renderControl1101();
  }));
  
  function renderControl1101() {
    subs__.addSub((detail.get())(it, function(elements, callback) {
      var root8885 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root8885); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes7078;
      nodes7078 = node.contents();
      oldNodes.replaceWith(nodes7078);
    }));
  }
  renderControl1101();
  callback(root8882); return subs__;
  
  
  return subs__;
};
ui.activeTabButtonStyle = 'ui__activeTabButtonStyle';
ui.inActiveTabButtonStyle = 'ui__inActiveTabButtonStyle';
ui.section = 'ui__section';
ui.logoStyle = 'ui__logoStyle';
ui.delStyle = 'ui__delStyle';
ui.delPushedStyle = 'ui__delPushedStyle';
ui.itemStyle = 'ui__itemStyle';
ui.itemStyle = 'ui__itemStyle';
ui.itemPushedStyle = 'ui__itemPushedStyle';
