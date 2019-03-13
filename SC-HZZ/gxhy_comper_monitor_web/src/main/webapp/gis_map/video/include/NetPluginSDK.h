/* SDK�ؼ��ӿ� */
/**
* SDK ��ʼ��  SDK initialization
* @return TRUE��ʾ�ɹ�,������ʾʧ�� TRUE means success, and any other value means failure.
* @note �̲߳���ȫ Thread not safe
*/
#define NETDEV_Init "NETDEV_Init"

/**
* SDK ����  SDK cleaning
* @return TRUE��ʾ�ɹ�,������ʾʧ�� TRUE means success, and any other value means failure.
* @note
*/
#define NETDEV_Cleanup "NETDEV_Cleanup"

/**
* �û���¼  User login
* @param [IN][String]  strDevIP         �豸IP Device IP
* @param [IN][Long]  lDevPort         �豸�������˿� Device server port
* @param [IN][String]  strUserName      �û��� Username
* @param [IN][String]  strPassword      ���� Password
* @return -1��ʾʧ�ܣ�����Json�ַ�����ʾ�ɹ�
* @note  ���سɹ�ʱJson�ַ�����ʽ{
*                                 "UserID":[int],               �û���¼���
*                                 "dwDevType":[int],            �豸����,�μ�ö��#NETDEV_DEVICETYPE_E
*                                 "wAlarmInPortNum":[int],      �����������
*                                 "wAlarmOutPortNum":[int],     �����������
*                                 "dwChannelNum":[int]          ͨ������
*                                 }
*/
#define NETDEV_Login "NETDEV_Login"

/**
* �û�ע��  User logout
* @param [IN][Long] lUserID    �û���¼ID User login ID
* @return TRUE��ʾ�ɹ�,������ʾʧ�� TRUE means success, and any other value means failure.
* @note
*/
#define NETDEV_Logout "NETDEV_Logout"

/**
* �û���¼�ƶ��˻� User login to cloud account
* @param [IN][String]  strCloudSrvUrl       �ƶ˷�����URL  Cloud server URL 
* @param [IN][String]  strUserName          �ƶ��˻��� Cloud account name
* @param [IN][String]  strPassWord          �ƶ��˻�����  Cloud account password 
* @return ���ص��û���½ID,-1��ʾʧ��,����ֵ��ʾ���ص��û���¼IDֵ  Returned user ID. 1 means failure, any other value is a user ID.
* @note 
*/
#define NETDEV_LoginCloud "NETDEV_LoginCloud"

/**
* �ƶ��豸��¼ Cloud device login
* @param [IN][Long]  lUserID             �ƶ��˻���¼ID    Cloud account login ID 
* @param [IN][Json]  jCloudInfo           �ƶ��豸��¼��Ϣ  Cloud device login info 
* @return -1��ʾʧ��,����Json�ַ�����ʾ�ɹ�
* @note 1��jCloudInfo��ʽ{
*                         "szDeviceName":[String],            �豸����
*                         "szDevicePassword":[String],        �豸��¼���� (��ѡ)
*                         "dwT2UTimeout":[Long]               P2P��ʱʱ��, Ĭ��Ϊ15s
*                         }
*       2�����سɹ�ʱJson�ַ�����ʽ{
*                                 "UserID":[int],             �û���½ID
*                                 "dwDevType":[int],          �豸����,�μ�ö��#NETDEV_DEVICETYPE_E
* *                               "wAlarmInPortNum":[int],    �����������
*                                 "wAlarmOutPortNum":[int],   �����������
*                                 "dwChannelNum":[int]        ͨ������
*                                   }
*/
#define NETDEV_LoginCloudDev "NETDEV_LoginCloudDev"
/**
* ��ȡ�ƶ��豸��Ϣ 
* @param [IN][Long]  lUserID             �ƶ��˻���¼ID    Cloud account login ID 
* @return -1��ʾʧ��,�����豸��Ϣ�ַ�����ʾ�ɹ�
* @note 1������ʧ��˵����ѯ������
*       2�������豸��Ϣ�ַ����е�User name����ֶ���ΪNETDEV_LoginCloudDev��jCloudInfo�ַ�����szDeviceName������ֵ���ɵ�¼�豸��
*/

