--字典表
CREATE TABLE [dbo].[SYS_DICT](
	[DICT_NM] [varchar](50) NOT NULL,
	[DICT_VAL] [varchar](50) NOT NULL,
	[DICT_TP] [varchar](50) NOT NULL,
	[CREATE_TIME] [datetime] NULL,
	[UPDATE_TIME] [datetime] NULL,
	[CONTENT] [varchar](200) NULL
) ON [PRIMARY]

GO

SET ANSI_PADDING OFF
GO
