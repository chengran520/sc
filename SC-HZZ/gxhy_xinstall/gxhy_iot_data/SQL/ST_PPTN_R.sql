--雨情表，国家标准表
CREATE TABLE [dbo].[ST_PPTN_R](
	[STCD] [char](8) NOT NULL,
	[TM] [datetime] NOT NULL,
	[DRP] [numeric](5, 1) NULL,
	[INTV] [numeric](5, 2) NULL,
	[DYP] [numeric](5, 1) NULL,
	[PDR] [numeric](5, 2) NULL,
	[WTH] [char](1) NULL
) ON [PRIMARY]

GO

SET ANSI_PADDING OFF
GO
