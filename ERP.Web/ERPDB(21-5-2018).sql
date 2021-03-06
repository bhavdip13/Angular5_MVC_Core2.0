USE [master]
GO
/****** Object:  Database [ERPDB]    Script Date: 21-05-2018 03:41:56 ******/
CREATE DATABASE [ERPDB]
 CONTAINMENT = NONE
 ON  PRIMARY 
( NAME = N'ERPDB', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL14.MSSQLSERVER\MSSQL\DATA\ERPDB.mdf' , SIZE = 8192KB , MAXSIZE = UNLIMITED, FILEGROWTH = 65536KB )
 LOG ON 
( NAME = N'ERPDB_log', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL14.MSSQLSERVER\MSSQL\DATA\ERPDB_log.ldf' , SIZE = 8192KB , MAXSIZE = 2048GB , FILEGROWTH = 65536KB )
GO
ALTER DATABASE [ERPDB] SET COMPATIBILITY_LEVEL = 140
GO
IF (1 = FULLTEXTSERVICEPROPERTY('IsFullTextInstalled'))
begin
EXEC [ERPDB].[dbo].[sp_fulltext_database] @action = 'enable'
end
GO
ALTER DATABASE [ERPDB] SET ANSI_NULL_DEFAULT OFF 
GO
ALTER DATABASE [ERPDB] SET ANSI_NULLS OFF 
GO
ALTER DATABASE [ERPDB] SET ANSI_PADDING OFF 
GO
ALTER DATABASE [ERPDB] SET ANSI_WARNINGS OFF 
GO
ALTER DATABASE [ERPDB] SET ARITHABORT OFF 
GO
ALTER DATABASE [ERPDB] SET AUTO_CLOSE OFF 
GO
ALTER DATABASE [ERPDB] SET AUTO_SHRINK OFF 
GO
ALTER DATABASE [ERPDB] SET AUTO_UPDATE_STATISTICS ON 
GO
ALTER DATABASE [ERPDB] SET CURSOR_CLOSE_ON_COMMIT OFF 
GO
ALTER DATABASE [ERPDB] SET CURSOR_DEFAULT  GLOBAL 
GO
ALTER DATABASE [ERPDB] SET CONCAT_NULL_YIELDS_NULL OFF 
GO
ALTER DATABASE [ERPDB] SET NUMERIC_ROUNDABORT OFF 
GO
ALTER DATABASE [ERPDB] SET QUOTED_IDENTIFIER OFF 
GO
ALTER DATABASE [ERPDB] SET RECURSIVE_TRIGGERS OFF 
GO
ALTER DATABASE [ERPDB] SET  DISABLE_BROKER 
GO
ALTER DATABASE [ERPDB] SET AUTO_UPDATE_STATISTICS_ASYNC OFF 
GO
ALTER DATABASE [ERPDB] SET DATE_CORRELATION_OPTIMIZATION OFF 
GO
ALTER DATABASE [ERPDB] SET TRUSTWORTHY OFF 
GO
ALTER DATABASE [ERPDB] SET ALLOW_SNAPSHOT_ISOLATION OFF 
GO
ALTER DATABASE [ERPDB] SET PARAMETERIZATION SIMPLE 
GO
ALTER DATABASE [ERPDB] SET READ_COMMITTED_SNAPSHOT OFF 
GO
ALTER DATABASE [ERPDB] SET HONOR_BROKER_PRIORITY OFF 
GO
ALTER DATABASE [ERPDB] SET RECOVERY SIMPLE 
GO
ALTER DATABASE [ERPDB] SET  MULTI_USER 
GO
ALTER DATABASE [ERPDB] SET PAGE_VERIFY CHECKSUM  
GO
ALTER DATABASE [ERPDB] SET DB_CHAINING OFF 
GO
ALTER DATABASE [ERPDB] SET FILESTREAM( NON_TRANSACTED_ACCESS = OFF ) 
GO
ALTER DATABASE [ERPDB] SET TARGET_RECOVERY_TIME = 60 SECONDS 
GO
ALTER DATABASE [ERPDB] SET DELAYED_DURABILITY = DISABLED 
GO
ALTER DATABASE [ERPDB] SET QUERY_STORE = OFF
GO
USE [ERPDB]
GO
ALTER DATABASE SCOPED CONFIGURATION SET IDENTITY_CACHE = ON;
GO
ALTER DATABASE SCOPED CONFIGURATION SET LEGACY_CARDINALITY_ESTIMATION = OFF;
GO
ALTER DATABASE SCOPED CONFIGURATION FOR SECONDARY SET LEGACY_CARDINALITY_ESTIMATION = PRIMARY;
GO
ALTER DATABASE SCOPED CONFIGURATION SET MAXDOP = 0;
GO
ALTER DATABASE SCOPED CONFIGURATION FOR SECONDARY SET MAXDOP = PRIMARY;
GO
ALTER DATABASE SCOPED CONFIGURATION SET PARAMETER_SNIFFING = ON;
GO
ALTER DATABASE SCOPED CONFIGURATION FOR SECONDARY SET PARAMETER_SNIFFING = PRIMARY;
GO
ALTER DATABASE SCOPED CONFIGURATION SET QUERY_OPTIMIZER_HOTFIXES = OFF;
GO
ALTER DATABASE SCOPED CONFIGURATION FOR SECONDARY SET QUERY_OPTIMIZER_HOTFIXES = PRIMARY;
GO
USE [ERPDB]
GO
/****** Object:  UserDefinedFunction [dbo].[getsuborgidfun]    Script Date: 21-05-2018 03:41:56 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE FUNCTION [dbo].[getsuborgidfun](@Dataflow int, @OrgId int, @SubOrgId int)
RETURNS @SubOrganisationId table (Id int)
AS
Begin 
IF(@Dataflow=0)
  BEGIN
   insert into @SubOrganisationId
   SELECT [Id] FROM [dbo].[Organisation]
   WHERE [topparent]=@OrgId;

  END
 IF(@Dataflow=1)
  BEGIN
   insert into @SubOrganisationId
   SELECT org.[Id] FROM [dbo].[Organisation] org
   LEFT JOIN Organisation org1 on org1.ParentOrgId = org.ParentOrgId and org1.id = @SubOrgId
   WHERE org1.TopParent =@OrgId
   
  END
 IF(@Dataflow=2)
  BEGIN
   insert into @SubOrganisationId
   SELECT org.[Id] FROM [dbo].[Organisation] org
   LEFT JOIN Organisation org1 on org1.ParentOrgId = org.ParentOrgId and org1.id = @SubOrgId 
   and org.orgtype='s' 
      WHERE org1.TopParent =@OrgId
  END
 IF(@Dataflow=3)
  BEGIN
   insert into @SubOrganisationId
   SELECT org.[Id] FROM [dbo].[Organisation] org
        WHERE org.[Id]=@SubOrgId 
  END

  return

    end
GO
/****** Object:  UserDefinedFunction [dbo].[Ufn_getsuborgid]    Script Date: 21-05-2018 03:41:56 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE FUNCTION [dbo].[Ufn_getsuborgid](@Dataflow int, @OrgId int, @SubOrgId int)
RETURNS @SubOrganisationId table (Id int)
AS
Begin 
IF(@Dataflow=0)
  BEGIN
   insert into @SubOrganisationId
   SELECT [Id] FROM [dbo].[Organisation]
   WHERE [TopParentId]=@OrgId;

  END
 IF(@Dataflow=1)
  BEGIN
   insert into @SubOrganisationId
   SELECT org.[Id] FROM [dbo].[Organisation] org
   LEFT JOIN Organisation org1 on org1.ParentOrgId = org.ParentOrgId and org1.id = @SubOrgId
   WHERE org1.TopParentId =@OrgId
   
  END
 IF(@Dataflow=2)
  BEGIN
   insert into @SubOrganisationId
   SELECT org.[Id] FROM [dbo].[Organisation] org
   LEFT JOIN Organisation org1 on org1.ParentOrgId = org.ParentOrgId and org1.id = @SubOrgId 
   and org.orgtype='s' 
      WHERE org1.TopParentId =@OrgId
  END
 IF(@Dataflow=3)
  BEGIN
   insert into @SubOrganisationId
   SELECT org.[Id] FROM [dbo].[Organisation] org
        WHERE org.[Id]=@SubOrgId 
  END

  return

    end

GO
/****** Object:  Table [dbo].[AdvanceType]    Script Date: 21-05-2018 03:41:56 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[AdvanceType](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Code] [nvarchar](50) NOT NULL,
	[Name] [nvarchar](150) NOT NULL,
	[Remarks] [nvarchar](200) NULL,
	[Status] [nvarchar](2) NOT NULL,
	[OrgId] [int] NULL,
	[SubOrgId] [int] NULL,
	[CreatedBy] [int] NULL,
	[CreatedTime] [datetime] NULL,
	[UpdatedId] [int] NULL,
	[UpdatedTime] [datetime] NULL,
	[Lang] [nvarchar](10) NULL,
	[IsDelete] [bit] NULL,
 CONSTRAINT [PK_AdvanceType] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[City]    Script Date: 21-05-2018 03:41:56 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[City](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Code] [nvarchar](50) NOT NULL,
	[Name] [nvarchar](150) NOT NULL,
	[Remarks] [nvarchar](200) NULL,
	[CountryId] [int] NULL,
	[StateId] [int] NULL,
	[Status] [char](1) NOT NULL,
	[OrgId] [int] NULL,
	[SubOrgId] [int] NULL,
	[CreatedBy] [int] NULL,
	[CreatedTime] [datetime] NULL,
	[UpdatedId] [int] NULL,
	[UpdatedTime] [datetime] NULL,
	[Lang] [varchar](10) NULL,
 CONSTRAINT [PK_City] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Commodity]    Script Date: 21-05-2018 03:41:56 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Commodity](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Code] [varchar](50) NULL,
	[Name] [varchar](50) NULL,
	[Remarks] [nvarchar](200) NULL,
	[Status] [char](1) NOT NULL,
	[OrgId] [int] NULL,
	[SubOrgId] [int] NULL,
	[CreatedBy] [int] NULL,
	[CreatedTime] [datetime] NULL,
	[UpdatedId] [int] NULL,
	[UpdatedTime] [datetime] NULL,
	[Lang] [varchar](10) NULL,
 CONSTRAINT [PK_Commodity] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Country]    Script Date: 21-05-2018 03:41:56 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Country](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Code] [nvarchar](50) NOT NULL,
	[Name] [nvarchar](150) NOT NULL,
	[Remarks] [nvarchar](200) NULL,
	[CurrencyId] [int] NULL,
	[LanguageId] [int] NULL,
	[Status] [char](1) NOT NULL,
	[OrgId] [int] NULL,
	[SubOrgId] [int] NULL,
	[CreatedBy] [int] NULL,
	[CreatedTime] [datetime] NULL,
	[UpdatedId] [int] NULL,
	[UpdatedTime] [datetime] NULL,
	[Lang] [varchar](10) NULL,
 CONSTRAINT [PK_Country] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Department]    Script Date: 21-05-2018 03:41:56 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Department](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Code] [nvarchar](50) NOT NULL,
	[Name] [nvarchar](150) NOT NULL,
	[Remarks] [nvarchar](200) NULL,
	[Status] [nvarchar](2) NOT NULL,
	[OrgId] [int] NULL,
	[SubOrgId] [int] NULL,
	[CreatedBy] [int] NULL,
	[CreatedTime] [datetime] NULL,
	[UpdatedId] [int] NULL,
	[UpdatedTime] [datetime] NULL,
	[Lang] [nvarchar](10) NULL,
	[IsDelete] [bit] NULL,
 CONSTRAINT [PK_Department] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Dimention]    Script Date: 21-05-2018 03:41:56 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Dimention](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Code] [nvarchar](50) NOT NULL,
	[Name] [nvarchar](150) NOT NULL,
	[Remarks] [nvarchar](200) NULL,
	[Status] [char](1) NOT NULL,
	[OrgId] [int] NULL,
	[SubOrgId] [int] NULL,
	[CreatedBy] [int] NULL,
	[CreatedTime] [datetime] NULL,
	[UpdatedId] [int] NULL,
	[UpdatedTime] [datetime] NULL,
	[Lang] [varchar](10) NULL,
 CONSTRAINT [PK_Dimention] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[DriverInformation]    Script Date: 21-05-2018 03:41:57 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[DriverInformation](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Code] [varchar](50) NULL,
	[Name] [varchar](50) NULL,
	[DateOfBirth] [datetime] NULL,
	[DateOfJoining] [datetime] NULL,
	[LicenseNo] [varchar](50) NULL,
	[IssueDate] [datetime] NULL,
	[ValidUpto] [datetime] NULL,
	[CitizenshipNo] [varchar](50) NULL,
	[CSNIssueDate] [datetime] NULL,
	[UnitNo] [varchar](50) NULL,
	[Remarks] [nvarchar](200) NULL,
	[Status] [int] NULL,
	[OrgId] [int] NULL,
	[SubOrgId] [int] NULL,
	[CreatedBy] [int] NULL,
	[CreatedTime] [datetime] NULL,
	[UpdatedId] [int] NULL,
	[UpdatedTime] [datetime] NULL,
	[Lang] [varchar](10) NULL,
	[IsDelete] [bit] NULL,
 CONSTRAINT [PK_DriverInformation] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[DriverShortages]    Script Date: 21-05-2018 03:41:57 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[DriverShortages](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[DriverId] [int] NULL,
	[Commodity] [int] NULL,
	[ShortageUOM] [int] NULL,
	[ShortageQuantity] [decimal](18, 0) NULL,
	[ShortageValue] [decimal](18, 0) NULL,
	[DateOfShortage] [datetime] NULL,
	[ShortageValuePaidbyDriver] [decimal](18, 0) NULL,
	[Status] [int] NULL,
	[CreatedBy] [int] NULL,
	[CreatedTime] [datetime] NULL,
	[UpdatedId] [int] NULL,
	[UpdatedTime] [datetime] NULL,
	[Lang] [varchar](10) NULL,
	[IsDelete] [bit] NOT NULL,
 CONSTRAINT [PK_DriverShortages] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Feature]    Script Date: 21-05-2018 03:41:57 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Feature](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[FeatureGroupId] [int] NULL,
	[Code] [nvarchar](50) NOT NULL,
	[Name] [nvarchar](50) NOT NULL,
	[ModuleName] [nvarchar](50) NOT NULL,
	[MenuName] [nvarchar](50) NULL,
	[Description] [nvarchar](50) NULL,
	[URL] [nvarchar](50) NULL,
	[HelpId] [nvarchar](50) NULL,
	[CssClassName] [nvarchar](500) NULL,
 CONSTRAINT [PK_Feature] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[FeatureGroup]    Script Date: 21-05-2018 03:41:57 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[FeatureGroup](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Code] [nvarchar](50) NOT NULL,
	[Name] [nvarchar](50) NOT NULL,
	[ModuleCode] [nvarchar](50) NOT NULL,
	[CreatedBy] [int] NULL,
	[CreatedTime] [datetime] NULL,
	[UpdatedBy] [int] NULL,
	[UpdatedTime] [datetime] NULL,
	[Language] [varchar](10) NULL,
 CONSTRAINT [PK_FeatureGroup] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[ISO]    Script Date: 21-05-2018 03:41:57 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[ISO](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Code] [nvarchar](50) NOT NULL,
	[Name] [nvarchar](150) NOT NULL,
	[Remarks] [nvarchar](200) NULL,
	[Type] [nvarchar](20) NULL,
	[Status] [char](1) NOT NULL,
	[OrgId] [int] NULL,
	[SubOrgId] [int] NULL,
	[CreatedBy] [int] NULL,
	[CreatedTime] [datetime] NULL,
	[UpdatedId] [int] NULL,
	[UpdatedTime] [datetime] NULL,
	[Lang] [varchar](10) NULL,
 CONSTRAINT [PK_ISO] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Languages]    Script Date: 21-05-2018 03:41:57 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Languages](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Code] [nvarchar](50) NOT NULL,
	[Name] [nvarchar](150) NOT NULL,
	[Remarks] [nvarchar](200) NULL,
	[Status] [char](1) NOT NULL,
	[OrgId] [int] NULL,
	[SubOrgId] [int] NULL,
	[CreatedBy] [int] NULL,
	[CreatedTime] [datetime] NULL,
	[UpdatedId] [int] NULL,
	[UpdatedTime] [datetime] NULL,
	[Lang] [varchar](10) NULL,
 CONSTRAINT [PK_Languages] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Organisation]    Script Date: 21-05-2018 03:41:57 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Organisation](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Code] [nvarchar](50) NOT NULL,
	[Name] [nvarchar](150) NOT NULL,
	[Remarks] [nvarchar](200) NULL,
	[TimeZoneId] [int] NULL,
	[LanguageId] [int] NULL,
	[OrgType] [char](1) NULL,
	[ParentOrgId] [int] NULL,
	[VATNo] [nvarchar](50) NULL,
	[RegistrationNo] [nvarchar](50) NULL,
	[TaxIdNo] [nvarchar](50) NULL,
	[RegCityId] [int] NULL,
	[RegDate] [datetime] NULL,
	[TimeApplicability] [nvarchar](50) NULL,
	[Address1] [nvarchar](100) NULL,
	[Address2] [nvarchar](100) NULL,
	[CountryId] [int] NULL,
	[StateId] [int] NULL,
	[CityId] [int] NULL,
	[ZipCode] [varchar](50) NULL,
	[PhoneNo1] [varchar](50) NULL,
	[PhoneNo2] [varchar](50) NULL,
	[Mobile] [varchar](50) NULL,
	[Fax] [varchar](50) NULL,
	[Email] [varchar](50) NULL,
	[WebSite] [varchar](50) NULL,
	[Logo] [varbinary](max) NULL,
	[Status] [char](1) NOT NULL,
	[CreatedBy] [int] NULL,
	[CreatedTime] [datetime] NULL,
	[UpdatedBy] [int] NULL,
	[UpdatedTime] [datetime] NULL,
	[Lang] [varchar](10) NULL,
	[CurrencyId] [int] NULL,
	[TopParentId] [int] NULL,
 CONSTRAINT [PK_Organisation] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[OrgUser]    Script Date: 21-05-2018 03:41:57 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[OrgUser](
	[UserId] [int] NOT NULL,
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[OrgId] [int] NOT NULL,
	[SubOrgId] [int] NULL,
	[CreatedBy] [int] NULL,
	[CreatedTime] [datetime] NULL,
	[UpdatedBy] [int] NULL,
	[UpdatedTime] [datetime] NULL,
 CONSTRAINT [PK_OrgUser] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[State]    Script Date: 21-05-2018 03:41:57 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[State](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Code] [nvarchar](50) NOT NULL,
	[Name] [nvarchar](150) NOT NULL,
	[Remarks] [nvarchar](200) NULL,
	[CountryId] [int] NULL,
	[Status] [char](1) NOT NULL,
	[OrgId] [int] NULL,
	[SubOrgId] [int] NULL,
	[CreatedBy] [int] NULL,
	[CreatedTime] [datetime] NULL,
	[UpdatedId] [int] NULL,
	[UpdatedTime] [datetime] NULL,
	[Lang] [varchar](10) NULL,
	[IsDelete] [int] NULL,
 CONSTRAINT [PK_State] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Status]    Script Date: 21-05-2018 03:41:57 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Status](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Name] [varchar](50) NULL,
 CONSTRAINT [PK_Status] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[SubOrganisation]    Script Date: 21-05-2018 03:41:57 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[SubOrganisation](
	[SubId] [int] IDENTITY(1,1) NOT NULL,
	[Code] [nvarchar](50) NOT NULL,
	[Name] [nvarchar](150) NOT NULL,
	[Remarks] [nvarchar](200) NULL,
	[TimeZoneId] [int] NULL,
	[LanguageId] [int] NULL,
	[OrgType] [char](1) NULL,
	[OrgId] [int] NULL,
	[VATNo] [nvarchar](50) NULL,
	[RegistrationNo] [nvarchar](50) NULL,
	[TaxIdNo] [nvarchar](50) NULL,
	[RegCityId] [int] NULL,
	[RegDate] [datetime] NULL,
	[TimeApplicability] [nvarchar](50) NULL,
	[Address1] [nvarchar](100) NULL,
	[Address2] [nvarchar](100) NULL,
	[CountryId] [int] NULL,
	[StateId] [int] NULL,
	[CityId] [int] NULL,
	[ZipCode] [varchar](50) NULL,
	[PhoneNo1] [varchar](50) NULL,
	[PhoneNo2] [varchar](50) NULL,
	[Mobile] [varchar](50) NULL,
	[Fax] [varchar](50) NULL,
	[Email] [varchar](50) NULL,
	[WebSite] [varchar](50) NULL,
	[Logo] [varbinary](max) NULL,
	[Status] [char](1) NOT NULL,
	[CreatedBy] [int] NULL,
	[CreatedTime] [datetime] NULL,
	[UpdatedBy] [int] NULL,
	[UpdatedTime] [datetime] NULL,
	[Lang] [varchar](10) NULL,
 CONSTRAINT [PK_SubOrganisation] PRIMARY KEY CLUSTERED 
(
	[SubId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[TimeZone]    Script Date: 21-05-2018 03:41:57 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[TimeZone](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Code] [nvarchar](50) NOT NULL,
	[Name] [nvarchar](150) NOT NULL,
	[Remarks] [nvarchar](200) NULL,
	[GMTHrsMin] [nvarchar](10) NULL,
	[GMTSign] [char](1) NULL,
	[Status] [char](1) NOT NULL,
	[OrgId] [int] NULL,
	[SubOrgId] [int] NULL,
	[CreatedBy] [int] NULL,
	[CreatedTime] [datetime] NULL,
	[UpdatedId] [int] NULL,
	[UpdatedTime] [datetime] NULL,
	[Lang] [varchar](10) NULL,
 CONSTRAINT [PK_TimeZone] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[UOM]    Script Date: 21-05-2018 03:41:57 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[UOM](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Code] [nvarchar](50) NOT NULL,
	[Name] [nvarchar](150) NOT NULL,
	[Remarks] [nvarchar](200) NULL,
	[ISOId] [int] NULL,
	[DimentionId] [int] NULL,
	[DecimalPlaces] [int] NULL,
	[ConversionValue] [decimal](18, 4) NULL,
	[ConversionUnitId] [int] NULL,
	[Status] [char](1) NOT NULL,
	[OrgId] [int] NULL,
	[SubOrgId] [int] NULL,
	[CreatedBy] [int] NULL,
	[CreatedTime] [datetime] NULL,
	[UpdatedId] [int] NULL,
	[UpdatedTime] [datetime] NULL,
	[Lang] [varchar](10) NULL,
 CONSTRAINT [PK_UOM] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[User]    Script Date: 21-05-2018 03:41:57 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[User](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[FullName] [varchar](max) NOT NULL,
	[Email] [varchar](max) NOT NULL,
	[PasswordHash] [varbinary](max) NOT NULL,
	[CreatedBy] [varchar](50) NULL,
	[CreatedTime] [datetime] NULL,
	[UpdatedBy] [varchar](max) NULL,
	[UpdatedTime] [datetime] NULL,
	[PasswordSalt] [varbinary](max) NULL,
	[IsActive] [bit] NOT NULL,
 CONSTRAINT [PK_User] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[UserFeatureMapping]    Script Date: 21-05-2018 03:41:57 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[UserFeatureMapping](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[UserId] [int] NULL,
	[UserGroupId] [int] NULL,
	[FeatureId] [int] NULL,
	[FeatureGroupId] [int] NULL,
	[Deny] [int] NULL,
	[Create] [int] NULL,
	[Edit] [int] NULL,
	[View] [int] NULL,
	[Delete] [int] NULL,
	[Print] [int] NULL,
	[Copy] [int] NULL,
	[Dataflow] [int] NULL,
	[Active] [int] NULL,
	[InActive] [int] NULL,
	[CreatedBy] [int] NULL,
	[CreatedTime] [datetime] NULL,
	[UpdatedId] [int] NULL,
	[UpdatedTime] [datetime] NULL,
	[Lang] [varchar](10) NULL,
 CONSTRAINT [PK_UserFeatureMapping] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[UserGroup]    Script Date: 21-05-2018 03:41:57 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[UserGroup](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[UserGroupName] [nvarchar](50) NOT NULL,
	[Description] [nvarchar](50) NOT NULL,
	[ParentGroupId] [varchar](50) NULL,
	[OrgId] [int] NULL,
	[SubOrgId] [int] NULL,
	[CreatedBy] [int] NULL,
	[CreatedTime] [datetime] NULL,
	[UpdatedBy] [int] NULL,
	[UpdatedTime] [datetime] NULL,
	[Language] [varchar](10) NULL,
 CONSTRAINT [PK_UserGroup] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[UserUserGroup]    Script Date: 21-05-2018 03:41:57 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[UserUserGroup](
	[MapId] [int] IDENTITY(1,1) NOT NULL,
	[UserId] [nvarchar](50) NOT NULL,
	[GroupId] [nvarchar](50) NOT NULL,
	[OrgId] [int] NULL,
	[SubOrgId] [int] NULL,
	[CreatedBy] [int] NULL,
	[CreatedTime] [datetime] NULL,
	[UpdatedBy] [int] NULL,
	[UpdatedTime] [datetime] NULL,
	[Language] [varchar](10) NULL,
 CONSTRAINT [PK_UserUserGroup] PRIMARY KEY CLUSTERED 
(
	[MapId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
SET IDENTITY_INSERT [dbo].[Feature] ON 

INSERT [dbo].[Feature] ([Id], [FeatureGroupId], [Code], [Name], [ModuleName], [MenuName], [Description], [URL], [HelpId], [CssClassName]) VALUES (1, 1, N'user', N'user', N'user', N'user', N'user', N'user/', NULL, NULL)
SET IDENTITY_INSERT [dbo].[Feature] OFF
SET IDENTITY_INSERT [dbo].[User] ON 

INSERT [dbo].[User] ([Id], [FullName], [Email], [PasswordHash], [CreatedBy], [CreatedTime], [UpdatedBy], [UpdatedTime], [PasswordSalt], [IsActive]) VALUES (1, N'bhavdip', N'bhavdip@gmail.com', 0xA7A00E276102B5F22FEB33EBAC2A838D4DDDAE64A74D6A1F125C60F3148328E656C6E605529DB037231D9BB546CF6DF3ED7D881A63D5C2C95510DFB000CAF7C0, N'System', CAST(N'2018-05-18T05:16:18.823' AS DateTime), N'', CAST(N'2018-05-18T05:16:18.823' AS DateTime), 0xAAA6872101C71E81A9B1F91D44CA0D27CFDF47FDF5D6739CC6E0805BC7E23A5AA551BB539F76B9AEA9D2688CBCFB30F7A016455ABAC315671CBAC3932A9312EAEDAE67D017B81D584DA21D1FEA546FF00E6A33CCD553E901DB9B0A519363412C9C9BA66E7539F5A0576F5F2280F4A26971B1DB51B80B5F7578C0B2B025BF17A2, 0)
INSERT [dbo].[User] ([Id], [FullName], [Email], [PasswordHash], [CreatedBy], [CreatedTime], [UpdatedBy], [UpdatedTime], [PasswordSalt], [IsActive]) VALUES (1003, N'faisal pathan', N'faisal@gmail.com', 0x2DCBB1E7E13508E599C76FABE07F74B513C95BC9CDEEF147324D6CD3478E2786B92C62EC20571FFA1334F6750C1A761A50318A8BBF3B25F30128A89EAA8A6510, N'', CAST(N'2018-05-21T08:51:16.293' AS DateTime), N'', CAST(N'1900-01-01T00:00:00.000' AS DateTime), 0x3DF6FCFD2DC45FA927430F32990A698F95052DDD319D22C37B7227FF7CE59A3A1CC16A24BE833C3C9316AD6F63EF49A0DEB129070232AAC9090CBB1DD6761744BDE028071AC1AC94294CA98CF3025FE7AAADBE8CE3A1A6CA5C07B80858EF4BA62C82938BAD31CAB4CF1044272D49DCB30C873A44312637857FBB6D5C20B42995, 0)
INSERT [dbo].[User] ([Id], [FullName], [Email], [PasswordHash], [CreatedBy], [CreatedTime], [UpdatedBy], [UpdatedTime], [PasswordSalt], [IsActive]) VALUES (1004, N'nikunj patel', N'nikunj@gmail.com', 0xC3D9067C615B8CF620D009FDC8A2762716A8F243E65EDA8A449F77AF291510B62ADFFA4785A6E94A2974B4CFB52B2D314ABEECFA4C0BE7FDDE574CD54DEB9C58, N'', CAST(N'2018-05-21T09:03:50.030' AS DateTime), N'', CAST(N'2018-05-21T09:34:01.663' AS DateTime), 0xD3789B96DA720E94928CEBD6DC9840039AE115C37B1401DB00C2A06E22EA037EF14AA2BE537C7313617FC8E38716368C002102EAA0035597B1E196E6611ABFA952B8A261FE188569377DC28C80BAC7F15B05BBCACA43A7062FF8A12774F95369AFE026420F10E729F5DDEA7E436305F60FF57CCF8D3B2C55807BD75863750215, 0)
INSERT [dbo].[User] ([Id], [FullName], [Email], [PasswordHash], [CreatedBy], [CreatedTime], [UpdatedBy], [UpdatedTime], [PasswordSalt], [IsActive]) VALUES (1006, N'ghansyam godhani', N'ghansyam@gmail.com', 0x8D8B1720263E27087AEB76C637B601C28B5CBB59D6A74B1FCA165D64E703F4F4E2B067A5A9E1FEE4B51813292DE5B19F2A912FD74A62C46F16CA23F7C402EEDA, N'', CAST(N'2018-05-21T09:30:57.470' AS DateTime), N'', CAST(N'1900-01-01T00:00:00.000' AS DateTime), 0x0C3297BF619A984F3B4ABA4DD883056E66DC83555FB1D7EC6AF191A1E2167344C57C9E44BC17B1F0CAE1732D17B5736152BFD674C2FCC42610A4E947174972B954FD2E1FD1D73F33550023274D82A9D90C350446F669140570DC2C10C1239BD465B8B319D2A1C9762C84B96E9794E4077CF90BD2763FA4C6AD09BCA83AFADFB0, 0)
INSERT [dbo].[User] ([Id], [FullName], [Email], [PasswordHash], [CreatedBy], [CreatedTime], [UpdatedBy], [UpdatedTime], [PasswordSalt], [IsActive]) VALUES (1007, N'chirag', N'chirag@gmail.com', 0x6628F59EF795EA06892FF790F096CDC323A96E9903C43CA0B4D61B118B5475BF35CC52BDEAF42BF03798C5089450FE1912CDC3BC6BC70CB584BE36CF35B969AC, N'', CAST(N'2018-05-21T09:36:11.240' AS DateTime), N'', CAST(N'1900-01-01T00:00:00.000' AS DateTime), 0x01F8591526ADC586B10C4F7C6DFBBA58D4898E2CCD5E202E19695B1DB585B35B20DA44A0763032163F0BCF8256484AB964DA0D9AEEE280BF8B97DEC7FA00519396AB7D148E9D87FC1F82B0B86DE0B5FC18AA12F729F8C1506CCB97D476CAC4CAB3F4DC4B9B7DCA701FF305D8A6348942154E177E24768C9AD102124ED115E3DE, 0)
INSERT [dbo].[User] ([Id], [FullName], [Email], [PasswordHash], [CreatedBy], [CreatedTime], [UpdatedBy], [UpdatedTime], [PasswordSalt], [IsActive]) VALUES (1008, N'dilip', N'dilip@gmail.com', 0xEF7B6C2D78B33F48185B4C74B12B8293071C0D813F1B9410C142CE8B290F27A0DA23E48573BCC3DD37DDDB8D8CF426753823C7DD0683282D280C4450DF915F22, N'', CAST(N'2018-05-21T09:36:36.300' AS DateTime), N'', CAST(N'1900-01-01T00:00:00.000' AS DateTime), 0xE505131CB826CF418F6E1DEE5EE106FC990E1D6D70EE6E7295D59323E0CDCA38C214A1FD7DEB031A276C5008F25E368B6BBC4470CA0787D100E1EBEFD6F1A75550682424E9F688984EAB5A8CD5B84B7781EE92AB7415C47A76A65ACCD0556CC3A6F9D97BE0439D624E4661DD4218C65ED0FC511C9A41FCF1E372972E7054E676, 0)
INSERT [dbo].[User] ([Id], [FullName], [Email], [PasswordHash], [CreatedBy], [CreatedTime], [UpdatedBy], [UpdatedTime], [PasswordSalt], [IsActive]) VALUES (1009, N'vishal', N'vishal@gmail.com', 0x93E58D98814827FF598E1E4F6BE6827FF8675068CE8655642F8F3BFEAFD5FD4AAAF27574CF889A3B48C2D51EE48A327AD300FC2E9DCB52E717ED76A11E5215F9, N'', CAST(N'2018-05-21T09:37:12.953' AS DateTime), N'', CAST(N'1900-01-01T00:00:00.000' AS DateTime), 0x6E9B2495A1518475EC0E9385D404CB44E4E6A437741F0552AB44C01E21B4B282BDE914B14359E6C57952351119002A57769EDDF6AA48B82BF15B08F436DCFA192148EF3A6CB0AA0939153BEEE2249EF5049F670443033A032C226B446A70A3331F997B3DCC3B97D3E9D97540FF0A5CC9FCF6BCD3E431BBEA4AE3CEF9A1180D53, 0)
INSERT [dbo].[User] ([Id], [FullName], [Email], [PasswordHash], [CreatedBy], [CreatedTime], [UpdatedBy], [UpdatedTime], [PasswordSalt], [IsActive]) VALUES (1010, N'bharat', N'bharat@gmail.com', 0xF18A3442D010A38AB9C048B43012087D7909D928AA3DA646C940F8E9D5617501EE726FE9E633830439982D21E0C5784E897DB5D00DC8E8358B25D3329A4A9253, N'', CAST(N'2018-05-21T09:37:37.107' AS DateTime), N'', CAST(N'1900-01-01T00:00:00.000' AS DateTime), 0xF573B69EB2A6564C5A89E59B2A3BC381C34A43648E8A2444E3FB7DD4111306FCAA010389F7DE93D51E8CDC5724779D9B08046C9A2CF06496B043EA09A1065065282E40E0892A7D1920CEC02BC19E72B22EE6A520C7D949417CEF4921E306A0983FE7B60D34A2DA37B3D4B0EFB2BB6278716BF89F50AE576D5E3FECAA35A17340, 0)
INSERT [dbo].[User] ([Id], [FullName], [Email], [PasswordHash], [CreatedBy], [CreatedTime], [UpdatedBy], [UpdatedTime], [PasswordSalt], [IsActive]) VALUES (1011, N'dharmesh', N'dharmesh@gmail.com', 0xAE25872BED3059A27577DD44B3AC21A93C32F8C576C7120679D259C46795391DFBF0A49E0BEBAEF3BAFFD573990E8D7FADD9622510C93D6A3AAD097FEB929650, N'', CAST(N'2018-05-21T09:37:59.063' AS DateTime), N'', CAST(N'1900-01-01T00:00:00.000' AS DateTime), 0x666C24EC93D455BCF166A8F05BAB4006375CDCC827A4EC8D184437F1A71FE8A9245EC101B0E4F93FCA592390CD0E3E5660A178A8726F40975223803A3625B9E111527221825906434613FC4960D861DAAC60D60E69D7F112CC61EEBB25F3CDE5CA71987522CF5F42F883F333B2697DD31938F2B775FE036849B177A3FFCDC307, 0)
INSERT [dbo].[User] ([Id], [FullName], [Email], [PasswordHash], [CreatedBy], [CreatedTime], [UpdatedBy], [UpdatedTime], [PasswordSalt], [IsActive]) VALUES (1013, N'jagu', N'jagu@gmail.com', 0x6C323A5978CFC39C615050F42E6E41C8F418FC993B13DAD931FA9A179C32739F1BE0A7211ACB33AB2E9C7B3DFA74920F4C84DC62420946D469B6B2B928E10109, N'', CAST(N'2018-05-21T09:38:37.603' AS DateTime), N'', CAST(N'1900-01-01T00:00:00.000' AS DateTime), 0x747399B7C4B678CF67EE5BCAC709C5CF29AF27FE8FDA9265C0FBA9126275A8D0AA565E0F6E62DC8CFCF95CA43A91D12EA7A73D09BAF1B5D80C728DAA54F046FD13AEF6678EE5018F086F67504E48B3BEC53AE5959551C377EE6A080CE12DB619D1FD2E67F490F508057BDA239F360F424D259359D88E6C99E7D1D1B7F0033206, 0)
INSERT [dbo].[User] ([Id], [FullName], [Email], [PasswordHash], [CreatedBy], [CreatedTime], [UpdatedBy], [UpdatedTime], [PasswordSalt], [IsActive]) VALUES (1014, N'daya', N'daya@gmail.com', 0x298227779E342FA9BF07BB7378DD38FA651C5A3FFB30DE902BAC8DF7637011B6239D72D20230675F8C539EAC5B4AAEC76EA7F2FB95533821B869D996693ADAE4, N'', CAST(N'2018-05-21T09:38:52.143' AS DateTime), N'', CAST(N'1900-01-01T00:00:00.000' AS DateTime), 0x962167E626835743BE7A5CD02BF36015144B8ECBFF5E303E78E60D42AE380D9F4CA60802CAB4A96EB4D5ED0D088E8B0B7DD3FD47C4E6FE8E180755E58153CAFFCC18A2102AC621297A5764CB1B4D81E075C0BFF5FF9EC7FF95CCCBB0947BA88BC24B5D502A71E238B751C84C161819B0EAFC1C142D951BDFE094ADF199690E78, 0)
SET IDENTITY_INSERT [dbo].[User] OFF
ALTER TABLE [dbo].[DriverShortages] ADD  CONSTRAINT [DF_DriverShortages_IsDelete]  DEFAULT ((0)) FOR [IsDelete]
GO
ALTER TABLE [dbo].[City]  WITH CHECK ADD FOREIGN KEY([CountryId])
REFERENCES [dbo].[Country] ([Id])
GO
ALTER TABLE [dbo].[City]  WITH CHECK ADD FOREIGN KEY([CountryId])
REFERENCES [dbo].[Country] ([Id])
GO
ALTER TABLE [dbo].[City]  WITH CHECK ADD  CONSTRAINT [FK__City__CountryId__4222D4EF] FOREIGN KEY([CountryId])
REFERENCES [dbo].[Country] ([Id])
GO
ALTER TABLE [dbo].[City] CHECK CONSTRAINT [FK__City__CountryId__4222D4EF]
GO
ALTER TABLE [dbo].[City]  WITH CHECK ADD FOREIGN KEY([StateId])
REFERENCES [dbo].[State] ([Id])
GO
ALTER TABLE [dbo].[City]  WITH CHECK ADD FOREIGN KEY([StateId])
REFERENCES [dbo].[State] ([Id])
GO
ALTER TABLE [dbo].[City]  WITH CHECK ADD  CONSTRAINT [FK__City__StateId__4316F928] FOREIGN KEY([StateId])
REFERENCES [dbo].[State] ([Id])
GO
ALTER TABLE [dbo].[City] CHECK CONSTRAINT [FK__City__StateId__4316F928]
GO
ALTER TABLE [dbo].[DriverShortages]  WITH CHECK ADD  CONSTRAINT [FK_DriverShortages_DriverInformation] FOREIGN KEY([DriverId])
REFERENCES [dbo].[DriverInformation] ([Id])
GO
ALTER TABLE [dbo].[DriverShortages] CHECK CONSTRAINT [FK_DriverShortages_DriverInformation]
GO
ALTER TABLE [dbo].[DriverShortages]  WITH CHECK ADD  CONSTRAINT [FK_DriverShortages_Status] FOREIGN KEY([Status])
REFERENCES [dbo].[Status] ([Id])
GO
ALTER TABLE [dbo].[DriverShortages] CHECK CONSTRAINT [FK_DriverShortages_Status]
GO
ALTER TABLE [dbo].[Organisation]  WITH CHECK ADD FOREIGN KEY([CountryId])
REFERENCES [dbo].[Country] ([Id])
GO
ALTER TABLE [dbo].[Organisation]  WITH CHECK ADD FOREIGN KEY([CountryId])
REFERENCES [dbo].[Country] ([Id])
GO
ALTER TABLE [dbo].[Organisation]  WITH CHECK ADD FOREIGN KEY([CountryId])
REFERENCES [dbo].[Country] ([Id])
GO
ALTER TABLE [dbo].[Organisation]  WITH CHECK ADD  CONSTRAINT [FK__Organisat__Count__45F365D3] FOREIGN KEY([CountryId])
REFERENCES [dbo].[Country] ([Id])
GO
ALTER TABLE [dbo].[Organisation] CHECK CONSTRAINT [FK__Organisat__Count__45F365D3]
GO
ALTER TABLE [dbo].[Organisation]  WITH CHECK ADD FOREIGN KEY([RegCityId])
REFERENCES [dbo].[City] ([Id])
GO
ALTER TABLE [dbo].[Organisation]  WITH CHECK ADD FOREIGN KEY([RegCityId])
REFERENCES [dbo].[City] ([Id])
GO
ALTER TABLE [dbo].[Organisation]  WITH CHECK ADD FOREIGN KEY([RegCityId])
REFERENCES [dbo].[City] ([Id])
GO
ALTER TABLE [dbo].[Organisation]  WITH CHECK ADD  CONSTRAINT [FK__Organisat__RegCi__46E78A0C] FOREIGN KEY([RegCityId])
REFERENCES [dbo].[City] ([Id])
GO
ALTER TABLE [dbo].[Organisation] CHECK CONSTRAINT [FK__Organisat__RegCi__46E78A0C]
GO
ALTER TABLE [dbo].[Organisation]  WITH CHECK ADD FOREIGN KEY([StateId])
REFERENCES [dbo].[State] ([Id])
GO
ALTER TABLE [dbo].[Organisation]  WITH CHECK ADD FOREIGN KEY([StateId])
REFERENCES [dbo].[State] ([Id])
GO
ALTER TABLE [dbo].[Organisation]  WITH CHECK ADD FOREIGN KEY([StateId])
REFERENCES [dbo].[State] ([Id])
GO
ALTER TABLE [dbo].[Organisation]  WITH CHECK ADD  CONSTRAINT [FK__Organisat__State__47DBAE45] FOREIGN KEY([StateId])
REFERENCES [dbo].[State] ([Id])
GO
ALTER TABLE [dbo].[Organisation] CHECK CONSTRAINT [FK__Organisat__State__47DBAE45]
GO
ALTER TABLE [dbo].[OrgUser]  WITH CHECK ADD  CONSTRAINT [FK_OrgUser_Organisation] FOREIGN KEY([OrgId])
REFERENCES [dbo].[Organisation] ([Id])
GO
ALTER TABLE [dbo].[OrgUser] CHECK CONSTRAINT [FK_OrgUser_Organisation]
GO
ALTER TABLE [dbo].[OrgUser]  WITH CHECK ADD  CONSTRAINT [FK_OrgUser_SubOrganisation] FOREIGN KEY([SubOrgId])
REFERENCES [dbo].[SubOrganisation] ([SubId])
GO
ALTER TABLE [dbo].[OrgUser] CHECK CONSTRAINT [FK_OrgUser_SubOrganisation]
GO
ALTER TABLE [dbo].[OrgUser]  WITH CHECK ADD  CONSTRAINT [FK_OrgUser_User] FOREIGN KEY([UserId])
REFERENCES [dbo].[User] ([Id])
GO
ALTER TABLE [dbo].[OrgUser] CHECK CONSTRAINT [FK_OrgUser_User]
GO
ALTER TABLE [dbo].[State]  WITH CHECK ADD FOREIGN KEY([CountryId])
REFERENCES [dbo].[Country] ([Id])
GO
ALTER TABLE [dbo].[State]  WITH CHECK ADD FOREIGN KEY([CountryId])
REFERENCES [dbo].[Country] ([Id])
GO
ALTER TABLE [dbo].[State]  WITH CHECK ADD  CONSTRAINT [FK__State__CountryId__4BAC3F29] FOREIGN KEY([CountryId])
REFERENCES [dbo].[Country] ([Id])
GO
ALTER TABLE [dbo].[State] CHECK CONSTRAINT [FK__State__CountryId__4BAC3F29]
GO
ALTER TABLE [dbo].[SubOrganisation]  WITH CHECK ADD FOREIGN KEY([CountryId])
REFERENCES [dbo].[Country] ([Id])
GO
ALTER TABLE [dbo].[SubOrganisation]  WITH CHECK ADD FOREIGN KEY([CountryId])
REFERENCES [dbo].[Country] ([Id])
GO
ALTER TABLE [dbo].[SubOrganisation]  WITH CHECK ADD  CONSTRAINT [FK__SubOrgani__Count__4CA06362] FOREIGN KEY([CountryId])
REFERENCES [dbo].[Country] ([Id])
GO
ALTER TABLE [dbo].[SubOrganisation] CHECK CONSTRAINT [FK__SubOrgani__Count__4CA06362]
GO
ALTER TABLE [dbo].[SubOrganisation]  WITH CHECK ADD FOREIGN KEY([OrgId])
REFERENCES [dbo].[Organisation] ([Id])
GO
ALTER TABLE [dbo].[SubOrganisation]  WITH CHECK ADD  CONSTRAINT [FK__SubOrgani__OrgId__4D94879B] FOREIGN KEY([OrgId])
REFERENCES [dbo].[Organisation] ([Id])
GO
ALTER TABLE [dbo].[SubOrganisation] CHECK CONSTRAINT [FK__SubOrgani__OrgId__4D94879B]
GO
ALTER TABLE [dbo].[SubOrganisation]  WITH CHECK ADD FOREIGN KEY([RegCityId])
REFERENCES [dbo].[City] ([Id])
GO
ALTER TABLE [dbo].[SubOrganisation]  WITH CHECK ADD FOREIGN KEY([RegCityId])
REFERENCES [dbo].[City] ([Id])
GO
ALTER TABLE [dbo].[SubOrganisation]  WITH CHECK ADD  CONSTRAINT [FK__SubOrgani__RegCi__4E88ABD4] FOREIGN KEY([RegCityId])
REFERENCES [dbo].[City] ([Id])
GO
ALTER TABLE [dbo].[SubOrganisation] CHECK CONSTRAINT [FK__SubOrgani__RegCi__4E88ABD4]
GO
ALTER TABLE [dbo].[SubOrganisation]  WITH CHECK ADD FOREIGN KEY([StateId])
REFERENCES [dbo].[State] ([Id])
GO
ALTER TABLE [dbo].[SubOrganisation]  WITH CHECK ADD FOREIGN KEY([StateId])
REFERENCES [dbo].[State] ([Id])
GO
ALTER TABLE [dbo].[SubOrganisation]  WITH CHECK ADD  CONSTRAINT [FK__SubOrgani__State__4F7CD00D] FOREIGN KEY([StateId])
REFERENCES [dbo].[State] ([Id])
GO
ALTER TABLE [dbo].[SubOrganisation] CHECK CONSTRAINT [FK__SubOrgani__State__4F7CD00D]
GO
ALTER TABLE [dbo].[UOM]  WITH CHECK ADD FOREIGN KEY([DimentionId])
REFERENCES [dbo].[Dimention] ([Id])
GO
ALTER TABLE [dbo].[UOM]  WITH CHECK ADD FOREIGN KEY([DimentionId])
REFERENCES [dbo].[Dimention] ([Id])
GO
ALTER TABLE [dbo].[UOM]  WITH CHECK ADD  CONSTRAINT [FK__UOM__DimentionId__5070F446] FOREIGN KEY([DimentionId])
REFERENCES [dbo].[Dimention] ([Id])
GO
ALTER TABLE [dbo].[UOM] CHECK CONSTRAINT [FK__UOM__DimentionId__5070F446]
GO
ALTER TABLE [dbo].[UOM]  WITH CHECK ADD FOREIGN KEY([ISOId])
REFERENCES [dbo].[ISO] ([Id])
GO
ALTER TABLE [dbo].[UOM]  WITH CHECK ADD FOREIGN KEY([ISOId])
REFERENCES [dbo].[ISO] ([Id])
GO
ALTER TABLE [dbo].[UOM]  WITH CHECK ADD  CONSTRAINT [FK__UOM__ISOId__5165187F] FOREIGN KEY([ISOId])
REFERENCES [dbo].[ISO] ([Id])
GO
ALTER TABLE [dbo].[UOM] CHECK CONSTRAINT [FK__UOM__ISOId__5165187F]
GO
/****** Object:  StoredProcedure [dbo].[AdvanceTypeDelete]    Script Date: 21-05-2018 03:41:57 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

CREATE PROCEDURE [dbo].[AdvanceTypeDelete] (@Id int ,@UserId int)         
AS        
        
BEGIN
SET NOCOUNT ON;

UPDATE AdvanceType set [IsDelete]=1,UpdatedId=@UserId,UpdatedTime=SYSUTCDATETIME() WHERE  Id=@Id 

END


GO
/****** Object:  StoredProcedure [dbo].[AdvanceTypeInsert]    Script Date: 21-05-2018 03:41:57 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

CREATE PROCEDURE[dbo].[AdvanceTypeInsert]   
(
@Code nvarchar(50),
@Name nvarchar(150),
@Remarks nvarchar(200),
@OrgId int,
@UserId int,
@Lang varchar(10)
)      
AS      
BEGIN 
DECLARE @Exist int, @flag int;
SET @flag = 0;
SET @Exist =(SELECT COUNT(*) FROM [AdvanceType] WHERE Code=@Code OR Name=@Name);    

 IF(@Exist=0)
  BEGIN
  DECLARE @ParentOrgId int;
  SET @ParentOrgId =(SELECT ISNULL(ParentOrgId,0) FROM Organisation WHERE Id=@OrgId);    

    IF(@ParentOrgId=0)
     BEGIN
    INSERT INTO [dbo].[AdvanceType]
      ([Code]
      ,[Name]
      ,[Remarks]
      ,[Status]
      ,[OrgId]
      ,[SubOrgId]
      ,[CreatedBy]
      ,[CreatedTime]
      ,[UpdatedId]
      ,[UpdatedTime]
      ,[Lang]
   ,[IsDelete])
   VALUES
      (@Code 
      ,@Name
      ,@Remarks 
      ,'6'
      ,@OrgId      
      ,0      
      ,@UserId      
      ,GETDATE()      
      ,@UserId      
      ,GETDATE()      
      ,@Lang
   ,0)
     END
    ELSE 
     BEGIN
    INSERT INTO [dbo].[AdvanceType]
           ([Code]
           ,[Name]
           ,[Remarks]
           ,[Status]
           ,[OrgId]
           ,[SubOrgId]
           ,[CreatedBy]
           ,[CreatedTime]
           ,[UpdatedId]
           ,[UpdatedTime]
           ,[Lang]
     ,[IsDelete])
     VALUES
           (@Code 
           ,@Name
           ,@Remarks 
           ,'6'
           ,@ParentOrgId      
           ,@OrgId      
           ,@UserId      
           ,GETDATE()      
           ,@UserId      
           ,GETDATE()      
           ,@Lang
     ,0)
     END
   SET @flag = 1;
  END
 ELSE
  BEGIN
   SET @flag = 2;
  END
 SELECT @flag;
END

GO
/****** Object:  StoredProcedure [dbo].[AdvanceTypeSelectAll]    Script Date: 21-05-2018 03:41:57 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

CREATE PROCEDURE [dbo].[AdvanceTypeSelectAll]
 @Dataflow int,
 @OrgId int,
 @SubOrgId int
AS
BEGIN 
 
  BEGIN
SELECT AD.Id, org.Name as OrgName, Ad.Code,Ad.Name,Ad.Remarks,s.Name as 'Status'
    FROM AdvanceType AD
	  INNER JOIN Organisation org on org.Id= AD.SubOrgId
	  INNER JOIN [dbo].[Status] s on AD.Status=s.Id
   WHERE AD.[IsDelete]=0 AND AD.SubOrgId IN (select Id from  [dbo].Ufn_getsuborgid(@Dataflow,@OrgId,@SubOrgId))
   ORDER BY AD.NAME;

  END
 end
GO
/****** Object:  StoredProcedure [dbo].[AdvanceTypeSelectAll1]    Script Date: 21-05-2018 03:41:57 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO


CREATE PROCEDURE [dbo].[AdvanceTypeSelectAll1]
 @Dataflow int,
 @OrgId int,
 @SubOrgId int
AS
BEGIN 
 
 IF(@Dataflow=0)
  BEGIN
SELECT AD.Id, org.Name as OrgName, Ad.Code,Ad.Name,Ad.Remarks,s.Name as 'Status'
    FROM AdvanceType AD
	  INNER JOIN Organisation org on org.Id= AD.OrgId
	  INNER JOIN [dbo].[Status] s on AD.Status=s.Id
   WHERE AD.[IsDelete]=0 AND OrgId=@OrgId
   ORDER BY AD.NAME;

  END
 IF(@Dataflow=1)
  BEGIN

SELECT AD.Id, org.Name as OrgName, Ad.Code,Ad.Name,Ad.Remarks,s.Name as 'Status'
    FROM AdvanceType AD
	  INNER JOIN Organisation org on org.Id= AD.OrgId
	  INNER JOIN [dbo].[Status] s on AD.Status=s.Id
   WHERE AD.[IsDelete]=0 AND SubOrgId=@SubOrgId
   ORDER BY AD.NAME;
   
  END
 IF(@Dataflow=2)
  BEGIN

SELECT AD.Id, org.Name as OrgName, Ad.Code,Ad.Name,Ad.Remarks,s.Name as 'Status'
    FROM AdvanceType AD
	  INNER JOIN Organisation org on org.Id= AD.OrgId
	  INNER JOIN [dbo].[Status] s on AD.Status=s.Id
   WHERE AD.[IsDelete]=0 AND org.ParentOrgId=@OrgId
   ORDER BY AD.NAME;

  END
 IF(@Dataflow=3)
  BEGIN

SELECT AD.Id, org.Name as OrgName, Ad.Code,Ad.Name,Ad.Remarks,s.Name as 'Status'
    FROM AdvanceType AD
	  INNER JOIN Organisation org on org.Id= AD.OrgId
	  INNER JOIN [dbo].[Status] s on AD.Status=s.Id
   WHERE AD.[IsDelete]=0 AND (AD.OrgId=@OrgId OR AD.SubOrgId=@SubOrgId)
   ORDER BY AD.NAME;

  END
 IF(@Dataflow=4)
  BEGIN

SELECT AD.Id, org.Name as OrgName, Ad.Code,Ad.Name,Ad.Remarks,s.Name as 'Status'
    FROM AdvanceType AD
	  INNER JOIN Organisation org on org.Id= AD.OrgId
	  INNER JOIN [dbo].[Status] s on AD.Status=s.Id
   WHERE AD.[IsDelete]=0 
   ORDER BY AD.NAME;

  END
END



GO
/****** Object:  StoredProcedure [dbo].[AdvanceTypeUpdate]    Script Date: 21-05-2018 03:41:57 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE[dbo].[AdvanceTypeUpdate]   
(
@Id int,
@Code nvarchar(50),
@Name nvarchar(150),
@Remarks nvarchar(200),
@OrgId int,
@UserId int,
@Lang varchar(10)
)
AS    
      
BEGIN 
  DECLARE @Exist int, @flag int;
  SET @flag = 0;
  SET @Exist =(SELECT COUNT(*) FROM [AdvanceType] WHERE Id!=@Id AND (Code=@Code OR Name=@Name)); 
 
 IF(@Exist=0)
  BEGIN 
   DECLARE @ParentOrgId int;
   SET @ParentOrgId =(SELECT ISNULL(ParentOrgId,0) FROM Organisation WHERE Id=@OrgId);
   IF(@ParentOrgId=0)
    BEGIN
  UPDATE  [dbo].[AdvanceType]
     SET [Code] = @Code 
     ,[Name] = @Name 
     ,[Remarks] = @Remarks 
     ,[Status] = '6'
     ,[OrgId] = @OrgId 
     ,[SubOrgId] = 0 
     ,[UpdatedId] = @UserId
     ,[UpdatedTime] =GETDATE()
     ,[Lang] = @Lang 
   WHERE  Id=@Id
  END
   ELSE 
    BEGIN
    UPDATE  [dbo].[AdvanceType]
     SET [Code] = @Code 
     ,[Name] = @Name 
     ,[Remarks] = @Remarks 
     ,[Status] = '6'
     ,[OrgId] = @ParentOrgId 
     ,[SubOrgId] = @OrgId 
     ,[UpdatedId] = @UserId
     ,[UpdatedTime] =GETDATE()
     ,[Lang] = @Lang 
   WHERE  Id=@Id
  END
   SET @flag = 1;
  END 
 ELSE
  BEGIN
   SET @flag = 2;
  END
 SELECT @flag;
END

GO
/****** Object:  StoredProcedure [dbo].[CREATEMODEL]    Script Date: 21-05-2018 03:41:57 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[CREATEMODEL]  
(  
     @TableName SYSNAME ,  
     @CLASSNAME VARCHAR(500)   
)  
AS  
BEGIN  
    DECLARE @Result VARCHAR(MAX)  
  
    SET @Result = @CLASSNAME + @TableName + '  
{'  
  
SELECT @Result = @Result + '  
    public ' + ColumnType + NullableSign + ' ' + ColumnName + ' { get; set; }'  
FROM  
(  
    SELECT   
        REPLACE(col.NAME, ' ', '_') ColumnName,  
        column_id ColumnId,  
        CASE typ.NAME   
            WHEN 'bigint' THEN 'long'  
            WHEN 'binary' THEN 'byte[]'  
            WHEN 'bit' THEN 'bool'  
            WHEN 'char' THEN 'string'  
            WHEN 'date' THEN 'DateTime'  
            WHEN 'datetime' THEN 'DateTime'  
            WHEN 'datetime2' then 'DateTime'  
            WHEN 'datetimeoffset' THEN 'DateTimeOffset'  
            WHEN 'decimal' THEN 'decimal'  
            WHEN 'float' THEN 'float'  
            WHEN 'image' THEN 'byte[]'  
            WHEN 'int' THEN 'int'  
            WHEN 'money' THEN 'decimal'  
            WHEN 'nchar' THEN 'char'  
            WHEN 'ntext' THEN 'string'  
            WHEN 'numeric' THEN 'decimal'  
            WHEN 'nvarchar' THEN 'string'  
            WHEN 'real' THEN 'double'  
            WHEN 'smalldatetime' THEN 'DateTime'  
            WHEN 'smallint' THEN 'short'  
            WHEN 'smallmoney' THEN 'decimal'  
            WHEN 'text' THEN 'string'  
            WHEN 'time' THEN 'TimeSpan'  
            WHEN 'timestamp' THEN 'DateTime'  
            WHEN 'tinyint' THEN 'byte'  
            WHEN 'uniqueidentifier' THEN 'Guid'  
            WHEN 'varbinary' THEN 'byte[]'  
            WHEN 'varchar' THEN 'string'  
            ELSE 'UNKNOWN_' + typ.NAME  
        END ColumnType,  
        CASE   
            WHEN col.is_nullable = 1 and typ.NAME in ('bigint', 'bit', 'date', 'datetime', 'datetime2', 'datetimeoffset', 'decimal', 'float', 'int', 'money', 'numeric', 'real', 'smalldatetime', 'smallint', 'smallmoney', 'time', 'tinyint', 'uniqueidentifier')   
            THEN '?'   
            ELSE ''   
        END NullableSign  
    FROM SYS.COLUMNS col join sys.types typ on col.system_type_id = typ.system_type_id AND col.user_type_id = typ.user_type_id  
    where object_id = object_id(@TableName)  
) t  
ORDER BY ColumnId  
SET @Result = @Result  + '  
}'  
  
print @Result  
  
END  
GO
/****** Object:  StoredProcedure [dbo].[DepartmentDelete]    Script Date: 21-05-2018 03:41:57 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO


CREATE PROCEDURE [dbo].[DepartmentDelete] (@Id int ,@UserId int)         
AS        
        
BEGIN
SET NOCOUNT ON;

UPDATE Department set [IsDelete]=1,UpdatedId=@UserId,UpdatedTime=SYSUTCDATETIME() WHERE  Id=@Id 

END



GO
/****** Object:  StoredProcedure [dbo].[DepartmentInsert]    Script Date: 21-05-2018 03:41:57 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO


CREATE PROCEDURE[dbo].[DepartmentInsert]   
(
@Code nvarchar(50),
@Name nvarchar(150),
@Remarks nvarchar(200),
@OrgId int,
@UserId int,
@Lang varchar(10)
)      
AS      
BEGIN 
DECLARE @Exist int, @flag int;
SET @flag = 0;
SET @Exist =(SELECT COUNT(*) FROM [Department] WHERE Code=@Code OR Name=@Name);    

 IF(@Exist=0)
  BEGIN
  DECLARE @ParentOrgId int;
  SET @ParentOrgId =(SELECT ISNULL(ParentOrgId,0) FROM Organisation WHERE Id=@OrgId);    

    IF(@ParentOrgId=0)
     BEGIN
    INSERT INTO [dbo].[Department]
      ([Code]
      ,[Name]
      ,[Remarks]
      ,[Status]
      ,[OrgId]
      ,[SubOrgId]
      ,[CreatedBy]
      ,[CreatedTime]
      ,[UpdatedId]
      ,[UpdatedTime]
      ,[Lang]
   ,[IsDelete])
   VALUES
      (@Code 
      ,@Name
      ,@Remarks 
      ,'6'
      ,@OrgId      
      ,0      
      ,@UserId      
      ,GETDATE()      
      ,@UserId      
      ,GETDATE()      
      ,@Lang
   ,0)
     END
    ELSE 
     BEGIN
    INSERT INTO [dbo].[Department]
           ([Code]
           ,[Name]
           ,[Remarks]
           ,[Status]
           ,[OrgId]
           ,[SubOrgId]
           ,[CreatedBy]
           ,[CreatedTime]
           ,[UpdatedId]
           ,[UpdatedTime]
           ,[Lang]
     ,[IsDelete])
     VALUES
           (@Code 
           ,@Name
           ,@Remarks 
           ,'6'
           ,@ParentOrgId      
           ,@OrgId      
           ,@UserId      
           ,GETDATE()      
           ,@UserId      
           ,GETDATE()      
           ,@Lang
     ,0)
     END
   SET @flag = 1;
  END
 ELSE
  BEGIN
   SET @flag = 2;
  END
 SELECT @flag;
END


GO
/****** Object:  StoredProcedure [dbo].[DepartmentSelectAll]    Script Date: 21-05-2018 03:41:57 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO


CREATE PROCEDURE [dbo].[DepartmentSelectAll]
 @Dataflow int,
 @OrgId int,
 @SubOrgId int
AS
BEGIN 
 
  BEGIN
SELECT AD.Id, org.Name as OrgName, Ad.Code,Ad.Name,Ad.Remarks,s.Name as 'Status'
    FROM Department AD
	  INNER JOIN Organisation org on org.Id= AD.SubOrgId
	  INNER JOIN [dbo].[Status] s on AD.Status=s.Id
   WHERE AD.[IsDelete]=0 AND AD.SubOrgId IN (select Id from  [dbo].Ufn_getsuborgid(@Dataflow,@OrgId,@SubOrgId))
   ORDER BY AD.NAME;

  END
 end

GO
/****** Object:  StoredProcedure [dbo].[DepartmentUpdate]    Script Date: 21-05-2018 03:41:57 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

CREATE PROCEDURE[dbo].[DepartmentUpdate]   
(
@Id int,
@Code nvarchar(50),
@Name nvarchar(150),
@Remarks nvarchar(200),
@OrgId int,
@UserId int,
@Lang varchar(10)
)
AS    
      
BEGIN 
  DECLARE @Exist int, @flag int;
  SET @flag = 0;
  SET @Exist =(SELECT COUNT(*) FROM [Department] WHERE Id!=@Id AND (Code=@Code OR Name=@Name)); 
 
 IF(@Exist=0)
  BEGIN 
   DECLARE @ParentOrgId int;
   SET @ParentOrgId =(SELECT ISNULL(ParentOrgId,0) FROM Organisation WHERE Id=@OrgId);
   IF(@ParentOrgId=0)
    BEGIN
  UPDATE  [dbo].[Department]
     SET [Code] = @Code 
     ,[Name] = @Name 
     ,[Remarks] = @Remarks 
     ,[Status] = '6'
     ,[OrgId] = @OrgId 
     ,[SubOrgId] = 0 
     ,[UpdatedId] = @UserId
     ,[UpdatedTime] =GETDATE()
     ,[Lang] = @Lang 
   WHERE  Id=@Id
  END
   ELSE 
    BEGIN
    UPDATE  [dbo].[Department]
     SET [Code] = @Code 
     ,[Name] = @Name 
     ,[Remarks] = @Remarks 
     ,[Status] = '6'
     ,[OrgId] = @ParentOrgId 
     ,[SubOrgId] = @OrgId 
     ,[UpdatedId] = @UserId
     ,[UpdatedTime] =GETDATE()
     ,[Lang] = @Lang 
   WHERE  Id=@Id
  END
   SET @flag = 1;
  END 
 ELSE
  BEGIN
   SET @flag = 2;
  END
 SELECT @flag;
END


GO
/****** Object:  StoredProcedure [dbo].[DriverInformationDelete]    Script Date: 21-05-2018 03:41:57 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO


CREATE PROCEDURE[dbo].[DriverInformationDelete]     
           (@Id int ,@UserId int)         
AS        
        
BEGIN
SET NOCOUNT ON;

UPDATE DriverInformation set [IsDelete]=1,UpdatedId=@UserId,UpdatedTime=SYSUTCDATETIME()
 WHERE  Id=@Id 

END


GO
/****** Object:  StoredProcedure [dbo].[DriverInformationInsert]    Script Date: 21-05-2018 03:41:57 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO



CREATE PROCEDURE[dbo].[DriverInformationInsert]
         ( @Code varchar(50)
           ,@Name varchar(50)
           ,@DateOfBirth datetime
           ,@DateOfJoining datetime
           ,@LicenseNo varchar(50)
           ,@IssueDate datetime
           ,@ValidUpto datetime
           ,@CitizenshipNo varchar(50)
           ,@CSNIssueDate datetime
           ,@UnitNo varchar(50)
           ,@Remarks nvarchar(200)
           ,@UserId int  
           ,@Lang varchar(10)
		   ,@OrgId int)

AS  
 BEGIN 
 DECLARE @ParentOrgId int;
 SET @ParentOrgId =(SELECT ISNULL(ParentOrgId,0) FROM Organisation WHERE Id=@OrgId);

declare @Status char(1);  
set @Status = '6';  

IF(@ParentOrgId=0)
  BEGIN

INSERT INTO [dbo].[DriverInformation]
           ([Code]
           ,[Name]
           ,[DateOfBirth]
           ,[DateOfJoining]
           ,[LicenseNo]
           ,[IssueDate]
           ,[ValidUpto]
           ,[CitizenshipNo]
           ,[CSNIssueDate]
           ,[UnitNo]
           ,[Remarks]
           ,[Status]
           ,[OrgId]
		   ,[SubOrgId]
           ,[CreatedBy]
           ,[CreatedTime]
           ,[UpdatedId]
           ,[UpdatedTime]
           ,[Lang]
		   ,[IsDelete])
     VALUES
           (@Code
           ,@Name
           ,@DateOfBirth
           ,@DateOfJoining
           ,@LicenseNo
           ,@IssueDate
           ,@ValidUpto
           ,@CitizenshipNo
           ,@CSNIssueDate
           ,@UnitNo
           ,@Remarks
           ,@Status
           ,@OrgId 
		   ,0 
           ,@UserId  
           ,SYSUTCDATETIME()  
           ,@UserId  
           ,SYSUTCDATETIME()  
           ,@Lang
		   ,0)
		   END
 ELSE 
  BEGIN
  INSERT INTO [dbo].[DriverInformation]
           ([Code]
           ,[Name]
           ,[DateOfBirth]
           ,[DateOfJoining]
           ,[LicenseNo]
           ,[IssueDate]
           ,[ValidUpto]
           ,[CitizenshipNo]
           ,[CSNIssueDate]
           ,[UnitNo]
           ,[Remarks]
           ,[Status]
           ,[OrgId]
		   ,[SubOrgId]
           ,[CreatedBy]
           ,[CreatedTime]
           ,[UpdatedId]
           ,[UpdatedTime]
           ,[Lang]
		   ,[IsDelete])
     VALUES
           (@Code
           ,@Name
           ,@DateOfBirth
           ,@DateOfJoining
           ,@LicenseNo
           ,@IssueDate
           ,@ValidUpto
           ,@CitizenshipNo
           ,@CSNIssueDate
           ,@UnitNo
           ,@Remarks
           ,@Status
		   ,@ParentOrgId
           ,@OrgId  
           ,@UserId  
           ,SYSUTCDATETIME()  
           ,@UserId  
           ,SYSUTCDATETIME()  
           ,@Lang
		   ,0)
  END
END


GO
/****** Object:  StoredProcedure [dbo].[DriverInformationSelect]    Script Date: 21-05-2018 03:41:57 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO




CREATE PROCEDURE[dbo].[DriverInformationSelect]     
           (@Id int )         
AS        
        
BEGIN
SET NOCOUNT ON;

SELECT d.*,(select name from Organisation where Id=d.OrgId) as 'orgname',
(select name from Organisation where Id=d.SubOrgId) as 'suborgname'  FROM DriverInformation as d
 WHERE d.Id=@Id and d.[IsDelete]=0

END


GO
/****** Object:  StoredProcedure [dbo].[DriverInformationSelectAll]    Script Date: 21-05-2018 03:41:57 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO


CREATE PROCEDURE[dbo].[DriverInformationSelectAll]     
      
AS        
        
BEGIN
SET NOCOUNT ON;

SELECT DI.Id,org.Name as OrgName
           ,DI.Code
           ,DI.Name
           ,DI.DateOfBirth
            ,DI.DateOfJoining
           ,DI.LicenseNo
           ,DI.IssueDate
            ,DI.ValidUpto
           ,DI.CitizenshipNo
            ,DI.CSNIssueDate
            ,DI.UnitNo
            ,DI.Remarks
            ,s.Name as 'Status'
          
      FROM DriverInformation DI
	  INNER JOIN Organisation org on org.Id= DI.OrgId
	  INNER JOIN [dbo].[Status] s on DI.Status=s.Id
	  where DI.[IsDelete]=0
	   ORDER BY DI.NAME


END

GO
/****** Object:  StoredProcedure [dbo].[DriverInformationUpdate]    Script Date: 21-05-2018 03:41:57 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO


CREATE PROCEDURE[dbo].[DriverInformationUpdate]     
           (@Id int  
           ,@Code varchar(50)
           ,@Name varchar(50)
           ,@DateOfBirth datetime
           ,@DateOfJoining datetime
           ,@LicenseNo varchar(50)
           ,@IssueDate datetime
           ,@ValidUpto datetime
           ,@CitizenshipNo varchar(50)
           ,@CSNIssueDate datetime
           ,@UnitNo varchar(50)
           ,@Remarks nvarchar(200)
           ,@UserId int  
           ,@Lang varchar(10)
		   ,@OrgId int)         
AS        
BEGIN 
 DECLARE @ParentOrgId int;
 SET @ParentOrgId =(SELECT ISNULL(ParentOrgId,0) FROM Organisation WHERE Id=@OrgId);

declare @Status char(1);             
set @Status = '6';    
  
  IF(@ParentOrgId=0)
  BEGIN
UPDATE [dbo].[DriverInformation]
   SET [Code] = @Code
      ,[Name] = @Name
      ,[DateOfBirth] = @DateOfBirth
      ,[DateOfJoining] = @DateOfJoining
      ,[LicenseNo] = @LicenseNo
      ,[IssueDate] = @IssueDate
      ,[ValidUpto] = @ValidUpto
      ,[CitizenshipNo] = @CitizenshipNo
      ,[CSNIssueDate] = @CSNIssueDate
      ,[UnitNo] = @UnitNo
      ,[Remarks] = @Remarks
      ,[UpdatedId] = @UserId  
      ,[UpdatedTime] = SYSUTCDATETIME() 
      ,[Lang] = @Lang
	  ,[OrgId]=@OrgId
	  ,[SubOrgId]=0
 WHERE Id=@Id
 END
 ELSE 
  BEGIN
  UPDATE [dbo].[DriverInformation]
   SET [Code] = @Code
      ,[Name] = @Name
      ,[DateOfBirth] = @DateOfBirth
      ,[DateOfJoining] = @DateOfJoining
      ,[LicenseNo] = @LicenseNo
      ,[IssueDate] = @IssueDate
      ,[ValidUpto] = @ValidUpto
      ,[CitizenshipNo] = @CitizenshipNo
      ,[CSNIssueDate] = @CSNIssueDate
      ,[UnitNo] = @UnitNo
      ,[Remarks] = @Remarks
      ,[UpdatedId] = @UserId  
      ,[UpdatedTime] = SYSUTCDATETIME() 
      ,[Lang] = @Lang
	  ,[OrgId]=@ParentOrgId
	  ,[SubOrgId]=@OrgId
 WHERE Id=@Id
 END
END

GO
/****** Object:  StoredProcedure [dbo].[DriverShortagesInsert]    Script Date: 21-05-2018 03:41:57 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

CREATE PROCEDURE[dbo].[DriverShortagesInsert]
         (  @DriverId int
           ,@Commodity int
		   ,@ShortageUOM int
           ,@ShortageQuantity decimal
           ,@ShortageValue decimal
           ,@DateOfShortage datetime
           ,@ShortageValuePaidbyDriver decimal
           ,@UserId int
           )
AS  
declare @Status char(1);  
set @Status = '6';  
INSERT INTO [dbo].[DriverShortages]
           ([DriverId]
      ,[Commodity]
      ,[ShortageUOM]
      ,[ShortageQuantity]
      ,[ShortageValue]
      ,[DateOfShortage]
      ,[ShortageValuePaidbyDriver]
      ,[Status]
      ,[CreatedBy]
      ,[CreatedTime]
      ,[UpdatedId]
      ,[UpdatedTime]
      ,[Lang]
	  ,[IsDelete])
     VALUES
           (@DriverId
           ,@Commodity
		   ,@ShortageUOM 
           ,@ShortageQuantity
           ,@ShortageValue 
           ,@DateOfShortage 
           ,@ShortageValuePaidbyDriver
           ,@Status
           ,@UserId  
           ,SYSUTCDATETIME()  
           ,@UserId  
           ,SYSUTCDATETIME()  
           ,''
		   ,0)


GO
/****** Object:  StoredProcedure [dbo].[DriverShortagesSelect]    Script Date: 21-05-2018 03:41:57 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO



CREATE PROCEDURE[dbo].[DriverShortagesSelect]     
           (@Id int )         
AS        
        
BEGIN
SET NOCOUNT ON;
SELECT      ds.Id
			,ds.UpdatedTime
           ,driinf.Name as DriverName
		   ,ds.DriverId
           ,c.Name AS CommodityName
		   ,ds.Commodity
           ,u.Name as ShortageUOMName
		   ,ds.ShortageUOM
           ,ds.ShortageQuantity
            ,ds.ShortageValue
           ,ds.DateOfShortage
           ,ds.ShortageValuePaidbyDriver
      FROM DriverShortages ds
	  INNER JOIN DriverInformation driinf(nolock) on driinf.Id= ds.DriverId
	  INNER JOIN [dbo].[Status] s(nolock) on ds.Status=s.Id
	  INNER JOIN [dbo].Commodity c(nolock) on c.Id=ds.Commodity
	  INNer JOIN [dbo].UOM u(nolock) on u.Id=ds.ShortageUOM  
      where ds.Id=@Id and ds.IsDelete=0
END

GO
/****** Object:  StoredProcedure [dbo].[DriverShortagesSelectAll]    Script Date: 21-05-2018 03:41:57 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

CREATE PROCEDURE[dbo].[DriverShortagesSelectAll]     
 @PageNumber INT,
 @PageSize INT,
 @SortExpr varchar(50),
 @SortDir varchar(50),
 @SearchText varchar(100)  
AS        
        
BEGIN
SET NOCOUNT ON;

SELECT DS.Id,driinf.Name as DriverName
           ,c.Name AS CommodityName
           ,u.Name as ShortageUOMName
           ,Ds.ShortageQuantity
            ,Ds.ShortageValue
           ,Ds.DateOfShortage
           ,Ds.ShortageValuePaidbyDriver
           ,s.Name as 'Status'
          
      FROM DriverShortages Ds
	  INNER JOIN DriverInformation driinf(nolock) on driinf.Id= ds.DriverId
	  INNER JOIN [dbo].[Status] s(nolock) on Ds.Status=s.Id
	  INNER JOIN [dbo].Commodity c(nolock) on c.Id=ds.Commodity
	  INNer JOIN [dbo].UOM u(nolock) on u.Id=ds.ShortageUOM  
	  where Ds.IsDelete=0 AND (@SearchText IS NULL OR (driinf.Name LIKE '%'+@SearchText+'%' OR  c.Name LIKE '%'+@SearchText+'%' OR  u.Name LIKE '%'+@SearchText+'%'))
	   ORDER BY
	    CASE WHEN LOWER(@SortExpr) = 'drivername' and LOWER(@SortDir) = 'asc' 
			THEN driinf.NAME END ASC, 
		CASE WHEN LOWER(@SortExpr) = 'drivername' and LOWER(@SortDir) = 'desc' 
			THEN driinf.NAME END DESC,
		CASE WHEN LOWER(@SortExpr) = 'commodityname' and LOWER(@SortDir) = 'asc' 
			THEN C.NAME END ASC, 
		CASE WHEN LOWER(@SortExpr) = 'commodityname' and LOWER(@SortDir) = 'desc' 
			THEN C.NAME END DESC,
		CASE WHEN LOWER(@SortExpr) = 'uomname' and LOWER(@SortDir) = 'asc' 
			THEN U.NAME END ASC, 
		CASE WHEN LOWER(@SortExpr) = 'uomname' and LOWER(@SortDir) = 'desc' 
			THEN U.NAME END DESC
 OFFSET @PageSize * (@PageNumber - 1) ROWS
    FETCH NEXT @PageSize ROWS ONLY OPTION (RECOMPILE);
END


GO
/****** Object:  StoredProcedure [dbo].[UserDelete]    Script Date: 21-05-2018 03:41:57 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

CREATE PROCEDURE[dbo].[UserDelete]
	(@Id int) 
AS
BEGIN
	DELETE 
     FROM   [dbo].[User]
     WHERE  
     [id] = @Id
END


GO
/****** Object:  StoredProcedure [dbo].[UserFeatureMappingInsert]    Script Date: 21-05-2018 03:41:57 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE[dbo].[UserFeatureMappingInsert] 
	(@UserId int,
	@FeatureId int,
	@Deny int,
	@Create int,
	@Edit int,
	@View int,
	@Delete int,
	@Print int,
	@Copy int,
	@Dataflow int,
	@CreatedBy int,
	@UpdatedId int
	)
AS
BEGIN
	INSERT INTO [dbo].[UserFeatureMapping]
			([UserId]
			,[FeatureId]
           ,[Deny]
		   ,[Create]
           ,[Edit]
		   ,[View]
		   ,[Delete]
		   ,[Print]
		   ,[Copy]
		   ,[Dataflow]
           ,[CreatedBy]
           ,[CreatedTime]
           ,[UpdatedId]
           ,[UpdatedTime]
           ,[Lang])
     VALUES
           (@UserId
		   ,@FeatureId
		   ,@Deny
		   ,@Create
		   ,@Edit
		   ,@View
		   ,@Delete
		   ,@Print
		   ,@Copy
		   ,@Dataflow
           ,@CreatedBy
           ,SYSUTCDATETIME()
           ,@UpdatedId
           ,SYSUTCDATETIME()
           ,'en')

END


GO
/****** Object:  StoredProcedure [dbo].[UserFeatureMappingUpdate]    Script Date: 21-05-2018 03:41:57 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

CREATE PROCEDURE[dbo].[UserFeatureMappingUpdate] 
	(@Id int,
	@UserId int,
	@FeatureId int,
	@Deny int,
	@Create int,
	@Edit int,
	@View int,
	@Delete int,
	@Print int,
	@Copy int,
	@Dataflow int,
	@UpdatedId int)
AS
BEGIN
UPDATE [dbo].[UserFeatureMapping]
   SET [UserId] = @UserId
      ,[FeatureId] = @FeatureId
      ,[Deny] = @Deny
	  ,[Create]=@Create
      ,[Edit] = @Edit
      ,[View] = @View
	  ,[Delete] = @Delete
	  ,[Print] = @Print
	  ,[Copy] = @Copy
	  ,[Dataflow] = @Dataflow
	  ,[UpdatedId] = @UpdatedId
      ,[UpdatedTime] = SYSUTCDATETIME() 
 WHERE Id=@Id
END

GO
/****** Object:  StoredProcedure [dbo].[UserInsert]    Script Date: 21-05-2018 03:41:57 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

CREATE PROCEDURE[dbo].[UserInsert]
	@FullName varchar(max)='',
	@PasswordHash varbinary(max) ,
	@UpdatedBy varchar(100)='',
	@PasswordSalt varbinary(max),
	@Email varchar(50)='',
	@CreatedBy varchar(100)='',
	@Is_Update bit=1,
	 @Id int=0
AS
BEGIN
if @Is_Update=0
begin
	INSERT INTO [dbo].[User] ([FullName],[Email],[PasswordHash],[CreatedBy],[CreatedTime],[UpdatedBy],[UpdatedTime],[PasswordSalt],[IsActive])
                                  VALUES (@FullName,@Email,@PasswordHash,@CreatedBy, SYSUTCDATETIME(),@UpdatedBy, '',@PasswordSalt,0)
                                  SELECT SCOPE_IDENTITY()
						    end
						    else
						    begin
						    update [user] set 
						    [FullName]=@FullName,
						    [PasswordHash]=@PasswordHash,
						    [UpdatedBy]=@UpdatedBy,
						    [PasswordSalt]=@PasswordSalt,
						    [Email]=@Email,
						    [CreatedBy]=@CreatedBy,
						    [IsActive]=0,
						     [UpdatedTime]=SYSUTCDATETIME()
						     WHERE Id=@Id
						    end

END


GO
/****** Object:  StoredProcedure [dbo].[Usp_AdvanceTypeSelectAll]    Script Date: 21-05-2018 03:41:57 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO



CREATE PROCEDURE [dbo].[Usp_AdvanceTypeSelectAll]
 @Dataflow INT,
 @OrgId INT,
 @SubOrgId INT,
 @PageNumber INT,
 @PageSize INT,
 @SortExpr varchar(50),
 @SortDir varchar(50),
 @SearchText varchar(100)
AS
BEGIN 
 SELECT AD.Id, org.Name as OrgName, Ad.Code,Ad.Name,Ad.Remarks,s.Name as 'Status', overall_count = COUNT(*) OVER()
    FROM AdvanceType AD
   INNER JOIN Organisation org on org.Id= AD.OrgId
   INNER JOIN [dbo].[Status] s on AD.Status=s.Id
 WHERE AD.[IsDelete]=0 
 
 AND ad.suborgid in (select Id from  [dbo].Ufn_getsuborgid(@Dataflow,@OrgId,@SubOrgId))
 
 
  AND (@SearchText IS NULL OR (org.Name LIKE '%'+@SearchText+'%' OR  Ad.Code LIKE '%'+@SearchText+'%' OR  Ad.Name LIKE '%'+@SearchText+'%'))
 ORDER BY 
 CASE WHEN LOWER(@SortExpr) = 'name' and LOWER(@SortDir) = 'asc' 
  THEN AD.NAME END ASC, 
 CASE WHEN LOWER(@SortExpr) = 'name' and LOWER(@SortDir) = 'desc' 
  THEN AD.NAME END DESC,
 CASE WHEN LOWER(@SortExpr) = 'orgname' and LOWER(@SortDir) = 'asc' 
  THEN ORG.NAME END ASC, 
 CASE WHEN LOWER(@SortExpr) = 'orgname' and LOWER(@SortDir) = 'desc' 
  THEN ORG.NAME END DESC,
 CASE WHEN LOWER(@SortExpr) = 'code' and LOWER(@SortDir) = 'asc' 
  THEN AD.CODE END ASC, 
 CASE WHEN LOWER(@SortExpr) = 'code' and LOWER(@SortDir) = 'desc' 
  THEN AD.CODE END DESC
 OFFSET @PageSize * (@PageNumber - 1) ROWS
    FETCH NEXT @PageSize ROWS ONLY OPTION (RECOMPILE);


END



GO
/****** Object:  StoredProcedure [dbo].[Usp_AdvanceTypeSelectAll1]    Script Date: 21-05-2018 03:41:57 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO


CREATE PROCEDURE [dbo].[Usp_AdvanceTypeSelectAll1]
 @Dataflow INT,
 @OrgId INT,
 @SubOrgId INT,
 @PageNumber INT,
 @PageSize INT,
 @SortExpr varchar(50),
 @SortDir varchar(50),
 @SearchText varchar(100)
AS
BEGIN 
 
 IF(@Dataflow=0)
  BEGIN
 SELECT AD.Id, org.Name as OrgName, Ad.Code,Ad.Name,Ad.Remarks,s.Name as 'Status', overall_count = COUNT(*) OVER()
    FROM AdvanceType AD
   INNER JOIN Organisation org on org.Id= AD.OrgId
   INNER JOIN [dbo].[Status] s on AD.Status=s.Id
 WHERE AD.[IsDelete]=0 AND OrgId=@OrgId AND (@SearchText IS NULL OR (org.Name LIKE '%'+@SearchText+'%' OR  Ad.Code LIKE '%'+@SearchText+'%' OR  Ad.Name LIKE '%'+@SearchText+'%'))
 ORDER BY 
 CASE WHEN LOWER(@SortExpr) = 'name' and LOWER(@SortDir) = 'asc' 
  THEN AD.NAME END ASC, 
 CASE WHEN LOWER(@SortExpr) = 'name' and LOWER(@SortDir) = 'desc' 
  THEN AD.NAME END DESC,
 CASE WHEN LOWER(@SortExpr) = 'orgname' and LOWER(@SortDir) = 'asc' 
  THEN ORG.NAME END ASC, 
 CASE WHEN LOWER(@SortExpr) = 'orgname' and LOWER(@SortDir) = 'desc' 
  THEN ORG.NAME END DESC,
 CASE WHEN LOWER(@SortExpr) = 'code' and LOWER(@SortDir) = 'asc' 
  THEN AD.CODE END ASC, 
 CASE WHEN LOWER(@SortExpr) = 'code' and LOWER(@SortDir) = 'desc' 
  THEN AD.CODE END DESC
 OFFSET @PageSize * (@PageNumber - 1) ROWS
    FETCH NEXT @PageSize ROWS ONLY OPTION (RECOMPILE);

  END
 IF(@Dataflow=1)
  BEGIN

 SELECT AD.Id, org.Name as OrgName, Ad.Code,Ad.Name,Ad.Remarks,s.Name as 'Status', overall_count = COUNT(*) OVER()
    FROM AdvanceType AD
   INNER JOIN Organisation org on org.Id= AD.OrgId
   INNER JOIN [dbo].[Status] s on AD.Status=s.Id
 WHERE AD.[IsDelete]=0 AND SubOrgId=@SubOrgId AND (@SearchText IS NULL OR (org.Name LIKE '%'+@SearchText+'%' OR  Ad.Code LIKE '%'+@SearchText+'%' OR  Ad.Name LIKE '%'+@SearchText+'%'))
 ORDER BY 
 CASE WHEN LOWER(@SortExpr) = 'name' and LOWER(@SortDir) = 'asc' 
  THEN AD.NAME END ASC, 
 CASE WHEN LOWER(@SortExpr) = 'name' and LOWER(@SortDir) = 'desc' 
  THEN AD.NAME END DESC,
 CASE WHEN LOWER(@SortExpr) = 'orgname' and LOWER(@SortDir) = 'asc' 
  THEN ORG.NAME END ASC, 
 CASE WHEN LOWER(@SortExpr) = 'orgname' and LOWER(@SortDir) = 'desc' 
  THEN ORG.NAME END DESC,
 CASE WHEN LOWER(@SortExpr) = 'code' and LOWER(@SortDir) = 'asc' 
  THEN AD.CODE END ASC, 
 CASE WHEN LOWER(@SortExpr) = 'code' and LOWER(@SortDir) = 'desc' 
  THEN AD.CODE END DESC
 OFFSET @PageSize * (@PageNumber - 1) ROWS
    FETCH NEXT @PageSize ROWS ONLY OPTION (RECOMPILE);
   
  END
 IF(@Dataflow=2)
  BEGIN

 SELECT AD.Id, org.Name as OrgName, Ad.Code,Ad.Name,Ad.Remarks,s.Name as 'Status', overall_count = COUNT(*) OVER()
    FROM AdvanceType AD
   INNER JOIN Organisation org on org.Id= AD.OrgId
   INNER JOIN [dbo].[Status] s on AD.Status=s.Id
 WHERE AD.[IsDelete]=0 AND org.ParentOrgId=@OrgId AND (@SearchText IS NULL OR (org.Name LIKE '%'+@SearchText+'%' OR  Ad.Code LIKE '%'+@SearchText+'%' OR  Ad.Name LIKE '%'+@SearchText+'%'))
 ORDER BY 
CASE WHEN LOWER(@SortExpr) = 'name' and LOWER(@SortDir) = 'asc' 
  THEN AD.NAME END ASC, 
 CASE WHEN LOWER(@SortExpr) = 'name' and LOWER(@SortDir) = 'desc' 
  THEN AD.NAME END DESC,
 CASE WHEN LOWER(@SortExpr) = 'orgname' and LOWER(@SortDir) = 'asc' 
  THEN ORG.NAME END ASC, 
 CASE WHEN LOWER(@SortExpr) = 'orgname' and LOWER(@SortDir) = 'desc' 
  THEN ORG.NAME END DESC,
 CASE WHEN LOWER(@SortExpr) = 'code' and LOWER(@SortDir) = 'asc' 
  THEN AD.CODE END ASC, 
 CASE WHEN LOWER(@SortExpr) = 'code' and LOWER(@SortDir) = 'desc' 
  THEN AD.CODE END DESC
 OFFSET @PageSize * (@PageNumber - 1) ROWS
    FETCH NEXT @PageSize ROWS ONLY OPTION (RECOMPILE);

  END
 IF(@Dataflow=3)
  BEGIN

 SELECT AD.Id, org.Name as OrgName, Ad.Code,Ad.Name,Ad.Remarks,s.Name as 'Status', overall_count = COUNT(*) OVER()
    FROM AdvanceType AD
   INNER JOIN Organisation org on org.Id= AD.OrgId
   INNER JOIN [dbo].[Status] s on AD.Status=s.Id
 WHERE AD.[IsDelete]=0 AND (AD.OrgId=@OrgId OR AD.SubOrgId=@SubOrgId) AND (@SearchText IS NULL OR (org.Name LIKE '%'+@SearchText+'%' OR  Ad.Code LIKE '%'+@SearchText+'%' OR  Ad.Name LIKE '%'+@SearchText+'%'))
 ORDER BY 
 CASE WHEN LOWER(@SortExpr) = 'name' and LOWER(@SortDir) = 'asc' 
  THEN AD.NAME END ASC, 
 CASE WHEN LOWER(@SortExpr) = 'name' and LOWER(@SortDir) = 'desc' 
  THEN AD.NAME END DESC,
 CASE WHEN LOWER(@SortExpr) = 'orgname' and LOWER(@SortDir) = 'asc' 
  THEN ORG.NAME END ASC, 
 CASE WHEN LOWER(@SortExpr) = 'orgname' and LOWER(@SortDir) = 'desc' 
  THEN ORG.NAME END DESC,
 CASE WHEN LOWER(@SortExpr) = 'code' and LOWER(@SortDir) = 'asc' 
  THEN AD.CODE END ASC, 
 CASE WHEN LOWER(@SortExpr) = 'code' and LOWER(@SortDir) = 'desc' 
  THEN AD.CODE END DESC
 OFFSET @PageSize * (@PageNumber - 1) ROWS
    FETCH NEXT @PageSize ROWS ONLY OPTION (RECOMPILE);

  END
 IF(@Dataflow=4)
  BEGIN

 SELECT AD.Id, org.Name as OrgName, Ad.Code,Ad.Name,Ad.Remarks,s.Name as 'Status', overall_count = COUNT(*) OVER()
    FROM AdvanceType AD
   INNER JOIN Organisation org on org.Id= AD.OrgId
   INNER JOIN [dbo].[Status] s on AD.Status=s.Id
 WHERE AD.[IsDelete]=0 AND (@SearchText IS NULL OR (org.Name LIKE '%'+@SearchText+'%' OR  Ad.Code LIKE '%'+@SearchText+'%' OR  Ad.Name LIKE '%'+@SearchText+'%'))
 ORDER BY 
 CASE WHEN LOWER(@SortExpr) = 'name' and LOWER(@SortDir) = 'asc' 
  THEN AD.NAME END ASC, 
 CASE WHEN LOWER(@SortExpr) = 'name' and LOWER(@SortDir) = 'desc' 
  THEN AD.NAME END DESC,
 CASE WHEN LOWER(@SortExpr) = 'orgname' and LOWER(@SortDir) = 'asc' 
  THEN ORG.NAME END ASC, 
 CASE WHEN LOWER(@SortExpr) = 'orgname' and LOWER(@SortDir) = 'desc' 
  THEN ORG.NAME END DESC,
 CASE WHEN LOWER(@SortExpr) = 'code' and LOWER(@SortDir) = 'asc' 
  THEN AD.CODE END ASC, 
 CASE WHEN LOWER(@SortExpr) = 'code' and LOWER(@SortDir) = 'desc' 
  THEN AD.CODE END DESC
 OFFSET @PageSize * (@PageNumber - 1) ROWS
    FETCH NEXT @PageSize ROWS ONLY OPTION (RECOMPILE);

  END
END


select * from AdvanceType

GO
/****** Object:  StoredProcedure [dbo].[Usp_AdvanceTypeSelectAllExport]    Script Date: 21-05-2018 03:41:57 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO


CREATE PROCEDURE [dbo].[Usp_AdvanceTypeSelectAllExport]
 @Dataflow int,
 @OrgId int,
 @SubOrgId int
AS
BEGIN 
 

SELECT AD.Id, org.Name as OrgName, Ad.Code,Ad.Name,Ad.Remarks,s.Name as 'Status'
    FROM AdvanceType AD
   INNER JOIN Organisation org on org.Id= AD.OrgId
   INNER JOIN [dbo].[Status] s on AD.Status=s.Id
   WHERE AD.[IsDelete]=0 AND ad.suborgid in (select Id from  [dbo].Ufn_getsuborgid(@Dataflow,@OrgId,@SubOrgId))
   ORDER BY AD.NAME;

  END






GO
/****** Object:  StoredProcedure [dbo].[Usp_AdvanceTypeSelectAllExport1]    Script Date: 21-05-2018 03:41:57 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO


CREATE PROCEDURE [dbo].[Usp_AdvanceTypeSelectAllExport1]
 @Dataflow int,
 @OrgId int,
 @SubOrgId int
AS
BEGIN 
 
 IF(@Dataflow=0)
  BEGIN
SELECT AD.Id, org.Name as OrgName, Ad.Code,Ad.Name,Ad.Remarks,s.Name as 'Status'
    FROM AdvanceType AD
   INNER JOIN Organisation org on org.Id= AD.OrgId
   INNER JOIN [dbo].[Status] s on AD.Status=s.Id
   WHERE AD.[IsDelete]=0 AND OrgId=@OrgId
   ORDER BY AD.NAME;

  END
 IF(@Dataflow=1)
  BEGIN

SELECT AD.Id, org.Name as OrgName, Ad.Code,Ad.Name,Ad.Remarks,s.Name as 'Status'
    FROM AdvanceType AD
   INNER JOIN Organisation org on org.Id= AD.OrgId
   INNER JOIN [dbo].[Status] s on AD.Status=s.Id
   WHERE AD.[IsDelete]=0 AND SubOrgId=@SubOrgId
   ORDER BY AD.NAME;
   
  END
 IF(@Dataflow=2)
  BEGIN

SELECT AD.Id, org.Name as OrgName, Ad.Code,Ad.Name,Ad.Remarks,s.Name as 'Status'
    FROM AdvanceType AD
   INNER JOIN Organisation org on org.Id= AD.OrgId
   INNER JOIN [dbo].[Status] s on AD.Status=s.Id
   WHERE AD.[IsDelete]=0 AND org.ParentOrgId=@OrgId
   ORDER BY AD.NAME;

  END
 IF(@Dataflow=3)
  BEGIN

SELECT AD.Id, org.Name as OrgName, Ad.Code,Ad.Name,Ad.Remarks,s.Name as 'Status'
    FROM AdvanceType AD
   INNER JOIN Organisation org on org.Id= AD.OrgId
   INNER JOIN [dbo].[Status] s on AD.Status=s.Id
   WHERE AD.[IsDelete]=0 AND (AD.OrgId=@OrgId OR AD.SubOrgId=@SubOrgId)
   ORDER BY AD.NAME;

  END
 IF(@Dataflow=4)
  BEGIN

SELECT AD.Id, org.Name as OrgName, Ad.Code,Ad.Name,Ad.Remarks,s.Name as 'Status'
    FROM AdvanceType AD
   INNER JOIN Organisation org on org.Id= AD.OrgId
   INNER JOIN [dbo].[Status] s on AD.Status=s.Id
   WHERE AD.[IsDelete]=0 
   ORDER BY AD.NAME;
  END
END



GO
/****** Object:  StoredProcedure [dbo].[Usp_DeleteDriverShortages]    Script Date: 21-05-2018 03:41:57 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO



CREATE PROCEDURE[dbo].[Usp_DeleteDriverShortages]     
           (@Id int ,@UserId int)         
AS        
        
BEGIN
SET NOCOUNT ON;

UPDATE DriverShortages set [IsDelete]=1,UpdatedId=@UserId,UpdatedTime=SYSUTCDATETIME()
 WHERE  Id=@Id 

END


GO
/****** Object:  StoredProcedure [dbo].[Usp_DepartmentSelectAll]    Script Date: 21-05-2018 03:41:57 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO




CREATE PROCEDURE [dbo].[Usp_DepartmentSelectAll]
 @Dataflow INT,
 @OrgId INT,
 @SubOrgId INT,
 @PageNumber INT,
 @PageSize INT,
 @SortExpr varchar(50),
 @SortDir varchar(50),
 @SearchText varchar(100)
AS
BEGIN 
 SELECT AD.Id, org.Name as OrgName, Ad.Code,Ad.Name,Ad.Remarks,s.Name as 'Status', overall_count = COUNT(*) OVER()
    FROM Department AD
   INNER JOIN Organisation org on org.Id= AD.OrgId
   INNER JOIN [dbo].[Status] s on AD.Status=s.Id
 WHERE AD.[IsDelete]=0 
 
 AND ad.suborgid in (select Id from  [dbo].Ufn_getsuborgid(@Dataflow,@OrgId,@SubOrgId))
 
 
  AND (@SearchText IS NULL OR (org.Name LIKE '%'+@SearchText+'%' OR  Ad.Code LIKE '%'+@SearchText+'%' OR  Ad.Name LIKE '%'+@SearchText+'%'))
 ORDER BY 
 CASE WHEN LOWER(@SortExpr) = 'name' and LOWER(@SortDir) = 'asc' 
  THEN AD.NAME END ASC, 
 CASE WHEN LOWER(@SortExpr) = 'name' and LOWER(@SortDir) = 'desc' 
  THEN AD.NAME END DESC,
 CASE WHEN LOWER(@SortExpr) = 'orgname' and LOWER(@SortDir) = 'asc' 
  THEN ORG.NAME END ASC, 
 CASE WHEN LOWER(@SortExpr) = 'orgname' and LOWER(@SortDir) = 'desc' 
  THEN ORG.NAME END DESC,
 CASE WHEN LOWER(@SortExpr) = 'code' and LOWER(@SortDir) = 'asc' 
  THEN AD.CODE END ASC, 
 CASE WHEN LOWER(@SortExpr) = 'code' and LOWER(@SortDir) = 'desc' 
  THEN AD.CODE END DESC
 OFFSET @PageSize * (@PageNumber - 1) ROWS
    FETCH NEXT @PageSize ROWS ONLY OPTION (RECOMPILE);


END




GO
/****** Object:  StoredProcedure [dbo].[Usp_DepartmentSelectAllExport]    Script Date: 21-05-2018 03:41:57 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO



CREATE PROCEDURE [dbo].[Usp_DepartmentSelectAllExport]
 @Dataflow int,
 @OrgId int,
 @SubOrgId int
AS
BEGIN 
 

SELECT dept.Id, org.Name as OrgName, dept.Code,dept.Name,dept.Remarks,s.Name as 'Status'
    FROM Department dept
   INNER JOIN Organisation org on org.Id= dept.OrgId
   INNER JOIN [dbo].[Status] s on dept.Status=s.Id
   WHERE dept.[IsDelete]=0 AND dept.suborgid in (select Id from  [dbo].Ufn_getsuborgid(@Dataflow,@OrgId,@SubOrgId))
   ORDER BY dept.NAME;

  END



GO
/****** Object:  StoredProcedure [dbo].[Usp_DriverShortagesSelectAll]    Script Date: 21-05-2018 03:41:57 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO



CREATE PROCEDURE[dbo].[Usp_DriverShortagesSelectAll]     
 @PageNumber INT,
 @PageSize INT,
 @SortExpr varchar(50),
 @SortDir varchar(50),
 @SearchText varchar(100)  
AS        
        
BEGIN
SET NOCOUNT ON;

SELECT DS.Id,driinf.Name as DriverName
           ,c.Name AS CommodityName
           ,u.Name as ShortageUOMName
           ,Ds.ShortageQuantity
            ,Ds.ShortageValue
           ,Ds.DateOfShortage
           ,Ds.ShortageValuePaidbyDriver
           ,s.Name as 'Status'
		   ,overall_count = COUNT(*) OVER()
          
      FROM DriverShortages Ds
	  INNER JOIN DriverInformation driinf(nolock) on driinf.Id= ds.DriverId
	  INNER JOIN [dbo].[Status] s(nolock) on Ds.Status=s.Id
	  INNER JOIN [dbo].Commodity c(nolock) on c.Id=ds.Commodity
	  INNer JOIN [dbo].UOM u(nolock) on u.Id=ds.ShortageUOM  
	  where Ds.IsDelete=0 AND (@SearchText IS NULL OR (driinf.Name LIKE '%'+@SearchText+'%' OR  c.Name LIKE '%'+@SearchText+'%' OR  u.Name LIKE '%'+@SearchText+'%'))
	   ORDER BY
	    CASE WHEN LOWER(@SortExpr) = 'drivername' and LOWER(@SortDir) = 'asc' 
			THEN driinf.NAME END ASC, 
		CASE WHEN LOWER(@SortExpr) = 'drivername' and LOWER(@SortDir) = 'desc' 
			THEN driinf.NAME END DESC,
		CASE WHEN LOWER(@SortExpr) = 'commodityname' and LOWER(@SortDir) = 'asc' 
			THEN C.NAME END ASC, 
		CASE WHEN LOWER(@SortExpr) = 'commodityname' and LOWER(@SortDir) = 'desc' 
			THEN C.NAME END DESC,
		CASE WHEN LOWER(@SortExpr) = 'uomname' and LOWER(@SortDir) = 'asc' 
			THEN U.NAME END ASC, 
		CASE WHEN LOWER(@SortExpr) = 'uomname' and LOWER(@SortDir) = 'desc' 
			THEN U.NAME END DESC
 OFFSET @PageSize * (@PageNumber - 1) ROWS
    FETCH NEXT @PageSize ROWS ONLY OPTION (RECOMPILE);
END



GO
/****** Object:  StoredProcedure [dbo].[Usp_DriverShortagesSelectAllExport]    Script Date: 21-05-2018 03:41:57 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO



CREATE PROCEDURE[dbo].[Usp_DriverShortagesSelectAllExport] 
AS        
        
BEGIN
SET NOCOUNT ON;

SELECT DS.Id,driinf.Name as DriverName
           ,c.Name AS CommodityName
           ,u.Name as ShortageUOMName
           ,Ds.ShortageQuantity
            ,Ds.ShortageValue
           ,Ds.DateOfShortage
           ,Ds.ShortageValuePaidbyDriver
           ,s.Name as 'Status'
          
      FROM DriverShortages Ds
	  INNER JOIN DriverInformation driinf(nolock) on driinf.Id= ds.DriverId
	  INNER JOIN [dbo].[Status] s(nolock) on Ds.Status=s.Id
	  INNER JOIN [dbo].Commodity c(nolock) on c.Id=ds.Commodity
	  INNer JOIN [dbo].UOM u(nolock) on u.Id=ds.ShortageUOM  
	  where Ds.IsDelete=0
	   ORDER BY Ds.Id
END



GO
/****** Object:  StoredProcedure [dbo].[Usp_GetDriverInformationList]    Script Date: 21-05-2018 03:41:57 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[Usp_GetDriverInformationList]
 @Dataflow int,
 @OrgId int,
 @SubOrgId int
AS
BEGIN 


   SELECT DI.Id,org.Name as OrgName,DI.Code,DI.Name,DI.DateOfBirth,DI.DateOfJoining,DI.LicenseNo,
   DI.IssueDate,DI.ValidUpto,DI.CitizenshipNo,DI.CSNIssueDate,DI.UnitNo,DI.Remarks,s.Name as 'Status'  
   FROM DriverInformation DI
   INNER JOIN Organisation org on org.Id= DI.OrgId
   INNER JOIN [dbo].[Status] s on DI.Status=s.Id
   WHERE DI.[IsDelete]=0 AND DI.SubOrgId IN (select Id from  [dbo].Ufn_getsuborgid(@Dataflow,@OrgId,@SubOrgId))
   ORDER BY DI.NAME;

  END
 
GO
/****** Object:  StoredProcedure [dbo].[Usp_GetOrganizationList]    Script Date: 21-05-2018 03:41:57 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE[dbo].[Usp_GetOrganizationList]
 @Dataflow int,
 @OrgId int,
 @SubOrgId int
AS
BEGIN 
 SELECT [Id],[Code],[Name],[OrgType],[ParentOrgId] FROM [dbo].[Organisation]
   WHERE [TopParentId]=@OrgId AND Id in (select Id from  [dbo].Ufn_getsuborgid(@Dataflow,@OrgId,@SubOrgId))
END


GO
/****** Object:  StoredProcedure [dbo].[Usp_GetUserAccessMenuList]    Script Date: 21-05-2018 03:41:57 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE[dbo].[Usp_GetUserAccessMenuList]     
(@UserId int=1)
AS        
        
BEGIN
SET NOCOUNT ON;

SELECT F.Id As FeatureID,F.FeatureGroupId,F.Code,F.Name,F.ModuleName,F.MenuName,F.URL,F.HelpId,F.CssClassName,
M.UserId, M.UserGroupId, M.[Deny], M.[Create],M.Edit, M.[View], M.[Delete], M.[Print], M.Copy,M.Dataflow, M.Active FROM Feature AS F 
JOIN UserFeatureMapping AS M ON F.Id=M.FeatureId WHERE M.UserId=@UserId AND (M.[Deny]=1) OR M.[Deny] IS Null;

END


GO
/****** Object:  StoredProcedure [dbo].[Usp_GetUserFeaturesAccess]    Script Date: 21-05-2018 03:41:57 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

CREATE PROCEDURE[dbo].[Usp_GetUserFeaturesAccess]     
(@UserId int )
AS        
        
BEGIN
SET NOCOUNT ON;

SELECT F.Id As FeatureID,F.FeatureGroupId,F.Code,F.Name,F.ModuleName,F.MenuName,F.URL,F.HelpId,F.CssClassName,
M.UserId, M.UserGroupId, M.[Deny], M.[Create], M.Edit, M.[View], M.[Delete], M.[Print], M.Copy, M.Dataflow, M.Active FROM Feature AS F 
LEFT OUTER JOIN UserFeatureMapping AS M ON F.Id=M.FeatureId WHERE M.UserId=@UserId;

END

GO
/****** Object:  StoredProcedure [dbo].[Usp_SaveDriverShortages]    Script Date: 21-05-2018 03:41:57 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO


CREATE PROCEDURE[dbo].[Usp_SaveDriverShortages]
         (  @DriverId int
           ,@Commodity int
		   ,@ShortageUOM int
           ,@ShortageQuantity decimal
           ,@ShortageValue decimal
           ,@DateOfShortage datetime
           ,@ShortageValuePaidbyDriver decimal
           ,@UserId int
		   ,@id int
           )
		   

AS  
  
declare @Status char(1);  
set @Status = '6';  
BEGIN
      -- SET NOCOUNT ON added to prevent extra result sets from
      SET NOCOUNT ON;


      IF EXISTS (SELECT 1   FROM   [dbo].[DriverShortages](nolock)  WHERE  Id = @id)

        UPDATE [dbo].[DriverShortages]
        SET [DriverId]=@DriverId     
      ,[Commodity]=@Commodity
      ,[ShortageUOM]=@ShortageUOM
      ,[ShortageQuantity]=@ShortageQuantity
      ,[ShortageValue]=@ShortageValue
      ,[DateOfShortage]=@DateOfShortage
      ,[ShortageValuePaidbyDriver]=@ShortageValuePaidbyDriver
	  ,[UpdatedId]=@UserId  
      ,[UpdatedTime]=SYSUTCDATETIME()
	  WHERE  Id = @id 
      
      ELSE
	  INSERT INTO [dbo].[DriverShortages]
           ([DriverId]
      ,[Commodity]
      ,[ShortageUOM]
      ,[ShortageQuantity]
      ,[ShortageValue]
      ,[DateOfShortage]
      ,[ShortageValuePaidbyDriver]
      ,[Status]
      ,[CreatedBy]
      ,[CreatedTime]
      ,[UpdatedId]
      ,[UpdatedTime]
      ,[Lang])
     VALUES
           (@DriverId
           ,@Commodity
		   ,@ShortageUOM 
           ,@ShortageQuantity
           ,@ShortageValue 
           ,@DateOfShortage 
           ,@ShortageValuePaidbyDriver
           ,@Status
           ,@UserId  
           ,SYSUTCDATETIME()  
           ,@UserId  
           ,SYSUTCDATETIME()  
           ,'')


  END
GO
/****** Object:  StoredProcedure [dbo].[Usp_StateDelete]    Script Date: 21-05-2018 03:41:57 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create PROCEDURE[dbo].[Usp_StateDelete] 
(@Id int ,@UserId int)         
AS        
        
BEGIN
SET NOCOUNT ON;

UPDATE State set [IsDelete]=1,UpdatedId=@UserId,UpdatedTime=SYSUTCDATETIME() WHERE  Id=@Id 

END

GO
/****** Object:  StoredProcedure [dbo].[Usp_StateInsert]    Script Date: 21-05-2018 03:41:57 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

create PROCEDURE[dbo].[Usp_StateInsert]   
(
@Code nvarchar(50),
@Name nvarchar(150),
@Remarks nvarchar(200),
@CountryId int,
@OrgId int,
@UserId int,
@Lang varchar(10)
)      
AS      
BEGIN 
DECLARE @Exist int, @flag int;
SET @flag = 0;
SET @Exist =(SELECT COUNT(*) FROM [State] WHERE Code=@Code OR Name=@Name);    

 IF(@Exist=0)
  BEGIN
  DECLARE @ParentOrgId int;
  SET @ParentOrgId =(SELECT ISNULL(ParentOrgId,0) FROM Organisation WHERE Id=@OrgId);    

    IF(@ParentOrgId=0)
     BEGIN
    INSERT INTO [dbo].[State]
      ([Code]
      ,[Name]
      ,[Remarks]
	  ,[CountryId]
      ,[Status]
      ,[OrgId]
      ,[SubOrgId]
      ,[CreatedBy]
      ,[CreatedTime]
      ,[UpdatedId]
      ,[UpdatedTime]
      ,[Lang]
	  ,[IsDelete])
   VALUES
      (@Code 
      ,@Name
      ,@Remarks 
	  ,@CountryId
      ,'6'
      ,@OrgId      
      ,0      
      ,@UserId      
      ,GETDATE()      
      ,@UserId      
      ,GETDATE()      
      ,@Lang
   ,0)
     END
    ELSE 
     BEGIN
    INSERT INTO [dbo].[State]
           ([Code]
           ,[Name]
           ,[Remarks]
		   ,[CountryId]
           ,[Status]
           ,[OrgId]
           ,[SubOrgId]
           ,[CreatedBy]
           ,[CreatedTime]
           ,[UpdatedId]
           ,[UpdatedTime]
           ,[Lang]
     ,[IsDelete])
     VALUES
           (@Code 
           ,@Name
           ,@Remarks 
		   ,@CountryId
           ,'6'
           ,@ParentOrgId      
           ,@OrgId      
           ,@UserId      
           ,GETDATE()      
           ,@UserId      
           ,GETDATE()      
           ,@Lang
     ,0)
     END
   SET @flag = 1;
  END
 ELSE
  BEGIN
   SET @flag = 2;
  END
 SELECT @flag;
END

GO
/****** Object:  StoredProcedure [dbo].[Usp_StateSelectAll]    Script Date: 21-05-2018 03:41:57 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

create  PROCEDURE[dbo].[Usp_StateSelectAll] 
@Dataflow INT,
 @OrgId INT,
 @SubOrgId INT,
 @PageNumber INT,
 @PageSize INT,
 @SortExpr varchar(50),
 @SortDir varchar(50),
 @SearchText varchar(100)
AS
BEGIN
IF(@Dataflow=0)
BEGIN
	SELECT s.*, 
		   c.name as countryname,
		   o.name as orgname,
		   st.Name as 'Status',
		   overall_count = COUNT(*) OVER()
	FROM [dbo].[State] as s
	INNER JOIN [dbo].[Country] as c on c.Id = s.Id
	INNER JOIN [dbo].[Organisation] as o on o.Id= s.OrgId
	INNER JOIN [dbo].[Status] as st on s.Status=st.Id
	WHERE s.IsDelete=0 AND s.OrgId=@OrgId AND (@SearchText IS NULL OR (o.Name LIKE '%'+@SearchText+'%' OR  s.Name LIKE '%'+@SearchText+'%'))
	ORDER BY 
 CASE WHEN LOWER(@SortExpr) = 'statename' and LOWER(@SortDir) = 'asc' 
  THEN s.NAME END ASC, 
 CASE WHEN LOWER(@SortExpr) = 'statename' and LOWER(@SortDir) = 'desc' 
  THEN s.NAME END DESC,
 CASE WHEN LOWER(@SortExpr) = 'countryname' and LOWER(@SortDir) = 'asc' 
  THEN o.NAME END ASC, 
 CASE WHEN LOWER(@SortExpr) = 'countryname' and LOWER(@SortDir) = 'desc' 
  THEN o.NAME END DESC,
 CASE WHEN LOWER(@SortExpr) = 'code' and LOWER(@SortDir) = 'asc' 
  THEN s.CODE END ASC, 
 CASE WHEN LOWER(@SortExpr) = 'code' and LOWER(@SortDir) = 'desc' 
  THEN s.CODE END DESC
 OFFSET @PageSize * (@PageNumber - 1) ROWS
    FETCH NEXT @PageSize ROWS ONLY OPTION (RECOMPILE);

  END

IF(@Dataflow=1)
BEGIN
	SELECT s.*, 
		   c.name as countryname,
		   o.name as orgname,
		   st.Name as 'Status',
		   overall_count = COUNT(*) OVER()
	FROM [dbo].[State] as s
	INNER JOIN [dbo].[Country] as c on c.Id = s.Id
	INNER JOIN [dbo].[Organisation] as o on o.Id= s.OrgId
	INNER JOIN [dbo].[Status] as st on s.Status=st.Id
	WHERE s.IsDelete=0 AND s.SubOrgId=@SubOrgId AND (@SearchText IS NULL OR (o.Name LIKE '%'+@SearchText+'%' OR  s.Name LIKE '%'+@SearchText+'%'))
	ORDER BY 
 CASE WHEN LOWER(@SortExpr) = 'statename' and LOWER(@SortDir) = 'asc' 
  THEN s.NAME END ASC, 
 CASE WHEN LOWER(@SortExpr) = 'statename' and LOWER(@SortDir) = 'desc' 
  THEN s.NAME END DESC,
 CASE WHEN LOWER(@SortExpr) = 'countryname' and LOWER(@SortDir) = 'asc' 
  THEN o.NAME END ASC, 
 CASE WHEN LOWER(@SortExpr) = 'countryname' and LOWER(@SortDir) = 'desc' 
  THEN o.NAME END DESC,
 CASE WHEN LOWER(@SortExpr) = 'code' and LOWER(@SortDir) = 'asc' 
  THEN s.CODE END ASC, 
 CASE WHEN LOWER(@SortExpr) = 'code' and LOWER(@SortDir) = 'desc' 
  THEN s.CODE END DESC
 OFFSET @PageSize * (@PageNumber - 1) ROWS
    FETCH NEXT @PageSize ROWS ONLY OPTION (RECOMPILE);

  END

IF(@Dataflow=2)
BEGIN
	SELECT s.*, 
		   c.name as countryname,
		   o.name as orgname,
		   st.Name as 'Status',
		   overall_count = COUNT(*) OVER()
	FROM [dbo].[State] as s
	INNER JOIN [dbo].[Country] as c on c.Id = s.Id
	INNER JOIN [dbo].[Organisation] as o on o.Id= s.OrgId
	INNER JOIN [dbo].[Status] as st on s.Status=st.Id
	WHERE s.IsDelete=0 AND o.ParentOrgId=@OrgId AND (@SearchText IS NULL OR (o.Name LIKE '%'+@SearchText+'%' OR  s.Name LIKE '%'+@SearchText+'%'))
	ORDER BY 
 CASE WHEN LOWER(@SortExpr) = 'statename' and LOWER(@SortDir) = 'asc' 
  THEN s.NAME END ASC, 
 CASE WHEN LOWER(@SortExpr) = 'statename' and LOWER(@SortDir) = 'desc' 
  THEN s.NAME END DESC,
 CASE WHEN LOWER(@SortExpr) = 'countryname' and LOWER(@SortDir) = 'asc' 
  THEN o.NAME END ASC, 
 CASE WHEN LOWER(@SortExpr) = 'countryname' and LOWER(@SortDir) = 'desc' 
  THEN o.NAME END DESC,
 CASE WHEN LOWER(@SortExpr) = 'code' and LOWER(@SortDir) = 'asc' 
  THEN s.CODE END ASC, 
 CASE WHEN LOWER(@SortExpr) = 'code' and LOWER(@SortDir) = 'desc' 
  THEN s.CODE END DESC
 OFFSET @PageSize * (@PageNumber - 1) ROWS
    FETCH NEXT @PageSize ROWS ONLY OPTION (RECOMPILE);

  END
IF(@Dataflow=3)
BEGIN
	SELECT s.*, 
		   c.name as countryname,
		   o.name as orgname,
		   st.Name as 'Status',
		   overall_count = COUNT(*) OVER()
	FROM [dbo].[State] as s
	INNER JOIN [dbo].[Country] as c on c.Id = s.Id
	INNER JOIN [dbo].[Organisation] as o on o.Id= s.OrgId
	INNER JOIN [dbo].[Status] as st on s.Status=st.Id
	WHERE s.IsDelete=0 AND (s.OrgId=@OrgId OR s.SubOrgId=@SubOrgId) AND (@SearchText IS NULL OR (o.Name LIKE '%'+@SearchText+'%' OR  s.Name LIKE '%'+@SearchText+'%'))
	ORDER BY 
 CASE WHEN LOWER(@SortExpr) = 'statename' and LOWER(@SortDir) = 'asc' 
  THEN s.NAME END ASC, 
 CASE WHEN LOWER(@SortExpr) = 'statename' and LOWER(@SortDir) = 'desc' 
  THEN s.NAME END DESC,
 CASE WHEN LOWER(@SortExpr) = 'countryname' and LOWER(@SortDir) = 'asc' 
  THEN o.NAME END ASC, 
 CASE WHEN LOWER(@SortExpr) = 'countryname' and LOWER(@SortDir) = 'desc' 
  THEN o.NAME END DESC,
 CASE WHEN LOWER(@SortExpr) = 'code' and LOWER(@SortDir) = 'asc' 
  THEN s.CODE END ASC, 
 CASE WHEN LOWER(@SortExpr) = 'code' and LOWER(@SortDir) = 'desc' 
  THEN s.CODE END DESC
 OFFSET @PageSize * (@PageNumber - 1) ROWS
    FETCH NEXT @PageSize ROWS ONLY OPTION (RECOMPILE);

  END
IF(@Dataflow=4)
BEGIN
	SELECT s.*, 
		   c.name as countryname,
		   o.name as orgname,
		   st.Name as 'Status',
		   overall_count = COUNT(*) OVER()
	FROM [dbo].[State] as s
	INNER JOIN [dbo].[Country] as c on c.Id = s.Id
	INNER JOIN [dbo].[Organisation] as o on o.Id= s.OrgId
	INNER JOIN [dbo].[Status] as st on s.Status=st.Id
	WHERE  s.IsDelete=0 AND(@SearchText IS NULL OR (o.Name LIKE '%'+@SearchText+'%' OR  s.Name LIKE '%'+@SearchText+'%'))
	ORDER BY 
 CASE WHEN LOWER(@SortExpr) = 'statename' and LOWER(@SortDir) = 'asc' 
  THEN s.NAME END ASC, 
 CASE WHEN LOWER(@SortExpr) = 'statename' and LOWER(@SortDir) = 'desc' 
  THEN s.NAME END DESC,
 CASE WHEN LOWER(@SortExpr) = 'countryname' and LOWER(@SortDir) = 'asc' 
  THEN o.NAME END ASC, 
 CASE WHEN LOWER(@SortExpr) = 'countryname' and LOWER(@SortDir) = 'desc' 
  THEN o.NAME END DESC,
 CASE WHEN LOWER(@SortExpr) = 'code' and LOWER(@SortDir) = 'asc' 
  THEN s.CODE END ASC, 
 CASE WHEN LOWER(@SortExpr) = 'code' and LOWER(@SortDir) = 'desc' 
  THEN s.CODE END DESC
 OFFSET @PageSize * (@PageNumber - 1) ROWS
    FETCH NEXT @PageSize ROWS ONLY OPTION (RECOMPILE);

  END
END
GO
/****** Object:  StoredProcedure [dbo].[Usp_StateSelectAllExport]    Script Date: 21-05-2018 03:41:57 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

CREATE PROCEDURE[dbo].[Usp_StateSelectAllExport] 
@Dataflow INT,
 @OrgId INT,
 @SubOrgId INT
AS
BEGIN


	SELECT s.*, 
		   c.name as countryname,
		   o.name as orgname,
		   st.Name as 'Status'
	FROM [dbo].[State] as s
	INNER JOIN [dbo].[Country] as c on c.Id = s.Id
	INNER JOIN [dbo].[Organisation] as o on o.Id= s.OrgId
	INNER JOIN [dbo].[Status] as st on s.Status=st.Id
   WHERE s.[IsDelete]=0 AND s.SubOrgId IN (select Id from  [dbo].Ufn_getsuborgid(@Dataflow,@OrgId,@SubOrgId))
	ORDER BY s.Name;

  END

GO
/****** Object:  StoredProcedure [dbo].[Usp_StateUpdate]    Script Date: 21-05-2018 03:41:57 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

create PROCEDURE[dbo].[Usp_StateUpdate]   
(
@Id int,
@Code nvarchar(50),
@Name nvarchar(150),
@Remarks nvarchar(200),
@CountryId int,
@OrgId int,
@UserId int,
@Lang varchar(10)
)
AS    
      
BEGIN 
  DECLARE @Exist int, @flag int;
  SET @flag = 0;
  SET @Exist =(SELECT COUNT(*) FROM [State] WHERE Id!=@Id AND (Code=@Code OR Name=@Name)); 
 
 IF(@Exist=0)
  BEGIN 
   DECLARE @ParentOrgId int;
   SET @ParentOrgId =(SELECT ISNULL(ParentOrgId,0) FROM Organisation WHERE Id=@OrgId);
   IF(@ParentOrgId=0)
    BEGIN
  UPDATE  [dbo].[State]
     SET [Code] = @Code 
     ,[Name] = @Name 
     ,[Remarks] = @Remarks 
	 ,[CountryId]=@CountryId
     ,[Status] = '6'
     ,[OrgId] = @OrgId 
     ,[SubOrgId] = 0 
     ,[UpdatedId] = @UserId
     ,[UpdatedTime] =GETDATE()
     ,[Lang] = @Lang 
   WHERE  Id=@Id
  END
   ELSE 
    BEGIN
    UPDATE  [dbo].[State]
     SET [Code] = @Code 
     ,[Name] = @Name 
     ,[Remarks] = @Remarks 
	 ,[CountryId]=@CountryId
     ,[Status] = '6'
     ,[OrgId] = @ParentOrgId 
     ,[SubOrgId] = @OrgId 
     ,[UpdatedId] = @UserId
     ,[UpdatedTime] =GETDATE()
     ,[Lang] = @Lang 
   WHERE  Id=@Id
  END
   SET @flag = 1;
  END 
 ELSE
  BEGIN
   SET @flag = 2;
  END
 SELECT @flag;
END

GO
/****** Object:  StoredProcedure [dbo].[web_GetUser]    Script Date: 21-05-2018 03:41:57 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO



CREATE PROCEDURE[dbo].[web_GetUser]     
 @PageNumber INT=20,
 @PageSize INT=10,
 @SortExpr varchar(50)='FullName',
 @SortDir varchar(50)='asc',
 @SearchText varchar(100)=''  
AS        
        
BEGIN
SET NOCOUNT ON;

SELECT    Id,FullName,Email,CreatedTime,UpdatedTime,overall_count = COUNT(*) OVER()
          
      FROM [User] u
	 
	--  where   (@SearchText IS NULL OR (u.FullName LIKE '%'+@SearchText+'%' or u.Email LIKE '%'+@SearchText+'%'))
	   ORDER BY
	   
		CASE WHEN LOWER(@SortExpr) = 'FullName' and LOWER(@SortDir) = 'asc' 
			THEN u.FullName END ASC
		
 --OFFSET @PageSize * (@PageNumber - 1) ROWS
 --   FETCH NEXT @PageSize ROWS ONLY OPTION (RECOMPILE);
END



GO
USE [master]
GO
ALTER DATABASE [ERPDB] SET  READ_WRITE 
GO
