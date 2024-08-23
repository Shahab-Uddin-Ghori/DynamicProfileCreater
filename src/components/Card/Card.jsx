import React, { useState } from "react";
import MenuIcon from "../BoxIcon/MenuIcon";
import ExitIcon from "../BoxIcon/ExitIcon";
import PrimaryBtn from "../Button/PrimaryBtn";
import Paragraph from "../paragraph/Paragraph";
import H1 from "../Headings/H1";
import Input from "../input/Input";
import { getDisplayValue, setDisplayValue } from "../input/inputValue";

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

  const handleDeleteCard = (index) => {
    setCard(cards.filter((_, i) => i !== index));
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
                width: "22rem",
                height: "30rem",
                borderRadius: "16px",
                position: "relative",
                boxShadow: "0 4px 8px 0 rgba(0,0,0,.5)",
              }}
            >
              {!item.isEditing && (
                <div
                  className="infoSec"
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "1rem",
                    width: "100%",
                    height: "100%",
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
                  <div
                    className="imgContainer"
                    style={{
                      width: "100%",
                      height: "35%",
                      // backgroundColor: "red",
                      display: "flex",
                      justifyContent: "center",
                      position: "relative",
                      borderRadius: "7px",
                      overflow: "hidden",
                    }}
                  >
                    {/* profile bg img */}
                    <img
                      src={
                        getDisplayValue() ||
                        "https://via.placeholder.com/300x200.png?text=BgImg..."
                      }
                      alt="img  "
                      className="profileBgImg"
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        objectPosition: "center",
                        // backgroundColor: "yellow",
                        position: "absolute",
                        borderRadius: "7px",
                        border: "1px solid black",
                      }}
                    />
                    {/* profile img */}
                    <img
                      src={
                        getDisplayValue() ||
                        "https://via.placeholder.com/96x96.png?text=Profile..."
                      }
                      alt="img"
                      className="profileImg"
                      style={{
                        width: "6rem",
                        height: "6rem",
                        // backgroundColor: "green",
                        position: "absolute",
                        bottom: "8px",
                        right: "8px",
                        borderRadius: "7px",
                        border: "1px solid black",
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
                    onClick={() => handleDeleteCard(index)}
                  />
                </div>
              )}

              {item.isEditing && (
                <div
                  className="editSec"
                  style={{
                    width: "100%",
                    height: "100%",
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
                  <div
                    className="imgUrl"
                    style={{
                      width: "100%",
                      height: "4rem",
                    }}
                  >
                    <Paragraph text="Background Img Url" />
                    <Input
                      width="100%"
                      height="2rem"
                      margin=".2rem 0"
                      color="#fff"
                      backgroundColor="#373737"
                    />
                    <Paragraph text="Profile Img Url" />
                    <Input
                      width="100%"
                      height="2rem"
                      margin=".2rem 0"
                      color="#fff"
                      backgroundColor="#373737"
                    />
                    <Paragraph text="Update Heading" />
                    <Input
                      width="100%"
                      height="2rem"
                      margin=".2rem 0"
                      color="#fff"
                      backgroundColor="#373737"
                    />
                    <Paragraph text="Update paragraph" />
                    <Input
                      width="100%"
                      height="2rem"
                      margin=".2rem 0"
                      color="#fff"
                      backgroundColor="#373737"
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