#define NETDEV_GetCloudDevList "NETDEV_GetCloudDevList"

/**
* ����ʵʱԤ��  Start live preview
* @param [IN][Long]  lResourceId             ������ԴID��ʹ��NetSDKGetFocusWnd������ȡ���ɲο�Demo
* @param [IN][Long]  lUserID                 �û���¼ID User login ID
* @param [IN][Json]  jPreviewInfo            Ԥ������,�ο�ö�٣�NETDEV_PROTOCAL_E,NETDEV_LIVE_STREAM_INDEX_E. Preview parameter, see enumeration: NETDEV_PROTOCAL_E, NETDEV_LIVE_STREAM_INDEX_E.
* @return ����0��ʾ�ɹ���-1��ʾʧ��
* @note  jPreviewInfo��ʽ{
*                         "dwChannelID":[Long],      ͨ��ID
*                         "dwStreamType":[Long],     ��������
*                         "dwLinkMode":[Long],       ����Э��
*                         "dwFluency":[Long]         ͼ�񲥷���������������,�μ�ö��#NETDEV_PICTURE_FLUENCY_E
*/
#define NETDEV_RealPlay "NETDEV_RealPlay"

/**
* ֹͣʵʱԤ��  Stop live preview
* @param [IN][Long]  lResourceId             ������ԴID��ʹ��NetSDKGetFocusWnd������ȡ���ɲο�Demo
* @return TRUE��ʾ�ɹ�,������ʾʧ�� TRUE means success, and any other value means failure.
* @note ��Ӧ�ر�NETDEV_RealPlay������ʵ�� Stop the live view started by NETDEV_RealPlay
*/
#define NETDEV_StopRealPlay "NETDEV_StopRealPlay"

/**
* ����¼��  Local recording
* @param [IN][Long]  lResourceId             ������ԴID��ʹ��NetSDKGetFocusWnd������ȡ���ɲο�Demo
* @param [IN][String]  strSaveFileName       ���غ󱣴浽PC�����ļ�·��,��Ϊ����·���������ļ�����
* @param [IN][Long]  lFormat                 �ļ���ʽ Format of saved file, see #NETDEV_MEDIA_FILE_FORMAT_E 
* @return TRUE��ʾ�ɹ�,������ʾʧ�� TRUE means success, and any other value means failure.
* @note  �����NETDEV_StopSavaRealData�ſ������¼��ı��档
*/
#define NETDEV_SaveRealData "NETDEV_SaveRealData"

/**
* ֹͣ����¼�� Stop local recording
* @param [IN][Long]  lResourceId             ������ԴID��ʹ��NetSDKGetFocusWnd������ȡ���ɲο�Demo
* @return TRUE��ʾ�ɹ�,������ʾʧ�� TRUE means success, and any other value means failure.
* @note
*/
#define NETDEV_StopSavaRealData "NETDEV_StopSavaRealData"

/**
* ʵ��ץ��  Live view snapshot
* @param [IN][Long]  lResourceId             ������ԴID��ʹ��NetSDKGetFocusWnd������ȡ���ɲο�Demo
* @param [IN][String]  strFileName           ����ͼ����ļ�·���������ļ����� File path to save images (including file name)
* @param [IN][Long]  lFormat                 ����ͼ���ʽ,�μ�#NETDEV_PICTURE_FORMAT_E   Image saving format, see #NETDEV_PICTURE_FORMAT_E
* @return TRUE��ʾ�ɹ�,������ʾʧ�� TRUE means success, and any other value means failure.
* @note �ļ����п��Բ�Я��ץ�ĸ�ʽ�ĺ�׺�� File format suffix is not required in the file name
*/
#define NETDEV_CapturePicture "NETDEV_CapturePicture"

