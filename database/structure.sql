-- phpMyAdmin SQL Dump
-- version 4.5.1
-- http://www.phpmyadmin.net
--

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `protr_train`
--
CREATE DATABASE IF NOT EXISTS `protr_train` DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;
USE `protr_train`;

-- --------------------------------------------------------

--
-- Table structure for table `books`
--

CREATE TABLE `books` (
  `bookId` int(11) NOT NULL,
  `bookTitle` varchar(45) NOT NULL,
  `bookTypeId` int(11) DEFAULT NULL,
  `bookIsbn` varchar(150) DEFAULT NULL,
  `authName` varchar(45) DEFAULT NULL,
  `authSurname` varchar(45) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `booktypes`
--

CREATE TABLE `booktypes` (
  `bookTypeId` int(11) NOT NULL,
  `bookTypeName` varchar(45) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `userId` int(11) NOT NULL,
  `userName` varchar(45) DEFAULT NULL,
  `userSurname` varchar(45) DEFAULT NULL,
  `userJob` varchar(45) CHARACTER SET utf32 DEFAULT NULL,
  `userAge` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `books`
--
ALTER TABLE `books`
  ADD PRIMARY KEY (`bookId`),
  ADD UNIQUE KEY `bookId_UNIQUE` (`bookId`),
  ADD KEY `book_2_type_idx` (`bookTypeId`);

--
-- Indexes for table `booktypes`
--
ALTER TABLE `booktypes`
  ADD PRIMARY KEY (`bookTypeId`),
  ADD UNIQUE KEY `bookTypeId_UNIQUE` (`bookTypeId`),
  ADD UNIQUE KEY `bookTypeName_UNIQUE` (`bookTypeName`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`userId`),
  ADD UNIQUE KEY `userId_UNIQUE` (`userId`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `books`
--
ALTER TABLE `books`
  MODIFY `bookId` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `booktypes`
--
ALTER TABLE `booktypes`
  MODIFY `bookTypeId` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `userId` int(11) NOT NULL AUTO_INCREMENT;
--
-- Constraints for dumped tables
--

--
-- Constraints for table `books`
--
ALTER TABLE `books`
  ADD CONSTRAINT `book_2_type` FOREIGN KEY (`bookTypeId`) REFERENCES `booktypes` (`bookTypeId`) ON DELETE NO ACTION ON UPDATE NO ACTION;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
