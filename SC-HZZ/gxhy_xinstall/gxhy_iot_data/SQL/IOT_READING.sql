-- 存实时雨水情的信息 
CREATE TABLE [dbo].[IOT_READING](
	[UUID] [varchar](32) NOT NULL,
	[RV_MEAS_ID] [varchar](32) NOT NULL,
	[TM] [datetime] NOT NULL,
	[VAL] [varchar](50) NOT NULL,
	[CRT_DT] [datetime] NULL,
	[UPD_DT] [datetime] NULL,
	[NT] [varchar](100) NULL
) ON [PRIMARY]

GO

SET ANSI_PADDING OFF
GO
