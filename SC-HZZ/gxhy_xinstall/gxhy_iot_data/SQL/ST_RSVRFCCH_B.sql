CREATE TABLE [dbo].[ST_RSVRFCCH_B](
	--集雨面积（km2）
	[RAINHAV_AREA] [numeric](10, 3) NULL,
	--总库容（万m3）
	[FLDCP] [numeric](9, 3) NULL,
	--校核洪水位（m）
	[CKFLZ] [numeric](7, 3) NULL,
	--设计洪水位（m）
	[DSFLZ] [numeric](7, 3) NULL,
	--正常蓄水位（m
	[W] [numeric](9, 3) NULL,
	--汛限水位（m）
	[FSLTDZ] [numeric](7, 3) NULL,
	--相应库容（万m3）
	[XYFLDCP] [numeric](9, 3) NULL,
	--坝型
	[DAMTP] [varchar](50) NULL,
	--最大坝高（m）
	[MAXDAM] [numeric](7, 3) NULL,
	--坝顶长度（m）
	[DAMLT] [numeric](7, 3) NULL,
	--坝顶高程（m）
	[DAMALT] [numeric](7, 3) NULL,
	--溢洪道堰顶高程（m）
	[SPCRELE] [numeric](7, 3) NULL,
	--设计（防洪标准（年一遇））
	[DWLZ] [int] NULL,
	--校核（防洪标准（年一遇））
	[CWLZ] [int] NULL,
	--现状（防洪标准（年一遇））
	[PWLZ] [int] NULL
) ON [PRIMARY]

GO

SET ANSI_PADDING OFF
GO
