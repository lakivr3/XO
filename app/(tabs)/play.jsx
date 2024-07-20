import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Board from "../../components/Board";
import { useEffect, useState } from "react";
import { GameState, winningCombo } from "../../components/GameData";
import Reset from "../../components/Reset";
import GameOver from "../../components/GameOver";

const PLAYER_X = "X";
const PLAYER_O = "O";

export default function HomeScreen() {
  const [tiles, setTiles] = useState(Array(9).fill(null));
  const [playerTurn, setPlayerTurn] = useState(PLAYER_X);
  const [strikeClass, setStrikeClass] = useState();
  const [gameState, setGameState] = useState(GameState.inProgres);

  const handleReset = () => {
    setGameState(GameState.inProgres);
    setTiles(Array(9).fill(null));
    setPlayerTurn(PLAYER_X);
    setStrikeClass(null);
  };

  const handleTileClick = (index) => {
    if (gameState !== GameState.inProgres) return;
    if (tiles[index] !== null) return;
    const newTiles = [...tiles];
    newTiles[index] = playerTurn;
    setTiles(newTiles);
    if (playerTurn === PLAYER_X) setPlayerTurn(PLAYER_O);
    else setPlayerTurn(PLAYER_X);
  };
  const checkWinner = (tiles, setStrikeClass, setGameState) => {
    for (const { combo, strikeClass } of winningCombo) {
      const tileValue1 = tiles[combo[0]];
      const tileValue2 = tiles[combo[1]];
      const tileValue3 = tiles[combo[2]];
      if (
        tileValue1 !== null &&
        tileValue1 === tileValue2 &&
        tileValue1 === tileValue3
      ) {
        setStrikeClass(strikeClass);
        if (tileValue1 === PLAYER_X) setGameState(GameState.playerXWins);
        else setGameState(GameState.playerOWins);
        return;
      }
    }
    const areaAllTilesFilled = tiles.every((tile) => tile !== null);
    if (areaAllTilesFilled) setGameState(GameState.draw);
  };

  useEffect(() => {
    checkWinner(tiles, setStrikeClass, setGameState);
  }, [tiles]);

  return (
    <SafeAreaView className="bg-[#23272f] flex-1 flex-col items-center relative ">
      <View className="absolute top-36">
        <GameOver gameState={gameState} />
      </View>

      <Board
        playerTurn={playerTurn}
        tiles={tiles}
        setTiles={setTiles}
        strikeClass={strikeClass}
        onTileClick={handleTileClick}
      />
      <View className="absolute bottom-5">
        <Reset gameState={gameState} handleReset={handleReset} />
      </View>
    </SafeAreaView>
  );
}
