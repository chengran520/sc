--业务受理表
CREATE TABLE [dbo].[IOT_BUSINE_ACCEPT](
	[UUID] [varchar](32) NOT NULL,
	[BUSINE_CD] [varchar](50) NULL,
	[BUSINE_NM] [varchar](100) NULL,
	[REPORT_TM] [datetime] NULL,
	[REPORT_NM] [varchar](50) NULL,
	[PROCE_TM] [datetime] NULL,
	[PROCE_NM] [varchar](50) NULL,
	[BUSINE_STATUS] [varchar](10) NULL,
	[PROCED_STATUS] [varchar](10) NULL,
	[BUSINE_TP] [varchar](50) NULL,
	[BUSINE_TYPE] [varchar](50) NULL,
	[NT] [varchar](500) NULL,
	[CRT_DT] [datetime] NULL,
	[UPD_DT] [datetime] NULL,
	[REPORT_ADCD] [varchar](50) NULL,
	[LAW_DEPT] [varchar](50) NULL
) ON [PRIMARY]

GO

SET ANSI_PADDING OFF
GO