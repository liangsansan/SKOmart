/*
Navicat MySQL Data Transfer

Source Server         : SKOmart
Source Server Version : 50714
Source Host           : localhost:3306
Source Database       : skomart

Target Server Type    : MYSQL
Target Server Version : 50714
File Encoding         : 65001

Date: 2017-05-15 11:31:49
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for `login`
-- ----------------------------
DROP TABLE IF EXISTS `login`;
CREATE TABLE `login` (
  `logId` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(20) NOT NULL,
  `password` varchar(50) NOT NULL,
  PRIMARY KEY (`logId`)
) ENGINE=MyISAM AUTO_INCREMENT=47 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of login
-- ----------------------------
INSERT INTO `login` VALUES ('45', '123', '111111');

-- ----------------------------
-- Table structure for `personal`
-- ----------------------------
DROP TABLE IF EXISTS `personal`;
CREATE TABLE `personal` (
  `perId` int(11) NOT NULL AUTO_INCREMENT,
  `pername` varchar(50) NOT NULL,
  `prophone` int(11) NOT NULL,
  `prodatebirth` varchar(255) NOT NULL,
  `procity` varchar(255) NOT NULL,
  `proregion` varchar(255) NOT NULL,
  `proaddress` varchar(255) NOT NULL,
  `proemail` varchar(255) NOT NULL,
  `procode` int(11) NOT NULL,
  `proqq` int(11) NOT NULL,
  PRIMARY KEY (`perId`)
) ENGINE=MyISAM AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of personal
-- ----------------------------

-- ----------------------------
-- Table structure for `product`
-- ----------------------------
DROP TABLE IF EXISTS `product`;
CREATE TABLE `product` (
  `proId` int(11) NOT NULL,
  `proName` varchar(50) NOT NULL,
  `price` int(11) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of product
-- ----------------------------

-- ----------------------------
-- Table structure for `site`
-- ----------------------------
DROP TABLE IF EXISTS `site`;
CREATE TABLE `site` (
  `addressId` int(11) NOT NULL AUTO_INCREMENT,
  `addName` varchar(20) NOT NULL,
  `addPhone` int(11) NOT NULL,
  `addCity` varchar(10) NOT NULL,
  `addRegion` varchar(10) NOT NULL,
  `addSite` varchar(50) NOT NULL,
  `addCode` int(6) NOT NULL,
  PRIMARY KEY (`addressId`)
) ENGINE=MyISAM AUTO_INCREMENT=27 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of site
-- ----------------------------
