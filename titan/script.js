anychart.onDocumentReady(function () {
  let data = {
    nodes: [
      {
        id: "titan oil",
        title: "«Տիտան օյլ» ՍՊԸ",
        x: 0,
        y: 100,
        height: 40,
        fill: {
          src: "https://i.ibb.co/5njkYhQ/titan.jpg"
        }
      },
      {
        id: "titan petrol",
        title: "«Տիտան պետրոլ» ՍՊԸ",
        x: 300,
        y: 100,
        height: 40,
        fill: {
          src: "https://i.ibb.co/5njkYhQ/titan.jpg"
        }
      },
      {
        id: "vardan onanyan",
        title: "Վարդան Օնանյան",
        x: 50,
        y: 400,
        height: 70,
        fill: {
          src: "https://i.ibb.co/Y8SGxdv/vardanon.jpg"
        }
      },
      {
        id: "togramajyan",
        title: "Արթուր Տոգրամաջյան",
        x: 550,
        y: 400,
        height: 40,
        fill: {
          src: "https://i.ibb.co/Gn82RCj/artur.jpg"
        }
      }
    ],
    edges: [
      {
        from: "vardan onanyan",
        to: "titan oil",
        title: "Սեփականատեր"
      },
      {
        from: "vardan onanyan",
        to: "titan petrol",
        title: "Սեփականատեր"
      },
      {
        from: "togramajyan",
        to: "titan oil",
        title: " Բաժնետեր 2015-2019"
      },

      {
        from: "togramajyan",
        to: "titan petrol",
        title: "Սեփականատեր"
      },
      {
        from: "kamo melkonyan",
        to: "harut pambukyan",
        title: "Բիզնես գործընկեր"
      },
      {
        from: "Rima Baghramyan",
        to: "megaoil",
        title: "Բաժնետեր"
      },
      {
        from: "Rima Baghramyan",
        to: "kamo melkonyan",
        title: "Ամուսին"
      },
      {
        from: "harut pambukyan",
        to: "maxhur",
        title: "Սեփականատեր"
      },
      {
        from: "Levon Hakobyan",
        to: "maxhur",
        title: "Տնօրեն"
      },
      {
        from: "Levon Hakobyan",
        to: "talin1",
        title: "Բաժնետեր"
      }
    ]
  };

  // create chart from loaded data
  var chart = anychart.graph(data);
  chart.interactivity().zoomOnMouseWheel(false);
  
  // set title
  chart.title("«Տիտան օյլ» ՍՊԸ-ի և «Տիտան պետրոլ» ՍՊԸ-ի բաժնետերերը");
  // access nodes
  var nodes = chart.nodes();
  chart.layout().type("fixed");
  // set the size of nodes
  nodes.normal().height(45);
  nodes.hovered().height(45);
  nodes.selected().height(45);

  // set the stroke of nodes
  // set the stroke of nodes
  nodes.normal().stroke(null);
  nodes.hovered().stroke("#20afa2", 3);
  nodes.selected().stroke("#20afa2", 3);
  // enable labels of nodes
  chart.nodes().labels().enabled(true);
  chart.edges().labels().enabled(true);

  chart.edges().normal().stroke("#20afa2", 2);
  chart.edges().hovered().stroke("#20afa2", 3);
  chart.edges().selected().stroke("#20afa2", 3);

  chart.tooltip().enabled(false);

  // configure labels of nodes
  chart.nodes().labels().format("{%title}");
  chart.nodes().labels().fontSize(15);
  chart.nodes().labels().fontWeight(600);
  chart.edges().labels().format("{%title}");
  chart.edges().labels().fontSize(10);
  // draw chart
  chart.container("container").draw();
});
