package com.example.android;

import androidx.appcompat.app.AppCompatActivity;

import android.os.Bundle;
import android.os.Handler;
import android.view.View;
import android.widget.Button;
import android.widget.TextView;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.URL;

public class MainActivity extends AppCompatActivity {

    TextView textView3;
    String urlGet = "http://IPv4Address:port/whoami";

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        textView3 = (TextView) findViewById(R.id.textView3);

        Button button = (Button) findViewById(R.id.button);
        button.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                RequestThread thread = new RequestThread();
                thread.start();
            }
        });
    }

    class RequestThread extends Thread {
        public void run(){
            String result;
            try {
                URL url = new URL(urlGet);

                HttpURLConnection conn = (HttpURLConnection) url.openConnection();

                if (conn != null) {
                    conn.setUseCaches(false);
                    conn.setAllowUserInteraction(false);
                    conn.setRequestMethod("GET");
                    conn.setConnectTimeout(5000);

                    // 이때 연결
                    int resCode = conn.getResponseCode();

                    System.out.println(resCode);

                    if (resCode == HttpURLConnection.HTTP_OK) {
                        BufferedReader reader = new BufferedReader(new InputStreamReader(conn.getInputStream()));

                        StringBuilder sb = new StringBuilder();
                        String line = null;

                        while(true){
                            line = reader.readLine();
                            if (line == null) {
                                break;
                            }
                            sb.append(line);
                        }

                        reader.close();
                        conn.disconnect();

                        result = sb.toString().trim();

                        textView3.setText(result);
                    }
                }

            } catch (Exception e) {
                e.printStackTrace();
            }
        }
    }
}
