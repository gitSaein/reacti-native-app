issue 1.
AUTHORIZATION_FAILED: invalid android_key_hash or ios_bundle_id or web_site_ur

solution 1.
"./android/app" 에서 아래의 명령어 입력해 실행한다.
keytool -exportcert -alias androiddebugkey -keystore debug.keystore -storepass android -keypass android | openssl sha1 -binary | openssl base64

<meta-data
        android:name="com.kakao.sdk.AppKey"
        android:value="${hash_key}" />
