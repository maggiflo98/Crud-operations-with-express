-- phpMyAdmin SQL Dump
-- version 4.9.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Aug 30, 2021 at 04:15 PM
-- Server version: 10.4.8-MariaDB
-- PHP Version: 7.1.33

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `Shoesdb`
--

-- --------------------------------------------------------

--
-- Table structure for table `shoes`
--

CREATE TABLE `shoes` (
  `id` int(30) NOT NULL,
  `name` varchar(50) NOT NULL,
  `brand` varchar(50) NOT NULL,
  `price` varchar(20) NOT NULL,
  `contact` varchar(15) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `shoes`
--

INSERT INTO `shoes` (`id`, `name`, `brand`, `price`, `contact`) VALUES
(4, 'fred', 'puma', '1500', '705859783'),
(7, 'jayzar', 'kardashian', '6000', '725977810'),
(9, 'Kendagor', 'Sneakers', '220', '7008935'),
(10, 'nanchama', 'Adidas NMD', '220', '70585209'),
(11, 'black jean', 'burgandy', '221', '070585209'),
(12, 'Miley Cirrus', 'Air jordan', 'KSH 1600', '070585209'),
(13, 'Miley Cirrus', 'Air jordan', 'KSH 1600', '070585209'),
(14, ' Cirrus', 'puma', 'KSH 5000', '070585209'),
(15, 'undefined', 'undefined', 'undefined', 'undefined'),
(16, ' Kipchoge', 'Nike', 'KSH 10000', '070585209'),
(17, ' bluey', 'blue snapback', 'KSH 10000', '070585209'),
(18, ' Hart', 'sole generation', 'KSH 900', '070585209'),
(19, ' Mejja', 'gengetone', 'KSH 900', '070585209'),
(20, ' rwckless', 'tomyhilfiger', 'KSH 900', '070585209'),
(21, 'nanchama', 'Adidas NMD', '220', '070585209'),
(22, ' stewy', 'wolfcap', 'KSH 9000', '070585209'),
(23, ' Peter', 'hilfiger', 'KSH 14000', '070585209'),
(24, ' hamltn', 'mercedes', 'KSH 14000', '070585209'),
(25, ' Toto', 'wolf', 'KSH 2000', '070585209'),
(26, ' Kanye', 'Donda', 'KSH 2000', '070585209'),
(27, ' Lando', 'Maclaren', 'KSH 2000', '070585209'),
(28, ' Vettel', 'Astonmartn', 'KSH 2000', '070585209'),
(29, 'Njeri', 'Adidas NMD', '220', '070585209'),
(30, 'Njeri', 'Adidas NMD', '220', '070585209');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `shoes`
--
ALTER TABLE `shoes`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `shoes`
--
ALTER TABLE `shoes`
  MODIFY `id` int(30) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=31;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
