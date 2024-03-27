import React from "react";
import { ReactDiagram } from "gojs-react";
import * as go from "gojs";
import image20 from "../../../../assert/demo.png";

const IncrementalTree = ({ Show_AddPersion_Model }) => {
  const treemap = [
    {
      key: "1",
      parent: "1",
      name: "Alonzo",

      pic: image20,
    },
    {
      key: "2",
      parent: "3",
      name: "Alonzo",

      pic: image20,
    },
    {
      key: "3",
      parent: "1",
      name: "Alonzo",

      pic: image20,
    },
    {
      key: "4",
      parent: "2",
      name: "seeni",

      pic: image20,
    },
  ];
  function init() {
    const $ = go.GraphObject.make; // for conciseness in defining templates

    const myDiagram = new go.Diagram({
      // must name or refer to the DIV HTML element
      initialContentAlignment: go.Spot.Center,

      layout: $(go.ForceDirectedLayout),
      // moving and copying nodes also moves and copies their subtrees
      "commandHandler.copiesTree": true, // for the copy command
      "commandHandler.deletesTree": true, // for the delete command
      "draggingTool.dragsTree": true, // dragging for both move and copy
      "undoManager.isEnabled": true,
    });
    myDiagram.scale = 1;
    myDiagram.commandHandler.scrollToPart(myDiagram.findNodeForKey(1));
    function textStyle() {
      return { font: "9pt  Segoe UI,sans-serif", stroke: "white" };
    }
    function findHeadShot(pic) {
      if (!pic) return "../../../assert/image20.png"; // There are only 16 images on the server
      return pic;
    }
    myDiagram.nodeTemplate = $(
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

        $(
          go.Panel,
          "Vertical",
          $(
            go.Panel,
            "Spot",
            { scale: 2 },
            $(go.Shape, "Circle", {
              width: 51,
              height: 51,
              fill: "white",
              strokeWidth: 0,
            }),
            $(
              go.Panel,
              "Spot",
              { isClipping: true },
              $(go.Shape, "Circle", {
                width: 50,
                height: 50,
                fill: "white",
                strokeWidth: 2,
              }),
              $(
                go.Picture,
                {
                  name: "pic",
                  desiredSize: new go.Size(50, 50),
                },
                new go.Binding("source", "pic", findHeadShot)
              )
            )
          ),

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
          )
          // end Table Panel
        ) // end Horizontal Panel
      ), // end Auto Panel
      $(
        "Button",
        $(go.Shape, "PlusLine", { width: 10, height: 10 }),
        {
          name: "BUTTON",
          alignment: go.Spot.Right,
          opacity: 0, // initially not visible
          click: (e, button) => Show_AddPersion_Model(button.part, myDiagram),
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
        },
        // button is visible either when node is selected or on mouse-over
        new go.Binding("opacity", "isSelected", (s) => (s ? 1 : 0)).ofObject()
      )
    );
    // create the model with a root node data
    myDiagram.linkTemplate = new go.Link(
      // default routing is go.Link.Normal
      // default corner is 0
      { routing: go.Link.Orthogonal, corner: 5 }
    )
      // the link path, a Shape
      .add(new go.Shape({ strokeWidth: 1, stroke: "white" }));
    myDiagram.model = new go.TreeModel([...treemap]);
    // const addNewpersion = (node) => {
    //   const thisemp = node.data;
    //   myDiagram.startTransaction("add person");
    //   const newemp = {
    //     name: "(new person)",
    //     pic: image20,
    //     parent: thisemp.key,
    //   };
    //   myDiagram.model.addNodeData(newemp);
    //   const newnode = myDiagram.findNodeForData(newemp);
    //   if (newnode) newnode.location = node.location;
    //   myDiagram.commitTransaction("add person");
    //   myDiagram.commandHandler.scrollToPart(newnode);
    // };
    return myDiagram;
  }
  return (
    <>
      <ReactDiagram
        initDiagram={init}
        divClassName="diagram-component"
        allowHorizontalScroll={false}
        allowVerticalScroll={false}
        initialContentAlignment={go.Spot.Center}
      />
    </>
  );
};

export default IncrementalTree;
