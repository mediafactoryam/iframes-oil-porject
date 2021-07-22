anychart.onDocumentReady(function () {
  let data = {
    nodes: [
      {
        id: "cps oil",
        title: "«ՍԻՓԻԷՍ ՕՅԼ» ՍՊԸ",
        collapse: true,
        x: 100,
        y: 350,
        height: 50,
        fill: {
          src:
            "https://i.ibb.co/92Bg4YC/CPS-f25d5958-0d90-4b0f-a15b-05fbc2be65db-160x115.png"
        }
      },
      {
        id: "Ashot Salazaryan",
        title: "Աշոտ Սալազարյան",
        x: 400,
        y: 200,
        height: 70,
        fill: {
          src: "https://i.ibb.co/nz17xhx/image.jpg"
        }
      },
      {
        id: "Artur Danielyan",
        title: "Արթուր Դանիելյան",
        x: 400,
        y: 500,
        height: 50,
        fill: {
          src: "https://i.ibb.co/B3YpCbL/man.png"
        }
      },
      {
        id: "cps oil corp",
        title: "«ՍԻՓԻԷՍ ՕՅԼ ՔՈՐՓՈՐԵՅՇՆ» ՍՊԸ",
        x: 700,
        y: 350,
        height: 50,
        fill: {
          src:
            "https://i.ibb.co/92Bg4YC/CPS-f25d5958-0d90-4b0f-a15b-05fbc2be65db-160x115.png"
        }
      }
    ],
    edges: [
      {
        from: "cps oil",
        to: "Ashot Salazaryan",
        title: "Սեփականատեր"
      },
      {
        from: "cps oil",
        to: "Artur Danielyan",
        title: "Բաժնետեր"
      },

      {
        from: "cps oil corp",
        to: "Artur Danielyan",
        title: "Նախկին բաժնետեր և տնօրեն"
      },
      {
        from: "cps oil corp",
        to: "Ashot Salazaryan",
        title: "Սեփականատեր"
      }
    ]
  };

  // create chart from loaded data
  var chart = anychart.graph(data);
  chart.interactivity().zoomOnMouseWheel(false);
  
  // set title
  chart.title(
    "«Սիփիէս օյլ» և «Սիփիէս օյլ քորփորեյշն» ՍՊԸ-ները պատկանում են խոշոր գործարար, ռուսական հատուկ ծառայությունների նախկին գեներալ Աշոտ Սալազարյանին"
  );
  // access nodes
  var nodes = chart.nodes();
  chart.layout().type("fixed");
  // set the size of nodes
  nodes.normal().height(45);
  nodes.hovered().height(45);
  nodes.selected().height(45);

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
