--角色表
CREATE TABLE [dbo].[SYS_ROLE](
	[UUID] [varchar](32) NOT NULL,
	[ROLE_ID] [varchar](32) NOT NULL,
	[ROLE_NAME] [varchar](64) NULL,
	[CREATE_TIME] [datetime] NULL,
	[ROLE_DES] [varchar](100) NULL,
	[UPDATE_TIME] [datetime] NULL,
 CONSTRAINT [PK_SYS_ROLE] PRIMARY KEY CLUSTERED 
(
	[UUID] ASC
)WITH (PAD_INDEX  = OFF, STATISTICS_NORECOMPUTE  = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS  = ON, ALLOW_PAGE_LOCKS  = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
SET ANSI_PADDING OFF
GO
INSERT [dbo].[SYS_ROLE] ([UUID], [ROLE_ID], [ROLE_NAME], [CREATE_TIME], [ROLE_DES], [UPDATE_TIME]) VALUES (N'11d27ee8dd5842fb900182763ab26558', N'country', N'乡级用户', CAST(0x0000A7E400EF00C4 AS DateTime), NULL, CAST(0x0000A7E400EF00C4 AS DateTime))
INSERT [dbo].[SYS_ROLE] ([UUID], [ROLE_ID], [ROLE_NAME], [CREATE_TIME], [ROLE_DES], [UPDATE_TIME]) VALUES (N'19b8306ebcc74eb7b0f8ad1038bbf838', N'county', N'县级用户', CAST(0x0000A7E400EF00C4 AS DateTime), NULL, CAST(0x0000A7E400EF00C4 AS DateTime))
INSERT [dbo].[SYS_ROLE] ([UUID], [ROLE_ID], [ROLE_NAME], [CREATE_TIME], [ROLE_DES], [UPDATE_TIME]) VALUES (N'beadb7e2ae684fb0a73678b850d4ed7e', N'xhy', N'巡河员', CAST(0x0000A83B00C5853A AS DateTime), N'巡河员', CAST(0x0000A83B00C5853A AS DateTime))
INSERT [dbo].[SYS_ROLE] ([UUID], [ROLE_ID], [ROLE_NAME], [CREATE_TIME], [ROLE_DES], [UPDATE_TIME]) VALUES (N'e98356b52b0a485c8ae9daf8930942f6', N'system', N'系统管理员', CAST(0x0000A7E400EF00C4 AS DateTime), NULL, CAST(0x0000A7E400EF00C4 AS DateTime))
INSERT [dbo].[SYS_ROLE] ([UUID], [ROLE_ID], [ROLE_NAME], [CREATE_TIME], [ROLE_DES], [UPDATE_TIME]) VALUES (N'ed7bc8fcdbc543df948d7e760446599a', N'village', N'村级用户', CAST(0x0000A7E400EF00C4 AS DateTime), NULL, CAST(0x0000A7E400EF00C4 AS DateTime))
INSERT [dbo].[SYS_ROLE] ([UUID], [ROLE_ID], [ROLE_NAME], [CREATE_TIME], [ROLE_DES], [UPDATE_TIME]) VALUES (N'fb8d15de6a1b44be89136be8c8515337', N'pro', N'省级用户', CAST(0x0000A7E400EF00C4 AS DateTime), NULL, CAST(0x0000A7E400EF00C4 AS DateTime))
