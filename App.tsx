import React, { useState } from 'react';
import { View, StyleSheet, SafeAreaView } from 'react-native';
import Header from './app/screens/Header';
import HomePage from './app/screens/HomePage';
import LoginPage from './app/screens/LoginPage';
import UsuarioLoginPage from './app/screens/UsuarioLoginPage';
import AdministradorLoginPage from './app/screens/AdministradorLoginPage';
import UsuarioRegisterPage from './app/screens/UsuarioRegisterPage';
import AdministradorRegisterPage from './app/screens/AdministradorRegisterPage';
import UsuarioHomePage from './app/screens/UsuarioHomePage';
import AdministradorHomePage from './app/screens/AdministradorHomePage';
import InformationPage from './app/screens/InformationPage';
import GamePage from './app/screens/GamePage';
import TicTacToe from './app/games/TicTacToe';
import RockPaperScissors from './app/games/RockPaperScissors';
import SimonSays from './app/games/SimonSays';
import WhackAMole from './app/games/WhackAMole';
import Hangman from './app/games/Hangman';
import LightsOut from './app/games/LightsOut';
import ConnectFour from './app/games/ConnectFour';
import Concentration from './app/games/Concentration';
import Sudoku from './app/games/Sudoku';
import MemoryGame from './app/games/MemoryGame';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<string>('home');
  const [previousPage, setPreviousPage] = useState<string>('');

  const navigateToLogin = () => {
    setPreviousPage(currentPage);
    setCurrentPage('login');
  };

  const navigateToRegisterUsuario = () => {
    setPreviousPage(currentPage);
    setCurrentPage('usuarioRegister');
  };

  const navigateToRegisterAdministrador = () => {
    setPreviousPage(currentPage);
    setCurrentPage('administradorRegister');
  };

  const navigateBack = () => {
    if (currentPage === 'information' || currentPage === 'gamePage') {
      setCurrentPage('home');
    } else {
      setCurrentPage(previousPage);
    }
  };

  const navigateToHome = () => {
    setPreviousPage(currentPage);
    setCurrentPage('home');
  };

  const loginAsUsuario = () => {
    setPreviousPage(currentPage);
    setCurrentPage('usuarioLogin');
  };

  const loginAsAdministrador = () => {
    setPreviousPage(currentPage);
    setCurrentPage('administradorLogin');
  };

  const handleUsuarioLoginSuccess = () => {
    setCurrentPage('usuarioHome');
  };

  const handleAdministradorLoginSuccess = () => {
    setCurrentPage('administradorHome');
  };

  const showInformationPage = () => {
    setPreviousPage(currentPage);
    setCurrentPage('information');
  };

  const navigateToGamePage = () => {
    setPreviousPage(currentPage);
    setCurrentPage('gamePage');
  };

  const handleLogout = () => {
    setCurrentPage('login');
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header onLogin={navigateToLogin} showLoginButton={currentPage === 'home'} />
      {currentPage === 'home' && <HomePage onShowInformation={showInformationPage} onShowGames={navigateToGamePage} />}
      {currentPage === 'login' && (
        <LoginPage 
          onBack={navigateToHome} 
          onLoginAsUsuario={loginAsUsuario} 
          onLoginAsAdministrador={loginAsAdministrador} 
        />
      )}
      {currentPage === 'usuarioLogin' && (
        <UsuarioLoginPage 
          onBack={navigateToLogin} 
          onRegister={navigateToRegisterUsuario} 
          onLoginSuccess={handleUsuarioLoginSuccess} 
        />
      )}
      {currentPage === 'administradorLogin' && (
        <AdministradorLoginPage 
          onBack={navigateToLogin} 
          onRegister={navigateToRegisterAdministrador} 
          onLoginSuccess={handleAdministradorLoginSuccess} 
        />
      )}
      {currentPage === 'usuarioRegister' && <UsuarioRegisterPage onBack={navigateBack} />}
      {currentPage === 'administradorRegister' && <AdministradorRegisterPage onBack={navigateBack} />}
      {currentPage === 'usuarioHome' && <UsuarioHomePage onLogout={handleLogout} />}
      {currentPage === 'administradorHome' && <AdministradorHomePage onLogout={handleLogout} />}
      {currentPage === 'information' && <InformationPage onClose={navigateBack} />}
      {currentPage === 'gamePage' && <GamePage navigation={{ navigate: setCurrentPage }} />}
      {currentPage === 'TicTacToe' && <TicTacToe navigation={{ navigate: setCurrentPage }} />}
      {currentPage === 'RockPaperScissors' && <RockPaperScissors navigation={{ navigate: setCurrentPage }} />}
      {currentPage === 'SimonSays' && <SimonSays navigation={{ navigate: setCurrentPage }} />}
      {currentPage === 'WhackAMole' && <WhackAMole navigation={{ navigate: setCurrentPage }} />}
      {currentPage === 'Hangman' && <Hangman navigation={{ navigate: setCurrentPage }} />}
      {currentPage === 'LightsOut' && <LightsOut navigation={{ navigate: setCurrentPage }} />}
      {currentPage === 'ConnectFour' && <ConnectFour navigation={{ navigate: setCurrentPage }} />}
      {currentPage === 'Concentration' && <Concentration navigation={{ navigate: setCurrentPage }} />}
      {currentPage === 'Sudoku' && <Sudoku navigation={{ navigate: setCurrentPage }} />}
      {currentPage === 'MemoryGame' && <MemoryGame navigation={{ navigate: setCurrentPage }} />}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