/**
* ��������  Enable sound
* @param [IN][Long]  lResourceId             ������ԴID��ʹ��NetSDKGetFocusWnd������ȡ���ɲο�Demo
* @return TRUE��ʾ�ɹ�,������ʾʧ�� TRUE means success, and any other value means failure.
* @note
*/
#define NETDEV_OpenSound "NETDEV_OpenSound"

/**
* �ر����� Mute
* @param [IN][Long]  lResourceId             ������ԴID��ʹ��NetSDKGetFocusWnd������ȡ���ɲο�Demo
* @return TRUE��ʾ�ɹ�,������ʾʧ�� TRUE means success, and any other value means failure.
* @note
*/
#define NETDEV_CloseSound "NETDEV_CloseSound"

/**
* �������������� Control sound volume
* @param [IN][Long]  lResourceId             ������ԴID��ʹ��NetSDKGetFocusWnd������ȡ���ɲο�Demo
* @param [IN][Long]  lVolume                 ���� Volume
* @return TRUE��ʾ�ɹ�,������ʾʧ�� TRUE means success, and any other value means failure.
* @note
*/
#define NETDEV_SetSoundVolume "NETDEV_SetSoundVolume"

/**
* ��ȡ���������� Get sound volumn
* @param [IN][Long]  lResourceId             ������ԴID��ʹ��NetSDKGetFocusWnd������ȡ���ɲο�Demo
* @return -1��ʾʧ��,����Ϊ��ǰ������С
* @note
*/
#define NETDEV_GetSoundVolume "NETDEV_GetSoundVolume"

/**
* ��̨Ԥ��λ����(��������Ԥ��)  PTZ preset operation (preview required)
* @param [IN][Long]  lResourceId             ������ԴID��ʹ��NetSDKGetFocusWnd������ȡ���ɲο�Demo
* @param [IN][Long]  lPTZPresetCmd           ������̨Ԥ��λ����,�ο�ö��NETDEV_PTZ_PRESETCMD_E  PTZ preset operation commands, see NETDEV_PTZ_PRESETCMD_E
* @param [IN][String]  strPresetName         Ԥ��λ������ Preset name
* @param [IN][Long]  lPresetID               Ԥ��λ����ţ���1��ʼ��,���֧��255��Ԥ��λ Preset number (starting from 1). Up to 255 presets are supported.
* @return TRUE��ʾ�ɹ�,������ʾʧ�� TRUE means success, and any other value means failure.
* @note
*/
#define NETDEV_PTZPreset "NETDEV_PTZPreset"

/**
* ��̨���Ʋ���(��������ʵ��Ԥ��)  PTZ control operation (preview required)
* @param [IN][Long]  lResourceId             ������ԴID��ʹ��NetSDKGetFocusWnd������ȡ���ɲο�Demo
* @param [IN][Long]  lPTZCommand             ��̨��������,�μ�#NETDEV_PTZ_E PTZ control commands, see #NETDEV_PTZ_E
* @param [IN][Long]  lSpeed              ��̨���Ƶ��ٶ�,�û�����ͬ���������ٶȿ���ֵ����.ȡֵ��Χ[1,9] Speed of PTZ control, which is configured according to the speed control value of different decoders. Value ranges from 1 to 9.
* @return TRUE��ʾ�ɹ�,������ʾʧ�� TRUE means success, and any other value means failure.
* @note
*/
#define NETDEV_PTZControl "NETDEV_PTZControl"

