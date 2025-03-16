package scriptbucket.architecture.data;

import org.springframework.web.multipart.MultipartFile;

import java.io.BufferedReader;
import java.io.File;
import java.io.IOException;
import java.io.InputStreamReader;

public class ScriptManager {
    private static final String UPLOAD_DIR = "bucket";
    private final File PROJECT_ROOT = new File("").getAbsoluteFile();
    private final File BUCKET = new File(PROJECT_ROOT, UPLOAD_DIR);

    public static void main(String[] args) {
        String scriptPath = "C:\\Users\\jsvgo\\IdeaProjects\\ScriptBucket\\pltfrm-server.ps1";

        ProcessBuilder processBuilder = new ProcessBuilder(
                "powershell.exe", "-NoProfile", "-ExecutionPolicy", "Bypass", "-File", scriptPath
        );

        try {
            Process process = processBuilder.start();

            // Stream output in real-time
            new Thread(() -> {
                try (BufferedReader reader = new BufferedReader(new InputStreamReader(process.getInputStream()))) {
                    String line;
                    while ((line = reader.readLine()) != null) {
                        System.out.println(line);
                    }
                } catch (IOException e) {
                    e.printStackTrace();
                }
            }).start();

            // Stream errors in real-time
            new Thread(() -> {
                try (BufferedReader errorReader = new BufferedReader(new InputStreamReader(process.getErrorStream()))) {
                    String line;
                    while ((line = errorReader.readLine()) != null) {
                        System.err.println(line);
                    }
                } catch (IOException e) {
                    e.printStackTrace();
                }
            }).start();

            int exitCode = process.waitFor();
            System.out.println("Exit Code: " + exitCode);

        } catch (IOException | InterruptedException e) {
            e.printStackTrace();
        }
    }


    public void createFile(MultipartFile file)
    {
        try {
            // Ensure the "uploads" directory exists
            if (!BUCKET.exists()) {
                BUCKET.mkdirs(); // Create directories if they don't exist
            }

            // Save the file inside the "uploads" folder
            File savedFile = new File(BUCKET, file.getOriginalFilename());
            file.transferTo(savedFile);
        }
         catch (IOException e) {
            throw new RuntimeException(e);
        }
    }
}
