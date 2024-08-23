import React, { useState } from "react";
import PrimaryBtn from "../Button/PrimaryBtn";
import Input from "../input/Input";
import Paragraph from "../paragraph/Paragraph";
import H1 from "../Headings/H1";

function Card() {
  const [cards, setCards] = useState([]);

  const handleAddCard = () => {
    setCards([
      ...cards,
      {
        isEditing: false,
        bgImgUrl: "https://via.placeholder.com/300x200.png?text=BgImg...",
        profileImgUrl: "https://via.placeholder.com/96x96.png?text=Profile...",
        heading: "Default Heading",
        paragraph: "Default paragraph",
        bgImgUrlInput: "",
        profileImgUrlInput: "",
        headingInput: "",
        paragraphInput: "",
      },
    ]);
  };

  const handleMenuClick = (index) => {
    setCards(
      cards.map((card, i) =>
        i === index ? { ...card, isEditing: true } : card
      )
    );
  };

  const handleExitClick = (index) => {
    setCards(
      cards.map((card, i) =>
        i === index ? { ...card, isEditing: false } : card
      )
    );
  };

  const handleInputChange = (index, field, value) => {
    setCards(
      cards.map((card, i) =>
        i === index ? { ...card, [`${field}Input`]: value } : card
      )
    );
  };

  const handleUpdateClick = (index) => {
    setCards(
      cards.map((card, i) =>
        i === index
          ? {
              ...card,
              bgImgUrl: card.bgImgUrlInput,
              profileImgUrl: card.profileImgUrlInput,
              heading: card.headingInput,
              paragraph: card.paragraphInput,
              isEditing: false,
            }
          : card
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
        {cards.map((card, index) => (
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
            {!card.isEditing && (
              <div
                className="infoSec"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "1rem",
                  width: "100%",
                  height: "100%",
                  borderRadius: "15px",
                  position: "absolute",
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
                  <PrimaryBtn
                    text="Edit"
                    onClick={() => handleMenuClick(index)}
                  />
                </div>
                <div
                  className="imgContainer"
                  style={{
                    width: "100%",
                    height: "35%",
                    display: "flex",
                    justifyContent: "center",
                    position: "relative",
                    borderRadius: "7px",
                    overflow: "hidden",
                  }}
                >
                  <img
                    src={
                      card.bgImgUrl ||
                      "https://via.placeholder.com/300x200.png?text=IMG"
                    }
                    alt="Background"
                    className="profileBgImg"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      objectPosition: "center",
                      position: "absolute",
                      borderRadius: "7px",
                      border: "1px solid black",
                    }}
                  />
                  <img
                    src={
                      card.profileImgUrl ||
                      "https://via.placeholder.com/300x200.png?text=IMG"
                    }
                    alt="Profile"
                    className="profileImg"
                    style={{
                      width: "6rem",
                      height: "6rem",
                      position: "absolute",
                      bottom: "8px",
                      right: "8px",
                      borderRadius: "7px",
                      border: "1px solid black",
                    }}
                  />
                </div>
                <H1 text={card.heading || "Heading Here"} />
                <Paragraph text={card.paragraph || "Paragraph Here"} />
                <PrimaryBtn
                  text="Delete Card"
                  backgroundColor="#bb2124"
                  position="absolute"
                  bottom="1rem"
                  left="35%"
                  onClick={() => setCards(cards.filter((_, i) => i !== index))}
                />
              </div>
            )}

            {card.isEditing && (
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
                  <PrimaryBtn
                    text="Exit"
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
                    value={card.bgImgUrlInput}
                    onChange={(e) =>
                      handleInputChange(index, "bgImgUrl", e.target.value)
                    }
                    onSubmit={() => handleUpdateClick(index)}
                  />
                  <Paragraph text="Profile Img Url" />
                  <Input
                    width="100%"
                    height="2rem"
                    margin=".2rem 0"
                    color="#fff"
                    backgroundColor="#373737"
                    value={card.profileImgUrlInput}
                    onChange={(e) =>
                      handleInputChange(index, "profileImgUrl", e.target.value)
                    }
                    onSubmit={() => handleUpdateClick(index)}
                  />
                  <Paragraph text="Update Heading" />
                  <Input
                    width="100%"
                    height="2rem"
                    margin=".2rem 0"
                    color="#fff"
                    backgroundColor="#373737"
                    value={card.headingInput}
                    onChange={(e) =>
                      handleInputChange(index, "heading", e.target.value)
                    }
                    onSubmit={() => handleUpdateClick(index)}
                  />
                  <Paragraph text="Update Paragraph" />
                  <Input
                    width="100%"
                    height="2rem"
                    margin=".2rem 0"
                    color="#fff"
                    backgroundColor="#373737"
                    value={card.paragraphInput}
                    onChange={(e) =>
                      handleInputChange(index, "paragraph", e.target.value)
                    }
                    onSubmit={() => handleUpdateClick(index)}
                  />
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Card;