/**
* �����ļ�����.ʱ������豸¼���ļ�  Query recording files according to file type and time
* @param [IN][Long]  lUserID        �û���¼ID User login ID
* @param [IN][Json]  jFindCond    ¼���ѯ���� Search condition
* @return ¼���ѯҵ���,����-1��ʾʧ��,����ֵ��ΪNETDEV_FindClose�Ⱥ����Ĳ���.Recording search service number. -1 means failure. Other values are used as the handle parameters of functions like NETDEV_FindClose.
* @note 1���˺�������ֵΪ¼���ѯҵ���,������ֵΪ��-1,���ѯ¼���ļ��ɹ���
*           һ.������ҵ�����ΪNETDEV_FindNextFile���������lpFindHandle,��ε���NETDEV_FindNextFile����,�������ȡ��ϸ¼���ļ���Ϣ.
*           ��.��ѯ������,����������ҵ�����ΪNETDEV_FindClose���������lpFindHandle,����NETDEV_FindClose����,���ͷ���Դ,�رղ���.
*       2��jFindCond��ʽ{
*                        "szFileName":[String],      ¼���ļ���
*                        "dwChannelID":[Long],       ͨ����
*                        "dwFileType":[Long],        ¼��洢����,�μ�ö��#NETDEV_PLAN_STORE_TYPE_E
*                        "tBeginTime":[Long],        ��ʼʱ��
*                        "tEndTime":[Long],          ����ʱ��
*                       }
*/
#define NETDEV_FindFile "NETDEV_FindFile"

/**
* �����ȡ���ҵ����ļ���Ϣ  Obtain the information of found files one by one.
* @param [IN][Long]  lFindHandle     �ļ�����ID File search handle
* @return -1��ʾʧ��,����Json�ַ�����ʾ�ɹ�
* @note 1�����سɹ�ʱJson�ַ�����ʽ{
                                    "szFileName":[String],      ¼���ļ���
                                    "tBeginTime":[Long],        ��ʼʱ��
                                    "tEndTime":[Long],          ����ʱ��
                                    "byFileType":[Bool]         ¼��洢����
                                    }
*       2������ʧ��˵����ѯ���� A returned failure indicates the end of search.
*/
#define NETDEV_FindNextFile "NETDEV_FindNextFile"

/**
* �ر��ļ�����,�ͷ���Դ  Close file search and release resources
* @param [IN][Long]  lFindHandle     �ļ�����ID File search handle
* @return TRUE��ʾ�ɹ�,������ʾʧ�� TRUE means success, and any other value means failure.
* @note
*/
#define NETDEV_FindClose "NETDEV_FindClose"

/**
* ��ʱ������¼���ļ� Download recordings by time
* @param [IN][Long]   lUserID                �û���¼ID User login ID
* @param [IN][Json]   jPlayBackCond          ����¼��Json�ַ���
* @param [IN][String] strSaveFileName        ���غ󱣴浽PC�����ļ�·��,��Ϊ����·���������ļ����� Downloaded file save path on PC, must be an absolute path (including file name)
* @param [IN][Long]   lFormat                ¼���ļ������ʽ Recording file saving format
* @return ����ID, ����-1��ʾʧ��,����ֵ��ΪNETDEV_StopGetFile�Ⱥ����Ĳ���. Download handle. 0 means failure. Other values are used as the handle parameters of functions like NETDEV_StopGetFile.
* @note  1��jPlayBackCond��ʽ{
*                           "dwChannelID":[Long],       ͨ��
*                           "tBeginTime":[Long],        ��ʼʱ��
*                           "tEndTime":[Long],          ����ʱ��
*                           "dwLinkMode":[Long],        ����Э��
*                           "dwFileType":[Long],        ¼��洢����
*                           "dwDownloadSpeed":[Long]    �����ٶ�
*                          }
*       2�������NETDEV_StopDownload�ſ������¼��ı��档
*/
#define NETDEV_GetFileByTime "NETDEV_GetFileByTime"

