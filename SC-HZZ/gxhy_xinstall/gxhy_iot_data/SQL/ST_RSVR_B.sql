CREATE TABLE [dbo].[ST_RSVR_B](
	--水库名称 
	[RS_NM] [varchar](50) NOT NULL,
	--水库类别
	[RS_TP] [varchar](20) NULL,
	--建设时间
	[ESSTYM] [varchar](20) NULL,
	--完成除险加固时间
	[RECEMTM] [varchar](20) NULL,
	--行政区域
	[AD_NM] [varchar](50) NULL,
	--行政区编码
	[AD_CD] [varchar](12) NULL,
	--所在县（市）
	[CITY] [varchar](50) NULL,
	--所在乡镇
	[COUNTRY] [varchar](50) NULL,
	--所在村
	[COUNTY] [varchar](50) NULL,
	--所属河流
	[RVNM] [varchar](50) NULL,
	--管理单位
	[ADMAUTH] [varchar](50) NULL,
	--主管部门
	[RS_DEPT] [varchar](50) NULL
) ON [PRIMARY]

GO

SET ANSI_PADDING OFF
GO
