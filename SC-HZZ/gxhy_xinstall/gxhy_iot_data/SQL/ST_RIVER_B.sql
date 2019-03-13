CREATE TABLE [dbo].[ST_RIVER_B](
	--河流编码
	[RV_CD] [varchar](12) NOT NULL,
	--河流名称
	[RV_NM] [varchar](50) NULL,
	--水系
	[RVNM] [varchar](50) NULL,
	--河流级别
	[RV_GRD] [int] NULL,
	--汇入岸别
	[STBK] [varchar](10) NULL,
	--长度(km)
	[RV_LT] [int] NULL,
	--流域面积(km2)
	[DRA_AREA] [int] NULL,
	--上一级河流编码
	[P_RV_CD] [varchar](12) NULL,
	--上一级河流
	[P_RV_NM] [varchar](50) NULL,
	--流经
	[FTREG_AD] [varchar](500) NULL,
	--河源
	[RV_OIGIN] [varchar](100) NULL,
	--河口
	[RV_MTH] [varchar](100) NULL,
	--河名备注
	[RVNM_CT] [varchar](50) NULL,
	--备注
	[CT] [varchar](100) NULL
) ON [PRIMARY]

GO

SET ANSI_PADDING OFF
GO


-------------------------------SQL 语句----------------------------------------------
INSERT INTO ST_RIVER_B (RV_CD,RV_NM,RVNM,RV_GRD,STBK,RV_LT,DRA_AREA,P_RV_CD,P_RV_NM,FTREG_AD,RV_OIGIN,RV_MTH,RVNM_CT,CT) VALUES('FFD00000000L','丹江','丹江水系',2,NULL,391,16138,'FF000000000L','汉江','陕西商洛商州区、丹凤县、商南县，湖北郧县，河南淅川县，湖北丹江口市','陕西省商洛商州区腰市镇南马角村','湖北省丹江口市大坝路街道办事处大坝路办事处',null,null);











