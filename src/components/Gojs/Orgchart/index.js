import React from "react";
import { ReactDiagram } from "gojs-react";
import * as go from "gojs";
import demoImg from "../../../assert/demo.png";
import "./index.scss";
const OrgChart = ({ Show_AddPersion_Model }) => {
  const treemap = [
    {
      key: 1,
      parent: 1,
      name: "Alonzo",
      relationship: "seenivasan",
      phone: "91+ 9677978279",
      source: "../../../assert/image21.png",
      pic: demoImg,
    },
    {
      key: 2,
      parent: 1,
      name: "Alonzo",
      relationship: "seenivasan",
      phone: "91+ 9677978279",
      source: "../../../assert/image21.png",
      pic: demoImg,
    },
    {
      key: 2,
      parent: 1,
      name: "Alonzo",
      relationship: "seenivasan",
      phone: "91+ 9677978279",

      pic: demoImg,
    },
    {
      key: 3,
      parent: 1,
      name: "Alonzo",
      relationship: "seenivasan",
      phone: "91+ 9677978279",

      pic: demoImg,
    },
    {
      key: 4,
      parent: 1,
      name: "Alonzo",
      relationship: "seenivasan",
      phone: "91+ 9677978279",
      source: "../../../assert/image21.png",
      pic: demoImg,
    },
  ];

  function initDiagram() {
    const $ = go.GraphObject.make;

    const diagram = new go.Diagram({
      "undoManager.isEnabled": true,
      allowCopy: false,
      allowDelete: false,
      isReadOnly: true,
      //initialAutoScale: go.Diagram.Uniform,
      maxSelectionCount: 1, // users can select only one part at a time
      validCycle: go.Diagram.CycleDestinationTree,
      layout: $(go.TreeLayout, {
        treeStyle: go.TreeLayout.StyleLastParents,
        arrangement: go.TreeLayout.ArrangementHorizontal,
        // properties for most of the tree:
        angle: 90,
        layerSpacing: 35,
        // properties for the "last parents":
        alternateAngle: 90,
        alternateLayerSpacing: 35,
        alternateAlignment: go.TreeLayout.AlignmentBus,
        alternateNodeSpacing: 20,
      }),
    });
    diagram.scale = 1;
    diagram.commandHandler.scrollToPart(diagram.findNodeForKey(1));

    const levelColors = [
      $(go.Brush, "Linear", {
        0.8: "#60CAC6",
        0.0: "#346362",
        start: go.Spot.Right,
        end: go.Spot.Left,
      }),
      $(go.Brush, "Linear", {
        0.8: "#0085ff",
        0.0: "#355d81",
        start: go.Spot.Right,
        end: go.Spot.Left,
      }),
      $(go.Brush, "Linear", {
        0.8: "#003d76",
        0.0: "#100b0b",
        start: go.Spot.Right,
        end: go.Spot.Left,
      }),
    ];

    diagram.layout.commitNodes = function () {
      // method override must be function, not =>
      go.TreeLayout.prototype.commitNodes.call(this); // do the standard behavior
      // then go through all of the vertexes and set their corresponding node's Shape.fill
      // to a brush dependent on the TreeVertex.level value
      diagram.layout.network.vertexes.each((v) => {
        if (v.node) {
          const level = v.level % levelColors.length;
          const color = levelColors[level];
          const shape = v.node.findObject("SHAPE");
          if (shape)
            // shape.stroke = $(go.Brush, "Linear", {
            //   0: color,
            //   1: go.Brush.lightenBy(color, 0.05),
            //   start: go.Spot.Left,
            //   end: go.Spot.Right,
            // });
            shape.fill = color;
        }
      });
    };
    // function mayWorkFor(node1, node2) {
    //   if (!(node1 instanceof go.Node)) return false; // must be a Node
    //   if (node1 === node2) return false; // cannot work for yourself
    //   if (node2.isInTreeOf(node1)) return false; // cannot work for someone who works for you
    //   return true;
    // }
    function textStyle() {
      return { font: "9pt  Segoe UI,sans-serif", stroke: "white" };
    }
    function findHeadShot(pic) {
      if (!pic) return "../../../assert/image20.png"; // There are only 16 images on the server
      return pic;
    }

    // define a simple Node template
    diagram.nodeTemplate = $(
      go.Node,
      "Spot",
      {
        mouseEnter: (e, node) =>
          (node.findObject("BUTTON").opacity = node.findObject(
            "BUTTONX"
          ).opacity =
            1),
        mouseLeave: (e, node) =>
          (node.findObject("BUTTON").opacity = node.findObject(
            "BUTTONX"
          ).opacity =
            0),
        // handle dragging a Node onto a Node to (maybe) change the reporting relationship
      },
      // for sorting, have the Node.text be the data.name
      // bind the Part.layerName to control the Node's layer depending on whether it isSelected
      new go.Binding("layerName", "isSelected", (sel) =>
        sel ? "Foreground" : ""
      ).ofObject(),
      $(
        go.Panel,
        "Auto",
        { name: "BODY" },
        // define the node's outer shape
        $(go.Shape, "RoundedRectangle", {
          name: "SHAPE",
          alignment: go.Spot.Center,
          stroke: "white",
          strokeWidth: 2,
          portId: "",
        }),
        $(
          go.Panel,
          "Horizontal",

          $(
            go.Panel,
            "Spot",
            { isClipping: true },
            $(go.Shape, "Circle", {
              width: 10,
            })
          ),
          $(
            go.Panel,
            "Spot",
            { isClipping: true },
            $(go.Shape, "Circle", {
              width: 50,
            }),
            $(
              go.Picture,
              {
                name: "pic",
                desiredSize: new go.Size(50, 50),

                source: "../../../assert/image20.png",
              },
              new go.Binding("source", "pic", findHeadShot)
            )
          ),

          // define the panel where the text will appear
          $(
            go.Panel,
            "Table",
            {
              minSize: new go.Size(130, NaN),
              maxSize: new go.Size(150, NaN),
              margin: new go.Margin(6, 10, 10, 6),
              defaultAlignment: go.Spot.Left,
            },
            $(go.RowColumnDefinition, { column: 2, width: 4 }),
            $(
              go.TextBlock,
              textStyle(), // the name
              {
                name: "NAMETB",
                row: 0,
                column: 0,
                columnSpan: 5,
                font: "700 18px Poppins",
                editable: false,
                isMultiline: false,
                minSize: new go.Size(50, 16),
              },
              new go.Binding("text", "name").makeTwoWay()
            ),
            $(go.TextBlock, textStyle(), { column: 2, width: 4 }),
            $(
              go.TextBlock,
              textStyle(),
              {
                row: 1,
                column: 0,
                columnSpan: 10,
                margin: 2,
                font: "500 16px Poppins",
                editable: true,
                isMultiline: false,
              },
              new go.Binding("text", "relationship").makeTwoWay()
            ),
            $(
              go.TextBlock,
              textStyle(),
              { row: 2, column: 0, font: "500 12px Poppins", margin: 2 },
              new go.Binding("text", "phone").makeTwoWay()
            )
          ) // end Table Panel
        ) // end Horizontal Panel
      ), // end Auto Panel
      $(
        "Button",
        $(go.Shape, "PlusLine", { width: 10, height: 10 }),
        {
          name: "BUTTON",
          alignment: go.Spot.Right,
          opacity: 0, // initially not visible
          click: (e, button) => Show_AddPersion_Model(button.part, diagram),
          visible: true,
        },

        // button is visible either when node is selected or on mouse-over
        new go.Binding("opacity", "isSelected", (s) => (s ? 1 : 0)).ofObject()
      ),
      new go.Binding("isTreeExpanded").makeTwoWay(),
      $(
        "TreeExpanderButton",
        {
          name: "BUTTONX",
          alignment: go.Spot.Bottom,
          opacity: 0, // initially not visible
          _treeExpandedFigure: "TriangleUp",
          _treeCollapsedFigure: "TriangleDown",
          visible: true,
        },

        // button is visible either when node is selected or on mouse-over
        new go.Binding("opacity", "isSelected", (s) => (s ? 1 : 0)).ofObject()
      )
    );
    // diagram.nodeTemplate = new go.Node("Horizontal", {
    //   background: "#44CCFF",
    // })

    //   .add(
    //     new go.Picture("../../../assert/image20.png", {
    //       margin: 10,
    //       width: 50,
    //       height: 50,
    //       background: "red",
    //     }).bind("source")
    //   )
    //   .add(
    //     new go.TextBlock("Default Text", {
    //       margin: 12,
    //       stroke: "white",
    //       font: "bold 16px sans-serif",
    //     }).bind("text", "name")
    //   )
    //   .add(
    //     new go.TextBlock("Default Text", {
    //       stroke: "white",
    //       font: "bold 16px sans-serif",
    //       margin: 20,
    //     }).bind("comment", "Comment")
    //   );

    //  function addNewpersion(node, formState) {
    //   const thisemp = node.data;

    //   const newemp = {
    //     name: "(new person)",
    //     relationship: "(relationship)",
    //     phone: "91+ 9677978279",
    //     pic: demoImg,
    //     parent: thisemp.key,
    //   };

    //     diagram.startTransaction("add person");
    //     diagram.model.addNodeData(newemp);
    //     const newnode = diagram.findNodeForData(newemp);
    //     if (newnode) newnode.location = node.location;
    //     diagram.commitTransaction("add person");
    //     diagram.commandHandler.scrollToPart(newnode);

    // }

    diagram.linkTemplate = new go.Link(
      // default routing is go.Link.Normal
      // default corner is 0
      { routing: go.Link.Orthogonal, corner: 5 }
    )
      // the link path, a Shape
      .add(new go.Shape({ strokeWidth: 3, stroke: "white" }));
    diagram.model = new go.TreeModel([...treemap]);
    return diagram;
  }

  return (
    <>
      <ReactDiagram
        initDiagram={initDiagram}
        divClassName="diagram-component"
        skipsDiagramUpdate={false}
        allowHorizontalScroll={false}
        allowVerticalScroll={false}
        initialContentAlignment={go.Spot.Center}
      ></ReactDiagram>
    </>
  );
};
export default OrgChart;
