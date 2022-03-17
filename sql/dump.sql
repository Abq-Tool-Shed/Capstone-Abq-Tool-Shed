
/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
DROP TABLE IF EXISTS `borrow`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `borrow` (
  `borrowId` binary(16) NOT NULL,
  `borrowProfileId` binary(16) NOT NULL,
  `borrowToolId` binary(16) NOT NULL,
  `borrowCompleted` varchar(20) NOT NULL,
  `borrowDateTime` datetime(6) DEFAULT NULL,
  `borrowReturnedDateTime` datetime(6) DEFAULT NULL,
  PRIMARY KEY (`borrowId`),
  KEY `borrowToolId` (`borrowToolId`),
  KEY `borrowProfileId` (`borrowProfileId`),
  CONSTRAINT `borrow_ibfk_1` FOREIGN KEY (`borrowProfileId`) REFERENCES `profile` (`profileId`),
  CONSTRAINT `borrow_ibfk_2` FOREIGN KEY (`borrowToolId`) REFERENCES `tool` (`toolId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

LOCK TABLES `borrow` WRITE;
/*!40000 ALTER TABLE `borrow` DISABLE KEYS */;
/*!40000 ALTER TABLE `borrow` ENABLE KEYS */;
UNLOCK TABLES;
DROP TABLE IF EXISTS `category`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `category` (
  `categoryId` binary(16) NOT NULL,
  `categoryName` varchar(255) NOT NULL,
  PRIMARY KEY (`categoryId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

LOCK TABLES `category` WRITE;
/*!40000 ALTER TABLE `category` DISABLE KEYS */;
INSERT INTO `category` VALUES (_binary 'IE\ïc \"\ì´\ÔB¬\0','plumbing'),(_binary 'Z\ê  \ð\ì¯RB¬\0','drills'),(_binary '’4 \ô\ì¯RB¬\0','hammer'),(_binary '¸ÿ\õ\à \ó\ì¯RB¬\0','ladder'),(_binary '\×\Þ\÷U \ò\ì¯RB¬\0','grinder'),(_binary '\â0«€ $\ì´\ÔB¬\0','flooring');
/*!40000 ALTER TABLE `category` ENABLE KEYS */;
UNLOCK TABLES;
DROP TABLE IF EXISTS `profile`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `profile` (
  `profileId` binary(16) NOT NULL,
  `profileActivationToken` char(32) DEFAULT NULL,
  `profileEmail` varchar(128) NOT NULL,
  `profileHandle` varchar(32) NOT NULL,
  `profileHash` char(97) NOT NULL,
  `profileImage` varchar(255) DEFAULT NULL,
  `profileName` varchar(32) NOT NULL,
  `profilePhoneNumber` varchar(32) NOT NULL,
  PRIMARY KEY (`profileId`),
  UNIQUE KEY `profileHandle` (`profileHandle`),
  UNIQUE KEY `profileEmail` (`profileEmail`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

LOCK TABLES `profile` WRITE;
/*!40000 ALTER TABLE `profile` DISABLE KEYS */;
INSERT INTO `profile` VALUES (_binary '\n>…3 !\ì´\ÔB¬\0','f8a6905638980bc6d58dba456993e764','MCZbrozek@gmail.com','Mike Zbrozek','$argon2id$v=19$m=65536,t=3,p=1$Tt7k765eX7+Yv7kRraa3Yw$kLtNEfg74m+KFHvsos48m+nEsOwDsQOEmx0iBtpygb0',NULL,'Mike Zbrozek','303-895-7521'),(_binary '\ô~‡ä¤Ÿ\ì»+B¬\Z\0','475a61d75c22a712bb4419eb2494d94a','mczbrozek+1@gmail.com','Mike ZDeux','$argon2id$v=19$m=65536,t=3,p=1$TdsAu4hg5sYuao3mO9OASg$nWM1EqI4G8PS4blcsM+Yqvnj+O1CyzCBrGfrCPRNs/g',NULL,'Mike Zbrozek','5055544444');
/*!40000 ALTER TABLE `profile` ENABLE KEYS */;
UNLOCK TABLES;
DROP TABLE IF EXISTS `rating`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `rating` (
  `ratingBorrowerProfileId` binary(16) NOT NULL,
  `ratingLenderProfileId` binary(16) NOT NULL,
  `ratingProfileId` binary(16) NOT NULL,
  `ratingValue` varchar(500) NOT NULL,
  PRIMARY KEY (`ratingBorrowerProfileId`,`ratingLenderProfileId`,`ratingProfileId`),
  KEY `ratingBorrowerProfileId` (`ratingBorrowerProfileId`),
  KEY `ratingLenderProfileId` (`ratingLenderProfileId`),
  KEY `ratingProfileId` (`ratingProfileId`),
  CONSTRAINT `rating_ibfk_1` FOREIGN KEY (`ratingProfileId`) REFERENCES `profile` (`profileId`),
  CONSTRAINT `rating_ibfk_2` FOREIGN KEY (`ratingBorrowerProfileId`) REFERENCES `borrow` (`borrowProfileId`),
  CONSTRAINT `rating_ibfk_3` FOREIGN KEY (`ratingLenderProfileId`) REFERENCES `profile` (`profileId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

LOCK TABLES `rating` WRITE;
/*!40000 ALTER TABLE `rating` DISABLE KEYS */;
/*!40000 ALTER TABLE `rating` ENABLE KEYS */;
UNLOCK TABLES;
DROP TABLE IF EXISTS `tool`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tool` (
  `toolId` binary(16) NOT NULL,
  `toolCategoryId` binary(16) NOT NULL,
  `toolProfileId` binary(16) NOT NULL,
  `toolDescription` varchar(500) NOT NULL,
  `toolImage` varchar(255) DEFAULT NULL,
  `toolLat` float DEFAULT NULL,
  `toolLendRules` varchar(500) NOT NULL,
  `toolLong` float DEFAULT NULL,
  `toolName` varchar(32) NOT NULL,
  `toolPostDate` datetime(6) NOT NULL,
  PRIMARY KEY (`toolId`),
  KEY `toolCategoryId` (`toolCategoryId`),
  KEY `toolProfileId` (`toolProfileId`),
  CONSTRAINT `tool_ibfk_1` FOREIGN KEY (`toolCategoryId`) REFERENCES `category` (`categoryId`),
  CONSTRAINT `tool_ibfk_2` FOREIGN KEY (`toolProfileId`) REFERENCES `profile` (`profileId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

LOCK TABLES `tool` WRITE;
/*!40000 ALTER TABLE `tool` DISABLE KEYS */;
INSERT INTO `tool` VALUES (_binary '!s \ó\ì¯RB¬\0',_binary '\×\Þ\÷U \ò\ì¯RB¬\0',_binary '\n>…3 !\ì´\ÔB¬\0','Cordless grinder','https://images.thdstatic.com/productImages/8b358a68-c6e1-4f99-a975-777296cedc0a/svn/milwaukee-angle-grinders-2680-20-64_600.jpg',NULL,'Available for 1 week lend, please charge battery before returning',NULL,'Milwaukee cordless grinder','2022-03-11 04:24:23.000000'),(_binary 'B¢¹Ë \ò\ì¯RB¬\0',_binary 'Z\ê  \ð\ì¯RB¬\0',_binary '\n>…3 !\ì´\ÔB¬\0','Cordless impact driver','https://images.thdstatic.com/productImages/3c045d8b-0247-4812-9de8-640e36da9dd8/svn/milwaukee-impact-drivers-2656-20-64_600.jpg',NULL,'Available for 1 week lend, please charge battery before returning',NULL,'Milwaukee impact driver','2022-03-11 04:18:10.000000'),(_binary 'scº %\ì´\ÔB¬\0',_binary '\â0«€ $\ì´\ÔB¬\0',_binary '\n>…3 !\ì´\ÔB¬\0','Table top wet tile saw',NULL,NULL,'',NULL,'Rigid wet tile saw','2022-03-10 03:52:05.000000'),(_binary '©\ó\é \ô\ì¯RB¬\0',_binary '¸ÿ\õ\à \ó\ì¯RB¬\0',_binary '\n>…3 !\ì´\ÔB¬\0','Hammer','https://media.istockphoto.com/photos/old-rusty-and-broken-claw-hammer-picture-id168765758?k=20&m=168765758&s=612x612&w=0&h=jKXWjb-zcLKLMfT8TouN5t6yz_9QHPQbdD6uwzzTYXQ=',NULL,'Available for 1 day lend, may require duct tape',NULL,'Claw hammer, safe','2022-03-11 04:35:21.000000'),(_binary '¼\â³ $\ì´\ÔB¬\0',_binary 'IE\ïc \"\ì´\ÔB¬\0',_binary '\n>…3 !\ì´\ÔB¬\0','Battery operated drain snake',NULL,NULL,'',NULL,'Ryobi Drain Auger','2022-03-10 03:46:58.000000'),(_binary '\÷V”\Z \ó\ì¯RB¬\0',_binary '¸ÿ\õ\à \ó\ì¯RB¬\0',_binary '\n>…3 !\ì´\ÔB¬\0','Wooden Ladder','https://live.staticflickr.com/4046/4510783278_1d2e524bd7_k.jpg',NULL,'Available for 1 week lend, repair before returning',NULL,'Wooden ladder, 6 ft','2022-03-11 04:30:22.000000');
/*!40000 ALTER TABLE `tool` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

