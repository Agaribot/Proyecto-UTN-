-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 08-12-2021 a las 15:27:28
-- Versión del servidor: 10.4.21-MariaDB
-- Versión de PHP: 8.0.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `garibotto_andrea`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `cliente`
--

CREATE TABLE `cliente` (
  `id_c` int(11) NOT NULL,
  `nombre` varchar(60) NOT NULL,
  `apellido` varchar(60) NOT NULL,
  `telefono` int(30) NOT NULL,
  `email` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `cliente`
--

INSERT INTO `cliente` (`id_c`, `nombre`, `apellido`, `telefono`, `email`) VALUES
(1, 'Ana Julia', 'Pérez Cardoso', 99101103, 'acardoso@gmail.com'),
(2, 'Juan Andrés', 'Medina Pino', 98568788, 'toti@hotmail.com'),
(3, 'Pedro Paulo', 'Osores Díaz', 94565859, 'pepe@protonmail.com'),
(4, 'Ana Alicia', 'Franco Váez', 45588965, 'anita@yahoo.com'),
(5, 'Fidelio', 'Alberti Venedetti', 99258974, 'fidus@yandex.com'),
(6, 'Laetitia Magna', 'Oliva Tabarelli', 97157896, 'laetus@tutanota.com'),
(7, 'Hans Gerald', 'Anderson Mihlnikel', 45227898, 'hans.ge@gmail.com'),
(8, 'Tullia Amada', 'Fonseca Bonanza', 45869858, 'juli@hotmail.com'),
(12, 'Ana luisa', '', 0, ''),
(13, 'Carmen Soledad', '', 0, ''),
(14, 'test', '', 0, '');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `cliente`
--
ALTER TABLE `cliente`
  ADD PRIMARY KEY (`id_c`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `cliente`
--
ALTER TABLE `cliente`
  MODIFY `id_c` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
