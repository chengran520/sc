--排行榜表
CREATE TABLE [dbo].[IOT_RANK_TOP](
	[UUID] [varchar](32) NOT NULL,
	[RV_NM] [varchar](100) NULL,
	[COMP_NUM] [int] NULL,
	[N_HANDLE] [int] NULL,
	[Y_HANDLE] [int] NULL,
	[RESP_USER] [varchar](50) NULL,
	[CRT_DT] [datetime] NULL,
	[UPD_DT] [datetime] NULL
) ON [PRIMARY]

GO

SET ANSI_PADDING OFF
GO