/**
* ֹͣ����¼���ļ� Stop downloading recording files
* @param [IN]  lDownloadHandle  ����ID Playback handle
* @return TRUE��ʾ�ɹ�,������ʾʧ�� TRUE means success, and any other value means failure.
* @note
*/
#define NETDEV_StopDownload "NETDEV_StopDownload"

/**
* ��ʱ��ط�¼���ļ�  Play back recording by time. 
* @param [IN][Long]  lResourceId            ������ԴID��ʹ��NetSDKGetFocusWnd������ȡ���ɲο�Demo
* @param [IN][Long]  lUserID                �û���¼ID User login ID
* @param [IN][Json]  jPlayBackCond          �ط�¼��Json�ַ���,�ο� LPNETDEV_PLAYBACKCOND_S Pointer to playback-by-time structure, see LPNETDEV_PLAYBACKCOND_S
* @return TRUE��ʾ�ɹ�,������ʾʧ�� TRUE means success, and any other value means failure.
* @note  jPlayBackCond��ʽ{
*                           "dwChannelID":[Long],       ͨ��
*                           "tBeginTime":[Long],        ��ʼʱ��
*                           "tEndTime":[Long],          ����ʱ��
*                           "dwLinkMode":[Long],        ����Э��
*                           "dwFileType":[Long],        ¼��洢����
*                           "dwDownloadSpeed":[Long]    �����ٶ�
*                          }
*/
#define NETDEV_PlayBack "NETDEV_PlayBack"

/**
* ֹͣ�ط�ҵ��  Stop playback service
* @param [IN][Long]  lResourceId            ������ԴID��ʹ��NetSDKGetFocusWnd������ȡ���ɲο�Demo
* @return TRUE��ʾ�ɹ�,������ʾʧ�� TRUE means success, and any other value means failure.
* @note
*/
#define NETDEV_StopPlayback "NETDEV_StopPlayback"

/**
* ����¼��طŵ�״̬  Control recording playback status.
* @param [IN][Long]  lResourceId            ������ԴID��ʹ��NetSDKGetFocusWnd������ȡ���ɲο�Demo
* @param [IN][Long]  lControlCode    ����¼��ط�״̬���� �ο�ö�٣�NETDEV_VOD_PLAY_CTRL_E Command for controlling recording playback status, see NETDEV_VOD_PLAY_CTRL_E
* @param [IN][Json]  jBuffer         �������Json�ַ���, �����ٶȲο�ö�٣�NETDEV_VOD_PLAY_STATUS_E,����ʱ���������Ϊ��INT64 Pointer to input/output parameters. For playing speed, see NETDEV_VOD_PLAY_STATUS_E. The type of playing time: INT64.
* @return -1��ʾʧ��,����Json�ַ�����ʾ�ɹ�
* @note 1��jBuffer��ʽ{
                       "pulTime":[Long],             ���Ž��ȣ�lControlCodeΪNETDEV_PLAY_CTRL_SETPLAYTIME�������ò��Ž���ʱ����Ч
                       "pulSpeed":[Long]             �����ٶȣ�lControlCodeΪNETDEV_PLAY_CTRL_SETPLAYSPEED�������ò����ٶ�ʱ����Ч
                       }
        2�����سɹ�ʱJson�ַ�����ʽ{
                        "PlaySpeed":[Long],          �����ٶȣ�lControlCodeΪNETDEV_PLAY_CTRL_GETPLAYSPEED������ȡ�����ٶ�ʱ����Ч
                        "PlayTime":[Long]            ���Ž��ȣ�lControlCodeΪNETDEV_PLAY_CTRL_GETPLAYTIME������ȡ���Ž���ʱ����Ч
        }
        3����ʼ.��ͣ.�ָ�����ʱ,jBuffer�ַ����и������Ϊ0�������ٶ�ʱ��jBuffer�ַ�����ʱ���ֶο���Ϊ0����֮��Ȼ��
*/
#define NETDEV_PlayBackControl "NETDEV_PlayBackControl"
