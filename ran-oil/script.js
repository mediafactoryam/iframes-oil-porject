anychart.onDocumentReady(function () {
  let data = {
    nodes: [
      {
        id: "ranoil",
        title: "«Ռան-օյլ» ՍՊԸ",
        x: 0,
        y: 100,
        height: 40,
        fill: {
          src: "https://i.ibb.co/x14wB6F/ranoil.png"
        }
      },
      {
        id: "silkoncern",
        title: "«Սիլ կապիտալ քոնսթրաքշն»",
        collapse: true,
        x: 700,
        y: 100,
        height: 40,
        fill: {
          src: "https://i.ibb.co/Vq7972s/sil.png"
        }
      },
      {
        id: "megatrade",
        title: "«Մեգաթրեյդ» ՍՊԸ",
        x: 450,
        y: 100,
        height: 40,
        fill: {
          src: "https://i.ibb.co/J3fFwjn/comp.png"
        }
      },
      {
        id: "grzo",
        title: "Խաչատուր Սուքիասյան",
        x: 50,
        y: 400,
        height: 40,
        fill: {
          src: "https://i.ibb.co/8PK0cLt/grzo.jpg"
        }
      },
      {
        id: "tigranbadalyan",
        title: "Տիգրան Բադալյան",
        x: 550,
        y: 400,
        height: 40,
        fill: {
          src: "https://i.ibb.co/B3YpCbL/man.png"
        }
      }
    ],
    edges: [
      {
        from: "ranoil",
        to: "megatrade",
        title: "«Ռան-օյլ» բենզ. բենզին լցնելիս տվեցին «Մեգաթրեյդ» ՍՊԸ-ի կտրոն"
      },
      {
        from: "vardan onanyan",
        to: "titan petrol",
        title: "Սեփականատեր"
      },
      {
        from: "grzo",
        to: "megatrade",
        title: "Բաժնետեր"
      },

      {
        from: "tigranbadalyan",
        to: "megatrade",
        title: "Բաժնետեր"
      },
      {
        from: "tigranbadalyan",
        to: "silkoncern",
        title: "Բաժնետեր"
      }
    ]
  };

  // create chart from loaded data
  var chart = anychart.graph(data);
  // set title
  chart.title("«Ռան-օյլ»ՍՊԸ-ն 2021 թվականին ձեռք է բերել խոշոր գործարար Խաչատուր Սուքիասյանը");
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
