import React, { useState } from "react";
import MenuIcon from "../BoxIcon/MenuIcon";
import ExitIcon from "../BoxIcon/ExitIcon";
import PrimaryBtn from "../Button/PrimaryBtn";
import Paragraph from "../paragraph/Paragraph";
import H1 from "../Headings/H1";

function Card() {
  const [cards, setCard] = useState([]);

  const handleAddCard = () => {
    setCard([...cards, { isEditing: false }]);
  };

  const handleMenuClick = (index) => {
    setCard(
      cards.map((card, i) =>
        i === index ? { ...card, isEditing: true } : card
      )
    );
  };

  const handleExitClick = (index) => {
    setCard(
      cards.map((card, i) =>
        i === index ? { ...card, isEditing: false } : card
      )
    );
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "2rem",
        alignItems: "center",
      }}
    >
      <PrimaryBtn text="Add Card" onClick={handleAddCard} />
      <div
        className="cardWrapper"
        style={{
          display: "flex",
          gap: "5rem",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        {cards.map((item, index) => {
          return (
            <div
              key={index}
              className="Card"
              style={{
                width: "20rem",
                height: "25rem",
                // backgroundColor: "gray",
                borderRadius: "16px",
                position: "relative",
                boxShadow: "0 4px 8px 0 rgba(0,0,0,.5)",
              }}
            >
              {/* info Sec */}
              {!item.isEditing && (
                <div
                  className="infoSec"
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "1rem",
                    width: "100%",
                    height: "100%",
                    // backgroundColor: "green",
                    borderRadius: "15px",
                    position: "absolute relative",
                    padding: ".5rem",
                  }}
                >
                  <div
                    className="topBar"
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      padding: "0 .5rem",
                    }}
                  >
                    <Paragraph text="Info Section" />
                    <MenuIcon
                      fontSize="2rem"
                      textAlign="right"
                      display="inline-block"
                      onClick={() => handleMenuClick(index)}
                    />
                  </div>
                  {/* img Container */}
                  <div
                    className="imgContainer"
                    style={{
                      width: "100%",
                      height: "30%",
                      backgroundColor: "red",
                      display: "flex",
                      justifyContent: "center",
                      position: "relative",
                    }}
                  >
                    {/* bg img */}
                    <img
                      src=""
                      alt=""
                      className="profileBgImg"
                      style={{
                        width: "80%",
                        height: "100%",
                        backgroundColor: "yellow",
                        position: "absolute",
                      }}
                    />
                    {/* profile img */}
                    <img
                      src=""
                      alt=""
                      className="profileImg"
                      style={{
                        width: "5rem",
                        height: "5rem",
                        backgroundColor: "green",
                        position: "absolute",
                        bottom: "0",
                        right: "0",
                      }}
                    />
                  </div>
                  <H1 />
                  <Paragraph />

                  <PrimaryBtn
                    text="Delete Card"
                    backgroundColor="#bb2124"
                    position="absolute"
                    bottom="1rem"
                    left="35%"
                  />
                </div>
              )}

              {/* edit sec */}
              {item.isEditing && (
                <div
                  className="editSec"
                  style={{
                    width: "100%",
                    height: "100%",
                    // backgroundColor: "aqua",
                    borderRadius: "15px",
                    position: "absolute",
                    padding: ".5rem",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      padding: "0 .5rem",
                    }}
                  >
                    <Paragraph text="Edit Section" />
                    <ExitIcon
                      fontSize="2rem"
                      textAlign="right"
                      onClick={() => handleExitClick(index)}
                    />
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Card;
